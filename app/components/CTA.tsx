export default function CTA() {
  return (
    <section id="contato" className="py-28 relative overflow-hidden bg-[#080812]">
      <div className="absolute top-0 left-0 right-0 divider" />
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-30" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal">
          <div className="inline-block text-5xl mb-6 animate-float">🚀</div>
          <h2 className="text-5xl sm:text-6xl font-black mb-4">
            Seu negócio<br />
            <span className="grad-text">merece estar online</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-xl mx-auto mb-3">
            Cada dia sem site é um cliente perdido para o concorrente.
            Hoje você resolve isso em uma conversa de WhatsApp.
          </p>
          <p className="text-[#1a6bff] font-semibold mb-10">
            Atendimento: Seg–Sáb, 8h às 20h · Resposta rápida garantida
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://wa.me/5532991977784?text=Olá!%20Quero%20começar%20meu%20projeto%20digital!" target="_blank" rel="noopener noreferrer"
              className="btn-wa flex items-center justify-center gap-3 px-10 py-4 rounded-2xl text-lg font-bold text-white">
              <WAIcon /> Começar agora — é grátis consultar
            </a>
            <a href="https://wa.me/5532991977784?text=Olá!%20Quero%20saber%20o%20preço%20do%20site%20em%2024h!" target="_blank" rel="noopener noreferrer"
              className="btn-blue flex items-center justify-center px-10 py-4 rounded-2xl text-lg font-bold text-white">
              Ver preços →
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#6b7280]">
            {["Sem contrato de fidelidade","Orçamento gratuito","Entrega em 24h","Suporte incluído"].map(t=>(
              <span key={t} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#1a6bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                </svg>{t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WAIcon() {
  return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
}
