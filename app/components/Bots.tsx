const WA = "https://wa.me/5532991977784?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20bot%20de%20atendimento!";

const features = [
  { icon: "🤖", title: "Atende 24/7", desc: "Seu bot nunca dorme. Responde clientes às 3h da manhã, nos feriados, fins de semana — sempre." },
  { icon: "⚡", title: "Respostas instantâneas", desc: "0 segundos de espera. Clientes recebem resposta imediata sobre preços, horários e disponibilidade." },
  { icon: "📋", title: "Coleta de dados", desc: "Captura nome, contato, interesse e envia para você por e-mail ou planilha automaticamente." },
  { icon: "🔁", title: "Fluxos personalizados", desc: "Menus interativos, perguntas e respostas, agendamentos e redirecionamento para humano quando necessário." },
  { icon: "📊", title: "Relatórios de atendimento", desc: "Veja quantos clientes foram atendidos, quais as dúvidas mais frequentes e taxas de conversão." },
  { icon: "🔗", title: "Integração total", desc: "Conecta com seu site, CRM, planilha do Google, e-mail e sistemas internos." },
];

export default function Bots() {
  return (
    <section id="bots" className="py-28 relative overflow-hidden bg-[#080812]">
      <div className="absolute top-0 left-0 right-0 divider" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1a6bff] rounded-full blur-[200px] opacity-[0.06]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-2 border border-[#1a6bff30] bg-[#1a6bff08] rounded-full px-4 py-1.5 mb-6">
            <span className="text-lg">🤖</span>
            <span className="text-[#4d8fff] text-xs font-semibold tracking-wide">NOVO — Bot de Atendimento com IA</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-5">
            Seu negócio atendendo<br />
            <span className="grad-text">clientes no automático</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            Criamos bots inteligentes para WhatsApp, Instagram e site que respondem dúvidas,
            qualificam leads e agendam clientes — sem você precisar estar online.
          </p>
        </div>

        {/* Mockup de conversa + features */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Chat mockup */}
          <div className="reveal-left">
            <div className="relative">
              <div className="absolute -inset-6 bg-[#1a6bff] rounded-3xl blur-3xl opacity-[0.08]" />
              {/* Phone */}
              <div className="relative mx-auto w-[320px] bg-[#111122] rounded-[36px] border-2 border-[#1a1a2e] shadow-2xl overflow-hidden">
                {/* Status bar */}
                <div className="flex justify-between items-center px-5 pt-3 pb-1">
                  <span className="text-[10px] text-[#6b7280]">9:41</span>
                  <div className="w-20 h-4 bg-[#0a0a18] rounded-full" />
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-[#25D366] rounded-sm opacity-80" />
                    <div className="w-2 h-2 bg-[#6b7280] rounded-sm" />
                  </div>
                </div>

                {/* WhatsApp header */}
                <div className="bg-[#25D36615] border-b border-[#1a1a2e] px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1a6bff] to-[#0044cc] flex items-center justify-center text-lg">🤖</div>
                  <div>
                    <div className="text-white text-sm font-semibold">Bot tobePro</div>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                      <span className="text-[10px] text-[#25D366]">Online agora</span>
                    </div>
                  </div>
                </div>

                {/* Chat */}
                <div className="bg-[#0a0a18] px-3 py-4 space-y-3" style={{minHeight:340}}>
                  {/* Bot msg */}
                  <div className="flex gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#1a6bff20] flex items-center justify-center text-sm flex-shrink-0">🤖</div>
                    <div className="bg-[#111130] rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[200px]">
                      <p className="text-[11px] text-white leading-relaxed">Olá! 👋 Bem-vindo à <strong>tobePro!</strong><br/>Como posso ajudar hoje?</p>
                      <span className="text-[9px] text-[#6b7280] mt-1 block">09:41 ✓✓</span>
                    </div>
                  </div>

                  {/* Opções */}
                  <div className="flex gap-2 flex-wrap pl-9">
                    {["🌐 Quero um site","🤖 Quero um bot","💰 Ver preços"].map(o=>(
                      <div key={o} className="border border-[#1a6bff40] rounded-full px-3 py-1 text-[10px] text-[#4d8fff]">{o}</div>
                    ))}
                  </div>

                  {/* User msg */}
                  <div className="flex justify-end">
                    <div className="bg-[#1a6bff20] border border-[#1a6bff30] rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[200px]">
                      <p className="text-[11px] text-white">🤖 Quero um bot</p>
                      <span className="text-[9px] text-[#6b7280] mt-1 block text-right">09:42 ✓✓</span>
                    </div>
                  </div>

                  {/* Bot resposta */}
                  <div className="flex gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#1a6bff20] flex items-center justify-center text-sm flex-shrink-0">🤖</div>
                    <div className="bg-[#111130] rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[210px]">
                      <p className="text-[11px] text-white leading-relaxed">Ótimo! 🚀 Criamos bots para WhatsApp, Instagram e site.<br/><br/>Atende 24h, qualifica leads e agenda clientes automaticamente.</p>
                      <span className="text-[9px] text-[#6b7280] mt-1 block">09:42 ✓✓</span>
                    </div>
                  </div>

                  {/* Opções 2 */}
                  <div className="flex gap-2 flex-wrap pl-9">
                    {["📋 Ver planos","📞 Falar com humano"].map(o=>(
                      <div key={o} className="border border-[#1a6bff40] rounded-full px-3 py-1 text-[10px] text-[#4d8fff]">{o}</div>
                    ))}
                  </div>

                  {/* Typing indicator */}
                  <div className="flex gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#1a6bff20] flex items-center justify-center text-sm flex-shrink-0">🤖</div>
                    <div className="bg-[#111130] rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                      {[0,1,2].map(k=>(
                        <div key={k} className="w-1.5 h-1.5 rounded-full bg-[#6b7280]" style={{animation:`blink 1.2s ${k*0.3}s infinite`}} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="bg-[#0d0d1a] border-t border-[#1a1a2e] px-3 py-2.5 flex items-center gap-2">
                  <div className="flex-1 bg-[#111130] rounded-full px-4 py-2 text-[10px] text-[#6b7280]">Escreva uma mensagem...</div>
                  <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                  </div>
                </div>
                <div className="flex justify-center py-2"><div className="w-12 h-1 bg-[#2a2a3e] rounded-full" /></div>
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="reveal-right">
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={f.title} className="card rounded-2xl p-5" style={{transitionDelay:`${i*0.08}s`}}>
                  <div className="text-2xl mb-3">{f.icon}</div>
                  <h4 className="text-white font-bold text-sm mb-1.5">{f.title}</h4>
                  <p className="text-[#6b7280] text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Bot */}
        <div className="reveal text-center">
          <div className="inline-block card-glass rounded-3xl px-10 py-8 border border-[#1a6bff20]">
            <p className="text-[#6b7280] text-sm mb-2">Planos a partir de</p>
            <div className="text-4xl font-black text-white mb-1">R$ 597 <span className="text-lg text-[#6b7280] font-normal">/ implementação</span></div>
            <p className="text-[#6b7280] text-sm mb-6">+ manutenção mensal acessível</p>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="btn-wa inline-flex items-center gap-3 px-10 py-4 rounded-2xl text-base font-bold text-white">
              <WAIcon /> Quero meu bot agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WAIcon() {
  return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
}
