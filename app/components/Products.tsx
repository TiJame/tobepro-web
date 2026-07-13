const WA = "https://wa.me/5532991977784?text=";

const products = [
  {
    icon: "🌐", popular: false,
    title: "Site Personalizado",
    price: "R$ 497", period: "pagamento único",
    desc: "Presença digital profissional com entrega em 24h.",
    features: ["Design exclusivo e responsivo","SEO para Google","Domínio + hospedagem 1 ano","Certificado SSL","Formulário + WhatsApp","Até 5 páginas"],
    msg: "Olá!%20Quero%20o%20Site%20Personalizado!%20Pode%20me%20passar%20detalhes%3F",
  },
  {
    icon: "⚙️", popular: true,
    title: "Site + Sistema",
    price: "R$ 1.497", period: "pagamento único",
    desc: "Site profissional integrado ao sistema de gestão.",
    features: ["Tudo do plano Site","Painel administrativo","Cadastro de produtos/serviços","Controle de clientes","Relatórios básicos","Treinamento incluído"],
    msg: "Olá!%20Quero%20o%20combo%20Site%20+%20Sistema!%20Pode%20me%20passar%20detalhes%3F",
  },
  {
    icon: "🤖", popular: false,
    title: "Bot de Atendimento",
    price: "R$ 597", period: "implementação",
    desc: "Bot inteligente para WhatsApp ou seu site.",
    features: ["Atendimento 24/7 automático","Fluxos de conversa customizados","Captura e qualificação de leads","Integração com WhatsApp","Relatórios de atendimento","Suporte e ajustes"],
    msg: "Olá!%20Quero%20o%20Bot%20de%20Atendimento!%20Pode%20me%20passar%20detalhes%3F",
  },
  {
    icon: "🍽️", popular: false,
    title: "Cardápio Digital",
    price: "R$ 797", period: "pagamento único",
    desc: "Cardápio com QR Code para restaurantes e lanchonetes.",
    features: ["QR Code personalizado","Fotos e categorias","Combos e destaques","Painel de atualização","Pedidos via WhatsApp","Sem mensalidade de transação"],
    msg: "Olá!%20Quero%20o%20Cardápio%20Digital!%20Pode%20me%20passar%20detalhes%3F",
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-28 relative overflow-hidden bg-[#04040a]">
      <div className="absolute top-0 left-0 right-0 divider" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#1a6bff] rounded-full blur-[180px] opacity-[0.05]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <span className="inline-block text-[#1a6bff] text-xs font-semibold tracking-widest uppercase mb-4">Produtos prontos</span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Preços transparentes<br /><span className="grad-text">sem surpresas</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-xl mx-auto">
            Escolha o produto ideal para o seu momento. Parcelamento disponível. Orçamento sempre gratuito.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <div key={p.title}
              className={`reveal flex flex-col rounded-2xl overflow-hidden ${p.popular ? "border-2 border-[#1a6bff] shadow-2xl shadow-[#1a6bff20]" : "card"}`}
              style={{transitionDelay:`${i*0.1}s`}}>

              {p.popular && (
                <div className="bg-gradient-to-r from-[#1a6bff] to-[#0044cc] py-2 text-center text-xs font-bold text-white tracking-wide">
                  ⭐ MAIS POPULAR
                </div>
              )}

              <div className={`flex flex-col flex-1 p-6 ${p.popular ? "bg-[#0d0d1a]" : ""}`}>
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-black text-white mb-1">{p.title}</h3>
                <p className="text-[#6b7280] text-sm mb-5">{p.desc}</p>

                <div className="mb-6">
                  <span className="text-3xl font-black text-white">{p.price}</span>
                  <span className="text-[#6b7280] text-xs ml-1">{p.period}</span>
                </div>

                <ul className="space-y-2.5 flex-1 mb-6">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-xs text-[#aaaaaa]">
                      <svg className="w-3.5 h-3.5 text-[#1a6bff] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a href={`${WA}${p.msg}`} target="_blank" rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold ${p.popular ? "btn-blue text-white" : "btn-ghost"}`}>
                  <WAIcon /> Quero esse
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#6b7280] text-sm mt-8 reveal">
          * Parcelamento em até 6x no cartão. Consulte condições pelo WhatsApp.
        </p>
      </div>
    </section>
  );
}

function WAIcon() {
  return <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
}
