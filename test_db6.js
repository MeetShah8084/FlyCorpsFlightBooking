import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function run() {
  const { data } = await supabase
    .from('flights')
    .select('departure_time')
    .ilike('origin_city', '%paris%')
    .ilike('destination_city', '%madrid%');
    
  console.log('Paris to Madrid departure dates:', data.map(d => d.departure_time).sort());
}
run();
