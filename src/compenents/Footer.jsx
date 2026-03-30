import styles from './Footer.module.css'
import logo from '../assets/svg/logobranco.svg' // Substitua pelo caminho correto da sua logo

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoColumn}>
          <img src={logo} alt="La Carne" className={styles.logo} />
        </div>

        <div className={styles.linkColumn}>
          <h3 className={styles.title}>Title teste</h3>
          <ul className={styles.list}>
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">Lorem ipsum</a></li>
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <h3 className={styles.title}>Title teste</h3>
          <ul className={styles.list}>
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">Lorem ipsum</a></li>
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <h3 className={styles.title}>Title teste</h3>
          <ul className={styles.list}>
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">Lorem ipsum</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer