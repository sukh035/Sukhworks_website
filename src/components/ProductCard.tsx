import type { Product } from '@/lib/supabase';

type Props = {
  product: Product;
  onClick: () => void;
  index: number;
};

export default function ProductCard({ product, onClick, index }: Props) {
  return (
    <button
      onClick={onClick}
      className="group text-left animate-fade-up"
      style={{ animationDelay: `${(index % 3) * 0.1}s` }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-sage-100 aspect-[4/3] shadow-sm">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sage-400">
            No image
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-sage-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {!product.is_available && (
          <div className="absolute top-4 right-4 bg-sage-900/80 text-sage-50 px-3 py-1 rounded-full text-xs font-light tracking-wide">
            Sold
          </div>
        )}
        {product.is_featured && product.is_available && (
          <div className="absolute top-4 right-4 bg-sage-600/90 text-sage-50 px-3 py-1 rounded-full text-xs font-light tracking-wide">
            Featured
          </div>
        )}
      </div>

      <div className="mt-4 px-1">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-xl text-sage-900 group-hover:text-sage-700 transition-colors">
            {product.name}
          </h3>
          {product.price && (
            <span className="text-sage-600 font-light text-lg whitespace-nowrap">
              ${product.price.toFixed(0)}
            </span>
          )}
        </div>
        <p className="text-sage-500 text-sm font-light mt-1">
          {product.wood_type}
          {product.category ? ` · ${product.category.name}` : ''}
        </p>
      </div>
    </button>
  );
}
