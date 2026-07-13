"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const WA = "https://wa.me/5532991977784?text=Olá!%20Quero%20meu%20site%20no%20ar%20em%2024%20horas!";

const words = ["24 horas", "tempo recorde", "1 dia útil"];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setWordIdx(i => (i + 1) % words.length); setVisible(true); }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#04040a] grid-bg" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#1a6bff] rounded-full blur-[160px] opacity-[0.07]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#4d8fff] rounded-full blur-[120px] opacity-[0.05]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 border border-[#1a6bff30] bg-[#1a6bff0a] rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1a6bff] animate-pulse" />
            <span className="text-[#4d8fff] text-xs font-medium">Sites profissionais · Sistemas · Bots de IA</span>
          </div>

          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.05] mb-6 animate-fade-in-up" style={{animationDelay:"0.1s"}}>
            Seu site no ar<br />
            <span className="grad-text">em{" "}
              <span
                className="inline-block"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(12px)",
                  transition: "opacity 0.35s ease, transform 0.35s ease",
                  display: "inline-block",
                }}
              >
                {words[wordIdx]}
              </span>
            </span>
          </h1>

          <p className="text-lg text-[#6b7280] mb-8 max-w-lg leading-relaxed animate-fade-in-up" style={{animationDelay:"0.2s"}}>
            Criamos sites, sistemas e bots de atendimento para pequenas e médias empresas com
            {" "}<span className="text-white font-semibold">preços acessíveis</span> e entrega garantida.
            Do zero ao online sem complicação.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12 animate-fade-in-up" style={{animationDelay:"0.3s"}}>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="btn-wa flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white">
              <WAIcon /> Quero meu site agora
            </a>
            <a href="#como-funciona"
              className="btn-ghost flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold">
              Ver como funciona ↓
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 animate-fade-in-up" style={{animationDelay:"0.4s"}}>
            {[["24h","Entrega"],["R$497","a partir de"],["100%","Responsivo"]].map(([v,l])=>(
              <div key={l}>
                <div className="text-2xl font-black grad-text">{v}</div>
                <div className="text-[#6b7280] text-xs mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Mockups */}
        <div className="hidden lg:flex items-center justify-center relative h-[520px]">
          <BrowserMockup />
          <PhoneMockup />
        </div>
      </div>

      {/* Logos de tech */}
      <div className="absolute bottom-6 left-0 right-0">
        <p className="text-center text-[#2a2a3e] text-xs mb-3">Tecnologias que usamos</p>
        <div className="flex justify-center gap-6 opacity-20">
          {["Next.js","React","Node.js","PostgreSQL","Vercel","WhatsApp API"].map(t=>(
            <span key={t} className="text-[11px] text-[#6b7280]">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrowserMockup() {
  return (
    <div className="absolute left-0 top-8 w-[420px] animate-float rounded-2xl overflow-hidden shadow-2xl shadow-[#1a6bff20] border border-[#1a1a2e]" style={{animationDuration:"6s"}}>
      {/* Browser chrome */}
      <div className="bg-[#111122] px-4 py-3 flex items-center gap-3 border-b border-[#1a1a2e]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 bg-[#0d0d1a] rounded-lg px-3 py-1.5 flex items-center gap-2">
          <svg className="w-3 h-3 text-[#1a6bff]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/></svg>
          <span className="text-[10px] text-[#4d8fff]">www.seusite.com.br</span>
        </div>
      </div>
      {/* Site content */}
      <div className="bg-[#0a0a18] p-0">
        {/* Nav */}
        <div className="bg-[#0d0d20] px-5 py-3 flex items-center justify-between border-b border-[#1a1a2e]">
          <div className="w-20 h-4 bg-[#1a6bff] rounded-full" />
          <div className="flex gap-3">
            {[40,32,36,48].map(w=><div key={w} className="h-2 rounded-full bg-[#1a1a3e]" style={{width:w}} />)}
          </div>
          <div className="w-20 h-7 rounded-xl bg-gradient-to-r from-[#1a6bff] to-[#0044cc]" />
        </div>
        {/* Hero */}
        <div className="px-5 py-6 bg-gradient-to-br from-[#0d0d20] to-[#0a0a18]">
          <div className="w-32 h-2 bg-[#1a6bff40] rounded mb-3" />
          <div className="w-56 h-5 bg-[#ffffff20] rounded mb-2" />
          <div className="w-44 h-5 bg-[#ffffff15] rounded mb-4" />
          <div className="w-64 h-2.5 bg-[#ffffff0a] rounded mb-1.5" />
          <div className="w-52 h-2.5 bg-[#ffffff0a] rounded mb-5" />
          <div className="flex gap-2">
            <div className="w-24 h-8 rounded-xl bg-gradient-to-r from-[#1a6bff] to-[#0044cc]" />
            <div className="w-24 h-8 rounded-xl border border-[#1a6bff40]" />
          </div>
        </div>
        {/* Cards row */}
        <div className="px-5 py-4 flex gap-3">
          {["🚀","💎","⚡"].map((e,i)=>(
            <div key={i} className="flex-1 bg-[#111122] rounded-xl p-3 border border-[#1a1a2e]">
              <div className="text-lg mb-2">{e}</div>
              <div className="w-full h-2 bg-[#1a1a3e] rounded mb-1" />
              <div className="w-3/4 h-1.5 bg-[#1a1a3e] rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="absolute right-0 bottom-4 animate-float" style={{animationDuration:"7s", animationDelay:"1s"}}>
      {/* Phone frame */}
      <div className="w-[160px] bg-[#111122] rounded-[28px] border-2 border-[#1a1a2e] shadow-2xl shadow-[#1a6bff15] overflow-hidden">
        {/* Notch */}
        <div className="flex justify-center pt-2 pb-1">
          <div className="w-16 h-4 bg-[#0a0a18] rounded-full" />
        </div>
        {/* Screen */}
        <div className="bg-[#0a0a18] mx-1.5 rounded-2xl overflow-hidden" style={{minHeight:280}}>
          {/* Status bar */}
          <div className="bg-[#0d0d20] px-3 py-2 flex justify-between items-center">
            <span className="text-[8px] text-[#6b7280]">9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 bg-[#1a6bff] rounded-sm" />
              <div className="w-2 h-2 bg-[#6b7280] rounded-sm" />
            </div>
          </div>
          {/* App content */}
          <div className="p-2.5">
            <div className="w-full h-20 bg-gradient-to-br from-[#1a6bff20] to-[#0044cc10] rounded-xl mb-2 flex items-center justify-center">
              <div className="text-2xl">🍕</div>
            </div>
            <div className="w-20 h-2 bg-[#ffffff20] rounded mb-1" />
            <div className="w-16 h-1.5 bg-[#ffffff10] rounded mb-3" />
            <div className="space-y-2">
              {[[52,36],[64,28],[44,32]].map(([a,b],i)=>(
                <div key={i} className="flex gap-2 items-center">
                  <div className="w-8 h-8 rounded-lg bg-[#1a1a2e]" />
                  <div>
                    <div className="h-1.5 bg-[#ffffff15] rounded mb-1" style={{width:a}} />
                    <div className="h-1.5 bg-[#1a6bff30] rounded" style={{width:b}} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 w-full h-8 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] flex items-center justify-center">
              <span className="text-[8px] text-white font-bold">Pedir via WhatsApp</span>
            </div>
          </div>
        </div>
        {/* Home indicator */}
        <div className="flex justify-center py-2">
          <div className="w-10 h-1 bg-[#2a2a3e] rounded-full" />
        </div>
      </div>
    </div>
  );
}

function WAIcon() {
  return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
}
