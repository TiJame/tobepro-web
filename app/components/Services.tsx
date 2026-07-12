const WHATSAPP_BASE = "https://wa.me/5532991977784?text=";

const services = [
  {
    icon: "⚡",
    title: "Site em 24h no Ar",
    description: "Seu site profissional criado e publicado em apenas 24 horas. Do zero ao online com domínio, hospedagem e tudo configurado.",
    features: ["Design moderno e responsivo", "Publicação em 24 horas", "Domínio + hospedagem inclusos", "Suporte pós-entrega"],
    highlight: "Mais vendido",
    msg: "Olá!%20Quero%20o%20meu%20site%20no%20ar%20em%2024%20horas!",
    price: "A partir de R$ 497",
  },
  {
    icon: "🚀",
    title: "Site + Sistema",
    description: "A combinação perfeita: um site profissional integrado com sistemas que automatizam seu negócio. CRM, agendamentos, catálogos e muito mais.",
    features: ["Site + painel administrativo", "Cadastro de produtos/serviços", "Integração com WhatsApp", "Relatórios e controles"],
    highlight: "Recomendado",
    msg: "Olá!%20Quero%20um%20site%20com%20sistema%20integrado!",
    price: "A partir de R$ 1.497",
  },
  {
    icon: "🛠️",
    title: "Sistema Dedicado",
    description: "Sistemas sob medida para automatizar processos, controlar estoques, gestão financeira ou qualquer necessidade específica do seu negócio.",
    features: ["Desenvolvido sob medida", "Banco de dados dedicado", "Acesso multi-usuário", "Treinamento incluído"],
    highlight: "Personalizado",
    msg: "Olá!%20Preciso%20de%20um%20sistema%20dedicado%20para%20meu%20negócio!",
    price: "Orçamento personalizado",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            O que <span className="gradient-text">entregamos</span>
          </h2>
          <p className="text-xl text-[#a0a0b8] max-w-2xl mx-auto">
            Soluções digitais completas para impulsionar seu negócio, com preço justo e qualidade garantida.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="gradient-border card-hover rounded-2xl p-8 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl">{service.icon}</span>
                <span className="bg-[#1a6bff20] text-[#4d8fff] text-xs font-semibold px-3 py-1 rounded-full border border-[#1a6bff30]">
                  {service.highlight}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-[#a0a0b8] text-sm leading-relaxed mb-6">{service.description}</p>

              <ul className="space-y-2 mb-6 flex-1">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[#a0a0b8]">
                    <span className="text-[#1a6bff] text-lg leading-none">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="border-t border-[#1a6bff20] pt-4 mt-auto">
                <p className="text-[#1a6bff] font-bold text-lg mb-4">{service.price}</p>
                <a
                  href={`${WHATSAPP_BASE}${service.msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white"
                >
                  <WhatsAppIcon />
                  Solicitar agora
                </a>
              </div>
            </div>
          ))}
        </div>
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
