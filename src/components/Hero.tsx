
const Hero = () => {
  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Construindo o
                <span className="text-orange-400 block">Futuro</span>
                da sua família
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mt-6 leading-relaxed">
                Mais de 15 anos de experiência em construção civil, reformas e projetos arquitetônicos com qualidade e pontualidade garantidas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg">
                Solicitar Orçamento
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
                Ver Projetos
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">500+</div>
                <div className="text-sm text-gray-300">Projetos Concluídos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">15+</div>
                <div className="text-sm text-gray-300">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">100%</div>
                <div className="text-sm text-gray-300">Satisfação</div>
              </div>
            </div>
          </div>

          <div className="lg:order-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Projeto de construção"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-lg font-semibold">Residencial Premium</div>
                <div className="text-sm text-gray-300">São Paulo - SP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
