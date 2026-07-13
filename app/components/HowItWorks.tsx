const steps = [
  { n:"01", icon:"💬", title:"Você fala conosco", desc:"Conta o que precisa pelo WhatsApp. Em minutos entendemos sua ideia e já iniciamos o planejamento." },
  { n:"02", icon:"🎨", title:"Criamos o layout", desc:"Nossa equipe desenvolve o design personalizado com as cores, logo e identidade visual da sua marca." },
  { n:"03", icon:"⚡", title:"Construímos o site", desc:"Desenvolvemos com tecnologia de ponta: rápido, seguro, 100% responsivo para celular e desktop." },
  { n:"04", icon:"🚀", title:"Seu site no ar!", desc:"Em 24h seu domínio está configurado, o site publicado e você já pode receber clientes online." },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#080812]" />
      <div className="absolute top-0 left-0 right-0 divider" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <span className="inline-block text-[#1a6bff] text-xs font-semibold tracking-widest uppercase mb-4">Do zero ao online</span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Como funciona o<br /><span className="grad-text">processo de 24h</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-xl mx-auto">
            Um processo simples e transparente. Você acompanha cada etapa em tempo real.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha vertical */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#1a6bff40] via-[#1a6bff20] to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((s, i) => (
              <div key={s.n} className={`reveal flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8`}
                style={{transitionDelay:`${i * 0.12}s`}}>
                <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className={`inline-block card rounded-2xl p-7 max-w-sm ${i % 2 === 0 ? "lg:ml-auto" : ""}`}>
                    <span className="text-3xl mb-4 block">{s.icon}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>

                {/* Nó central */}
                <div className="hidden lg:flex flex-shrink-0 w-14 h-14 rounded-full items-center justify-center border-2 border-[#1a6bff] bg-[#04040a] z-10 relative">
                  <span className="text-[#1a6bff] font-black text-sm">{s.n}</span>
                  <div className="absolute w-20 h-20 rounded-full border border-[#1a6bff20] animate-pulse" />
                </div>

                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA inline */}
        <div className="text-center mt-20 reveal">
          <a href="https://wa.me/5532991977784?text=Quero%20começar%20agora!" target="_blank" rel="noopener noreferrer"
            className="btn-wa inline-flex items-center gap-3 px-10 py-4 rounded-2xl text-base font-bold text-white">
            <WAIcon /> Começar agora — é gratuito consultar
          </a>
        </div>
      </div>
    </section>
  );
}

function WAIcon() {
  return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
}
