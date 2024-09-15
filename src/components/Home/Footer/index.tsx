import Link from "next/link";
import styles from "./styles.module.scss";
import { FaInstagram, FaSpotify } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerDivision}>
                    <div className={styles.footerContent}>
                        <div className={styles.logoAndAddress}>
                            <img className={styles.logo} src="/next.svg" alt="Logotipo Garage Eventos" />
                            <p className={styles.address}>Avenida Domingo Rodrigues, 149 - Oneda | SP</p>
                        </div>
                        
                        <ul className={styles.navFooter}>
                            <li><Link href="#home">Início</Link></li>
                            <li><Link href="#events">Programação</Link></li>
                            <li><Link href="#about">Sobre a Casa</Link></li>
                            <li><Link href="#contact">Contato</Link></li>
                        </ul>
                    </div>

                    <div className={styles.social}>
                        <div className={styles.socialContent}>
                            <Link href="#" className={styles.socialItem}><FaInstagram /></Link>
                            <Link href="#" className={styles.socialItem}><FaSpotify /></Link>
                        </div>

                        <p className={styles.developer}>Desenvolvido por <Link href="https://ovitormacel.com">Vitor Macel</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;