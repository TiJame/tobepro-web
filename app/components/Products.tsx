const WHATSAPP_BASE = "https://wa.me/5532991977784?text=";

const products = [
  {
    icon: "🌐",
    tag: "Mais Popular",
    tagColor: "bg-[#1a6bff20] text-[#4d8fff] border-[#1a6bff30]",
    title: "Site Personalizado",
    subtitle: "Presença digital profissional",
    description: "Site profissional com design exclusivo, otimizado para aparecer no Google, responsivo para celulares e pronto para converter visitantes em clientes.",
    features: [
      "Design exclusivo e moderno",
      "Otimizado para SEO (Google)",
      "100% responsivo (mobile)",
      "Formulário de contato",
      "Integração com WhatsApp",
      "Certificado SSL (https)",
      "Hospedagem por 1 ano",
    ],
    price: "R$ 497",
    period: "pagamento único",
    msg: "Olá!%20Tenho%20interesse%20no%20Site%20Personalizado!%20Pode%20me%20passar%20mais%20detalhes%3F",
  },
  {
    icon: "⚙️",
    tag: "Mais Completo",
    tagColor: "bg-[#ff6b1a20] text-[#ff8c4d] border-[#ff6b1a30]",
    title: "Sistema Personalizado",
    subtitle: "Automatize seu negócio",
    description: "Sistema web sob medida para as necessidades do seu negócio: controle de clientes, estoque, agendamentos, financeiro e muito mais.",
    features: [
      "Cadastro de clientes/produtos",
      "Controle financeiro básico",
      "Relatórios em tempo real",
      "Acesso por login seguro",
      "Multi-usuário",
      "Acesso de qualquer dispositivo",
      "Suporte e treinamento",
    ],
    price: "R$ 997",
    period: "pagamento único",
    msg: "Olá!%20Tenho%20interesse%20no%20Sistema%20Personalizado!%20Pode%20me%20passar%20mais%20detalhes%3F",
  },
  {
    icon: "🍽️",
    tag: "Para Restaurantes",
    tagColor: "bg-[#1aff6b20] text-[#4dff8c] border-[#1aff6b30]",
    title: "Cardápio Digital",
    subtitle: "Para restaurantes e lanchonetes",
    description: "Cardápio digital moderno com QR Code, sem mensalidade abusiva. Clientes acessam pelo celular, fazem pedidos e você gerencia tudo pelo painel.",
    features: [
      "Cardápio com QR Code",
      "Fotos dos pratos",
      "Categorias e combos",
      "Painel administrativo",
      "Atualização em tempo real",
      "Pedidos via WhatsApp",
      "Sem taxas por pedido",
    ],
    price: "R$ 797",
    period: "pagamento único",
    msg: "Olá!%20Tenho%20interesse%20no%20Cardápio%20Digital!%20Pode%20me%20passar%20mais%20detalhes%3F",
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-24 relative bg-[#0d0d14]">
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1a6bff15] border border-[#1a6bff30] rounded-full px-4 py-2 mb-6">
            <span className="text-[#4d8fff] text-sm font-medium">🛒 Produtos prontos para você</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Produtos de <span className="gradient-text">Prateleira</span>
          </h2>
          <p className="text-xl text-[#a0a0b8] max-w-2xl mx-auto">
            Soluções prontas com preço fixo e entrega rápida. Sem enrolação, sem surpresas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="gradient-border card-hover rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="p-8 flex-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl bg-[#1a6bff10] w-16 h-16 rounded-2xl flex items-center justify-center">
                    {product.icon}
                  </div>
                  <span className={`${product.tagColor} border text-xs font-semibold px-3 py-1 rounded-full`}>
                    {product.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{product.title}</h3>
                <p className="text-[#1a6bff] text-sm font-medium mb-4">{product.subtitle}</p>
                <p className="text-[#a0a0b8] text-sm leading-relaxed mb-6">{product.description}</p>

                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[#a0a0b8]">
                      <svg className="w-4 h-4 text-[#1a6bff] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[#1a6bff20] p-6">
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-3xl font-black text-white">{product.price}</span>
                  <span className="text-[#a0a0b8] text-sm mb-1">{product.period}</span>
                </div>
                <a
                  href={`${WHATSAPP_BASE}${product.msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white"
                >
                  <WhatsAppIcon />
                  Quero esse produto
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#a0a0b8] mt-8 text-sm">
          * Todos os preços são para pagamento à vista. Parcelamento disponível. Consulte condições.
        </p>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
