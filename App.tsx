
import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  PlayCircle, 
  Settings, 
  Users, 
  MessageCircle, 
  ChevronDown, 
  Star, 
  Play,
  Zap,
  TrendingUp,
  Layers,
  Crown,
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
        Planos
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
          className="w-full h-auto drop-shadow-2xl animate-float"
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
        <h2 className="text-3xl font-black mb-10 text-white">Veja como é fácil ativar para seu cliente...</h2>
        <div className="space-y-8">
          {[
            { icon: <PlayCircle />, title: "Instalação Rápida", desc: "Seu cliente baixa o app através do link fornecido no painel e ativa em segundos." },
            { icon: <Users />, title: "Gestão Simples", desc: "Você insere os dados de acesso (Login e Senha) e pronto, o cliente já está navegando." },
            { icon: <Server />, title: "Estabilidade Garantida", desc: "Servidores de alta performance para filmes, séries e canais ao vivo sem travamentos." }
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
    "https://usuaistechpro.com.br/wp-content/uploads/2025/11/vizzion-logo-1-1.png", // Duplicating for seamless loop
    "https://usuaistechpro.com.br/wp-content/uploads/2025/11/logo-assist-plus-m-2.webp",
    "https://usuaistechpro.com.br/wp-content/uploads/2025/11/xcloud-logo-m.webp",
  ];

  return (
    <section className="py-24 bg-black overflow-hidden relative">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/5 blur-[100px] -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-violet-500/5 blur-[100px] -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-white">TEMOS PARCERIA COM OS MELHORES APPS</h2>
        <p className="text-slate-500 mb-16 text-sm md:text-base">Compatibilidade total com os aplicativos mais usados do mercado.</p>
        
        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden mb-16">
          {/* Gradient Masks */}
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-20"></div>
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-20"></div>
          
          <div className="animate-marquee flex items-center gap-12 md:gap-24">
            {/* First Set */}
            {logos.map((logo, i) => (
              <div key={`logo-1-${i}`} className="shrink-0 group">
                <img 
                  src={logo} 
                  className="h-20 md:h-28 w-auto object-contain brightness-90 contrast-125 group-hover:brightness-100 group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]" 
                  alt="App Partner" 
                />
              </div>
            ))}
            {/* Duplicate Set for Seamless Loop */}
            {logos.map((logo, i) => (
              <div key={`logo-2-${i}`} className="shrink-0 group">
                <img 
                  src={logo} 
                  className="h-20 md:h-28 w-auto object-contain brightness-90 contrast-125 group-hover:brightness-100 group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]" 
                  alt="App Partner" 
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-[0.4em] max-w-4xl mx-auto leading-relaxed">
          ASSIST+ • APP BRASIL IPTV • PLAY SIM • MAGIC PLAY • VIZZION PLAYER • XCLOUD • CORE PLAY
        </p>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans: Plan[] = [
    { id: '1', name: 'BASIC VIP', credits: 10, price: '95' },
    { id: '2', name: 'PROFESSIONAL', credits: 20, price: '170' },
    { id: '3', name: 'ENTERPRISE', credits: 50, price: '375', popular: true },
    { id: '4', name: 'MASTER VIP', credits: 100, price: '650' },
  ];

  const commonFeatures = [
    "Servidores IPTV / P2P",
    "Painel Híbrido Grátis",
    "Suporte Especializado",
    "Material de Divulgação",
    "Catálogo 4K Atualizado",
    "Canais Adultos com Senha"
  ];

  return (
    <section id="planos" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">Escolha o <span className="text-cyan-400">plano ideal</span></h2>
          <div className="glass inline-flex items-center gap-3 px-4 py-2 rounded-full border-cyan-500/20">
             <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
             <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Recarga mensal • Créditos válidos por 30 dias</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`glass rounded-[2rem] p-1 transition-all duration-500 hover:-translate-y-2 group ${plan.popular ? 'border-cyan-500/50 ring-4 ring-cyan-500/5 shadow-2xl' : 'border-white/5'}`}
            >
              <div className="p-8 flex flex-col items-center">
                {plan.popular && (
                  <div className="bg-cyan-500 text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                    Mais Vendido
                  </div>
                )}
                <h3 className="text-xl font-black mb-1">{plan.name}</h3>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-8">{plan.credits} Créditos Mensais</div>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-lg font-bold text-slate-400">R$</span>
                  <span className="text-5xl font-black tracking-tighter text-white">{plan.price}</span>
                  <span className="text-slate-500 text-xs font-bold">/mês</span>
                </div>
                
                <div className="w-full space-y-3 mb-10 text-left">
                  {commonFeatures.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-[11px] font-semibold text-slate-400">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${plan.popular ? 'text-cyan-400' : 'text-slate-600'}`} />
                      {f}
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 rounded-xl font-black uppercase text-xs tracking-widest transition-all flex items-center justify-center gap-2 ${plan.popular ? 'bg-cyan-500 text-black shadow-lg hover:bg-cyan-400' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                  Selecionar
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
  <section className="py-24 px-4 bg-slate-950">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-tight text-white">Revendedores que confiam no Painel SalaVip</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Rodrigo A.", loc: "Curitiba - PR", biz: "Conecta Play", text: "Eu não tinha nenhuma experiência com IPTV. Com o painel e o suporte, consegui começar sem dificuldade e hoje já tenho meus próprios clientes." },
          { name: "Mariana L.", loc: "Salvador - BA", biz: "StreamNet", text: "Já usei outros painéis e sempre tive problema com travamento e falta de suporte. Aqui foi diferente, tudo funciona e o atendimento responde rápido." },
          { name: "Thiago R.", loc: "Belo Horizonte - MG", biz: "FullMax TV", text: "O que mais gostei foi a facilidade. O painel é simples, os apps ajudam muito e o suporte realmente acompanha. Isso fez eu continuar." }
        ].map((t, i) => (
          <div key={i} className="glass p-8 rounded-3xl border-white/5 hover:border-cyan-500/30 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center font-bold text-white shadow-lg">
                {t.name[0]}
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">{t.name} | <span className="text-cyan-400">{t.biz}</span></h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{t.loc}</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-cyan-400 text-cyan-400" />)}
            </div>
            <p className="text-slate-400 text-xs italic leading-relaxed">"{t.text}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    { q: "O painel SalaVip é pré-pago ou mensalista?", a: "Trabalhamos com o modelo de planos mensais para garantir a melhor infraestrutura e suporte contínuo para sua revenda." },
    { q: "Os créditos expiram?", a: "Sim. Como é um plano mensalista com infraestrutura dedicada, seus créditos devem ser utilizados dentro de 30 dias. A recarga mensal garante a continuidade do seu painel." },
    { q: "Quais canais estão disponíveis?", a: "Todos os canais abertos e fechados, esportes ao vivo (Futebol, F1, Lutas), Filmes e Séries atualizados diariamente." },
    { q: "Como recebo o acesso?", a: "Após a confirmação automática do pagamento, você receberá seus dados de acesso diretamente no seu e-mail cadastrado." },
    { q: "Preciso de computador para gerenciar?", a: "Não. Nosso painel é 100% responsivo e pode ser gerenciado totalmente pelo celular ou tablet." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4 bg-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-16 text-white uppercase"><span className="text-cyan-400">Dúvidas</span> Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden border-white/5">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-all"
              >
                <span className="font-bold text-slate-200 text-sm">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 transition-transform text-cyan-500 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-slate-400 text-xs leading-relaxed border-t border-white/5 pt-4">
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
  <footer className="py-16 border-t border-white/5 bg-black">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center font-bold text-white">S</div>
            <span className="text-xl font-black text-white">SALAVIP</span>
          </div>
          <p className="text-slate-600 text-xs max-w-xs">A plataforma de revenda mais estável e profissional do mercado.</p>
        </div>
        <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-slate-500">
           <a href="#home" className="hover:text-cyan-400">Início</a>
           <a href="#planos" className="hover:text-cyan-400">Planos</a>
           <a href="#faq" className="hover:text-cyan-400">FAQ</a>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[9px] text-slate-700 font-bold uppercase tracking-widest">
          Copyright SalaVip © 2025 - Todos os direitos reservados.
        </p>
        <div className="flex gap-4 opacity-20 grayscale">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Pix.png" className="h-3 invert" alt="Pix" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-5" alt="Mastercard" />
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen gradient-bg text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <AppPartners />
        <Testimonials />
        <Pricing />
        
        {/* Comparison Section */}
        <section className="py-24 px-4 bg-slate-900/30">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-3xl border-red-500/10">
              <h3 className="text-xl font-black text-red-500 mb-6 uppercase">Outros Painéis</h3>
              <ul className="space-y-4">
                {["Cliente reclamando de quedas", "Suporte que nunca responde", "Falhas no sistema nos domingos", "Iniciantes ficam perdidos"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-500 text-xs">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass p-8 rounded-3xl border-cyan-500/20 shadow-2xl">
              <h3 className="text-xl font-black text-cyan-400 mb-6 uppercase">SalaVip Pro</h3>
              <ul className="space-y-4">
                {["Servidores próprios ultra-estáveis", "Suporte humano e ágil", "Aplicativos gratuitos inclusos", "Material completo para iniciantes"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <FAQ />
        
        {/* Softened Bottom CTA */}
        <section className="py-32 px-4 text-center">
           <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[3rem] border-cyan-500/20 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 blur-[80px] rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight uppercase">Pronto para começar com <span className="text-cyan-400">estabilidade?</span></h2>
              <p className="text-slate-400 mb-10 max-w-lg mx-auto text-sm">Ofereça o melhor serviço de IPTV para seus clientes com o painel que não te deixa na mão.</p>
              <a href="#planos" className="bg-white text-black px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl inline-block">
                 Ver Planos Agora
              </a>
           </div>
        </section>
      </main>
      <Footer />
      
      {/* Fixed WhatsApp Button */}
      <a 
        href="https://wa.me/5592992928766" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-tr from-cyan-500 to-violet-600 text-white p-5 rounded-3xl shadow-2xl transition-all transform hover:scale-110 active:scale-90 flex items-center gap-3 font-bold group border border-white/20"
      >
        <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        <span className="hidden md:inline pr-2 uppercase text-[10px] tracking-widest font-black">Suporte Especializado</span>
      </a>
    </div>
  );
}
