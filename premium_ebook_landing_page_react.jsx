export default function PremiumEbookLanding() {
  const ebooks = [
    {
      title: 'Ebook Growth',
      description: 'Aprende estratégias modernas para criar rendimento online com métodos reais e sustentáveis.',
      price: '€19',
    },
    {
      title: 'Digital Systems',
      description: 'Templates, automações e sistemas práticos para trabalhares online de forma inteligente.',
      price: '€29',
    },
    {
      title: 'Creator Blueprint',
      description: 'Guia completo para construir uma marca digital credível e profissional.',
      price: '€24',
    },
  ];

  const testimonials = [
    {
      name: 'Miguel Santos',
      text: 'Finalmente um ebook direto ao ponto e sem promessas falsas. Muito profissional.',
    },
    {
      name: 'Joana Ribeiro',
      text: 'O design do produto e a qualidade do conteúdo surpreenderam-me bastante.',
    },
    {
      name: 'Ricardo Costa',
      text: 'Aplicável, simples e moderno. Recomendo a quem quer começar online.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white font-sans">
      {/* Navbar */}
      <header className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-50 bg-[#0B0F19]/80">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight">
            DigitalLibrary
          </h1>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#ebooks" className="hover:text-white transition">
              Ebooks
            </a>
            <a href="#about" className="hover:text-white transition">
              Sobre
            </a>
            <a href="#reviews" className="hover:text-white transition">
              Reviews
            </a>
          </nav>

          <button className="bg-white text-black px-5 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition">
            Comprar
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8">
            Mais de 1.200 downloads digitais
          </div>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
            Aprende skills digitais com ebooks modernos e práticos.
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
            Guias completos, templates e estratégias reais para começares online de forma profissional e sem promessas irreais.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#7C3AED] hover:bg-[#6D28D9] transition px-7 py-4 rounded-2xl font-medium text-white shadow-lg shadow-purple-500/20">
              Explorar Ebooks
            </button>

            <button className="border border-white/10 hover:border-white/20 bg-white/5 transition px-7 py-4 rounded-2xl font-medium text-white">
              Saber Mais
            </button>
          </div>
        </div>

        {/* Mockup */}
        <div className="relative flex justify-center">
          <div className="absolute w-80 h-80 bg-purple-600/20 blur-3xl rounded-full"></div>

          <div className="relative bg-gradient-to-br from-[#1F2937] to-[#111827] border border-white/10 rounded-[32px] p-8 w-[340px] shadow-2xl">
            <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-center p-8">
              <div>
                <p className="uppercase text-sm tracking-[0.3em] text-white/70 mb-4">
                  Premium Ebook
                </p>

                <h3 className="text-3xl font-bold leading-tight">
                  Digital Growth
                </h3>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
              <span>PDF + Templates</span>
              <span>Instant Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        {[
          'Conteúdo direto ao ponto',
          'Estratégias práticas e reais',
          'Acesso imediato após compra',
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-600/20 flex items-center justify-center mb-5 text-xl">
              ✦
            </div>

            <h3 className="text-xl font-semibold mb-3">{item}</h3>

            <p className="text-gray-400 leading-relaxed">
              Material pensado para quem quer aprender online de forma moderna e profissional.
            </p>
          </div>
        ))}
      </section>

      {/* Ebooks */}
      <section id="ebooks" className="max-w-7xl mx-auto px-6 py-28">
        <div className="mb-16 text-center">
          <p className="text-purple-400 font-medium mb-4">Coleção Digital</p>

          <h2 className="text-4xl font-bold tracking-tight mb-5">
            Ebooks criados para o mercado atual
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Aprende competências digitais úteis com guias simples, objetivos e visualmente profissionais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ebooks.map((ebook, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden hover:translate-y-[-4px] transition duration-300"
            >
              <div className="h-64 bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-center px-6">
                  {ebook.title}
                </h3>
              </div>

              <div className="p-8">
                <p className="text-gray-400 leading-relaxed mb-8">
                  {ebook.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{ebook.price}</span>

                  <button className="bg-white text-black px-5 py-3 rounded-xl font-medium hover:opacity-90 transition">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
        <div className="bg-gradient-to-br from-[#1F2937] to-[#111827] border border-white/10 rounded-[32px] p-10 h-[400px] flex items-center justify-center">
          <div className="w-40 h-40 rounded-full bg-white/10 border border-white/10"></div>
        </div>

        <div>
          <p className="text-purple-400 font-medium mb-4">Sobre o Autor</p>

          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Construído com foco em qualidade e confiança.
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6 text-lg">
            Este projeto foi criado para oferecer conteúdo digital útil, moderno e transparente. Sem falsas promessas — apenas informação prática e acessível.
          </p>

          <p className="text-gray-400 leading-relaxed mb-10 text-lg">
            O objetivo é ajudar pessoas a aprender competências digitais reais com um design premium e experiência profissional.
          </p>

          <button className="bg-[#7C3AED] hover:bg-[#6D28D9] transition px-7 py-4 rounded-2xl font-medium text-white shadow-lg shadow-purple-500/20">
            Conhecer Mais
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-medium mb-4">Feedback</p>

          <h2 className="text-4xl font-bold tracking-tight mb-5">
            O que os leitores dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[32px] p-8"
            >
              <div className="flex mb-5 text-yellow-400 text-lg">★★★★★</div>

              <p className="text-gray-300 leading-relaxed mb-8">
                “{item.text}”
              </p>

              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-gray-500 text-sm">Cliente Verificado</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-28">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[40px] p-12 md:p-16 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Começa hoje a aprender online.
          </h2>

          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Acede instantaneamente aos ebooks e melhora as tuas competências digitais com conteúdo moderno e profissional.
          </p>

          <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition">
            Ver Produtos
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6 text-center text-gray-500 text-sm">
        © 2026 DigitalLibrary. Todos os direitos reservados.
      </footer>
    </div>
  );
}
