import style from './Header.module.css';
import logo from '../assets/svg/logobranco.svg';

const Header = () => {
  return (
    <header className={style.headerContainer}>
      <div className={style.navbar}>
        <div className={style.logoWrapper}>
          <img src={logo} alt="La Carne" className={style.logo} />
        </div>
        <nav className={style.navLinks}>
          <a href="#home1" className={style.active}>Home</a>
          <a href="#home2">Home</a>
          <a href="#home3">Home</a>
          <a href="#home3">Home</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;