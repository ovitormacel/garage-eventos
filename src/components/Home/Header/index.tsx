import Link from "next/link";
import styles from "./styles.module.scss";

import { FaInstagram, FaSpotify } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={`container ${styles.containerHeader}`}>
                     <img src="/next.svg" alt="Logotipo Garage" className={styles.logotipo}/>
                     <nav className={styles.navbar}>
                        <Link href="#" className={styles.navItem}>Inicio</Link>
                        <Link href="#" className={styles.navItem}>Programação</Link>
                        <Link href="#" className={styles.navItem}>Sobre a Casa</Link>
                        <Link href="#" className={styles.navItem}>Contato</Link>
                     </nav>
                     <div className={styles.social}>
                        <Link href="#" className={styles.socialItem}><FaInstagram /></Link>
                        <Link href="#" className={styles.socialItem}><FaSpotify /></Link>
                     </div>
                </div>
            </header>
        </>
    )
}

export default Header;