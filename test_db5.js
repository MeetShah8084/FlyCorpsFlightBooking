import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function run() {
  const dateStr = '2026-03-20';
  const [year, month, day] = dateStr.split('-').map(Number);
  const startOfDay = new Date(year, month - 1, day, 0, 0, 0).toISOString();
  const endOfDay = new Date(year, month - 1, day, 23, 59, 59, 999).toISOString();

  console.log({ startOfDay, endOfDay });

  const { data, error } = await supabase
    .from('flights')
    .select('*')
    .ilike('origin_city', '%paris%')
    .ilike('destination_city', '%madrid%')
    .gte('departure_time', startOfDay)
    .lte('departure_time', endOfDay);
    
  console.log(data?.length);

  // Check without date
  const { data: d2 } = await supabase
    .from('flights')
    .select('*')
    .ilike('origin_city', '%paris%')
    .ilike('destination_city', '%madrid%');
    
  console.log('Without date filter:', d2?.length);

  // Check just date
  const { data: d3 } = await supabase
    .from('flights')
    .select('*')
    .gte('departure_time', startOfDay)
    .lte('departure_time', endOfDay);
    
  console.log('Just date filter:', d3?.length);
  
}
run();
