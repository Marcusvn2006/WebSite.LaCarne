import { useState, useEffect } from 'react';
import style from './Header.module.css';
import logo from '../assets/svg/logobranco.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Trava o scroll quando o menu está aberto
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

          {/* Links desktop */}
          <nav className={style.navLinks}>
            <a href="#home1" className={style.active}>Home</a>
            <a href="#home2">Home</a>
            <a href="#home3">Home</a>
            <a href="#home4">Home</a>
          </nav>

          {/* Botão hambúrguer */}
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

      {/* Drawer mobile */}
      <nav className={`${style.mobileMenu} ${menuOpen ? style.open : ''}`}>
        <a href="#home1" className={style.active} onClick={closeMenu}>Home</a>
        <a href="#home2" onClick={closeMenu}>Home</a>
        <a href="#home3" onClick={closeMenu}>Home</a>
        <a href="#home4" onClick={closeMenu}>Home</a>
      </nav>
    </>
  );
};

export default Header;