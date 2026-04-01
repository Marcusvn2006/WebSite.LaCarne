import { useState, useEffect } from 'react';
import style from './Header.module.css';
import logo from '../assets/svg/logobranco.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={style.headerContainer}>
        <div className={style.navbar}>
          <div className={style.logoWrapper}>
            <img src={logo} alt="La Carne" className={style.logo} />
          </div>

          <nav className={style.navLinks}>
            <a href="#inicio" className={style.active}>Início</a>
            <a href="#sobre">Sobre Nós</a>
            <a href="#experiencia">Experiência</a>
            <a href="#assados">Assados</a>
            <a href="#detalhes">Detalhes</a>
          </nav>

          <button
            className={`${style.hamburger} ${menuOpen ? style.open : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav className={`${style.mobileMenu} ${menuOpen ? style.open : ''}`}>
        <a href="#inicio" className={style.active} onClick={closeMenu}>Início</a>
        <a href="#sobre" onClick={closeMenu}>Sobre Nós</a>
        <a href="#experiencia" onClick={closeMenu}>Experiência</a>
        <a href="#assados" onClick={closeMenu}>Assados</a>
        <a href="#detalhes" onClick={closeMenu}>Detalhes</a>
      </nav>
    </>
  );
};

export default Header;