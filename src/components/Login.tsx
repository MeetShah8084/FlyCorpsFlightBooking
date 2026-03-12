import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

interface LoginProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<'home' | 'profile' | 'login' | 'book' | 'mytrips' | 'boarding-pass'>>;
  setUserData: React.Dispatch<React.SetStateAction<{ name: string; email: string; picture: string; } | null>>;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn, setCurrentPage, setUserData }) => {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Fallback for manual login
    setUserData({
      name: 'John Doe',
      email: 'john@example.com',
      picture: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7IxdewUp9ygb2F7kfv1Y7hnXcO4PZisHaqd3rkfhoXrm4llCDVeKJL2PVICeXfMoWL4l2YyOv-Nl3NrEDXGJo1H812aJw6qhHzcFWKXXQWSbUwlhT2VmnwiTMCq3wOsBXBVSYIN0-8lIRzhsvfVL9jf1ZCg8rScjWCHLvUCWXZXr-fcI_fCpg8oesC_vzDcKy5ft6nO3EXDtUgrirVWHEIntqylgIk8EZJvhmCD-7IPCbGG52QTqIaE6E6D2XijSP-TgV_gfnA8U'
    });
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  return (
    <div className="flex-grow flex items-center justify-center px-4 py-8 md:py-16">
      <div className="w-full max-w-md bg-white dark:bg-background-dark/80 border-2 border-brand/10 p-8 rounded-custom retro-card shadow-lg transition-colors">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-brand dark:text-vintage-cream uppercase tracking-tight">Welcome Back</h2>
          <p className="text-vintage-muted dark:text-white/60 font-medium italic">Ready for your next adventure?</p>
        </div>

        {/* OAuth Section */}
        <div className="mb-6 flex justify-center">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded: any = jwtDecode(credentialResponse.credential!);
              setUserData({
                name: decoded.name,
                email: decoded.email,
                picture: decoded.picture
              });
              setIsLoggedIn(true);
              setCurrentPage('home');
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            theme="outline"
            size="large"
            width="100%"
          />
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-brand/20"></div>
          </div>
          <div className="relative flex justify-center text-sm uppercase">
            <span className="bg-white dark:bg-background-dark px-4 text-vintage-muted font-bold tracking-widest">or</span>
          </div>
        </div>

        {/* Email Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-vintage-navy/80 dark:text-white/80 mb-2" htmlFor="email">Email Address</label>
            <input 
              className="w-full bg-white dark:bg-background-dark/50 dark:text-white border-brand/20 rounded-custom focus:ring-brand focus:border-brand p-3" 
              id="email" 
              name="email" 
              placeholder="passenger@airline.com" 
              required 
              type="email"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-vintage-navy/80 dark:text-white/80" htmlFor="password">Password</label>
              <a className="text-xs font-bold text-brand hover:underline uppercase tracking-wider" href="#">Forgot?</a>
            </div>
            <input 
              className="w-full bg-white dark:bg-background-dark/50 dark:text-white border-brand/20 rounded-custom focus:ring-brand focus:border-brand p-3" 
              id="password" 
              name="password" 
              placeholder="••••••••" 
              required 
              type="password"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-brand text-white font-bold py-4 px-4 rounded-custom transition-all hover:opacity-90 uppercase tracking-widest text-sm shadow-md mt-6"
          >
            Sign in with Email
          </button>
        </form>

        {/* Signup Link */}
        <div className="mt-8 text-center border-t border-brand/10 pt-6">
          <p className="text-xs font-medium uppercase tracking-widest text-vintage-muted dark:text-white/60">
            Don't have an account?{' '}
            <a className="text-brand font-bold hover:underline ml-1" href="#">Create one</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
