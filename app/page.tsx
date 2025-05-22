'use client';

import { useState, useEffect } from 'react';

// Componente de ícone SVG para Hipnoterapia Clínica
const TherapyIcon = () => (
  <svg className="w-8 h-8 text-pink-700" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H19V9Z" stroke="currentColor" strokeWidth="1" fill="none"/>
  </svg>
);

// Componente de ícone SVG para Tratamento de Ansiedade
const AnxietyIcon = () => (
  <svg className="w-8 h-8 text-pink-700" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

// Componente de ícone SVG para Mudança de Hábitos
const HabitsIcon = () => (
  <svg className="w-8 h-8 text-pink-700" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

// Componente de ícone SVG para Certificação
const CertificationIcon = () => (
  <svg className="w-6 h-6 text-pink-700" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Ícones para as condições tratadas
const AnxietyConditionIcon = () => (
  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const PanicIcon = () => (
  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
  </svg>
);

const DepressionIcon = () => (
  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
  </svg>
);

const InsomniaIcon = () => (
  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.75 4.09L15.22 6.03L16.13 9.09L13.5 7.28L10.87 9.09L11.78 6.03L9.25 4.09L12.44 4L13.5.19L14.56 4L17.75 4.09ZM21.25 11L19.61 12.25L20.2 14.23L18.5 13.06L16.8 14.23L17.39 12.25L15.75 11L17.81 10.95L18.5 9L19.19 10.95L21.25 11ZM18.97 15.95C19.8 15.87 20.69 17.05 20.16 17.8C19.84 18.25 19.5 18.67 19.08 19.07C15.17 23 8.84 23 4.94 19.07C1.03 15.17 1.03 8.83 4.94 4.93C5.34 4.53 5.76 4.17 6.21 3.85C6.96 3.32 8.14 4.21 8.06 5.04C7.79 7.9 8.75 10.87 10.95 13.06C13.14 15.26 16.1 16.22 18.97 15.95Z"/>
  </svg>
);

const SmokingIcon = () => (
  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.5 14H6.5c-.5 0-1 .5-1 1s.5 1 1 1h12c.5 0 1-.5 1-1s-.5-1-1-1zm3.5 2h-1v-3c0-1.1-.9-2-2-2h-1v1h1c.5 0 1 .5 1 1v3h-1c-.6 0-1 .4-1 1s.4 1 1 1h3c.6 0 1-.4 1-1s-.4-1-1-1zM2 16h1v-3c0-.5.5-1 1-1h1v-1H4c-1.1 0-2 .9-2 2v3zm18-6.5c0-.8-.7-1.5-1.5-1.5S17 8.7 17 9.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5zm-2-3c0-.8-.7-1.5-1.5-1.5S15 5.7 15 6.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5z"/>
  </svg>
);

const CompulsionIcon = () => (
  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM12 19c-3.87 0-7-3.13-7-7 0-1.93.78-3.68 2.05-4.95L12 11l4.95-3.95C18.22 8.32 19 10.07 19 12c0 3.87-3.13 7-7 7z"/>
  </svg>
);

const SelfEsteemIcon = () => (
  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const TraumaIcon = () => (
  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v2H8V2c0-.55-.45-1-1-1s-1 .45-1 1v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>
  </svg>
);

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const whatsappNumber = "5511999962562"; // Altere para o número real
  const whatsappMessage = "Olá! Gostaria de solicitar informações sobre sessões de hipnoterapia.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Ultra Profissional */}
      <header className="fixed top-0 w-full backdrop-blur-md border-b border-rose-100/50 z-50 transition-all duration-300" style={{backgroundColor: '#f4c6c8bb'}}>
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex items-center justify-center">
                <img 
                  src="/images/logo.png" 
                  alt="Ursula Caetano Logo"
                  className="w-full h-full object-contain"
                />
              </div>
                              <div>
                  <h1 className="text-xl font-bold font-display gradient-text">
                    Ursula Caetano
                  </h1>
                  <p className="text-sm text-gray-600">Hipnoterapeuta Clínica</p>
                </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#especialidades" className="text-gray-700 hover:text-pink-700 transition-colors font-medium">Especialidades</a>
              <a href="#sobre" className="text-gray-700 hover:text-pink-700 transition-colors font-medium">Sobre</a>
              <button
                onClick={openWhatsApp}
                className="btn-primary text-sm"
              >
                Agendar Sessão
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section Elegante */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Imagem de fundo - Banner hipnoterapia */}
        <div className="absolute inset-0">
          <img 
            src="/images/Banner-Blog-4.png" 
            alt="Sessão de Hipnoterapia - Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/90"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-pink-100/90 backdrop-blur-sm rounded-full mb-6">
                <CertificationIcon />
                <span className="ml-2 text-pink-800 font-medium text-sm">Hipnoterapeuta Certificada</span>
              </div>
              <h1 className="text-hero font-display text-gray-900 mb-6">
                Transforme sua Vida com
                <span className="block gradient-text">Hipnoterapia Clínica</span>
              </h1>
              <p className="text-subhero mb-8 leading-relaxed text-gray-800">
                Hipnoterapia especializada para superação de limitações, 
                tratamento de ansiedade, fobias e mudança de padrões comportamentais. 
                Atendimento acolhedor e personalizado para sua transformação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={openWhatsApp}
                  className="btn-primary text-lg"
                >
                  Agendar Sessão
                </button>
                <a 
                  href="#sobre"
                  className="btn-secondary text-lg text-center"
                >
                  Conhecer Método
                </a>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-700">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>Atendimento personalizado</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>Presencial e online</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fadeIn max-w-sm mx-auto">
              <div className="bg-white rounded-3xl p-6 shadow-2xl animate-subtleFloat border border-pink-100">
                <div className="w-full aspect-[9/16] rounded-2xl overflow-hidden relative">
                  <img 
                    src="/images/foto1.jpg" 
                    alt="Ursula Caetano - Hipnoterapeuta"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-800/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white z-10">
                    <h3 className="text-xl font-bold mb-2 drop-shadow-xl">Hipnoterapia Clínica</h3>
                    <p className="text-white drop-shadow-xl font-medium">Técnicas Comprovadas e Seguras</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-lg font-bold text-gray-800 gradient-text">Ursula Caetano</h4>
                  <p className="text-sm text-gray-600">Hipnoterapeuta Clínica Certificada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Especialidades */}
      <section id="especialidades" className="section-padding gradient-bg">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-display gradient-text-subtle mb-6">
              Especialidades em Hipnoterapia
            </h2>
            <div className="decorative-line"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atendimento especializado em hipnoterapia clínica com técnicas 
              comprovadas para transformação pessoal e superação de limitações
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="luxury-card rounded-2xl p-8 text-center transition-all duration-300 animate-fadeInUp">
              <div className="icon-wrapper">
                <TherapyIcon />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 font-display">Hipnoterapia Clínica</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Técnicas avançadas de hipnose clínica para tratamento de 
                questões emocionais e comportamentais profundas.
              </p>
              <ul className="text-sm text-gray-500 space-y-3 text-left">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-pink-700 rounded-full mr-3"></div>
                  Sessões individualizadas
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-pink-700 rounded-full mr-3"></div>
                  Técnicas comprovadas
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-pink-700 rounded-full mr-3"></div>
                  Acompanhamento contínuo
                </li>
              </ul>
            </div>
            <div className="luxury-card rounded-2xl p-8 text-center transition-all duration-300 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="icon-wrapper">
                <AnxietyIcon />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 font-display">Ansiedade e Fobias</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Tratamento especializado para ansiedade, síndrome do pânico, 
                fobias e medos limitantes.
              </p>
              <ul className="text-sm text-gray-500 space-y-3 text-left">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-pink-700 rounded-full mr-3"></div>
                  Redução da ansiedade
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-pink-700 rounded-full mr-3"></div>
                  Superação de medos
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-pink-700 rounded-full mr-3"></div>
                  Técnicas de relaxamento
                </li>
              </ul>
            </div>
            <div className="luxury-card rounded-2xl p-8 text-center transition-all duration-300 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <div className="icon-wrapper">
                <HabitsIcon />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 font-display">Mudança de Hábitos</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transformação de padrões comportamentais, vícios e 
                criação de novos hábitos saudáveis.
              </p>
              <ul className="text-sm text-gray-500 space-y-3 text-left">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-pink-700 rounded-full mr-3"></div>
                  Parar de fumar
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-pink-700 rounded-full mr-3"></div>
                  Controle de peso
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-pink-700 rounded-full mr-3"></div>
                  Novos hábitos positivos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Condições Tratadas */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display gradient-text-subtle mb-6">
              Condições Tratadas com Hipnoterapia
            </h2>
            <div className="decorative-line"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ampla experiência no tratamento de diversas questões emocionais e comportamentais
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Ansiedade', desc: 'Transtorno de ansiedade generalizada', icon: <AnxietyConditionIcon /> },
              { name: 'Síndrome do Pânico', desc: 'Ataques de pânico e fobias', icon: <PanicIcon /> },
              { name: 'Depressão', desc: 'Apoio no tratamento da depressão', icon: <DepressionIcon /> },
              { name: 'Insônia', desc: 'Distúrbios do sono', icon: <InsomniaIcon /> },
              { name: 'Tabagismo', desc: 'Parar de fumar definitivamente', icon: <SmokingIcon /> },
              { name: 'Compulsões', desc: 'Alimentar, compras, jogos', icon: <CompulsionIcon /> },
              { name: 'Autoestima', desc: 'Fortalecimento da confiança', icon: <SelfEsteemIcon /> },
              { name: 'Traumas', desc: 'Superação de traumas passados', icon: <TraumaIcon /> }
            ].map((condition, index) => (
              <div key={index} className="professional-card rounded-xl p-6 text-center transition-all duration-300">
                <div className="flex justify-center mb-3">
                  {condition.icon}
                </div>
                <h4 className="font-bold text-gray-800 mb-2 font-display">{condition.name}</h4>
                <p className="text-sm text-gray-600">{condition.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre - Seção Profissional */}
      <section id="sobre" className="section-padding gradient-bg-elegant">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeInUp">
              <h2 className="text-4xl lg:text-5xl font-bold font-display mb-8">
                <span className="gradient-text">Ursula Caetano</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Ursula Caetano é uma hipnoterapeuta totalmente fascinada pelos resultados extraordinários da Hipnose e pela oportunidade de transformar vidas.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                É especialista em Hipnoterapia Avançada (OMNI Hypnosis Institute) e Reprogramação Mental. Thethahealer formada pelos cursos de DNA Básico (Instituto Vallin Terapias), DNA Avançado (Instituto Dani Ballester) e Aprofundando no Digging (Instituto Dani Ballester).
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CertificationIcon />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Formação Especializada</h4>
                    <p className="text-gray-600">Certificação Internacional NGH • Formação em Hipnose Clínica • Especialização em Hipnoterapia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CertificationIcon />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Certificações</h4>
                    <p className="text-gray-600">National Guild of Hypnotists (NGH) • Certified Hypnotherapist • Formação Continuada</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CertificationIcon />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Experiência Clínica</h4>
                    <p className="text-gray-600">Clínica particular • Atendimento online • Workshops e palestras especializadas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative max-w-sm mx-auto">
              <div className="bg-white rounded-3xl p-6 shadow-2xl animate-subtleFloat border border-pink-100">
                <div className="w-full aspect-[9/16] rounded-2xl overflow-hidden relative">
                  <img 
                    src="/images/foto2.jpg" 
                    alt="Ursula Caetano - Hipnoterapeuta Clínica"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-800/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white z-10">
                    <h3 className="text-xl font-bold mb-2 drop-shadow-xl">Sobre Ursula</h3>
                    <p className="text-white drop-shadow-xl font-medium">Hipnoterapeuta Especializada</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-lg font-bold text-gray-800 gradient-text">Ursula Caetano</h4>
                  <p className="text-sm text-gray-600">Transformando Vidas com Hipnoterapia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section Premium */}
      <section className="section-padding bg-gradient-to-r from-pink-700 via-pink-800 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold font-display mb-8">
              Comece sua Transformação Hoje
            </h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Agende uma sessão de hipnoterapia e descubra como superar limitações, 
              reduzir ansiedade e criar a vida que você sempre desejou. 
              Atendimento acolhedor e personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={openWhatsApp}
                className="bg-white text-pink-800 hover:bg-gray-100 text-xl px-12 py-4 rounded-xl transition-all duration-300 hover:scale-105 font-semibold inline-flex items-center justify-center"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
                </svg>
                Agendar Sessão
              </button>
            </div>
            <div className="text-center opacity-80">
              <p className="text-sm">Atendimento presencial e online disponível</p>
            </div>
          </div>
        </div>
      </section>



      {/* Floating WhatsApp Button Elegante */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={openWhatsApp}
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
