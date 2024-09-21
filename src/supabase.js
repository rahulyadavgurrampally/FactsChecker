import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dkpnvfjuodddxrrghonz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrcG52Zmp1b2RkZHhycmdob256Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxMDAwODIsImV4cCI6MjA0MTY3NjA4Mn0.yZkaysc2FmrhEUx2EeHDd0dh_hKMYJhyVJJ9HMswAtU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
