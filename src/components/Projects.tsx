
import { CheckCircle, Award, Target, Briefcase } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: <CheckCircle className="w-12 h-12 text-orange-600" />,
      title: "Produção da Sicred",
      description: "Serviços especializados em produção da Sicred com qualidade e eficiência.",
      category: "Especializado"
    },
    {
      icon: <Award className="w-12 h-12 text-orange-600" />,
      title: "Projetos Residenciais",
      description: "Casas modernas e funcionais desenvolvidas com foco na qualidade de vida.",
      category: "Residencial"
    },
    {
      icon: <Target className="w-12 h-12 text-orange-600" />,
      title: "Empreendimentos Comerciais",
      description: "Espaços comerciais estratégicos para o sucesso do seu negócio.",
      category: "Comercial"
    },
    {
      icon: <Briefcase className="w-12 h-12 text-orange-600" />,
      title: "Projetos Industriais",
      description: "Instalações industriais robustas e eficientes para produção.",
      category: "Industrial"
    }
  ];

  const quadrasProjects = [
    {
      title: "Quadra Poliesportiva - Antes",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Estado inicial da quadra antes da reforma"
    },
    {
      title: "Quadra Poliesportiva - Depois",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Quadra completamente renovada e modernizada"
    },
    {
      title: "Quadra de Tênis - Antes",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Condição original da quadra de tênis"
    },
    {
      title: "Quadra de Tênis - Depois",
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Quadra profissionalmente reformada"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Projetos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos com excelência e dedicação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  {project.icon}
                </div>
                <div className="mb-3">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Construção de Quadras */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Construção de Quadras Esportivas
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Veja a transformação completa de nossos projetos de quadras esportivas - antes e depois
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quadrasProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.title.includes('Antes') 
                        ? 'bg-red-100 text-red-700' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {project.title.includes('Antes') ? 'Antes' : 'Depois'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={scrollToContact}
            className="bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-700 transition-colors"
          >
            Ver Todos os Projetos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
