import React, { useState, useEffect, useRef } from 'react';
import { 
  Wifi, 
  ShieldCheck, 
  Smartphone, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft,
  ChevronDown,
  Activity,
  Zap,
  Lock,
  Menu,
  X,
  ThermometerSun,
  Cctv,
  Home,
  CheckCircle2,
  BarChart,
  Signal,
  Wrench,
  MapPin,
  MessageCircle,
  Rocket,
  Gauge
} from 'lucide-react';

// --- Translation Helper ---
const t = (lang, en, es) => lang === 'es' ? es : en;

// --- Smooth Scroll Helper ---
const scrollToSection = (e, id) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const navHeight = 80; // Height of our fixed navbar (h-20)
    const y = element.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

export default function FluxApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState('es'); // Default to Spanish for the local market

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-500 selection:text-white scroll-smooth">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} lang={lang} setLang={setLang} />
      
      <main className="pt-24">
        <HeroSection lang={lang} />
        <CarrierFixSection lang={lang} />
        <MeshGraphicSection lang={lang} />
        <SmartHomeSection lang={lang} />
        <CalculatorSection lang={lang} />
        <TopologySection lang={lang} />
        <SpeedComparisonSection lang={lang} />
        <ShowcaseSection lang={lang} />
        <AppFeaturesSection lang={lang} />
        <ValueAddSection lang={lang} />
        <ContactSection lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}

// --- Components ---

function Navigation({ isMenuOpen, setIsMenuOpen, lang, setLang }) {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-50/90 backdrop-blur-md z-50 border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* REPLACED LOGO SECTION */}
        <div className="flex items-center">
          <img 
            src="./flux-logo-horizontal-color.svg" 
            alt="Flux Tech"
            className="h-8 md:h-10 w-auto" 
          />
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#mesh" onClick={(e) => scrollToSection(e, 'mesh')} className="hover:text-teal-600 transition-colors">{t(lang, "How it Works", "Cómo Funciona")}</a>
          <a href="#smart-home" onClick={(e) => scrollToSection(e, 'smart-home')} className="hover:text-teal-600 transition-colors">{t(lang, "Smart Home", "Casa Inteligente")}</a>
          <a href="#calculator" onClick={(e) => scrollToSection(e, 'calculator')} className="hover:text-teal-600 transition-colors">{t(lang, "Coverage", "Cobertura")}</a>
          <a href="#hardware" onClick={(e) => scrollToSection(e, 'hardware')} className="hover:text-teal-600 transition-colors">{t(lang, "Hardware", "Equipos")}</a>
          <a href="#app" onClick={(e) => scrollToSection(e, 'app')} className="hover:text-teal-600 transition-colors">{t(lang, "App", "App")}</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-teal-600 transition-colors">{t(lang, "Contact", "Contacto")}</a>
          
          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-100 transition-all text-slate-700 font-bold ml-2"
            >
              {lang === 'en' ? '🇺🇸 English' : '🇲🇽 Español'}
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden py-1 flex flex-col z-50">
                <button 
                  onClick={() => { setLang('es'); setIsLangDropdownOpen(false); }}
                  className={`text-left px-4 py-3 text-sm font-bold hover:bg-slate-50 transition-colors ${lang === 'es' ? 'text-teal-600 bg-teal-50/30' : 'text-slate-700'}`}
                >
                  🇲🇽 Español
                </button>
                <button 
                  onClick={() => { setLang('en'); setIsLangDropdownOpen(false); }}
                  className={`text-left px-4 py-3 text-sm font-bold hover:bg-slate-50 transition-colors ${lang === 'en' ? 'text-teal-600 bg-teal-50/30' : 'text-slate-700'}`}
                >
                  🇺🇸 English
                </button>
              </div>
            )}
          </div>

          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-slate-800 shadow-md shadow-slate-900/20 transition-all">
            {t(lang, "Get a Quote", "Cotizar")}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-slate-50 border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl z-50">
          <a href="#mesh" onClick={(e) => { setIsMenuOpen(false); scrollToSection(e, 'mesh'); }} className="text-lg font-medium text-slate-800">{t(lang, "How it Works", "Cómo Funciona")}</a>
          <a href="#smart-home" onClick={(e) => { setIsMenuOpen(false); scrollToSection(e, 'smart-home'); }} className="text-lg font-medium text-slate-800">{t(lang, "Smart Home", "Casa Inteligente")}</a>
          <a href="#calculator" onClick={(e) => { setIsMenuOpen(false); scrollToSection(e, 'calculator'); }} className="text-lg font-medium text-slate-800">{t(lang, "Coverage", "Cobertura")}</a>
          <a href="#hardware" onClick={(e) => { setIsMenuOpen(false); scrollToSection(e, 'hardware'); }} className="text-lg font-medium text-slate-800">{t(lang, "Hardware", "Equipos")}</a>
          <a href="#app" onClick={(e) => { setIsMenuOpen(false); scrollToSection(e, 'app'); }} className="text-lg font-medium text-slate-800">{t(lang, "App", "App")}</a>
          <a href="#contact" onClick={(e) => { setIsMenuOpen(false); scrollToSection(e, 'contact'); }} className="text-lg font-medium text-slate-800">{t(lang, "Contact", "Contacto")}</a>
          
          <div className="h-px w-full bg-slate-200 my-2"></div>
          
          {/* Mobile Language Selector */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t(lang, "Language", "Idioma")}</span>
            <div className="flex gap-2 w-full p-1 bg-slate-100 rounded-lg border border-slate-200">
              <button 
                onClick={() => { setLang('es'); setIsMenuOpen(false); }} 
                className={`flex-1 py-3 text-sm font-bold rounded-md transition-all shadow-sm ${lang === 'es' ? 'bg-white text-teal-600 border border-slate-200/50' : 'text-slate-500 hover:text-slate-700 shadow-none'}`}
              >
                🇲🇽 Español
              </button>
              <button 
                onClick={() => { setLang('en'); setIsMenuOpen(false); }} 
                className={`flex-1 py-3 text-sm font-bold rounded-md transition-all shadow-sm ${lang === 'en' ? 'bg-white text-teal-600 border border-slate-200/50' : 'text-slate-500 hover:text-slate-700 shadow-none'}`}
              >
                🇺🇸 English
              </button>
            </div>
          </div>

          <a href="#contact" onClick={(e) => { setIsMenuOpen(false); scrollToSection(e, 'contact'); }} className="mt-4 px-5 py-3 bg-slate-900 text-white text-center rounded-lg font-bold shadow-md">
            {t(lang, "Get a Quote", "Cotizar Ahora")}
          </a>
        </div>
      )}
    </nav>
  );
}

