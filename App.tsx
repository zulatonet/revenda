
import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  PlayCircle, 
  Users, 
  MessageCircle, 
  ChevronDown, 
  Star, 
  Zap,
  ArrowRight,
  ShieldCheck,
  Server
} from 'lucide-react';

// --- Types ---
interface Plan {
  id: string;
  name: string;
  credits: number;
  price: string;
  popular?: boolean;
}

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
    <div className="max-w-7xl mx-auto glass rounded-2xl px-6 h-16 flex items-center justify-between border-white/10 shadow-xl">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-violet-600 rounded-lg flex items-center justify-center font-bold text-white text-lg shadow-lg">S</div>
        <span className="text-xl font-extrabold tracking-tight text-white">SALAVIP<span className="text-cyan-400">PRO</span></span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-400">
        <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
        <a href="#como-funciona" className="hover:text-cyan-400 transition-colors">Como funciona</a>
        <a href="#planos" className="hover:text-cyan-400 transition-colors">Planos</a>
        <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
      </div>
      <a href="#planos" className="bg-white hover:bg-cyan-50 text-slate-900 px-5 py-2 rounded-xl font-bold text-sm transition-all transform hover:scale-105">
        Começar Agora
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
          Comece sua revenda de <span className="text-cyan-400">IPTV</span> do zero com um painel <span className="text-violet-400">pronto para vender</span>
        </h1>
        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
          Estrutura completa com suporte especializado, apps parceiros e material pronto para você lucrar sem complicações técnicas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="#planos" className="bg-gradient-to-r from-cyan-500 to-violet-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2">
            <Zap className="w-5 h-5 fill-current" />
            Abrir Meu Painel Agora
          </a>
        </div>
        <p className="mt-6 text-xs text-slate-500 font-bold uppercase tracking-widest flex items-center justify-center lg:justify-start gap-2">
           <ShieldCheck className="w-4 h-4 text-green-500" />
           Pagamento 100% Seguro
        </p>
      </div>
      <div className="flex-1 relative">
        <img 
          src="http://up.svplay.cv/u/2QMmUN.png" 
          alt="Painel SalaVip" 
          className="w-full h-auto drop-shadow-[0_20px_50px_rgba(34,211,238,0.2)] animate-float"
        />
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="como-funciona" className="py-24 px-4 bg-slate-950/50">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="order-2 lg:order-1">
        <img 
          src="http://up.svplay.cv/u/qJ0azY.png" 
          alt="Gráfico de Vendas" 
          className="w-full max-w-md mx-auto drop-shadow-2xl"
        />
      </div>
      <div className="order-1 lg:order-2">
        <h2 className="text-3xl font-black mb-10 text-white">Revendedor, veja como é fácil ativar para seu cliente...</h2>
        <div className="space-y-8">
          {[
            { icon: <PlayCircle />, title: "Seu cliente instala rápido", desc: "Baixe o aplicativo através do link fornecido no Painel após a compra. Conexões imediatas." },
            { icon: <Users />, title: "Menos travamentos", desc: "Estrutura otimizada para que você não tenha reclamações. Basta colocar os dados de acesso." },
            { icon: <Server />, title: "Cliente satisfeito e renovando", desc: "Pronto, agora você já pode usar a vontade seu IPTV para ver filmes, séries e jogos ao vivo." }
          ].map((item, i) => (
            <div key={i} className="flex gap-5 group">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center shrink-0 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
              </div>
              <div>
                <h4 className="font-bold text-xl text-white mb-1">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const AppPartners = () => {
  const logos = [
    "https://usuaistechpro.com.br/wp-content/uploads/2025/11/vizzion-logo-1-1.png",
    "https://usuaistechpro.com.br/wp-content/uploads/2025/11/logo-assist-plus-m-2.webp",
    "https://usuaistechpro.com.br/wp-content/uploads/2025/11/xcloud-logo-m.webp",
    "https://usuaistechpro.com.br/wp-content/uploads/2025/11/vizzion-logo-1-1.png",
    "https://usuaistechpro.com.br/wp-content/uploads/2025/11/logo-assist-plus-m-2.webp",
    "https://usuaistechpro.com.br/wp-content/uploads/2025/11/xcloud-logo-m.webp",
  ];

  return (
    <section className="py-32 bg-black overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] -translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight text-white">TEMOS PARCERIA COM OS MELHORES APPS</h2>
        <p className="text-slate-500 mb-20 text-base md:text-lg">Compatibilidade total com os aplicativos mais estáveis do mercado.</p>
        
        <div className="relative w-full overflow-hidden mb-20">
          <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-black via-black/80 to-transparent z-20"></div>
          <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-black via-black/80 to-transparent z-20"></div>
          
          <div className="animate-marquee flex items-center gap-20 md:gap-40">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="shrink-0 group">
                <img 
                  src={logo} 
                  className="h-24 md:h-40 w-auto object-contain brightness-110 contrast-125 grayscale hover:grayscale-0 transition-all duration-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]" 
                  alt="Partner Logo" 
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs md:text-sm font-black text-slate-600 uppercase tracking-[0.5em] max-w-5xl mx-auto leading-relaxed">
          ASSIST+ • APP BRASIL IPTV • PLAY SIM • MAGIC PLAY • VIZZION PLAYER • XCLOUD • CORE PLAY
        </p>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans: Plan[] = [
    { id: '1', name: 'BASIC', credits: 10, price: '95' },
    { id: '2', name: 'PRO', credits: 20, price: '170' },
    { id: '3', name: 'ENTERPRISE', credits: 50, price: '375', popular: true },
    { id: '4', name: 'MASTER', credits: 100, price: '650' },
  ];

  const commonFeatures = [
    "Servidores IPTV / P2P Estáveis",
    "Painel Híbrido Grátis",
    "Suporte 24h Especializado",
    "Material de Divulgação Pronto",
    "Filmes e Séries em 4K",
    "Canais Adultos com Senha"
  ];

  return (
    <section id="planos" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">Escolha o seu <span className="text-cyan-400">Plano VIP</span></h2>
          <div className="glass inline-flex items-center gap-3 px-6 py-2 rounded-full border-cyan-500/20">
             <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
             <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Recarga Mensal • Ativação Automática</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`glass rounded-[2.5rem] p-1 transition-all duration-500 hover:-translate-y-2 group ${plan.popular ? 'border-cyan-500/50 ring-4 ring-cyan-500/5 shadow-2xl scale-105 z-10' : 'border-white/5'}`}
            >
              <div className="p-8 flex flex-col items-center">
                {plan.popular && (
                  <div className="bg-cyan-500 text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                    Mais Recomendado
                  </div>
                )}
                <h3 className="text-2xl font-black mb-1">{plan.name}</h3>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-8">{plan.credits} Créditos</div>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-xl font-bold text-slate-400">R$</span>
                  <span className="text-6xl font-black tracking-tighter text-white">{plan.price}</span>
                </div>
                
                <div className="w-full space-y-4 mb-10 text-left">
                  {commonFeatures.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-[11px] font-semibold text-slate-400">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${plan.popular ? 'text-cyan-400' : 'text-slate-600'}`} />
                      {f}
                    </div>
                  ))}
                </div>

                <button className={`w-full py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all flex items-center justify-center gap-2 ${plan.popular ? 'bg-cyan-500 text-black shadow-lg hover:bg-cyan-400' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                  Abrir Meu Painel
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="py-24 px-4 bg-slate-950/80">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-tight text-white">Revendedores que Confiam no SalaVip</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Rodrigo A.", loc: "Curitiba - PR", biz: "Conecta Play", text: "Eu não tinha nenhuma experiência com IPTV. Com o painel e o suporte, consegui começar sem dificuldade e hoje já tenho meus próprios clientes." },
          { name: "Mariana L.", loc: "Salvador - BA", biz: "StreamNet", text: "Já usei outros painéis e sempre tive problema com travamento e falta de suporte. Aqui foi diferente, tudo funciona e o atendimento responde rápido." },
          { name: "Thiago R.", loc: "Belo Horizonte - MG", biz: "FullMax TV", text: "O que mais gostei foi a facilidade. O painel é simples, os apps ajudam muito e o suporte realmente acompanha. Isso fez eu continuar." }
        ].map((t, i) => (
          <div key={i} className="glass p-10 rounded-[2rem] border-white/5 hover:border-cyan-500/30 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center font-bold text-white text-xl shadow-lg">
                {t.name[0]}
              </div>
              <div>
                <h4 className="font-bold text-white text-base">{t.name} | <span className="text-cyan-400">{t.biz}</span></h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{t.loc}</p>
              </div>
            </div>
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-cyan-400 text-cyan-400" />)}
            </div>
            <p className="text-slate-400 text-sm italic leading-relaxed font-medium">"{t.text}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    { q: "O painel SalaVip é pré-pago ou mensalista?", a: "Trabalhamos com o modelo de planos mensais para garantir a melhor infraestrutura dedicada e suporte contínuo para sua revenda." },
    { q: "Os créditos expiram?", a: "Como é um plano mensalista com servidores de alta performance, seus créditos devem ser utilizados dentro de 30 dias. A recarga garante a manutenção da sua estrutura." },
    { q: "Quais canais estão disponíveis?", a: "Grade completa de canais abertos e fechados, esportes (Futebol, F1, Lutas), além de milhares de filmes e séries atualizados diariamente." },
    { q: "Como recebo o acesso?", a: "Após a confirmação automática do pagamento, você receberá seus dados de acesso diretamente no seu e-mail cadastrado em poucos minutos." },
    { q: "Posso gerenciar pelo celular?", a: "Sim! Nosso painel é moderno e 100% responsivo, permitindo que você ative e renove clientes de qualquer lugar pelo celular." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4 bg-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-16 text-white uppercase tracking-tighter">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden border-white/5 transition-all duration-300">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-all"
              >
                <span className="font-bold text-slate-200 text-sm md:text-base">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform text-cyan-500 shrink-0 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-500">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 border-t border-white/5 bg-black">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
        <div>
          <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg">S</div>
            <span className="text-2xl font-black text-white tracking-tight">SALAVIP</span>
          </div>
          <p className="text-slate-500 text-sm max-w-sm">A plataforma de revenda definitiva para quem busca estabilidade e lucro real.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
           <a href="#home" className="hover:text-cyan-400 transition-colors">Início</a>
           <a href="#como-funciona" className="hover:text-cyan-400 transition-colors">Funcionalidades</a>
           <a href="#planos" className="hover:text-cyan-400 transition-colors">Planos</a>
           <a href="#faq" className="hover:text-cyan-400 transition-colors">Suporte</a>
        </div>
      </div>
      <div className="mt-16 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-slate-700 font-bold uppercase tracking-[0.3em]">
          Copyright SalaVip © 2025 - Todos os direitos reservados.
        </p>
        <div className="flex gap-6 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Pix.png" className="h-4 invert" alt="Pix" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <AppPartners />
        <Testimonials />
        <Pricing />
        
        <section className="py-24 px-4 bg-slate-900/40">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="glass p-10 rounded-[2.5rem] border-red-500/10 hover:border-red-500/20 transition-colors">
              <h3 className="text-2xl font-black text-red-500 mb-8 uppercase tracking-tighter">Outros Painéis</h3>
              <ul className="space-y-5">
                {["Servidores instáveis que caem nos domingos", "Suporte demorado ou inexistente", "Dificuldade para iniciantes sem material", "Muitas reclamações e reembolsos"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-500 text-sm">
                    <XCircle className="w-5 h-5 text-red-500/50 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass p-10 rounded-[2.5rem] border-cyan-500/20 shadow-[0_20px_50px_rgba(34,211,238,0.1)] hover:border-cyan-500/40 transition-colors">
              <h3 className="text-2xl font-black text-cyan-400 mb-8 uppercase tracking-tighter">SalaVip Pro</h3>
              <ul className="space-y-5">
                {["Servidores próprios ultra-estáveis", "Suporte humano focado em resolver", "Material profissional de vendas incluso", "Aulas e guias completos para revendedores"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white text-sm font-bold">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <FAQ />
        
        <section className="py-32 px-4 text-center">
           <div className="max-w-4xl mx-auto glass p-12 md:p-24 rounded-[4rem] border-cyan-500/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-700"></div>
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight uppercase tracking-tighter">Pronto para começar com <span className="text-cyan-400">estabilidade?</span></h2>
              <p className="text-slate-400 mb-12 max-w-xl mx-auto text-base md:text-lg">Ofereça o melhor serviço de IPTV para seus clientes e garanta renovações constantes com a SalaVip.</p>
              <a href="#planos" className="bg-white text-black px-14 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-[0_15px_30px_rgba(255,255,255,0.1)] inline-block">
                 Ver Planos Agora
              </a>
           </div>
        </section>
      </main>
      <Footer />
      
      <a 
        href="https://wa.me/5592992928766" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-tr from-cyan-500 to-violet-600 text-white p-5 rounded-3xl shadow-[0_20px_40px_rgba(34,211,238,0.3)] transition-all transform hover:scale-110 active:scale-95 flex items-center gap-3 font-bold group border border-white/20"
      >
        <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
        <span className="hidden md:inline pr-2 uppercase text-[11px] tracking-[0.2em] font-black">Falar com Suporte</span>
      </a>
    </div>
  );
}
