import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://itaphroqdcxxbryequkp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0YXBocm9xZGN4eGJyeWVxdWtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0MjY1NTYsImV4cCI6MjAzODAwMjU1Nn0.hgzASFERkfpeJ4wseZK7DRInn8ejhbb8JEdpZD5rkQM";
const Supabase = createClient(supabaseUrl, supabaseKey);

export default Supabase;
