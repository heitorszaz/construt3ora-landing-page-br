
import { Building, Hammer, Wrench, Home, PlusCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building className="w-12 h-12 text-orange-600" />,
      title: "Construção Civil",
      description: "Construção de residências, prédios comerciais e industriais com qualidade e segurança."
    },
    {
      icon: <Home className="w-12 h-12 text-orange-600" />,
      title: "Reformas Residenciais", 
      description: "Renovação completa de residências, apartamentos e casas com modernização."
    },
    {
      icon: <Hammer className="w-12 h-12 text-orange-600" />,
      title: "Projetos Arquitetônicos",
      description: "Desenvolvimento de projetos personalizados com arquitetura moderna e funcional."
    },
    {
      icon: <PlusCircle className="w-12 h-12 text-orange-600" />,
      title: "Ampliações",
      description: "Expansão de espaços residenciais e comerciais com estrutura segura."
    },
    {
      icon: <Wrench className="w-12 h-12 text-orange-600" />,
      title: "Manutenção Predial",
      description: "Manutenção preventiva e corretiva de edifícios e estruturas."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços de construção civil com mais de 15 anos de experiência no mercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-700 transition-colors">
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
