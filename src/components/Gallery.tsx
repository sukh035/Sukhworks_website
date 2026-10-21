import { useEffect, useState, useMemo } from 'react';
import { supabase, type Product, type Category } from '@/lib/supabase';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

type Props = {
  registerRef: (el: HTMLElement | null) => void;
};

export default function Gallery({ registerRef }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const [prodRes, catRes] = await Promise.all([
        supabase
          .from('products')
          .select('*, category:categories(*)')
          .order('display_order', { ascending: true }),
        supabase
          .from('categories')
          .select('*')
          .order('display_order', { ascending: true }),
      ]);

      if (prodRes.data) setProducts(prodRes.data);
      if (catRes.data) setCategories(catRes.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return products;
    return products.filter((p) => p.category?.slug === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <section
      id="gallery"
      ref={registerRef}
      className="py-24 bg-ivory"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sage-500 text-sm font-light tracking-[0.25em] uppercase mb-3">
            The Collection
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-sage-900 mb-4">
            Carved, Not Stamped
          </h2>
          <p className="text-sage-600 font-light text-lg max-w-xl mx-auto">
            Every piece is made from a single block of wood — no glue, no
            shortcuts, just knife and gouge.
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-10 h-10 border-2 border-sage-300 border-t-sage-700 rounded-full animate-spin" />
          </div>
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <FilterButton
                label="All Pieces"
                active={selectedCategory === 'all'}
                onClick={() => setSelectedCategory('all')}
              />
              {categories.map((cat) => (
                <FilterButton
                  key={cat.id}
                  label={cat.name}
                  active={selectedCategory === cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                  index={index}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <p className="text-center text-sage-500 font-light py-12">
                No pieces in this category yet — check back soon.
              </p>
            )}
          </>
        )}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full text-sm font-light tracking-wide transition-all duration-300 ${
        active
          ? 'bg-sage-800 text-sage-50 shadow-md'
          : 'bg-sage-100 text-sage-700 hover:bg-sage-200'
      }`}
    >
      {label}
    </button>
  );
}
