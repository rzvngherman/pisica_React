import React from 'react';
import { PageRoute } from '../types';
import { PawPrint, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { label: 'Acasa', value: PageRoute.HOME },
    { label: 'Photo', value: PageRoute.GALLERY },
    { label: 'Contact', value: PageRoute.CONTACT },
  ];

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer gap-2"
            onClick={() => onNavigate(PageRoute.HOME)}
          >
            <div className="bg-orange-500 p-2 rounded-full text-white">
              <PawPrint size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight text-stone-900">Botic Mâțescu</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.value
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-stone-500 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === item.value
                    ? 'text-orange-700 bg-orange-50'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;