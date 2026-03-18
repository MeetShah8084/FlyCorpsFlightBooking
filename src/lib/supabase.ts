import { createClient } from '@supabase/supabase-js';

// Get these from your Supabase Project Settings > API
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if variables are missing to prevent runtime crashes
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. ' +
    'Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file or Vercel settings.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);