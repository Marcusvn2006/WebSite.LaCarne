import style from './ButtonRed.module.css';
import location from '../assets/svg/location.svg';

const ButtonRed = () => {
  const handleClick = () => {
    window.open('https://www.google.com/maps/place/La+Carne+(+acougue+do+Rodrigo)/@-22.2806763,-48.5446442,3a,75y,336.53h,90t/data=!3m7!1e1!3m5!1shEXktqUlzv0MoMJPeRBRYA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DhEXktqUlzv0MoMJPeRBRYA%26yaw%3D336.52936!7i16384!8i8192!4m14!1m7!3m6!1s0x94b8a7f16e876c69:0x4a0cdb24c802e7f!2sLa+Carne+(+acougue+do+Rodrigo)!8m2!3d-22.2806038!4d-48.5446782!16s%2Fg%2F11trdy301t!3m5!1s0x94b8a7f16e876c69:0x4a0cdb24c802e7f!8m2!3d-22.2806038!4d-48.5446782!16s%2Fg%2F11trdy301t?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  return (
    <button className={style.buttonRed} onClick={handleClick}>
      Adquirir carne
      <span className={style.iconCircle}>
        <img src={location} alt="Localização" />
      </span>
    </button>
  );
}

export default ButtonRed;