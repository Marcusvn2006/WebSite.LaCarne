import style from './ButtonRed.module.css';
import arrow from '../assets/svg/arrow.svg';

const ButtonRed = () => {
  return (
    <button className={style.buttonRed}>
      Adiquirir carne
      <span className={style.iconCircle}>
        <img src={arrow} alt="Seta para a direita" />
      </span>
    </button>
  );
}

export default ButtonRed;