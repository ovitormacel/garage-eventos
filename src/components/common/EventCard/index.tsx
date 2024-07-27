import Link from "next/link"
import styles from "./styles.module.scss";
import { Event } from "@/pages/api/getAllNextEvents";

interface props {
    event: Event
}

const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
const EventsCard = ({event}: props) => {
    return (
        <li className={styles.eventCard}>
            <div className={styles.col1}>
                <div className={styles.date}>
                    <p className={styles.day}>{event.date.day}</p>
                    <p className={styles.month}>de {meses[event.date.month].slice(0, 3)}.</p>
                </div>
            
                <div className={styles.infos}>
                    <h3>{event.name}</h3>
                    <div className={styles.infosTitleDate}>
                        <p className={styles.titleDate}>{event.date.day} de {meses[event.date.month]} de {event.date.year}</p>
                        <p className={styles.titleHour}>{event.date.hour}:{event.date.minutes.toString().padStart(2, "0")}</p>
                    </div>  
                </div>
            </div>
            
            <Link href="#" className={styles.infosButton}>Ver Mais</Link>
        </li>
    )
}

export default EventsCard;