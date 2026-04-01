import styles from './Footer.module.css'
import logo from '../assets/svg/logobranco.svg' 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoColumn}>
          <img src={logo} alt="La Carne" className={styles.logo} />
        </div>

        <div className={styles.linkColumn}>
          <h3 className={styles.title}>Navegação</h3>
          <ul className={styles.list}>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre Nós</a></li>
            <li><a href="#experiencia">Experiência</a></li>
            <li><a href="#assados">Assados</a></li>
            <li><a href="#detalhes">Detalhes</a></li>
          </ul>
        </div>

        <div className={`${styles.linkColumn} ${styles.centerColumn}`}>
          <h3 className={styles.title}>Contato</h3>
          <ul className={styles.list}>
            {/* Telefone */}
            <li>
              <a href="tel:+5514988151281" className={styles.iconLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.19-2.19a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +55 14 98815-1281
              </a>
            </li>
            {/* Instagram */}
            <li>
              <a href="https://www.instagram.com/lacarnejau/" className={styles.iconLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                lacarnejau
              </a>
            </li>
            {/* E-mail */}
            <li>
              <a href="mailto:lacarnejau@hotmail.com" className={styles.iconLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                lacarnejau@hotmail.com
              </a>
            </li>
            {/* Endereço */}
            <li>
              <a href="#" className={styles.iconLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Avenida João Ferraz Neto, 1265
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <h3 className={styles.title}>Horários</h3>
          <ul className={styles.list}>
            <li style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '8px' }}>Terça a Sexta: 08:00 - 18:40</li>
            <li style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '8px' }}>Sábado: 08:00 - 17:40</li>
            <li style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '8px' }}>Domingo: 07:30 - 12:30</li>
            <li style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '8px' }}>Segunda: 08:00 - 12:00 / 14:30 - 18:40</li>
          </ul>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.85rem', color: '#ccc' }}>
        <p>&copy; {new Date().getFullYear()} La Carne. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer