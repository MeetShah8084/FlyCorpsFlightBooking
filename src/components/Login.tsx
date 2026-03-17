import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { supabase } from '../lib/supabase';

interface LoginProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<'home' | 'profile' | 'login' | 'book' | 'mytrips' | 'boarding-pass'>>;
  setUserData: React.Dispatch<React.SetStateAction<{ id?: string; name: string; email: string; picture: string; } | null>>;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn, setCurrentPage, setUserData }) => {
  const [loading, setLoading] = useState(false);

  const getOrCreateProfile = async (email: string, name: string, picture: string) => {
    // Check if profile exists
    let { data: profile } = await supabase.from('profiles').select('*').eq('email', email).single();
    
    if (!profile) {
      // Create new profile with a generated UUID since we dropped the auth.users FK
      const newId = crypto.randomUUID();
      const { data: newProfile, error } = await supabase.from('profiles').insert({
        id: newId,
        email,
        full_name: name,
        avatar_url: picture,
      }).select().single();
      
      if (error) {
        console.error("Error creating profile:", error);
        return null;
      }
      profile = newProfile;
    }
    
    return profile;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const email = (e.target as any).email.value;
    const name = email.split('@')[0];
    const picture = 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + email;
    
    const profile = await getOrCreateProfile(email, name, picture);
    
    if (profile) {
      setUserData({
        id: profile.id,
        name: profile.full_name || name,
        email: profile.email,
        picture: profile.avatar_url || picture
      });
      setIsLoggedIn(true);
      setCurrentPage('home');
    }
    setLoading(false);
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
            onSuccess={async (credentialResponse) => {
              const decoded: any = jwtDecode(credentialResponse.credential!);
              const profile = await getOrCreateProfile(decoded.email, decoded.name, decoded.picture);
              
              if (profile) {
                setUserData({
                  id: profile.id,
                  name: profile.full_name || decoded.name,
                  email: profile.email,
                  picture: profile.avatar_url || decoded.picture
                });
                setIsLoggedIn(true);
                setCurrentPage('home');
              }
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
            disabled={loading}
            className="w-full bg-brand text-white font-bold py-4 px-4 rounded-custom transition-all hover:opacity-90 uppercase tracking-widest text-sm shadow-md mt-6 disabled:opacity-50"
          >
            {loading ? 'Signing In...' : 'Sign in with Email'}
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
