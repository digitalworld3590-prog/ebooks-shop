// DigitalVault - Loja de eBooks
// Projeto pronto para Vercel + GitHub

export default function EbookStore() {
  const ebooks = [
    {
      title: 'Domina o Teu Tempo',
      price: '14\.99€',
      description:
        'Foco, organização e execução para resultados reais. Aprende a eliminar procrastinação e recuperar controlo sobre a tua rotina.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">DigitalVault</h1>
          <nav className="flex gap-6 text-sm text-white/70">
            <a href="#ebooks" className="hover:text-white">eBooks</a>
            <a href="#about" className="hover:text-white">Sobre</a>
            <a href="#contact" className="hover:text-white">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-green-400 mb-4 uppercase tracking-[0.2em] text-sm">
            Loja Digital
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Domina o teu tempo e melhora a tua produtividade.
          </h2>

          <p className="text-lg text-white/70 mb-8 leading-relaxed">
            Um guia prático para eliminares distrações, criares disciplina e alcançares resultados reais na tua vida pessoal e profissional.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
              Começar
            </button>

            <button className="border border-white/20 px-6 py-3 rounded-2xl hover:bg-white/5 transition">
              Ver eBooks
            </button>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur">
          <div className="space-y-5">
            {ebooks.map((book, index) => (
              <div
                key={index}
                className="bg-black/40 border border-white/10 rounded-2xl p-5"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold">{book.title}</h3>
                  <span className="text-green-400 font-semibold">
                    {book.price}
                  </span>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {book.description}
                </p>

                <button className="w-full bg-green-500 text-black py-3 rounded-xl font-semibold hover:opacity-90 transition">
                  Comprar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="ebooks"
        className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10"
      >
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Produto em Destaque</h2>
          <p className="text-white/60 max-w-2xl">
            Download imediato após compra.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ebooks.map((book, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:-translate-y-1 transition"
            >
              <div className="h-56 rounded-2xl bg-gradient-to-br from-green-500/30 to-white/5 mb-6 flex items-center justify-center">
                <span className="text-2xl font-black">eBook</span>
              </div>

              <h3 className="text-2xl font-bold mb-2">{book.title}</h3>

              <p className="text-white/60 mb-5 text-sm leading-relaxed">
                {book.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-green-400 text-xl font-bold">
                  {book.price}
                </span>

                <button className="bg-white text-black px-4 py-2 rounded-xl font-semibold">
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="max-w-4xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">
          Tens controlo total.
        </h2>

        <p className="text-white/65 text-lg leading-relaxed">
          O site pode ser publicado gratuitamente em plataformas como Vercel,
          Netlify ou GitHub Pages. O domínio também pode ser gratuito no início.
          Tu decides tudo: preços, produtos, design e pagamentos.
        </p>
      </section>

            <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
        <div className="bg-gradient-to-br from-green-500/20 to-white/5 border border-white/10 rounded-3xl p-10 text-center">
          <h2 className="text-4xl font-black mb-4">
            Começa hoje a tua marca digital.
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Publica os teus eBooks, recebe pagamentos online e cria rendimento
            digital sem precisar de loja física.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
              Publicar Agora
            </button>

            <button className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/5 transition">
              Saber Mais
            </button>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-white/10 py-10 px-6 text-center text-white/40"
      >
        <p>© 2026 NovaBooks — Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
