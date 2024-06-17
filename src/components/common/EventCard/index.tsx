import Link from "next/link"
import styles from "./styles.module.scss";

const EventsCard = () => {
    return (
        <li className={styles.eventCard}>
            <div className={styles.col1}>
                <div className={styles.date}>
                    <p className={styles.day}>17</p>
                    <p className={styles.month}>de Set.</p>
                </div>
            
                <div className={styles.infos}>
                    <h3>BROTHERS RUSH</h3>
                    <div className={styles.infosTitleDate}>
                        <p className={styles.titleDate}>17 de Setembro de 2024</p>
                        <p className={styles.titleHour}>21:00</p>
                    </div>  
                </div>
            </div>
            
            <Link href="#" className={styles.infosButton}>Ver Mais</Link>
        </li>
    )
}

export default EventsCard;