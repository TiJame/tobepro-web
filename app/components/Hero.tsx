"use client";

const WHATSAPP_NUMBER = "5532991977784";
const WHATSAPP_MSG = "https://wa.me/5532991977784?text=Olá!%20Quero%20meu%20site%20no%20ar%20em%2024%20horas!";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-glow pt-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1a6bff10] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1a6bff08] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-[#1a6bff15] border border-[#1a6bff30] rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-[#1a6bff] rounded-full animate-pulse"></span>
          <span className="text-[#4d8fff] text-sm font-medium">Entrega rápida e profissional</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
          Seu site no ar{" "}
          <span className="gradient-text">em 24 horas</span>
        </h1>

        <p className="text-xl sm:text-2xl text-[#a0a0b8] max-w-3xl mx-auto mb-4 leading-relaxed">
          Criamos sites e sistemas profissionais com{" "}
          <span className="text-white font-semibold">preços que cabem no seu bolso</span>.
          Do layout à publicação, tudo resolvido rapidinho.
        </p>

        <p className="text-[#1a6bff] text-lg font-semibold mb-10">
          Sites a partir de R$ 497 · Sistemas a partir de R$ 997
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_MSG}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex items-center justify-center gap-3 px-8 py-4 rounded-full text-lg font-bold text-white animate-pulse-glow"
          >
            <WhatsAppIcon />
            Quero meu site agora!
          </a>
          <a
            href="#servicos"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-semibold text-white border border-[#1a6bff40] hover:border-[#1a6bff] transition-all hover:bg-[#1a6bff10]"
          >
            Ver serviços
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { value: "24h", label: "Entrega do site" },
            { value: "100%", label: "Responsivo" },
            { value: "24/7", label: "Suporte" },
            { value: "∞", label: "Possibilidades" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black gradient-text">{stat.value}</div>
              <div className="text-[#a0a0b8] text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#servicos">
          <svg className="w-6 h-6 text-[#1a6bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
