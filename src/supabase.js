import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tqxalqzogsfuddtmofrj.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxeGFscXpvZ3NmdWRkdG1vZnJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5MTA2NzYsImV4cCI6MjA4MDQ4NjY3Nn0.lu_KwSVagf6B_FuMcHLwN3wUxuoGkW9O2pgEUPaVgmk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
