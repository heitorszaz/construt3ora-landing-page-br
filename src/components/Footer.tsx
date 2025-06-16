
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-orange-400">FOXX SERVIÇOS</h3>
            <p className="text-gray-300 leading-relaxed">
              Especialistas em construção civil com mais de 15 anos de experiência. 
              Transformamos seus sonhos em realidade com qualidade e pontualidade.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors cursor-pointer">
                <span className="text-xs font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors cursor-pointer">
                <span className="text-xs font-bold">@</span>
              </div>
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors cursor-pointer">
                <span className="text-xs font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-400">Nossos Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Construção Civil</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Reformas Residenciais</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Projetos Arquitetônicos</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Ampliações</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Consultoria Técnica</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Manutenção Predial</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-400">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#inicio" className="hover:text-orange-400 transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-orange-400 transition-colors">Serviços</a></li>
              <li><a href="#projetos" className="hover:text-orange-400 transition-colors">Projetos</a></li>
              <li><a href="#contato" className="hover:text-orange-400 transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-400">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <div className="font-medium">Endereço:</div>
                <div className="text-sm">Rua da Moenda, 430<br />São Paulo - SP</div>
              </div>
              <div>
                <div className="font-medium">Telefone:</div>
                <div className="text-sm">(11) 94038-9981</div>
              </div>
              <div>
                <div className="font-medium">Email:</div>
                <div className="text-sm">contato@foxxservicos.com.br</div>
              </div>
              <div>
                <div className="font-medium">Horário:</div>
                <div className="text-sm">Seg-Sex: 8h às 18h<br />Sáb: 8h às 12h</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 FOXX SERVIÇOS. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                CNPJ: 03.039.939/0001-58
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
