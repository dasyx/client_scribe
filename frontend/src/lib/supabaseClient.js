import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://yhmhaqevvpovrtblolbz.supabase.co';
export const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlobWhhcWV2dnBvdnJ0YmxvbGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxNjkxMzYsImV4cCI6MTk5OTc0NTEzNn0.ZqB6DyGD7ALmViOqOJWKr8JSxzZzofKZm1i4W0pGWp0';
export const supabase = createClient(supabaseUrl, supabaseKey);