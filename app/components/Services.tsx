const WA = "https://wa.me/5532991977784?text=";

const services = [
  {
    icon: "🌐", badge: "24h", badgeColor: "bg-[#1a6bff20] text-[#4d8fff] border-[#1a6bff30]",
    title: "Site Profissional", sub: "Presença digital completa",
    desc: "Site moderno, responsivo e otimizado para aparecer no Google. Do layout à publicação em até 24 horas.",
    bullets: ["Design exclusivo","SEO incluído","Domínio + hospedagem","Certificado SSL","Integração WhatsApp"],
    msg: "Olá!%20Quero%20um%20site%20profissional%20em%2024h!",
    mockup: "web",
  },
  {
    icon: "⚙️", badge: "Sob medida", badgeColor: "bg-[#ff6b1a20] text-[#ff8c4d] border-[#ff6b1a30]",
    title: "Sistema Web", sub: "Automatize seu negócio",
    desc: "Sistemas completos com painel administrativo, cadastros, relatórios e controle total do seu negócio.",
    bullets: ["Painel admin customizado","Controle de clientes","Relatórios e dashboards","Multi-usuário","Acesso em qualquer dispositivo"],
    msg: "Olá!%20Preciso%20de%20um%20sistema%20web%20personalizado!",
    mockup: "dashboard",
  },
  {
    icon: "🍽️", badge: "Restaurantes", badgeColor: "bg-[#1aff6b20] text-[#4dff8c] border-[#1aff6b30]",
    title: "Cardápio Digital", sub: "QR Code para seu estabelecimento",
    desc: "Cardápio digital moderno com QR Code. Clientes acessam pelo celular, sem app, sem mensalidade abusiva.",
    bullets: ["QR Code personalizado","Fotos e descrições","Categorias e combos","Painel de atualização","Pedidos via WhatsApp"],
    msg: "Olá!%20Quero%20um%20cardápio%20digital%20com%20QR%20Code!",
    mockup: "mobile",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-28 relative overflow-hidden bg-[#04040a]">
      <div className="absolute top-0 left-0 right-0 divider" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#1a6bff] rounded-full blur-[180px] opacity-[0.04]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <span className="inline-block text-[#1a6bff] text-xs font-semibold tracking-widest uppercase mb-4">O que criamos</span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Soluções digitais que<br /><span className="grad-text">geram resultados reais</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-xl mx-auto">
            Cada projeto é único. Desenvolvemos com atenção aos detalhes e foco no seu cliente final.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((s, i) => (
            <div key={s.title} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              {/* Mockup lado */}
              <div className={`reveal-${i % 2 === 0 ? "left" : "right"}`}>
                <ServiceMockup type={s.mockup} />
              </div>

              {/* Texto lado */}
              <div className={`reveal-${i % 2 === 0 ? "right" : "left"}`}>
                <span className={`inline-block border text-xs font-semibold px-3 py-1 rounded-full mb-4 ${s.badgeColor}`}>{s.badge}</span>
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="text-3xl font-black text-white mb-1">{s.title}</h3>
                <p className="text-[#1a6bff] font-medium mb-4">{s.sub}</p>
                <p className="text-[#6b7280] mb-6 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2.5 mb-8">
                  {s.bullets.map(b => (
                    <li key={b} className="flex items-center gap-3 text-sm text-[#aaaaaa]">
                      <svg className="w-4 h-4 text-[#1a6bff] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
                <a href={`${WA}${s.msg}`} target="_blank" rel="noopener noreferrer"
                  className="btn-wa inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white">
                  <WAIcon /> Quero esse serviço
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceMockup({ type }: { type: string }) {
  if (type === "web") return (
    <div className="relative">
      <div className="absolute -inset-4 bg-[#1a6bff] rounded-3xl blur-2xl opacity-[0.08]" />
      <div className="relative card rounded-2xl overflow-hidden shadow-2xl">
        {/* Browser bar */}
        <div className="bg-[#111122] px-4 py-3 flex items-center gap-3 border-b border-[#1a1a2e]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" /><div className="w-3 h-3 rounded-full bg-[#ffbd2e]" /><div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 bg-[#0d0d1a] rounded-md px-3 py-1 text-[11px] text-[#4d8fff]">🔒 www.seusite.com.br</div>
        </div>
        {/* Hero area */}
        <div className="bg-gradient-to-br from-[#0d0d20] via-[#090915] to-[#0a0a18] p-6">
          <div className="flex gap-4 mb-5">
            <div className="flex-1">
              <div className="w-24 h-1.5 bg-[#1a6bff50] rounded mb-3" />
              <div className="w-48 h-6 bg-[#ffffff25] rounded mb-2" />
              <div className="w-40 h-6 bg-[#ffffff15] rounded mb-3" />
              <div className="w-52 h-2 bg-[#ffffff0a] rounded mb-1" />
              <div className="w-44 h-2 bg-[#ffffff0a] rounded mb-4" />
              <div className="flex gap-2">
                <div className="w-28 h-9 rounded-xl bg-gradient-to-r from-[#1a6bff] to-[#0044cc]" />
                <div className="w-24 h-9 rounded-xl border border-[#1a6bff30]" />
              </div>
            </div>
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#1a6bff20] to-[#0044cc10] flex items-center justify-center text-4xl flex-shrink-0">
              🏢
            </div>
          </div>
          {/* Features row */}
          <div className="grid grid-cols-3 gap-3">
            {["⚡ Rápido","🔒 Seguro","📱 Mobile"].map(f => (
              <div key={f} className="bg-[#111130] rounded-xl p-3 text-center border border-[#1a1a2e]">
                <div className="text-[11px] text-[#6b7280]">{f}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Services section */}
        <div className="bg-[#0a0a18] px-6 py-4 border-t border-[#1a1a2e]">
          <div className="w-32 h-2 bg-[#ffffff10] rounded mb-3" />
          <div className="flex gap-3">
            {[0,1,2].map(j => (
              <div key={j} className="flex-1 bg-[#111122] rounded-xl p-3 border border-[#1a1a2e]">
                <div className="w-8 h-8 rounded-lg bg-[#1a6bff20] mb-2" />
                <div className="w-full h-1.5 bg-[#1a1a3e] rounded mb-1" />
                <div className="w-2/3 h-1.5 bg-[#1a1a3e] rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (type === "dashboard") return (
    <div className="relative">
      <div className="absolute -inset-4 bg-[#ff6b1a] rounded-3xl blur-2xl opacity-[0.06]" />
      <div className="relative card rounded-2xl overflow-hidden shadow-2xl">
        <div className="bg-[#111122] px-4 py-3 flex items-center gap-3 border-b border-[#1a1a2e]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" /><div className="w-3 h-3 rounded-full bg-[#ffbd2e]" /><div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 bg-[#0d0d1a] rounded-md px-3 py-1 text-[11px] text-[#4d8fff]">🔒 painel.seusite.com.br</div>
        </div>
        {/* Sidebar + content */}
        <div className="flex">
          <div className="w-40 bg-[#0d0d1a] p-3 border-r border-[#1a1a2e] min-h-[260px]">
            <div className="w-24 h-4 bg-[#1a6bff30] rounded mb-4" />
            {["Dashboard","Clientes","Pedidos","Relatórios","Config"].map((item, k) => (
              <div key={item} className={`flex items-center gap-2 px-2 py-2 rounded-lg mb-1 ${k === 0 ? "bg-[#1a6bff20]" : ""}`}>
                <div className={`w-1.5 h-1.5 rounded-full ${k === 0 ? "bg-[#1a6bff]" : "bg-[#1a1a3e]"}`} />
                <div className={`h-1.5 rounded flex-1 ${k === 0 ? "bg-[#4d8fff]" : "bg-[#1a1a3e]"}`} />
              </div>
            ))}
          </div>
          <div className="flex-1 p-4 bg-[#080812]">
            {/* KPIs */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              {[["💰","R$ 12.450","Receita"],["👥","347","Clientes"],["📦","89","Pedidos"],["📈","+24%","Crescimento"]].map(([e,v,l]) => (
                <div key={l} className="bg-[#111122] rounded-xl p-3 border border-[#1a1a2e]">
                  <div className="text-base mb-1">{e}</div>
                  <div className="text-[#4d8fff] text-sm font-bold">{v}</div>
                  <div className="text-[#6b7280] text-[10px]">{l}</div>
                </div>
              ))}
            </div>
            {/* Chart bar */}
            <div className="bg-[#111122] rounded-xl p-3 border border-[#1a1a2e]">
              <div className="w-20 h-1.5 bg-[#1a1a3e] rounded mb-2" />
              <div className="flex items-end gap-1 h-12">
                {[40,65,30,80,55,90,45].map((h,k) => (
                  <div key={k} className="flex-1 rounded-t-sm bg-gradient-to-t from-[#1a6bff] to-[#4d8fff]" style={{height:`${h}%`}} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // mobile / cardápio
  return (
    <div className="relative flex justify-center items-center gap-6">
      <div className="absolute -inset-8 bg-[#1aff6b] rounded-3xl blur-3xl opacity-[0.05]" />

      {/* Phone 1 - cardápio */}
      <div className="relative w-[180px] bg-[#111122] rounded-[32px] border-2 border-[#1a1a2e] shadow-2xl overflow-hidden">
        <div className="flex justify-center pt-2.5 pb-1"><div className="w-16 h-4 bg-[#0a0a18] rounded-full" /></div>
        <div className="bg-[#0a0a18] mx-2 rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-b from-[#1a6bff20] to-[#080812] p-3">
            <div className="w-16 h-3 bg-[#ffffff20] rounded mb-1" />
            <div className="text-[10px] text-[#6b7280]">Cardápio Digital</div>
          </div>
          <div className="p-2.5 space-y-2">
            {[["🍔","X-Burguer","R$28",""],["🍕","Pizza","R$45","bg-[#1a6bff]"],["🥤","Combo","R$35",""]].map(([e,n,p,sel])=>(
              <div key={n} className={`flex items-center gap-2 p-2 rounded-xl ${sel || "bg-[#111130]"} border ${sel ? "border-[#1a6bff]" : "border-[#1a1a2e]"}`}>
                <div className="text-xl w-8 text-center">{e}</div>
                <div className="flex-1">
                  <div className="text-[10px] text-white font-semibold">{n}</div>
                  <div className="text-[9px] text-[#1a6bff]">{p}</div>
                </div>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${sel ? "bg-[#1a6bff] text-white" : "border border-[#1a1a2e] text-[#6b7280]"}`}>+</div>
              </div>
            ))}
          </div>
          <div className="px-2.5 pb-3">
            <div className="w-full h-8 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] flex items-center justify-center">
              <span className="text-[9px] text-white font-bold">Pedir no WhatsApp</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-2"><div className="w-12 h-1 bg-[#2a2a3e] rounded-full" /></div>
      </div>

      {/* QR code mockup */}
      <div className="relative card rounded-2xl p-5 flex flex-col items-center gap-3 w-[140px]">
        <div className="text-xs text-[#6b7280] text-center">Escaneie o<br/>QR Code</div>
        <div className="w-20 h-20 bg-[#111130] rounded-xl border border-[#1a1a2e] flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none">
            {/* QR code decorativo */}
            <rect x="10" y="10" width="30" height="30" rx="4" fill="#1a6bff" opacity="0.8"/>
            <rect x="15" y="15" width="20" height="20" rx="2" fill="#04040a"/>
            <rect x="19" y="19" width="12" height="12" rx="1" fill="#1a6bff"/>
            <rect x="60" y="10" width="30" height="30" rx="4" fill="#1a6bff" opacity="0.8"/>
            <rect x="65" y="15" width="20" height="20" rx="2" fill="#04040a"/>
            <rect x="69" y="19" width="12" height="12" rx="1" fill="#1a6bff"/>
            <rect x="10" y="60" width="30" height="30" rx="4" fill="#1a6bff" opacity="0.8"/>
            <rect x="15" y="65" width="20" height="20" rx="2" fill="#04040a"/>
            <rect x="19" y="69" width="12" height="12" rx="1" fill="#1a6bff"/>
            {[45,50,55,60,65,70,75,80,85].map((x,i)=>i%2===0?<rect key={x} x={x} y="60" width="4" height="4" rx="1" fill="#1a6bff" opacity="0.6"/>:null)}
            {[45,50,55,60,65,70,75,80,85].map((y,i)=>i%3!==0?<rect key={y} x="45" y={y} width="4" height="4" rx="1" fill="#1a6bff" opacity="0.4"/>:null)}
          </svg>
        </div>
        <div className="text-[10px] text-[#6b7280] text-center">Mesa 5</div>
        <div className="w-full h-6 rounded-lg bg-[#1a6bff20] border border-[#1a6bff30] flex items-center justify-center">
          <span className="text-[10px] text-[#4d8fff]">Ver Cardápio</span>
        </div>
      </div>
    </div>
  );
}

function WAIcon() {
  return <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
}
