import style from './Button.module.css'
import whatsapp from '../assets/svg/whatsapp.svg';

const Button = () => {
  const handleClick = () => {
    window.open('https://wa.me/5514988151281', '_blank');
  };

  return (
    <button className={style.buttonRed} onClick={handleClick}>
      Entrar em contato    
      <span className={style.iconCircle}>
        <img src={whatsapp} alt="WhatsApp" />
      </span>
    </button>
  )
}

export default Button