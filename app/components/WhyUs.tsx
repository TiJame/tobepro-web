const reasons = [
  {
    icon: "💰",
    title: "Preços Acessíveis",
    description: "Acreditamos que toda empresa merece uma presença digital profissional sem gastar fortunas. Nossos preços são justos e transparentes.",
  },
  {
    icon: "⚡",
    title: "Entrega em 24h",
    description: "Seu site no ar no próximo dia útil. Sem enrolação, sem atrasos. Da aprovação do layout à publicação, tudo em 24 horas.",
  },
  {
    icon: "📱",
    title: "100% Mobile First",
    description: "Todos os nossos projetos são criados pensando primeiro no celular. Mais de 70% dos acessos vêm de smartphones.",
  },
  {
    icon: "🔍",
    title: "Otimizado para Google",
    description: "Sites criados com SEO desde o início para que sua empresa apareça nas buscas do Google e atraia mais clientes.",
  },
  {
    icon: "🛡️",
    title: "Segurança Incluída",
    description: "Todos os projetos incluem certificado SSL, backups automáticos e proteção básica. Sua presença digital segura e confiável.",
  },
  {
    icon: "🤝",
    title: "Suporte Dedicado",
    description: "Você não fica sozinho após a entrega. Nossa equipe está disponível via WhatsApp para ajudar sempre que precisar.",
  },
];

export default function WhyUs() {
  return (
    <section id="vantagens" className="py-24 relative">
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Por que escolher a <span className="gradient-text">tobePro</span>?
          </h2>
          <p className="text-xl text-[#a0a0b8] max-w-2xl mx-auto">
            Combinamos velocidade, qualidade e preço acessível para entregar o melhor resultado para o seu negócio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="gradient-border card-hover rounded-2xl p-6 group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-[#a0a0b8] text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
