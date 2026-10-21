import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ikrxqtwceqyaymbvtiuh.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrcnhxdHdjZXF5YXltYnZ0aXVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxODM4MzcsImV4cCI6MjEwNzc1OTgzN30.yoZfPIS4TYECtEWMGf3vAl8LgpcM55tGGobjTXf8Y1c';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  display_order: number;
  created_at: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  category_id: string | null;
  wood_type: string | null;
  price: number | null;
  image_url: string | null;
  dimensions: string | null;
  is_available: boolean;
  is_featured: boolean;
  display_order: number;
  created_at: string;
  category?: Category | null;
};