function HeroSection({ lang }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Safely get width avoiding SSR/Iframe issues
    const getWidth = () => typeof window !== 'undefined' ? window.innerWidth : 1000;
    const particleCount = getWidth() < 768 ? 40 : 80;
    
    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    // Initialize Particles after setting dimensions
    for(let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * (canvas.width || getWidth()),
        y: Math.random() * (canvas.height || 800),
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1
      });
    }

    let mouse = { x: null, y: null, radius: 180 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const draw = () => {
      if (!canvas || canvas.width === 0) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, index) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if(p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if(p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse Repel (subtle)
        if (mouse.x != null) {
          let dx = mouse.x - p.x;
          let dy = mouse.y - p.y;
          let distance = Math.sqrt(dx*dx + dy*dy);
          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            // Gently push away
            p.x -= forceDirectionX * force * 1.5;
            p.y -= forceDirectionY * force * 1.5;
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(45, 212, 191, 0.6)'; // Brighter Teal nodes
        ctx.fill();

        // Connect nearby nodes
        for(let j = index + 1; j < particles.length; j++) {
          let p2 = particles[j];
          let dx = p.x - p2.x;
          let dy = p.y - p2.y;
          let distance = Math.sqrt(dx*dx + dy*dy);
          
          if(distance < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(45, 212, 191, ${0.25 - (distance/140) * 0.25})`; // Stronger lines
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      // Draw connections to mouse to simulate "device connection"
      if(mouse.x != null) {
          particles.forEach(p => {
              let dx = mouse.x - p.x;
              let dy = mouse.y - p.y;
              let distance = Math.sqrt(dx*dx + dy*dy);
              if(distance < mouse.radius) {
                  ctx.beginPath();
                  ctx.strokeStyle = `rgba(45, 212, 191, ${0.4 - (distance/mouse.radius) * 0.4})`;
                  ctx.lineWidth = 1.5;
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(mouse.x, mouse.y);
                  ctx.stroke();
              }
          });
      }

      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    }
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-slate-900 min-h-[85vh] flex items-center">
      {/* Interactive Mesh Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0 cursor-crosshair"
      />
      
      {/* Dark gradient overlay to ensure text is always readable over the mesh */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-0 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12 z-10 w-full">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-teal-400 text-xs font-bold tracking-wide uppercase shadow-lg">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            {t(lang, "Engineered for Monterrey Architecture", "Diseñado para la Arquitectura de Monterrey")}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-white drop-shadow-sm">
            {t(lang, "Unbreakable Wi-Fi.", "Wi-Fi Inquebrantable.")}<br />
            <span className="text-slate-400">{t(lang, "Zero Dead Zones.", "Cero Zonas Muertas.")}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed">
            {t(lang, 
              "Standard routers fail against concrete block walls. Flux builds intelligent mesh networks designed specifically for solid homes, guaranteeing seamless streaming from the garage to the patio.", 
              "Los routers estándar fallan contra las paredes de block. Flux construye redes mesh inteligentes diseñadas específicamente para casas sólidas, garantizando streaming sin interrupciones desde la cochera hasta el asador."
            )}
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#calculator" onClick={(e) => scrollToSection(e, 'calculator')} className="px-8 py-4 bg-teal-500 text-white rounded-full font-bold hover:bg-teal-400 shadow-lg shadow-teal-500/30 transition-all flex items-center gap-2">
              {t(lang, "Design Your Network", "Diseña tu Red")} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="flex-1 relative w-full aspect-square max-w-md mx-auto md:max-w-none pointer-events-none">
          {/* We keep the central focal graphic, but dark mode adapted */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[100%] h-[100%] rounded-full border border-slate-700/50 animate-[spin_60s_linear_infinite] absolute backdrop-blur-sm"></div>
            <div className="w-[75%] h-[75%] rounded-full border border-teal-500/30 border-dashed animate-[spin_40s_linear_infinite_reverse] absolute"></div>
            <div className="w-[50%] h-[50%] rounded-full bg-slate-800/80 backdrop-blur-md absolute shadow-2xl flex items-center justify-center border border-slate-700">
               <div className="w-24 h-24 bg-slate-900 rounded-2xl shadow-2xl flex items-center justify-center relative border border-slate-800">
                  <Wifi className="w-10 h-10 text-teal-400" />
                  <div className="absolute -right-2 -top-2 w-6 h-6 bg-teal-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
                    <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CarrierFixSection({ lang }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Ensures it only animates the first time they scroll to it
        }
      },
      { threshold: 0.2 } // Triggers when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const MAX_SPEED = 11.0;
  const MAX_COVERAGE = 300; // Based on 300m2 for a single BE65 node

  const carriers = [
    { 
      name: "Telmex Infinitum", 
      hardware: "Huawei / Arcadyan", 
      color: "bg-blue-500", 
      textColor: "text-blue-500", 
      speed: 0.8, 
      speedLabel: "800 Mbps",
      coverage: 60,
      coverageLabel: "60 m²"
    },
    { 
      name: "Izzi", 
      hardware: "Arris TG Series", 
      color: "bg-pink-500", 
      textColor: "text-pink-500", 
      speed: 0.8, 
      speedLabel: "800 Mbps",
      coverage: 60,
      coverageLabel: "60 m²"
    },
    { 
      name: "TotalPlay", 
      hardware: "ZTE / Huawei", 
      color: "bg-purple-500", 
      textColor: "text-purple-500", 
      speed: 1.2, 
      speedLabel: "1.2 Gbps",
      coverage: 80,
      coverageLabel: "80 m²"
    },
    { 
      name: t(lang, "Flux Ultra (1 Node)", "Flux Ultra (1 Nodo)"), 
      hardware: "Deco BE65 (Wi-Fi 7)", 
      color: "bg-teal-500", 
      textColor: "text-teal-600", 
      speed: 11.0, 
      speedLabel: "11.0 Gbps",
      coverage: 300,
      coverageLabel: "300 m²"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Centered Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-slate-900">
            {t(lang, "We Fix Your Carrier's Weak Link.", "Arreglamos el Eslabón Débil de tu Proveedor.")}
          </h2>
          <p className="text-slate-600 text-lg mb-4 leading-relaxed">
            {t(lang, 
              "Your Internet Service Provider delivers a fantastic fiber optic pipeline directly to your house. But the \"free\" equipment they leave behind—a basic 3-in-1 router/modem combo—is designed to be cheap, not powerful.", 
              "Tu proveedor de internet entrega una excelente conexión de fibra óptica directa a tu casa. Pero el módem \"gratuito\" que instalan es un equipo básico 3-en-1 diseñado para ser económico, no potente."
            )}
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            {t(lang, "We don't replace your provider. We upgrade their hardware. We place your carrier's modem into ", "No reemplazamos a tu proveedor. Mejoramos su hardware. Configuramos el módem de tu compañía en ")}
            <strong>{t(lang, "Bridge Mode", "Modo Puente (Bridge Mode)")}</strong>
            {t(lang, ", disabling its weak internal antenna, and let the Flux mesh system handle the wireless heavy lifting.", ", desactivando su antena interna débil, y dejamos que el sistema mesh de Flux maneje todo el tráfico inalámbrico pesado.")}
          </p>
        </div>

        {/* 2-Column Grid for the Widgets - Updated to items-stretch for perfect symmetry */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Carrier Bars */}
          <div className="space-y-4 h-full flex flex-col justify-center">
            {carriers.map((carrier, idx) => (
              <div key={idx} className={`p-4 md:p-5 rounded-2xl border transition-all duration-500 ${carrier.name.includes('Flux') ? 'bg-teal-50/50 border-teal-200 shadow-md scale-[1.02]' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-1">
                  <span className={`font-bold text-lg ${carrier.textColor}`}>{carrier.name}</span>
                  <span className="text-xs font-bold text-slate-500 bg-white px-2 py-1 rounded-md border border-slate-200/60 inline-block w-fit">
                    {carrier.hardware}
                  </span>
                </div>
                
                <div className="space-y-2.5 mt-2">
                  {/* Speed Bar */}
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-slate-400 w-16 uppercase tracking-wider">{t(lang, "Speed", "Velocidad")}</span>
                    <div className="flex-1 h-1.5 bg-slate-200/80 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${carrier.color} rounded-full transition-all duration-1000 ease-out`} 
                        style={{ width: isVisible ? `${(carrier.speed / MAX_SPEED) * 100}%` : '0%' }}
                      ></div>
                    </div>
                    <span className="text-xs font-bold text-slate-700 min-w-[65px] text-right">{carrier.speedLabel}</span>
                  </div>

                  {/* Coverage Bar */}
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-slate-400 w-16 uppercase tracking-wider">{t(lang, "Coverage", "Cobertura")}</span>
                    <div className="flex-1 h-1.5 bg-slate-200/80 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${carrier.color} rounded-full transition-all duration-1000 ease-out delay-150 opacity-80`} 
                        style={{ width: isVisible ? `${(carrier.coverage / MAX_COVERAGE) * 100}%` : '0%' }}
                      ></div>
                    </div>
                    <span className="text-xs font-bold text-slate-700 min-w-[65px] text-right">{carrier.coverageLabel}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
          
          {/* Right Column: Comparison Graphic */}
          <div className="relative mt-4 lg:mt-0 h-full">
            <div className="absolute inset-0 bg-teal-500/10 blur-3xl rounded-full"></div>
            <div className="relative bg-slate-900 p-8 rounded-3xl text-white shadow-2xl border border-slate-800 h-full flex flex-col justify-center">
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-700">
                <div className="text-center flex-1">
                  <div className="w-16 h-16 mx-auto bg-slate-800 rounded-xl flex items-center justify-center mb-3">
                    <Zap className="w-8 h-8 text-red-400 opacity-50" />
                  </div>
                  <div className="text-sm font-bold text-slate-400">{t(lang, "Carrier Router", "Módem de Compañía")}</div>
                  <div className="text-xs text-red-400 mt-1">{t(lang, "Overloaded", "Sobrecargado")}</div>
                </div>
                <ArrowRight className="w-8 h-8 text-slate-600 mx-4" />
                <div className="text-center flex-1">
                  <div className="w-16 h-16 mx-auto bg-teal-500/20 border border-teal-500/50 rounded-xl flex items-center justify-center mb-3">
                    <Wifi className="w-8 h-8 text-teal-400" />
                  </div>
                  <div className="text-sm font-bold text-teal-400">{t(lang, "Flux Mesh", "Mesh de Flux")}</div>
                  <div className="text-xs text-teal-400 mt-1">{t(lang, "Optimized", "Optimizado")}</div>
                </div>
              </div>
              
              {/* Feature Comparison List */}
              <div className="grid grid-cols-2 gap-4 relative flex-1">
                {/* Vertical Divider */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-700 -translate-x-1/2"></div>
                
                {/* ISP Disadvantages */}
                <div className="pr-2 md:pr-4 flex flex-col justify-center">
                  <h4 className="text-red-400 font-bold text-[10px] md:text-xs mb-4 uppercase tracking-wider">
                    {t(lang, "Free ISP Modem", "Módem Gratuito")}
                  </h4>
                  <ul className="space-y-4">
                    {[
                      t(lang, "Poor concrete penetration", "Pobre penetración de block"),
                      t(lang, "Overloads with 10+ devices", "Satura con 10+ dispositivos"),
                      t(lang, "Frequent dead zones", "Zonas muertas comunes"),
                      t(lang, "Zero parental controls", "Sin controles parentales"),
                      t(lang, "Outdated security (WPA2)", "Seguridad obsoleta (WPA2)"),
                      t(lang, "Zero technical support", "Soporte técnico nulo")
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-400">
                        <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Flux Advantages */}
                <div className="pl-2 md:pl-4 flex flex-col justify-center">
                  <h4 className="text-teal-400 font-bold text-[10px] md:text-xs mb-4 uppercase tracking-wider">
                    {t(lang, "Flux Infrastructure", "Infraestructura Flux")}
                  </h4>
                  <ul className="space-y-4">
                    {[
                      t(lang, "Bypasses structural walls", "Traspasa muros estructurales"),
                      t(lang, "Handles 150+ smart devices", "Soporta 150+ dispositivos"),
                      t(lang, "Wall-to-wall coverage", "Cobertura de pared a pared"),
                      t(lang, "Full app management", "Gestión total por App"),
                      t(lang, "Advanced WPA3 protection", "Protección WPA3 avanzada"),
                      t(lang, "Professional installation", "Instalación profesional")
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

// Custom Wi-Fi Icon to precisely control the number of bars shown
function CustomWifi({ level, className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M1.42 9a16 16 0 0 1 21.16 0" opacity={level >= 3 ? 1 : 0.15} />
      <path d="M5 12.55a11 11 0 0 1 14.08 0" opacity={level >= 2 ? 1 : 0.15} />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" opacity={level >= 1 ? 1 : 0.15} />
      <circle cx="12" cy="20" r="1.5" fill="currentColor" stroke="none" opacity={level >= 1 ? 1 : 0.15} />
    </svg>
  );
}

function MeshGraphicSection({ lang }) {
  return (
    <section id="mesh" className="bg-slate-900 text-white py-24 border-b border-slate-800">
      
      {/* Custom Keyframes for Data Flow Animation */}
      <style>{`
        @keyframes flow-isp-1 {
          0% { left: 15%; opacity: 0; transform: translateY(-50%) scale(1); }
          10% { opacity: 1; }
          80% { opacity: 0.8; transform: translateY(-50%) scale(0.6); }
          100% { left: 50%; opacity: 0; transform: translateY(-50%) scale(0.3); }
        }
        @keyframes flow-isp-2 {
          0% { left: 50%; opacity: 0; transform: translateY(-50%) scale(1); }
          10% { opacity: 0.8; }
          80% { opacity: 0.2; transform: translateY(-50%) scale(0.5); }
          100% { left: 85%; opacity: 0; transform: translateY(-50%) scale(0.2); }
        }
        @keyframes flow-flux {
          0% { left: 15%; opacity: 0; transform: translateY(-50%); }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { left: 85%; opacity: 0; transform: translateY(-50%); }
        }
        .packet-isp-1 { animation: flow-isp-1 1.5s linear infinite; }
        .packet-isp-2 { animation: flow-isp-2 1.5s linear infinite; }
        .packet-flux-1 { animation: flow-flux 2.5s linear infinite; }
        .packet-flux-2 { animation: flow-flux 2.5s linear infinite; animation-delay: 0.8s; }
        .packet-flux-3 { animation: flow-flux 2.5s linear infinite; animation-delay: 1.6s; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            {t(lang, "How Mesh Defeats Concrete", "Cómo el Mesh Vence al Concreto")}
          </h2>
          <p className="text-slate-400 text-lg">
            {t(lang, 
              "A single router tries to push through solid concrete, losing massive speed with every barrier. A Flux mesh system places an access point in strategic rooms, routing the full signal around obstacles.", 
              "Un solo router intenta atravesar concreto sólido, perdiendo velocidad masiva con cada barrera. Un sistema Flux Mesh coloca un punto de acceso en habitaciones estratégicas, enrutando la señal completa alrededor de los obstáculos."
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
          
          {/* Diagram 1: The Problem (ISP) */}
          <div className="flex flex-col">
            <div className="mb-4 flex items-center justify-between px-2">
              <h3 className="font-bold text-red-400 uppercase tracking-wider text-sm">
                {t(lang, "The Problem: Single ISP Router", "El Problema: Módem ISP Único")}
              </h3>
            </div>
            
            <div className="relative h-64 md:h-72 bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-inner flex items-center justify-between px-6 md:px-12 w-full">
              
              {/* Concrete Walls */}
              <div className="absolute top-0 bottom-0 left-[33%] w-5 bg-slate-700 border-x border-slate-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] z-10"></div>
              <div className="absolute top-0 bottom-0 right-[33%] w-5 bg-slate-700 border-x border-slate-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] z-10"></div>
              
              {/* Static Connecting Lines (Degrading) */}
              <div className="absolute top-1/2 left-[15%] w-[35%] h-2.5 bg-gradient-to-r from-red-500/50 to-red-500/10 -translate-y-1/2 z-0"></div>
              <div className="absolute top-1/2 left-[50%] w-[35%] h-0.5 bg-red-500/10 border-t border-dashed border-red-500/20 -translate-y-1/2 z-0"></div>

              {/* Animated Data Packets (Degrading through walls) */}
              <div className="absolute top-1/2 w-8 h-2.5 bg-red-300 rounded-full blur-[1px] packet-isp-1 z-20 shadow-[0_0_15px_rgba(239,68,68,1)]"></div>
              <div className="absolute top-1/2 w-8 h-2.5 bg-red-300 rounded-full blur-[1px] packet-isp-1 z-20 shadow-[0_0_15px_rgba(239,68,68,1)]" style={{ animationDelay: '0.75s' }}></div>
              
              <div className="absolute top-1/2 w-5 h-1 bg-red-400 rounded-full blur-[1px] packet-isp-2 z-20 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
              <div className="absolute top-1/2 w-5 h-1 bg-red-400 rounded-full blur-[1px] packet-isp-2 z-20 shadow-[0_0_8px_rgba(239,68,68,0.8)]" style={{ animationDelay: '0.75s' }}></div>

              {/* Room 1: Router */}
              <div className="relative z-30 flex flex-col items-center">
                <span className="mb-3 text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">{t(lang, "Modem", "Módem")}</span>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-900 border-2 border-red-500 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                   <CustomWifi level={3} className="w-7 h-7 text-red-500" />
                </div>
                <span className="mt-3 text-xs md:text-sm font-bold text-white">100%</span>
              </div>
              
              {/* Room 2: Weak Signal */}
              <div className="relative z-30 flex flex-col items-center">
                <span className="mb-3 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">{t(lang, "Room 1", "Cuarto 1")}</span>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-900 border-2 border-slate-600 rounded-2xl flex items-center justify-center">
                   <CustomWifi level={2} className="w-7 h-7 text-red-400" />
                </div>
                <span className="mt-3 text-xs md:text-sm font-bold text-slate-300">40%</span>
              </div>

              {/* Room 3: Dead Zone */}
              <div className="relative z-30 flex flex-col items-center">
                <span className="mb-3 text-[10px] md:text-xs font-bold text-slate-600 uppercase tracking-wider whitespace-nowrap">{t(lang, "Room 2", "Cuarto 2")}</span>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-900 border-2 border-slate-700 rounded-2xl flex items-center justify-center">
                   <CustomWifi level={1} className="w-7 h-7 text-red-800" />
                </div>
                <span className="mt-3 text-xs md:text-sm font-bold text-slate-500">10%</span>
              </div>

            </div>
          </div>

          {/* Diagram 2: The Solution (Flux Mesh) */}
          <div className="flex flex-col">
            <div className="mb-4 flex items-center justify-between px-2">
              <h3 className="font-bold text-teal-400 uppercase tracking-wider text-sm">
                {t(lang, "The Solution: Flux Mesh System", "La Solución: Sistema Flux Mesh")}
              </h3>
            </div>
            
            <div className="relative h-64 md:h-72 bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-inner flex items-center justify-between px-6 md:px-12 w-full">
              
              {/* Concrete Walls */}
              <div className="absolute top-0 bottom-0 left-[33%] w-5 bg-slate-700 border-x border-slate-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] z-10"></div>
              <div className="absolute top-0 bottom-0 right-[33%] w-5 bg-slate-700 border-x border-slate-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] z-10"></div>
              
              {/* Static Connecting Lines */}
              <div className="absolute top-1/2 left-[15%] right-[15%] h-2.5 bg-teal-500/20 -translate-y-1/2 z-0"></div>

              {/* Animated Data Packets (Constant Strength flowing through walls) */}
              <div className="absolute top-1/2 w-12 h-2.5 bg-white rounded-full blur-[2px] packet-flux-1 z-20 shadow-[0_0_15px_rgba(45,212,191,1)]"></div>
              <div className="absolute top-1/2 w-12 h-2.5 bg-white rounded-full blur-[2px] packet-flux-2 z-20 shadow-[0_0_15px_rgba(45,212,191,1)]"></div>
              <div className="absolute top-1/2 w-12 h-2.5 bg-white rounded-full blur-[2px] packet-flux-3 z-20 shadow-[0_0_15px_rgba(45,212,191,1)]"></div>

              {/* Room 1: Node 1 */}
              <div className="relative z-30 flex flex-col items-center">
                <span className="mb-3 text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">{t(lang, "Node 1", "Nodo 1")}</span>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-teal-900 border-2 border-teal-400 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(45,212,191,0.3)]">
                   <CustomWifi level={3} className="w-7 h-7 text-teal-400" />
                </div>
                <span className="mt-3 text-xs md:text-sm font-bold text-teal-400">100%</span>
              </div>
              
              {/* Room 2: Node 2 */}
              <div className="relative z-30 flex flex-col items-center">
                <span className="mb-3 text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">{t(lang, "Node 2", "Nodo 2")}</span>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-teal-900 border-2 border-teal-400 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(45,212,191,0.3)]">
                   <CustomWifi level={3} className="w-7 h-7 text-teal-400" />
                </div>
                <span className="mt-3 text-xs md:text-sm font-bold text-teal-400">100%</span>
              </div>

              {/* Room 3: Node 3 */}
              <div className="relative z-30 flex flex-col items-center">
                <span className="mb-3 text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">{t(lang, "Node 3", "Nodo 3")}</span>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-teal-900 border-2 border-teal-400 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(45,212,191,0.3)]">
                   <CustomWifi level={3} className="w-7 h-7 text-teal-400" />
                </div>
                <span className="mt-3 text-xs md:text-sm font-bold text-teal-400">100%</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function SmartHomeSection({ lang }) {
  return (
    <section id="smart-home" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-slate-900">
            {t(lang, "The Smart Home Backbone", "La Columna Vertebral de tu Casa Inteligente")}
          </h2>
          <p className="text-slate-600 text-lg">
            {t(lang, 
              "A modern Monterrey home runs dozens of connected devices simultaneously. From keeping the minisplits responsive during a 40°C heatwave to ensuring your security cameras never miss a frame, Flux provides the stability your smart home demands.", 
              "Una casa moderna en Monterrey opera docenas de dispositivos simultáneamente. Desde mantener los minisplits responsivos durante una ola de calor de 40°C hasta asegurar que tus cámaras de seguridad nunca pierdan conexión, Flux provee la estabilidad que tu casa exige."
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <ThermometerSun className="w-12 h-12 text-teal-500 mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-3 text-slate-900">{t(lang, "Climate Control", "Control de Clima")}</h3>
            <p className="text-slate-600">
              {t(lang, 
                "Ensure instant responsiveness for all your Wi-Fi connected Minisplits and smart thermostats, no matter where they are located.", 
                "Asegura respuesta instantánea para todos tus Minisplits y termostatos conectados por Wi-Fi, sin importar dónde estén ubicados."
              )}
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <Cctv className="w-12 h-12 text-teal-500 mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-3 text-slate-900">{t(lang, "HD Security", "Seguridad HD")}</h3>
            <p className="text-slate-600">
              {t(lang, 
                "Cameras and smart doorbells require high upload bandwidth. We ensure real-time video streaming without buffering or dropped connections.", 
                "Las cámaras y timbres inteligentes requieren un alto ancho de banda de subida. Garantizamos streaming de video en tiempo real sin pausas."
              )}
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <Home className="w-12 h-12 text-teal-500 mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-3 text-slate-900">{t(lang, "Voice Assistants", "Asistentes de Voz")}</h3>
            <p className="text-slate-600">
              {t(lang, 
                "Fully compatible and optimized for seamless operation with Amazon Alexa and Google Home ecosystems.", 
                "Totalmente compatible y optimizado para una operación impecable con los ecosistemas de Amazon Alexa y Google Home."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalculatorSection({ lang }) {
  const [homeSqm, setHomeSqm] = useState(300);
  const [stories, setStories] = useState(2);
  const [hasPatio, setHasPatio] = useState(false);
  const [patioSqm, setPatioSqm] = useState(100);
  
  // Tech selections
  const [indoorTech, setIndoorTech] = useState('wifi6');
  const [outdoorTech, setOutdoorTech] = useState('wifi6');

  // Adjust divisors based on technology tier to demonstrate improved wall penetration
  const getIndoorDivisor = () => {
    if (indoorTech === 'wifi7') return 160;
    if (indoorTech === 'wifi6e') return 120;
    return 90; // wifi6
  };

  const getOutdoorDivisor = () => {
    if (outdoorTech === 'wifi7') return 300;
    return 150; // wifi6
  };

  const indoorNodes = Math.max(stories, Math.ceil(homeSqm / getIndoorDivisor()));
  const outdoorNodes = hasPatio ? Math.max(1, Math.ceil(patioSqm / getOutdoorDivisor())) : 0;
  const totalNodes = indoorNodes + outdoorNodes;

  const getIndoorName = () => {
    if (indoorTech === 'wifi7') return t(lang, "Indoor Nodes (BE-Series Wi-Fi 7)", "Nodos Interiores (Serie BE Wi-Fi 7)");
    if (indoorTech === 'wifi6e') return t(lang, "Indoor Nodes (XE-Series Wi-Fi 6E)", "Nodos Interiores (Serie XE Wi-Fi 6E)");
    return t(lang, "Indoor Nodes (X-Series Wi-Fi 6)", "Nodos Interiores (Serie X Wi-Fi 6)");
  };

  const getOutdoorName = () => {
    if (outdoorTech === 'wifi7') return t(lang, "Outdoor Nodes (BE65-Outdoor)", "Nodos Exteriores (BE65-Outdoor)");
    return t(lang, "Outdoor Nodes (X50-Outdoor)", "Nodos Exteriores (X50-Outdoor)");
  };

  return (
    <section id="calculator" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Centered Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-slate-900">
            {t(lang, "Design Your Network", "Diseña tu Red")}
          </h2>
          <p className="text-slate-600 text-lg">
            {t(lang, 
              "Solid slabs and block walls degrade signals. Adjust the parameters below to see our recommended hardware footprint for a typical local property.", 
              "Las losas sólidas y paredes de block degradan las señales. Ajusta los parámetros abajo para ver nuestra recomendación de hardware para una propiedad local."
            )}
          </p>
        </div>

        {/* 2-Column Grid for the Widgets - Set to stretch for equal height */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Controls Widget */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 h-full flex flex-col justify-center space-y-8">
            
            {/* Indoor Tech Selection */}
            <div className="space-y-3">
              <label className="font-bold text-slate-900">{t(lang, "Technology Tier", "Nivel de Tecnología")}</label>
              <div className="flex bg-slate-200 p-1 rounded-xl">
                {['wifi6', 'wifi6e', 'wifi7'].map(tech => (
                  <button
                    key={tech}
                    onClick={() => {
                      setIndoorTech(tech);
                      // Instantly downgrade the outdoor tech if they switch away from indoor Wi-Fi 7
                      if (tech !== 'wifi7' && outdoorTech === 'wifi7') {
                        setOutdoorTech('wifi6');
                      }
                    }}
                    className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${indoorTech === tech ? 'bg-white text-teal-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    {tech === 'wifi6' ? 'Wi-Fi 6' : tech === 'wifi6e' ? 'Wi-Fi 6E' : 'Wi-Fi 7'}
                  </button>
                ))}
              </div>
            </div>

            {/* Home Size Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="font-bold text-slate-900">{t(lang, "Indoor Construction Size", "Tamaño de Construcción Interior")}</label>
                <span className="text-2xl font-bold text-teal-600">{homeSqm} <span className="text-sm font-normal text-slate-500">m²</span></span>
              </div>
              <input 
                type="range" 
                min="100" 
                max="1200" 
                step="50"
                value={homeSqm} 
                onChange={(e) => setHomeSqm(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-500"
              />
            </div>

            {/* Stories Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="font-bold text-slate-900">{t(lang, "Levels / Stories", "Niveles / Pisos")}</label>
                <span className="text-2xl font-bold text-teal-600">{stories}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="4" 
                step="1"
                value={stories} 
                onChange={(e) => setStories(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-500"
              />
            </div>

            <div className="pt-4 border-t border-slate-200">
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={hasPatio}
                  onChange={(e) => setHasPatio(e.target.checked)}
                  className="w-6 h-6 rounded text-teal-500 border-slate-300 focus:ring-teal-500 cursor-pointer accent-teal-500"
                />
                <span className="font-bold text-slate-900">{t(lang, "Include Patio / Garden Area", "Incluir Área de Patio / Asador")}</span>
              </label>
              <p className="text-sm text-slate-500 ml-9 mt-1">
                {t(lang, "Essential for uninterrupted music and streaming during the ", "Esencial para música y streaming sin interrupciones durante la ")}
                <em>carne asada</em>.
              </p>
            </div>

            {hasPatio && (
              <div className="space-y-8 ml-9 animate-in fade-in slide-in-from-top-4 duration-300">
                
                {/* Outdoor Tech Selection */}
                <div className="space-y-3">
                  <label className="font-bold text-slate-900">{t(lang, "Outdoor Tech", "Tecnología Exterior")}</label>
                  <div className="flex bg-slate-200 p-1 rounded-xl relative">
                    <button
                      onClick={() => setOutdoorTech('wifi6')}
                      className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${outdoorTech === 'wifi6' ? 'bg-white text-teal-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                      Wi-Fi 6
                    </button>
                    <button
                      onClick={() => indoorTech === 'wifi7' && setOutdoorTech('wifi7')}
                      disabled={indoorTech !== 'wifi7'}
                      className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${outdoorTech === 'wifi7' ? 'bg-white text-teal-600 shadow-sm' : indoorTech !== 'wifi7' ? 'text-slate-400 opacity-50 cursor-not-allowed' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                      Wi-Fi 7
                    </button>
                  </div>
                  {indoorTech !== 'wifi7' && (
                    <p className="text-xs text-amber-600 font-medium">
                      {t(lang, "Requires Wi-Fi 7 indoor network to enable Wi-Fi 7 outdoors.", "Requiere red Wi-Fi 7 en el interior para habilitar Wi-Fi 7 en exteriores.")}
                    </p>
                  )}
                </div>

                {/* Outdoor Size Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="font-bold text-slate-900">{t(lang, "Outdoor Area Size", "Tamaño del Área Exterior")}</label>
                    <span className="text-xl font-bold text-teal-600">{patioSqm} <span className="text-sm font-normal text-slate-500">m²</span></span>
                  </div>
                  <input 
                    type="range" 
                    min="50" 
                    max="800" 
                    step="50"
                    value={patioSqm} 
                    onChange={(e) => setPatioSqm(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Results Widget */}
          <div className="bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 text-center relative overflow-hidden shadow-2xl text-white h-full flex flex-col justify-center">
            <div className="absolute top-0 left-0 w-full h-2 bg-teal-500"></div>
            
            <h3 className="text-lg font-bold text-slate-400 mb-2 uppercase tracking-wide mt-4">
              {t(lang, "Recommended Setup", "Configuración Recomendada")}
            </h3>
            
            <div className="flex items-center justify-center gap-4 my-8">
              <span className="text-8xl font-bold tracking-tighter text-white">{totalNodes}</span>
              <div className="text-left leading-tight">
                <span className="block text-2xl font-bold">{t(lang, "Access", "Puntos de")}</span>
                <span className="block text-2xl font-bold text-teal-400">{t(lang, "Points", "Acceso")}</span>
              </div>
            </div>

            <div className="space-y-4 mb-8 text-left bg-slate-800 p-6 rounded-2xl w-full">
              <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                <span className="font-medium text-slate-300 text-sm md:text-base">
                  {getIndoorName()}
                </span>
                <span className="font-bold text-xl ml-2">{indoorNodes}</span>
              </div>
              {hasPatio && (
                <div className="flex justify-between items-center pt-2 text-teal-300">
                  <span className="font-medium text-sm md:text-base">
                    {getOutdoorName()}
                  </span>
                  <span className="font-bold text-xl ml-2">{outdoorNodes}</span>
                </div>
              )}
            </div>

            <p className="text-slate-400 mb-8 text-sm">
              {t(lang, 
                "This estimate guarantees wall-to-wall coverage for concrete block construction. Final configuration is determined during the site survey.", 
                "Este estimado garantiza cobertura total para construcción típica de block. La configuración final se determina durante la visita técnica."
              )}
            </p>
            
            <button onClick={(e) => scrollToSection(e, 'contact')} className="w-full py-4 bg-teal-500 text-white rounded-xl font-bold hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20 mt-auto">
              {t(lang, "Book a Site Survey", "Agendar Visita Técnica")}
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function TopologySection({ lang }) {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
      
      {/* Blueprint Flow Animations */}
      <style>{`
        @keyframes vertical-flow {
          0% { top: 15%; opacity: 0; transform: translateX(-50%) scale(0.5); }
          10% { opacity: 1; transform: translateX(-50%) scale(1); }
          90% { opacity: 1; transform: translateX(-50%) scale(1); }
          100% { top: 85%; opacity: 0; transform: translateX(-50%) scale(0.5); }
        }
        @keyframes flow-quinta {
          0% { left: 33%; top: 25%; opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
          10% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          90% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { left: 83%; top: 50%; opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
        }
        .packet-v { animation: vertical-flow 2s linear infinite; }
        .packet-q { animation: flow-quinta 2.5s linear infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-slate-900">
            {t(lang, "Custom Topology for Local Architecture", "Topología Personalizada para Arquitectura Local")}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t(lang, 
              "A townhouse in San Pedro requires a vastly different network architecture than a sprawling Quinta on the Carretera Nacional. We design specifically for your floor plan.", 
              "Una residencia vertical en San Pedro requiere una arquitectura de red muy diferente a una Quinta extendida en Carretera Nacional. Diseñamos para tu plano arquitectónico."
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Blueprint: Vertical Living (San Pedro) */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm flex flex-col h-full group">
            <h3 className="text-xl font-bold text-slate-900 mb-2">{t(lang, "Vertical Living (San Pedro)", "Vivienda Vertical (San Pedro)")}</h3>
            <p className="text-sm text-slate-500 mb-12">
              {t(lang, "Dense concrete slabs between multiple levels require a vertical backhaul strategy to penetrate floors.", "Las losas densas de concreto entre múltiples niveles requieren una estrategia de enlace vertical para penetrar pisos.")}
            </p>
            
            <div className="flex-1 flex items-center justify-center py-4">
              <div className="relative w-full max-w-[260px] flex flex-col gap-5">
                
                {/* Vertical Backbone Line */}
                <div className="absolute left-1/2 top-8 bottom-8 w-1.5 bg-teal-100 -translate-x-1/2 rounded-full z-0"></div>
                
                {/* Animated Data Packets */}
                <div className="absolute left-1/2 w-3 h-8 bg-teal-400 rounded-full blur-[2px] packet-v z-10"></div>
                <div className="absolute left-1/2 w-1.5 h-6 bg-white rounded-full packet-v z-20"></div>

                {/* L3: Rooftop */}
                <div className="bg-white border-2 border-slate-100 rounded-2xl p-4 flex items-center justify-between shadow-lg relative z-30 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                      <Activity className="w-5 h-5 text-teal-500" />
                    </div>
                    <span className="font-bold text-slate-600 text-sm uppercase tracking-wider">{t(lang, "L3 / Roof", "N3 / Roof")}</span>
                  </div>
                  <span className="text-[10px] font-bold text-teal-500 bg-teal-50 px-2 py-1 rounded-md hidden sm:block">{t(lang, "Mesh Node", "Nodo Mesh")}</span>
                </div>

                {/* L2: Bedrooms */}
                <div className="bg-white border-2 border-slate-100 rounded-2xl p-4 flex items-center justify-between shadow-lg relative z-30 transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                      <Activity className="w-5 h-5 text-teal-500" />
                    </div>
                    <span className="font-bold text-slate-600 text-sm uppercase tracking-wider">{t(lang, "L2 / Beds", "N2 / Recámaras")}</span>
                  </div>
                  <span className="text-[10px] font-bold text-teal-500 bg-teal-50 px-2 py-1 rounded-md hidden sm:block">{t(lang, "Mesh Node", "Nodo Mesh")}</span>
                </div>

                {/* L1: Living/Entry (Main Modem) */}
                <div className="bg-slate-900 border-2 border-slate-800 rounded-2xl p-4 flex items-center justify-between shadow-xl relative z-30 transition-transform duration-300 group-hover:translate-y-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700">
                      <Wifi className="w-5 h-5 text-teal-400" />
                    </div>
                    <span className="font-bold text-white text-sm uppercase tracking-wider">{t(lang, "L1 / Entry", "N1 / Entrada")}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-900 bg-teal-400 px-2 py-1 rounded-md hidden sm:block">{t(lang, "Main Router", "Router Principal")}</span>
                </div>

              </div>
            </div>
          </div>

          {/* Blueprint: The Quinta (Horizontal Living) */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm flex flex-col h-full group">
            <h3 className="text-xl font-bold text-slate-900 mb-2">{t(lang, "The Quinta (Carr. Nacional)", "La Quinta (Carr. Nacional)")}</h3>
            <p className="text-sm text-slate-500 mb-12">
              {t(lang, "Expansive horizontal footprints require dedicated outdoor bridging to project bandwidth across gardens.", "Propiedades extendidas requieren enlaces exteriores dedicados para proyectar ancho de banda a través de jardines.")}
            </p>
            
            <div className="flex-1 flex items-center justify-center py-4">
              <div className="relative w-full flex flex-col sm:flex-row items-stretch gap-3 lg:gap-4 min-h-[220px]">
                
                {/* SVG Mesh Lines (Hidden on mobile to prevent coordinate breaking) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden sm:block">
                  <line x1="33%" y1="25%" x2="83%" y2="50%" stroke="#2dd4bf" strokeWidth="2" strokeDasharray="4 4" opacity="0.6"/>
                  <line x1="33%" y1="25%" x2="17%" y2="75%" stroke="#2dd4bf" strokeWidth="2" strokeDasharray="4 4" opacity="0.6"/>
                  <line x1="33%" y1="25%" x2="50%" y2="75%" stroke="#2dd4bf" strokeWidth="2" strokeDasharray="4 4" opacity="0.6"/>
                </svg>

                {/* Animated Data Packet (Living to Garden) */}
                <div className="absolute w-3 h-3 bg-teal-400 rounded-full blur-[1px] packet-q z-20 hidden sm:block"></div>

                {/* Main House Block (Grid Floorplan) */}
                <div className="flex-[2] bg-slate-900 border-4 border-slate-800 rounded-2xl p-2.5 flex flex-col gap-2.5 shadow-xl relative z-30 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                  <span className="absolute -top-3 left-4 bg-slate-900 px-3 py-0.5 text-[10px] font-bold text-teal-400 tracking-widest uppercase rounded-full border border-slate-700">
                    {t(lang, "Main Residence", "Casa Principal")}
                  </span>
                  
                  {/* Living Room */}
                  <div className="flex-1 border border-slate-700 bg-slate-800/80 rounded-xl flex items-center justify-center gap-3 p-3 relative z-10 hover:bg-slate-800 transition-colors">
                     <Wifi className="w-6 h-6 text-teal-400 shrink-0" />
                     <div className="flex flex-col items-start">
                       <span className="text-xs md:text-sm font-bold text-white leading-tight">{t(lang, "Living Room", "Sala Principal")}</span>
                       <span className="text-[9px] font-bold text-slate-400 uppercase">{t(lang, "Main Modem", "Módem Principal")}</span>
                     </div>
                  </div>

                  {/* Bottom Rooms Row */}
                  <div className="flex-1 flex gap-2.5">
                     {/* Office */}
                     <div className="flex-1 border border-slate-700 bg-slate-800/80 rounded-xl flex flex-col items-center justify-center p-2 relative z-10 hover:bg-slate-800 transition-colors">
                       <Activity className="w-5 h-5 text-teal-500 mb-1" />
                       <span className="text-[10px] md:text-xs font-bold text-white">{t(lang, "Office", "Oficina")}</span>
                     </div>
                     {/* Bedroom */}
                     <div className="flex-1 border border-slate-700 bg-slate-800/80 rounded-xl flex flex-col items-center justify-center p-2 relative z-10 hover:bg-slate-800 transition-colors">
                       <Activity className="w-5 h-5 text-teal-500 mb-1" />
                       <span className="text-[10px] md:text-xs font-bold text-white">{t(lang, "Bedroom", "Recámara")}</span>
                     </div>
                  </div>
                </div>

                {/* Outdoor / Garden Block */}
                <div className="flex-1 bg-teal-50/90 border-2 border-dashed border-teal-400 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm relative z-30 backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1">
                  <ThermometerSun className="w-8 h-8 text-teal-600 mb-2" />
                  <span className="font-bold text-teal-900 text-xs md:text-sm uppercase tracking-wider">{t(lang, "Garden", "Jardín")}</span>
                  <span className="text-[9px] md:text-[10px] font-bold text-white bg-teal-500 px-2 py-1 rounded-md mt-2 uppercase text-center leading-tight">
                    {t(lang, "Outdoor AP", "AP Exterior")}
                  </span>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function SpeedComparisonSection({ lang }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const generations = [
    { name: "Wi-Fi 5", speed: "867 Mbps", width: "8%", color: "bg-slate-300" },
    { name: "Wi-Fi 6", speed: "9.6 Gbps", width: "22%", color: "bg-slate-400" },
    { 
      name: "Wi-Fi 6E", 
      speed: "10.8 Gbps", 
      width: "26%", 
      color: "bg-slate-700", 
      note: t(lang, "New 6GHz Band", "Nueva Banda 6GHz") 
    },
    { 
      name: "Wi-Fi 7", 
      speed: "46 Gbps", 
      width: "100%", 
      color: "bg-teal-500", 
      note: t(lang, "Multi-Link Operation", "Operación Multi-Enlace") 
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <Zap className="w-10 h-10 mx-auto text-teal-500 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-slate-900">
            {t(lang, "Future-Proof Speed", "Velocidad a Prueba del Futuro")}
          </h2>
          <p className="text-slate-600">
            {t(lang, 
              "Stop paying for gigabit fiber only to lose 80% of it over outdated Wi-Fi. We deploy the latest standards to ensure your devices actually receive the speeds you pay for.", 
              "Deja de pagar por fibra gigabit solo para perder el 80% con un Wi-Fi obsoleto. Implementamos los últimos estándares para asegurar que tus dispositivos reciban la velocidad por la que pagas."
            )}
          </p>
        </div>

        <div className="space-y-8 relative">
          
          {/* Disclaimer Label */}
          <div className="absolute -top-8 right-0 text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest text-right">
            * {t(lang, "Max Theoretical Aggregate Link Rates", "Velocidad Máxima Teórica Agregada")}
          </div>

          {generations.map((gen, idx) => (
            <div key={idx} className="relative">
              <div className="flex justify-between mb-2 items-end">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                  <span className="font-bold text-lg text-slate-900">{gen.name}</span>
                  {gen.note && <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] md:text-xs rounded-md font-bold">{gen.note}</span>}
                </div>
                <span className="font-mono font-bold text-slate-500">{gen.speed}</span>
              </div>
              <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${gen.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ 
                    width: isVisible ? gen.width : '0%',
                    transitionDelay: `${idx * 150}ms` // Staggers the animation for a cascading effect
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseSection({ lang }) {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Base placeholder mimicking a white Deco unit. Swap with your WebP paths later.
  const placeholderImg = "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=600&auto=format&fit=crop";

  const products = [
    {
      name: "Deco X55",
      desc: t(lang, "The rock-solid baseline. Exceptional Wi-Fi 6 performance that easily handles gigabit fiber speeds for most families.", "La base sólida. Rendimiento excepcional Wi-Fi 6 que maneja fácilmente velocidades de fibra gigabit para la mayoría de las familias."),
      spec: "AX3000 Wi-Fi 6",
      price: "$1,400",
      speedValue: 3.0,
      speedLabel: "3.0 Gbps",
      bands: ["2.4 GHz", "5 GHz"],
      image: placeholderImg
    },
    {
      name: "Deco XE70 Pro",
      desc: t(lang, "Maximum penetration. Uses the uncluttered 6GHz band as a dedicated wireless backhaul, punching through interference in dense neighborhoods.", "Máxima penetración. Utiliza la nueva banda de 6GHz como enlace dedicado, evitando interferencias de vecinos en zonas densas."),
      spec: "AXE4900 Tri-Band 6E",
      price: "$1,650",
      speedValue: 4.9,
      speedLabel: "4.9 Gbps",
      bands: ["2.4 GHz", "5 GHz", "6 GHz"],
      image: placeholderImg
    },
    {
      name: "Deco BE25",
      desc: t(lang, "The Gateway to Wi-Fi 7. Features Multi-Link Operation (MLO) for zero-latency gaming and 2.5 Gbps ports for ultra-fast fiber plans.", "La entrada al Wi-Fi 7. Cuenta con Operación Multi-Enlace (MLO) para latencia cero y puertos de 2.5 Gbps para fibra ultra rápida."),
      spec: "BE5000 Dual-Band 7",
      price: "$1,700",
      speedValue: 5.0,
      speedLabel: "5.0 Gbps",
      bands: ["2.4 GHz", "5 GHz"],
      image: placeholderImg
    },
    {
      name: "Deco BE65",
      desc: t(lang, "The absolute pinnacle. Tri-Band Wi-Fi 7 combining 6GHz clarity with MLO speed. Uncompromising performance for smart mansions.", "El pináculo absoluto. Wi-Fi 7 Tri-Banda combinando la claridad de 6GHz con velocidad MLO. Rendimiento sin concesiones."),
      spec: "BE11000 Tri-Band 7",
      price: "$3,600",
      speedValue: 11.0,
      speedLabel: "11.0 Gbps",
      bands: ["2.4 GHz", "5 GHz", "6 GHz"],
      image: placeholderImg
    },
    {
      name: "Deco X50-Outdoor",
      desc: t(lang, "Weatherproof IP65 rating. Essential for blanketing your patio, garden, and pool area with seamless, uninterrupted Wi-Fi 6 signal.", "Clasificación IP65. Esencial para cubrir tu patio, asador y alberca con señal Wi-Fi 6 continua y sin interrupciones."),
      spec: t(lang, "Outdoor Wi-Fi 6", "Exteriores Wi-Fi 6"),
      price: "$2,200",
      speedValue: 3.0,
      speedLabel: "3.0 Gbps",
      bands: ["2.4 GHz", "5 GHz"],
      image: placeholderImg
    },
    {
      name: "Deco BE65-Outdoor",
      desc: t(lang, "Commercial-grade outdoor Wi-Fi 7. Tri-band IP65 beast designed to project immense bandwidth across massive estates and gardens.", "Wi-Fi 7 exterior de grado comercial. Bestia Tri-Banda IP65 diseñada para proyectar ancho de banda inmenso en quintas y jardines masivos."),
      spec: t(lang, "Outdoor Wi-Fi 7", "Exteriores Wi-Fi 7"),
      price: "$6,400",
      speedValue: 11.0,
      speedLabel: "11.0 Gbps",
      bands: ["2.4 GHz", "5 GHz", "6 GHz"],
      image: placeholderImg
    }
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % products.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + products.length) % products.length);

  // Maximum theoretical limit based on our top tier BE65
  const MAX_SPEED = 11.0; 

  return (
    <section id="hardware" className="py-24 bg-slate-50 overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-center text-slate-900">
          {t(lang, "Hardware Excellence", "Excelencia en Hardware")}
        </h2>
        
        <div className="relative max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-slate-200 flex flex-col md:flex-row items-center gap-12 shadow-sm">
          
          {/* Image Container */}
          <div className="flex-1 w-full flex justify-center items-center">
             <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white flex items-center justify-center group">
                <img 
                  src={products[activeSlide].image} 
                  alt={products[activeSlide].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
             </div>
          </div>

          {/* Product Details */}
          <div className="flex-[1.5] space-y-6">
            <div className="flex flex-wrap gap-2">
              <div className="inline-block px-3 py-1 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest rounded-full">
                {products[activeSlide].spec}
              </div>
              <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 border border-teal-200 text-xs font-bold uppercase tracking-widest rounded-full">
                {t(lang, `Starts at ${products[activeSlide].price} / node`, `Desde ${products[activeSlide].price} MXN / nodo`)}
              </div>
            </div>
            
            <h3 className="text-4xl font-bold text-slate-900">{products[activeSlide].name}</h3>
            <p className="text-lg text-slate-600">{products[activeSlide].desc}</p>
            
            <div className="pt-2 border-t border-slate-100">
              
              {/* Speed Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-bold text-slate-700">{t(lang, "Max Theoretical Speed", "Capacidad Máxima Teórica")}</span>
                  <span className="font-bold text-teal-600">{products[activeSlide].speedLabel}</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                  <div 
                    className="h-full bg-teal-500 rounded-full transition-all duration-1000 ease-out relative"
                    style={{ width: `${(products[activeSlide].speedValue / MAX_SPEED) * 100}%` }}
                  >
                    {/* Tiny shimmer effect on the bar */}
                    <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/30"></div>
                  </div>
                </div>
                <div className="flex justify-end mt-1">
                  <span className="text-[10px] font-bold text-slate-400">11.0 Gbps MAX</span>
                </div>
              </div>

              {/* Band Indicators */}
              <div className="flex flex-wrap gap-3">
                {products[activeSlide].bands.map(band => (
                  <div key={band} className="flex flex-col items-center justify-center px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl min-w-[72px] transition-all">
                    <Wifi className={`w-5 h-5 mb-1 ${band === '6 GHz' ? 'text-blue-500' : 'text-teal-500'}`} />
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">{band}</span>
                  </div>
                ))}
              </div>

            </div>
            
            <div className="flex gap-4 pt-6">
              <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-600 shadow-sm">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-600 shadow-sm">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppFeaturesSection({ lang }) {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal-400" />,
      title: t(lang, "Advanced Parental Controls", "Controles Parentales Avanzados"),
      desc: t(lang, 
        "Create profiles for each child, set daily time limits, enforce bedtime internet blocks, and filter inappropriate content with a single tap.", 
        "Crea perfiles para cada hijo, establece límites de tiempo diarios, bloquea el internet a la hora de dormir y filtra contenido inapropiado con un solo toque."
      )
    },
    {
      icon: <Smartphone className="w-6 h-6 text-teal-400" />,
      title: t(lang, "Real-Time Monitoring", "Monitoreo en Tiempo Real"),
      desc: t(lang, 
        "See exactly which devices are connected, monitor bandwidth usage in real-time, and get notified when new devices join your network.", 
        "Ve exactamente qué dispositivos están conectados, monitorea el uso de ancho de banda y recibe notificaciones cuando nuevos dispositivos se unan a tu red."
      )
    },
    {
      icon: <Lock className="w-6 h-6 text-teal-400" />,
      title: t(lang, "Guest Network Isolation", "Aislamiento de Red de Invitados"),
      desc: t(lang, 
        "Share your internet securely with visitors without giving them access to your smart home devices or personal computers.", 
        "Comparte tu internet de forma segura con visitantes sin darles acceso a tus dispositivos domésticos o computadoras personales."
      )
    }
  ];

  return (
    <section id="app" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* App UI Simulation */}
          <div className="relative mx-auto w-full max-w-[320px]">
            <div className="absolute inset-0 bg-teal-500 rounded-[3rem] blur-3xl opacity-20"></div>
            <div className="relative bg-slate-800 border-[8px] border-slate-700 rounded-[3rem] h-[650px] overflow-hidden shadow-2xl flex flex-col">
              <div className="bg-slate-800 pt-10 pb-4 px-6 border-b border-slate-700 flex justify-between items-center">
                <span className="font-bold text-lg">{t(lang, "My Network", "Mi Red")}</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                  <span className="text-xs text-slate-400 font-bold">{t(lang, "Online", "En Línea")}</span>
                </div>
              </div>
              
              <div className="flex-1 p-6 space-y-6 overflow-hidden">
                <div className="bg-slate-700/50 rounded-2xl p-4">
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-3 block">
                    {t(lang, "Family Profiles", "Perfiles Familiares")}
                  </span>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal-500/20 text-teal-400 rounded-full flex items-center justify-center font-bold">K</div>
                        <span className="font-medium text-slate-200">{t(lang, "Kids iPads", "iPads Niños")}</span>
                      </div>
                      <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-md font-bold">
                        {t(lang, "Paused", "Pausado")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-700/50 rounded-2xl p-4">
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-4 block">
                    {t(lang, "Current Usage", "Uso Actual")}
                  </span>
                  <div className="space-y-4">
                     <div>
                       <div className="flex justify-between text-sm mb-2 text-slate-300">
                         <span className="font-medium">{t(lang, "Download", "Descarga")}</span>
                         <span className="font-mono text-teal-400 font-bold">450 Mbps</span>
                       </div>
                       <div className="w-full h-2 bg-slate-600 rounded-full overflow-hidden">
                         <div className="w-[80%] h-full bg-teal-500 rounded-full"></div>
                       </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              {t(lang, "Total Control in Your Pocket.", "Control Total en tu Bolsillo.")}
            </h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              {t(lang, 
                "We configure the hardware. You hold the master key. The intuitive app gives you complete oversight of your family's digital life, right from your smartphone.", 
                "Nosotros configuramos el hardware. Tú tienes la llave maestra. La app intuitiva te da supervisión completa de la vida digital de tu familia, directo desde tu celular."
              )}
            </p>

            <div className="space-y-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">{feature.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ValueAddSection({ lang }) {
  const values = [
    {
      icon: <BarChart className="w-6 h-6 text-teal-600" />,
      title: t(lang, "Wi-Fi Spectrum Analysis", "Análisis de Espectro Wi-Fi"),
      desc: t(lang, 
        "We scan local interference from neighbors and adjust your network channels to ensure you're on the cleanest, fastest frequency available.", 
        "Escaneamos la interferencia de los vecinos y ajustamos los canales de tu red para asegurar que estés en la frecuencia más limpia y rápida disponible."
      )
    },
    {
      icon: <Signal className="w-6 h-6 text-teal-600" />,
      title: t(lang, "Connection Heatmapping", "Mapeo Térmico de Conexión"),
      desc: t(lang, 
        "Post-installation, we test connection strength in every room, ensuring zero dead zones remain before we consider the job done.", 
        "Post-instalación, probamos la fuerza de conexión en cada habitación, asegurando que no queden zonas muertas antes de dar el trabajo por terminado."
      )
    },
    {
      icon: <Wrench className="w-6 h-6 text-teal-600" />,
      title: t(lang, "White-Glove Installation", "Instalación Profesional Estética"),
      desc: t(lang, 
        "No messy cables. We prioritize aesthetic, clean placements for every Access Point, respecting the interior design of your home.", 
        "Cero cables desordenados. Priorizamos colocaciones limpias y estéticas para cada Punto de Acceso, respetando el diseño interior de tu hogar."
      )
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-slate-900">
          {t(lang, "The Fold Group Standard", "El Estándar Fold Group")}
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-16 text-lg">
          {t(lang, 
            "You aren't just buying hardware. You're hiring network engineers to build a commercial-grade infrastructure inside your home.", 
            "No solo estás comprando aparatos. Estás contratando ingenieros para construir una infraestructura de red de grado comercial dentro de tu casa."
          )}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-left">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center mb-6">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
              <p className="text-slate-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ lang }) {
  const [activeZone, setActiveZone] = useState(null);
  const [formData, setFormData] = useState({ name: '', zone: '' });
  const [selectedPkg, setSelectedPkg] = useState('basic');
  const [isPkgDropdownOpen, setIsPkgDropdownOpen] = useState(false);

  // Updated to specific premium corridors of Monterrey
  const coverageZones = [
    { id: 'sanpedro',   name: 'S.P.G.G.',           x: '22%', y: '22%' },
    { id: 'valleo',     name: 'Valle Oriente',      x: '45%', y: '30%' },
    { id: 'zonatec',    name: 'Zona Tec',           x: '65%', y: '20%' },
    { id: 'contry',     name: 'Contry / Zona Sur',  x: '70%', y: '45%' },
    { id: 'estanzuela', name: 'La Estanzuela',      x: '80%', y: '68%' },
    { id: 'nacional',   name: 'Carretera Nacional', x: '92%', y: '90%' }
  ];

  const packages = [
    { id: 'basic', es: 'Básico (Wi-Fi 6 - Deco X55)', en: 'Basic (Wi-Fi 6 - Deco X55)', icon: Wifi },
    { id: 'advanced', es: 'Avanzado (Wi-Fi 6E - Deco XE70 Pro)', en: 'Advanced (Wi-Fi 6E - Deco XE70 Pro)', icon: Zap },
    { id: 'premium', es: 'Premium (Wi-Fi 7 - Deco BE25)', en: 'Premium (Wi-Fi 7 - Deco BE25)', icon: Rocket },
    { id: 'ultra', es: 'Ultra (Wi-Fi 7 - Deco BE65)', en: 'Ultra (Wi-Fi 7 - Deco BE65)', icon: Gauge }
  ];

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) return; // Basic validation
    
    const pkgName = packages.find(p => p.id === selectedPkg)[lang];
    const phoneNumber = "528100000000"; // Replace with actual business WhatsApp number
    
    const message = lang === 'es' 
      ? `Hola equipo Flux, me interesa cotizar una mejora para mi red Wi-Fi.\n\n*Nombre:* ${formData.name}\n*Zona/Colonia:* ${formData.zone || 'No especificada'}\n*Paquete de Interés:* ${pkgName}`
      : `Hello Flux team, I'm interested in getting a quote for a Wi-Fi network upgrade.\n\n*Name:* ${formData.name}\n*Zone/Neighborhood:* ${formData.zone || 'Not specified'}\n*Package of Interest:* ${pkgName}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const selectedPackageData = packages.find(p => p.id === selectedPkg);
  const SelectedIcon = selectedPackageData.icon;

  return (
    <section id="contact" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-slate-900">
            {t(lang, "Ready to Upgrade Your Home?", "¿Listo para Mejorar tu Hogar?")}
          </h2>
          <p className="text-slate-600 text-lg">
            {t(lang, 
              "Schedule a brief consultation. We'll assess your floor plan, verify coverage, and provide a transparent quote for your new infrastructure.", 
              "Agenda una breve consulta. Evaluaremos tu plano, verificaremos cobertura en tu zona, y proporcionaremos una cotización transparente."
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Form Column */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm relative">
            {/* Overlay to close custom dropdown when clicking outside */}
            {isPkgDropdownOpen && (
              <div className="fixed inset-0 z-30" onClick={() => setIsPkgDropdownOpen(false)}></div>
            )}
            
            <h3 className="text-2xl font-bold mb-6 text-slate-900 relative z-40">
              {t(lang, "Request Consultation", "Solicitar Consulta")}
            </h3>
            
            <form className="space-y-5 relative z-40" onSubmit={handleWhatsAppSubmit}>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-1.5">{t(lang, "Full Name", "Nombre Completo")}</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-slate-50" 
                  placeholder={t(lang, "John Doe", "Juan Pérez")} 
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-1.5">{t(lang, "Neighborhood / Area", "Colonia / Zona")}</label>
                <input 
                  type="text" 
                  value={formData.zone}
                  onChange={(e) => setFormData({...formData, zone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-slate-50" 
                  placeholder={t(lang, "e.g. San Pedro, Carretera Nacional", "ej. San Pedro, Carretera Nacional")} 
                />
              </div>

              {/* Custom Package Dropdown with Icons */}
              <div className="relative">
                <label className="block text-sm font-bold text-slate-900 mb-1.5">{t(lang, "Package of Interest", "Paquete de Interés")}</label>
                
                <button
                  type="button"
                  onClick={() => setIsPkgDropdownOpen(!isPkgDropdownOpen)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 flex justify-between items-center focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                >
                  <div className="flex items-center gap-3">
                    <SelectedIcon className="w-5 h-5 text-teal-600" />
                    <span className="font-medium text-slate-900">{selectedPackageData[lang]}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isPkgDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isPkgDropdownOpen && (
                  <div className="absolute z-50 w-full mt-2 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden py-1 animate-in fade-in slide-in-from-top-2">
                    {packages.map((pkg) => {
                      const PkgIcon = pkg.icon;
                      return (
                        <button
                          key={pkg.id}
                          type="button"
                          onClick={() => { setSelectedPkg(pkg.id); setIsPkgDropdownOpen(false); }}
                          className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-slate-50 transition-colors ${selectedPkg === pkg.id ? 'bg-teal-50/50' : ''}`}
                        >
                          <PkgIcon className={`w-5 h-5 ${selectedPkg === pkg.id ? 'text-teal-600' : 'text-slate-400'}`} />
                          <span className={`font-medium ${selectedPkg === pkg.id ? 'text-teal-700' : 'text-slate-700'}`}>
                            {pkg[lang]}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <button type="submit" className="w-full py-4 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#1fb855] transition-colors mt-6 shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                {t(lang, "Send via WhatsApp", "Enviar por WhatsApp")}
              </button>
            </form>
          </div>

          {/* Interactive Map Column */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl p-6 md:p-8 flex flex-col overflow-hidden">
            <div className="z-20 relative">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-teal-400" />
                <h3 className="text-white font-bold text-xl">
                  {t(lang, "Monterrey Coverage Map", "Mapa de Cobertura Monterrey")}
                </h3>
              </div>
              <p className="text-slate-400 text-sm max-w-sm">
                {t(lang, "Hover over a highlighted node to verify our active service zones.", "Pasa el cursor sobre un nodo iluminado para verificar nuestras zonas de servicio activas.")}
              </p>
            </div>

            {/* Graphic Map Area */}
            <div className="flex-1 relative w-full mt-6 rounded-2xl bg-slate-900 border border-slate-700/50 overflow-hidden group shadow-inner">
                
                {/* Custom Monterrey Map Background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity transition-opacity duration-700 group-hover:opacity-40" 
                  style={{ backgroundImage: 'url("./mty-map.png")' }} 
                ></div>

                {/* Coverage Nodes & Wi-Fi Heatmap Rings */}
                {coverageZones.map(zone => (
                   <div
                     key={zone.id}
                     className="absolute w-8 h-8 -ml-4 -mt-4 rounded-full cursor-pointer z-20 flex items-center justify-center"
                     style={{ left: zone.x, top: zone.y }}
                     onMouseEnter={() => setActiveZone(zone)}
                     onMouseLeave={() => setActiveZone(null)}
                   >
                     {/* Expanding Wi-Fi Coverage Radius */}
                     <div className={`absolute w-32 h-32 rounded-full bg-teal-400/10 border border-teal-400/20 blur-[2px] transition-all duration-500 pointer-events-none ${activeZone?.id === zone.id || !activeZone ? 'scale-100 opacity-100 animate-pulse' : 'scale-50 opacity-0'}`}></div>

                     {/* Node dot */}
                     <div className={`w-3 h-3 rounded-full transition-all duration-300 shadow-lg relative z-10 ${activeZone?.id === zone.id || !activeZone ? 'bg-teal-400 shadow-teal-500/50' : 'bg-slate-400'}`}></div>
                     
                     {/* Active Node Ping */}
                     <div className={`absolute inset-0 bg-teal-400/40 rounded-full transition-all duration-300 z-10 ${activeZone?.id === zone.id ? 'animate-ping opacity-100' : 'opacity-0 scale-50'}`}></div>

                     {/* Floating Label / Tooltip */}
                     <div className={`absolute left-10 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-800 border border-slate-600 px-4 py-2.5 rounded-xl shadow-xl transition-all duration-300 pointer-events-none z-50 ${activeZone?.id === zone.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                        <div className="font-bold text-white text-sm">{zone.name}</div>
                        <div className="flex items-center gap-2 mt-1">
                           <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div>
                           <span className="text-xs text-teal-400 font-bold uppercase tracking-wider">{t(lang, "Active Coverage", "Cobertura Activa")}</span>
                        </div>
                     </div>
                   </div>
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Footer({ lang }) {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-white border-t border-slate-200 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img 
              src="./flux-icon-horizontal-color.svg" 
              alt="Flux Networks" 
              className="h-6 md:h-8 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" 
            />
          </div>
          
          <p className="text-slate-500 text-sm text-center">
            &copy; {new Date().getFullYear()} <span className="font-bold text-slate-900">Flux</span> Mesh Network Solutions. {t(lang, "A", "Una marca de")} <span className="font-bold text-slate-900">The Fold Group Inc.</span>{lang === 'en' ? ' brand.' : ''}
          </p>
          
          <div className="flex gap-4 text-sm font-bold text-slate-500">
            <button 
              onClick={() => setIsPrivacyOpen(true)} 
              className="hover:text-teal-600 transition-colors"
            >
              {t(lang, "Privacy Policy", "Politica de Privacidad")}
            </button>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Blurred Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
            onClick={() => setIsPrivacyOpen(false)}
          ></div>
          
          {/* Modal Card */}
          <div className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
            {/* Top Teal Accent Bar */}
            <div className="h-2 w-full bg-teal-500"></div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {t(lang, "Privacy Policy", "Aviso de Privacidad")}
                  </h3>
                </div>
                <button 
                  onClick={() => setIsPrivacyOpen(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors p-1"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  {t(lang,
                    "At Flux, we take your privacy as seriously as your network security.",
                    "En Flux, tomamos tu privacidad tan en serio como la seguridad de tu red."
                  )}
                </p>
                <p>
                  {t(lang,
                    "Any personal information, contact details, or floor plan descriptions you provide will be exclusively used for the purpose of analyzing your network requirements, verifying coverage zones, and providing an accurate quote.",
                    "Cualquier información personal, datos de contacto o descripciones de tu domicilio que proporciones se utilizarán exclusivamente con el propósito de analizar tus requerimientos de red, verificar zonas de cobertura y proporcionar una cotización precisa."
                  )}
                </p>
                <p className="font-bold text-slate-900">
                  {t(lang,
                    "We do not sell, share, or use your data for third-party marketing.",
                    "Nosotros no vendemos, compartimos ni utilizamos tus datos para campañas de marketing de terceros."
                  )}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                <button 
                  onClick={() => setIsPrivacyOpen(false)}
                  className="px-6 py-2.5 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-md"
                >
                  {t(lang, "Understood", "Entendido")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}