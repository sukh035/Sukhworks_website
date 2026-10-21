import { useEffect } from 'react';
import { X, Ruler, TreePine, Tag } from 'lucide-react';
import type { Product } from '@/lib/supabase';

type Props = {
  product: Product;
  onClose: () => void;
};

export default function ProductModal({ product, onClose }: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-sage-950/60 backdrop-blur-sm" />

      <div
        className="relative bg-sage-50 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-sage-100/80 backdrop-blur flex items-center justify-center text-sage-700 hover:bg-sage-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative aspect-square md:aspect-auto md:min-h-[400px] bg-sage-100">
            {product.image_url ? (
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-sage-400">
                No image
              </div>
            )}
          </div>

          <div className="p-8 md:p-10 flex flex-col justify-center">
            {product.category && (
              <p className="text-sage-600 text-sm font-light tracking-[0.2em] uppercase mb-2">
                {product.category.name}
              </p>
            )}
            <h2 className="font-serif text-3xl text-sage-900 mb-4">
              {product.name}
            </h2>

            {product.description && (
              <p className="text-sage-600 font-light leading-relaxed mb-6">
                {product.description}
              </p>
            )}

            <div className="space-y-3 mb-6">
              {product.wood_type && (
                <DetailRow icon={<TreePine className="w-4 h-4" />} label="Wood" value={product.wood_type} />
              )}
              {product.dimensions && (
                <DetailRow icon={<Ruler className="w-4 h-4" />} label="Dimensions" value={product.dimensions} />
              )}
              {product.price && (
                <DetailRow icon={<Tag className="w-4 h-4" />} label="Price" value={`$${product.price.toFixed(0)}`} />
              )}
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-sage-200">
              <span
                className={`inline-flex items-center gap-2 text-sm font-light ${
                  product.is_available ? 'text-sage-700' : 'text-sage-500'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    product.is_available ? 'bg-sage-500' : 'bg-sage-400'
                  }`}
                />
                {product.is_available ? 'Available for purchase' : 'Sold'}
              </span>
            </div>

            {product.is_available && (
              <p className="text-sage-500 text-sm font-light mt-4">
                Interested in this piece? Use the contact form below to inquire.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 text-sage-700">
      <span className="text-sage-400">{icon}</span>
      <span className="text-sm font-light text-sage-500 w-24">{label}</span>
      <span className="text-sm font-normal">{value}</span>
    </div>
  );
}
