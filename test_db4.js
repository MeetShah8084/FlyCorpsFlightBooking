import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);
async function run() {
  const { data, error } = await supabase.from('flights').select('*').ilike('origin_city', '%paris%');
  console.log("paris origin count:", data?.length);

  const { data: data2 } = await supabase.from('flights').select('departure_time');
  const uniqueDates = new Set(data2.map(f => f.departure_time.split('T')[0]));
  console.log("Unique departure dates in DB:", Array.from(uniqueDates));
}
run();
