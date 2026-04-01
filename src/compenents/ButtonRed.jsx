import style from './ButtonRed.module.css';
import arrow from '../assets/svg/arrow.svg';

const ButtonRed = () => {
  const handleClick = () => {
    window.open('https://wa.me/5514988151281', '_blank');
  };

  return (
    <button className={style.buttonRed} onClick={handleClick}>
      Adquirir carne
      <span className={style.iconCircle}>
        <img src={arrow} alt="Seta para a direita" />
      </span>
    </button>
  );
}

export default ButtonRed;