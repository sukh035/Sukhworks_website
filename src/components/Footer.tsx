import { TreePine, Instagram, Mail } from 'lucide-react';

type Props = {
  onNavigate: (section: string) => void;
};

export default function Footer({ onNavigate }: Props) {
  return (
    <footer className="bg-sage-950 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <TreePine className="w-5 h-5 text-sage-400" />
            <span className="font-serif text-lg text-sage-200">
              Sukh Works
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('gallery')}
              className="text-sage-300 text-sm font-light hover:text-sage-100 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => onNavigate('craft')}
              className="text-sage-300 text-sm font-light hover:text-sage-100 transition-colors"
            >
              Craft
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="text-sage-300 text-sm font-light hover:text-sage-100 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-sage-300 text-sm font-light hover:text-sage-100 transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-sage-800 flex items-center justify-center text-sage-300 hover:text-sage-50 hover:bg-sage-700 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
              className="w-9 h-9 rounded-full bg-sage-800 flex items-center justify-center text-sage-300 hover:text-sage-50 hover:bg-sage-700 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-sage-800 text-center">
          <p className="text-sage-500 text-xs font-light tracking-wide">
            © {new Date().getFullYear()} Sukh Works. Every piece made by hand.
          </p>
        </div>
      </div>
    </footer>
  );
}
