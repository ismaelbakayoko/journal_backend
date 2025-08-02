
const {createClient}= require("@supabase/supabase-js");

const supabaseUrl = "https://zhxvihhbslqcihibadcq.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoeHZpaGhic2xxY2loaWJhZGNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwMDQ1MTQsImV4cCI6MjA2OTU4MDUxNH0.fE0j25QXlEUTeZCcPsuSmRmKLVSNVxuxzNPNd_i-cTU";
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase