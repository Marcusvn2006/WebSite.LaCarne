import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ReactLenis } from 'lenis/react';

import banner from "../src/assets/img/banner-lacarne.webp";
import bannerMobile from "../src/assets/img/banner-mobile.webp";
import arrowImg from "../src/assets/img/arrowamarelo.png";
import ctaImg from "../src/assets/img/cta-img.webp";
import carneVetor from "../src/assets/svg/carnevetorfundo.svg";
import cardImg from "../src/assets/img/imgcardexp.webp";
import cardDriveImg from "../src/assets/img/card-drive.webp";
import attEspecializadoImg from "../src/assets/img/att-especializado.webp";
import talherVetor from "../src/assets/svg/talhervetorfundo.svg";
import assadosImg from "../src/assets/img/sectionAssados.webp";
import assadosImg2 from "../src/assets/img/sectionAssados2.webp";
import frangoVetor from "../src/assets/svg/frangovetorfundo.svg";
import bifeVetor from "../src/assets/svg/bifevetorfundo.svg";

import './App.css';
import Header from './compenents/Header';
import Button from './compenents/Button';
import ButtonRed from './compenents/ButtonRed';
import Footer from './compenents/Footer';

gsap.registerPlugin(ScrollTrigger);

/* ── Animated Title ── */
const AnimatedTitle = ({ text, className, Tag = 'h2' }) => {
  const textRef = useRef(null);

  useGSAP(() => {
    const chars = textRef.current.querySelectorAll('.anim-char');
    gsap.fromTo(chars,
      { y: '100%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 0.8,
        stagger: 0.04,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 90%',
        }
      }
    );
  }, { scope: textRef });

  return (
    <Tag ref={textRef} className={className} aria-label={text} style={{ display: 'block' }}>
      {text.split(' ').map((word, wIndex) => (
        <span
          key={wIndex}
          style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.25em', verticalAlign: 'bottom' }}
        >
          {word.split('').map((char, cIndex) => (
            <span key={cIndex} className="anim-char" style={{ display: 'inline-block' }}>
              {char}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
};

/* ── Animated Text Scrub ── */
const AnimatedTextScrub = ({ text, className }) => {
  const textRef = useRef(null);

  useGSAP(() => {
    const chars = textRef.current.querySelectorAll('.anim-char-scrub');
    gsap.fromTo(chars,
      { opacity: 0.2 },
      {
        opacity: 1,
        stagger: 0.1,
        ease: 'none',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
          end: 'center 50%',
          scrub: true,
        }
      }
    );
  }, { scope: textRef });

  return (
    <p ref={textRef} className={className} aria-label={text}>
      {text.split(' ').map((word, wIndex) => (
        <span key={wIndex} style={{ display: 'inline-block', marginRight: '0.25em' }}>
          {word.split('').map((char, cIndex) => (
            <span key={cIndex} className="anim-char-scrub" style={{ display: 'inline-block', opacity: 0.2 }}>
              {char}
            </span>
          ))}
        </span>
      ))}
    </p>
  );
};

/* ── Cards data ── */
const experienceCards = [
  {
    title: 'Cortes Selecionados',
    desc: 'Trabalhamos apenas com carnes de alta procedência — macias, saborosas e com o frescor que você merece em cada pedaço.',
    image: cardImg, // Imagem do primeiro card mantida
  },
  {
    title: 'Delivery Premium',
    desc: 'Sem sair de casa você recebe os melhores cortes na sua porta. Praticidade com o mesmo padrão La Carne de sempre.',
    image: cardDriveImg, // Nova imagem do segundo card
  },
  {
    title: 'Atendimento Especializado',
    desc: 'Nossa equipe conhece cada corte e está pronta para te indicar a escolha certa para o seu churrasco ou jantar especial.',
    image: attEspecializadoImg, // Nova imagem do terceiro card
  },
];

const features = [
  {
    title: 'Qualidade Garantida',
    text: 'Selecionamos apenas carnes de alta procedência, com rigoroso controle de qualidade em cada peça que chega ao nosso açougue.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    )
  },
  {
    title: 'Cortes Sob Medida',
    text: 'Fazemos o corte do jeito que você precisa. Seja para o churrasco do fim de semana ou um jantar especial, adaptamos para a sua ocasião.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 4h12v8c0 2.2-1.8 4-4 4H8V4z" />
        <rect x="2" y="10" width="6" height="4" rx="1" />
        <circle cx="17" cy="7" r="1" />
      </svg>
    )
  },
  {
    title: 'Delivery Rápido',
    text: 'Receba os melhores cortes sem sair de casa. Entregamos com agilidade e o mesmo cuidado do atendimento presencial.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    )
  },
  {
    title: 'Açougue de Confiança',
    text: 'Mais de 4 anos servindo Jaú com excelência. Aqui você encontra um açougue que respeita o cliente e leva qualidade a sério.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
];

/* ── App ── */
const App = () => {
  const containerRef  = useRef(null);
  const textPathRef   = useRef(null);
  const cardsRef      = useRef(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  /* Marquee scroll */
  useGSAP(() => {
    gsap.to(textPathRef.current, {
      attr: { startOffset: "-50%" },
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
  }, { scope: containerRef });

  /* Carousel arrows — scroll programático */
  const scrollCards = (direction) => {
    if (!cardsRef.current) return;
    const card = cardsRef.current.querySelector('.exp-card');
    const cardWidth = card ? card.offsetWidth + 24 : 320;
    cardsRef.current.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    if (cardsRef.current) {
      cardsRef.current.style.cursor = 'grabbing';
      cardsRef.current.style.scrollBehavior = 'auto';
      startX.current = e.pageX - cardsRef.current.offsetLeft;
      scrollLeft.current = cardsRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    if (cardsRef.current) {
      cardsRef.current.style.cursor = 'grab';
      cardsRef.current.style.scrollBehavior = 'smooth';
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (cardsRef.current) {
      cardsRef.current.style.cursor = 'grab';
      cardsRef.current.style.scrollBehavior = 'smooth';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    if (cardsRef.current) {
      const x = e.pageX - cardsRef.current.offsetLeft;
      const walk = (x - startX.current) * 2;
      cardsRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <div>
        <Header />

        {/* ── Hero ── */}
        <section id="inicio" className="hero-section">
          <div className="hero-bg">
            <picture>
              <source media="(max-width: 768px)" srcSet={bannerMobile} />
              <img src={banner} alt="La Carne Banner" />
            </picture>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">
              A carne que você merecia experimentar — finalmente em Jaú.
            </h1>
            <p className="hero-text">
              Selecionamos os melhores cortes para quem não abre mão de qualidade.
              Do açougue à sua mesa, com o cuidado de quem entende de carne de verdade.
            </p>
            <Button />
          </div>
        </section>

        {/* ── Marquee ── */}
        <div className="marquee-wrapper" ref={containerRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 400"
            className="marquee-svg"
          >
            <defs>
              <path
                id="curve"
                d="M-71 400 Q 100 50 720 190 Q 1000 250 1511 200"
                fill="none"
              />
            </defs>
            <path
              className="marquee-bg"
              d="M-71 400 Q 100 50 720 190 Q 1000 250 1511 200"
            />
            <text className="marquee-text">
              <textPath ref={textPathRef} href="#curve" startOffset="50%">
                Qualidade que se sente no primeiro corte • Açougue Premium em Jaú • Do produtor à sua mesa • Qualidade que se sente no primeiro corte • Açougue Premium em Jaú • Do produtor à sua mesa •
              </textPath>
            </text>
          </svg>
        </div>

        {/* ── About ── */}
        <section id="sobre" className="about-section">
          <img src={carneVetor} alt="Decoração Fundo" className="bg-icon-right" />

          <div className="about-left">
            <img src={ctaImg} alt="Corte de Carne Especial" className="about-image" />
            <div className="years-badge">+4 anos</div>
          </div>

          <div className="about-right">
            <AnimatedTitle text="Quem Somos" className="about-title" Tag="h2" />
            <AnimatedTextScrub
              className="about-text"
              text="Na La Carne, acreditamos que uma boa refeição começa muito antes do fogo acender. Começa na escolha. Trabalhamos apenas com carnes de alta procedência, selecionadas criteriosamente para garantir maciez, sabor e frescor em cada corte. Somos o açougue de Jaú para quem leva a mesa a sério."
            />
            <div className="about-buttons">
              <ButtonRed />
              <Button />
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experiencia" className="experience-section">
          <img src={talherVetor} alt="Talheres Fundo" className="bg-icon-talher" />

          <div className="experience-header">
            <AnimatedTitle
              text="O que nos torna diferentes"
              className="experience-title"
              Tag="h2"
            />
            <p className="experience-subtitle">
              Da procedência ao corte, cada detalhe é pensado para{' '}
              <br />
              chegar perfeito até você.
            </p>
          </div>

          <div className="experience-carousel">
            <button
              className="carousel-arrow"
              onClick={() => scrollCards(-1)}
              aria-label="Anterior"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
                stroke="#931a25" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            <div
              className="cards-container"
              ref={cardsRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {experienceCards.map((card, index) => (
                <div
                  key={index}
                  className="exp-card"
                  onClick={(e) => {
                    if (!isDragging.current) {
                      e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <img src={card.image} alt={card.title} className="exp-card-img disable-drag" />
                  <div className="exp-card-content">
                    <h3 className="exp-card-title">{card.title}</h3>
                    <p className="exp-card-desc disable-drag">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-arrow"
              onClick={() => scrollCards(1)}
              aria-label="Próximo"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
                stroke="#931a25" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>

          <div className="experience-cta">
            <Button />
            <ButtonRed/>
          </div>
        </section>

        {/* ── Assados ── */}
        <section id="assados" className="assados-section">
          <div className="assados-container">
            <div className="assados-header">
              <AnimatedTitle
                text="Assados de Dar Água na Boca"
                className="assados-title"
                Tag="h2"
              />
              <img src={arrowImg} alt="Seta Amarela" className="assados-arrow" />
            </div>

            <div className="assados-body">
              <div className="assados-left">
                <img
                  src={assadosImg}
                  alt="Carnes Defumando"
                  className="assados-img-tall"
                />
                <div className="assados-btn-wrapper">
                  <Button />
                </div>
              </div>

              <div className="assados-right">
                <img
                  src={assadosImg2}
                  alt="Frango Assado"
                  className="assados-img-wide"
                />
                <AnimatedTextScrub
                  className="assados-text"
                  text="Seja no espeto, na brasa ou na grelha — na La Carne você encontra tudo o que precisa para um assado inesquecível. Nossas carnes são selecionadas especialmente para garantir suculência, sabor e aquela crocância perfeita por fora. Do frango ao corte bovino, cada peça chega até você com o cuidado de quem vive e respira carne. Porque um bom assado começa muito antes de acender o fogo — começa na escolha certa."
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Details ── */}
        <section id="detalhes" className="details-section">
          <img src={frangoVetor} alt="Fundo Bife" className="bg-icon-bife" />
          <img src={bifeVetor} alt="Fundo Frango" className="bg-icon-frango" />

          <div className="details-top">
            <AnimatedTextScrub
              text="Cada corte que sai da La Carne passa por uma seleção rigorosa de qualidade. Não trabalhamos com qualquer coisa — escolhemos a dedo cada peça para garantir que o que chega até você seja sempre o melhor. Acreditamos que servir bem vai além do produto — é sobre a experiência completa, do atendimento à entrega, do primeiro contato até a última garfada. Porque quem entende de carne sabe que qualidade não é detalhe, é o ponto de partida."
            />
          </div>

          <div className="details-content">
            <div className="details-left">
              <AnimatedTitle
                text="Por que escolher a La Carne?"
                className="details-title"
                Tag="h2"
              />
              <img src={arrowImg} alt="Seta" className="details-arrow" />
              <div className="details-cards">
                <div className="detail-card" />
                <div className="detail-card" />
              </div>
            </div>

            <div className="details-right">
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">
                      {feature.icon}
                    </div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-text">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;