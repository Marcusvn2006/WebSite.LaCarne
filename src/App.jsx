import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ReactLenis } from 'lenis/react';

import banner from "../src/assets/img/banner-lacarne.webp";
import arrowImg from "../src/assets/img/arrowamarelo.png";
import ctaImg from "../src/assets/img/cta-img.webp";
import carneVetor from "../src/assets/svg/carnevetorfundo.svg";
import cardImg from "../src/assets/img/imgcardexp.webp";
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

/* ── App ── */
const App = () => {
  const containerRef  = useRef(null);
  const textPathRef   = useRef(null);
  const cardsRef      = useRef(null);

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

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <div>
        <Header />

        {/* ── Hero ── */}
        <section className="hero-section">
          <div className="hero-bg">
            <img src={banner} alt="La Carne Banner" />
          </div>
          <div className="hero-content">
            <h1 className="hero-title">Title teste</h1>
            <p className="hero-text">
              Lorem ipsum dolor sit amet. Ad fugiat quaerat in saepe doloribus
              est molestiasdnkjkabd asd oajsdoa.
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
                embarque nessa leitura super divertida • embarque nessa leitura
                super divertida • embarque nessa leitura super divertida •
              </textPath>
            </text>
          </svg>
        </div>

        {/* ── About ── */}
        <section className="about-section">
          <img src={carneVetor} alt="Decoração Fundo" className="bg-icon-right" />

          <div className="about-left">
            <img src={ctaImg} alt="Corte de Carne Especial" className="about-image" />
            <div className="years-badge">+30 anos</div>
          </div>

          <div className="about-right">
            <AnimatedTitle text="Title teste" className="about-title" Tag="h2" />
            <AnimatedTextScrub
              className="about-text"
              text="Lorem ipsum dolor sit amet. Ad fugiat quaerat in saepe doloribus est molestias illum. Vel porro tempora ut quam perferendis et quasi officia et illo velit non aliquam eius. Et nemo odit aut quisquam sequi rem officia alias aut omnis asperio. Lorem ipsum dolor sit amet. Ad fugiat quaerat in saepe doloribus est molestias illum. Vel porro tempora ut quam perferendis."
            />
            <div className="about-buttons">
              <ButtonRed />
              <Button />
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="experience-section">
          <img src={talherVetor} alt="Talheres Fundo" className="bg-icon-talher" />

          <div className="experience-header">
            <AnimatedTitle
              text="Title teste Title teste"
              className="experience-title"
              Tag="h2"
            />
            <p className="experience-subtitle">
              Lorem ipsum dolor sit amet. Ad fugiat quaerat in saepe{' '}
              <br />
              doloribus est molestias illum.
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

            <div className="cards-container" ref={cardsRef}>
              {[1, 2, 3].map((item) => (
                <div key={item} className="exp-card">
                  <img src={cardImg} alt="Preparo de Carne" className="exp-card-img" />
                  <div className="exp-card-content">
                    <h3 className="exp-card-title">Title teste Title teste</h3>
                    <p className="exp-card-desc">
                      Lorem ipsum dolor sit amet. Ad fugiat quaerat in saepe
                      doloribus est molestias illum. Lorem ipsum dolor sit amet.
                    </p>
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
          </div>
        </section>

        {/* ── Assados ── */}
        <section className="assados-section">
          <div className="assados-container">
            <div className="assados-header">
              <AnimatedTitle
                text="Title teste Title as"
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
                  text="Lorem ipsum dolor sit amet. Ad fugiat quaerat in saepe doloribus est molestias illum. Vel porro tempora ut quam perferendis et quasi officia et illo velit non aliquam eius. Et nemo odit aut quisquam sequi rem officia alias aut omnis asperiores aut excepturi excepturi et molestiae voluptatem. Eum fuga minima non rerum neque in expedita optio et sint assumenda id mollitia voluptatem sit volupta. Lorem ipsum dolor sit amet. Ad fugiat quaerat in saepe doloribus est molestias illum. Vel porro tempora ut quam perferendis et quasi officia et illo velit non aliquam eius."
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Details ── */}
        <section className="details-section">
          <img src={frangoVetor} alt="Fundo Bife" className="bg-icon-bife" />
          <img src={bifeVetor} alt="Fundo Frango" className="bg-icon-frango" />

          <div className="details-top">
            <AnimatedTextScrub
              text="Lorem ipsum dolor sit amet. Ad fugiat quaerat in saepe doloribus est molestias illum. Vel porro tempora ut quam perferendis et quasi officia et illo velit non aliquam eius. Et nemo odit aut quisquam sequi rem officia alias aut omnis asperiores aut excepturi excepturi et molestiae voluptatem. Eum fuga minima non rerum neque in expedita optio et sint assumenda id mollitia voluptatem sit volupta."
            />
          </div>

          <div className="details-content">
            <div className="details-left">
              <AnimatedTitle
                text="Title teste"
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
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="feature-item">
                    <div className="feature-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="#4a4a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <line x1="3" y1="9" x2="21" y2="9" />
                        <line x1="9" y1="21" x2="9" y2="9" />
                      </svg>
                    </div>
                    <h3 className="feature-title">Lorem ipsum dolor sit ame</h3>
                    <p className="feature-text">
                      Lorem ipsum dolor sit amet. Ad fugiat quaerat in saepe
                      doloribus est molestias illum. Vel porro tempora ut quam
                      perferendis et quasi officia et illo velit non aliquam eius.
                    </p>
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