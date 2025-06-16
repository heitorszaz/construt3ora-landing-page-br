
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-orange-600">FOXX SERVIÇOS</h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('projetos')} className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                Projetos
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                Contato
              </button>
              <button onClick={() => scrollToSection('contato')} className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors">
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
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium w-full text-left">
                Início
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium w-full text-left">
                Serviços
              </button>
              <button onClick={() => scrollToSection('projetos')} className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium w-full text-left">
                Projetos
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium w-full text-left">
                Contato
              </button>
              <button onClick={() => scrollToSection('contato')} className="w-full text-left bg-orange-600 text-white px-3 py-2 text-base font-medium hover:bg-orange-700 transition-colors">
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
