import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qpzprqcymdilkfkrujqz.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwenBycWN5bWRpbGtma3J1anF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2MTY4NDYsImV4cCI6MjA1MDE5Mjg0Nn0.NzJImzRn4ZhihSNgdMHgDW2v6YZ5pU2ZTKympQVzU7I';

export const supabase = createClient(supabaseUrl, supabaseKey);
