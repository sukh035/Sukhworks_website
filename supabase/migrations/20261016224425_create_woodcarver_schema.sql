/*
# Create woodcarver portfolio schema (single-tenant, no auth)

1. New Tables
- `categories` — product categories (spoons, spatulas, forks, vases, serving trays, etc.)
  - id (uuid PK), name (text), slug (text unique), description (text), display_order (int), created_at
- `products` — individual handcrafted pieces
  - id (uuid PK), name (text), slug (text unique), description (text), category_id (FK → categories),
    wood_type (text), price (numeric), image_url (text), dimensions (text),
    is_available (bool default true), is_featured (bool default false), display_order (int), created_at
- `contact_submissions` — messages from site visitors via the contact form
  - id (uuid PK), name (text), email (text), message (text), created_at

2. Security
- RLS enabled on all three tables.
- categories + products: public read (anon + authenticated SELECT USING true). No public writes.
- contact_submissions: public insert only (anon + authenticated INSERT WITH CHECK true). No public read/delete.

3. Important Notes
- This is a no-auth single-tenant site. The anon-key frontend reads products and submits contact forms.
- Contact submissions are write-only for the public — visitors can submit but cannot read others' messages.
- Indexes on slug columns and category_id for fast lookups.
*/

-- Categories
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  description text,
  display_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_categories" ON categories;
CREATE POLICY "public_read_categories"
ON categories FOR SELECT
TO anon, authenticated USING (true);

-- Products
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  description text,
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  wood_type text,
  price numeric(10, 2),
  image_url text,
  dimensions text,
  is_available boolean NOT NULL DEFAULT true,
  is_featured boolean NOT NULL DEFAULT false,
  display_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_products" ON products;
CREATE POLICY "public_read_products"
ON products FOR SELECT
TO anon, authenticated USING (true);

CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_category_id ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(is_featured);

-- Contact submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_insert_contact" ON contact_submissions;
CREATE POLICY "public_insert_contact"
ON contact_submissions FOR INSERT
TO anon, authenticated WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
