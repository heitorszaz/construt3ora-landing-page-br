
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-orange-600">ConstrutorPro</h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                Início
              </a>
              <a href="#servicos" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                Serviços
              </a>
              <a href="#projetos" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                Projetos
              </a>
              <a href="#contato" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                Contato
              </a>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors">
                Orçamento
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#inicio" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium">
                Início
              </a>
              <a href="#servicos" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium">
                Serviços
              </a>
              <a href="#projetos" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium">
                Projetos
              </a>
              <a href="#contato" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium">
                Contato
              </a>
              <button className="w-full text-left bg-orange-600 text-white px-3 py-2 text-base font-medium hover:bg-orange-700 transition-colors">
                Orçamento
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
