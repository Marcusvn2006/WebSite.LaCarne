import style from './Button.module.css'
import whatsapp from '../assets/svg/whatsapp.svg';

const Button = () => {
  return (
    <button className={style.buttonRed}>
      Entrar em contato   
      <span className={style.iconCircle}>
        <img src={whatsapp} alt="Seta para a direita" />
      </span>
    </button>
  )
}

export default Button
