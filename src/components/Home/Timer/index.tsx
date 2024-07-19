import Link from "next/link";
import styles from "./styles.module.scss";
import { Event } from "@/pages/api/getAllNextEvents";
import { useState } from "react";

interface props {
    eventsList: Event[]
  }

const Timer = ({eventsList}: props) => {
    
    const getMostRecentEvents = () => {
        var recent: number = 0;
        var recentEvent: any;

        eventsList.forEach((event) => {
            var eventDateTime = new Date(event.date.year, event.date.month, event.date.day, event.date.hour, event.date.minutes).getTime();
            
            if(eventDateTime > new Date().getTime() && eventDateTime < recent){
                recent = eventDateTime;
                recentEvent = event;
            }
            else if(recent == 0){
                recent = eventDateTime;
                recentEvent = event;
            }

        })

        return recentEvent;
    }

    const getDifference = () => {
        if(mostRecentEvent != null) {
            const event = mostRecentEvent;

            const eventDate = new Date(event.date.year, event.date.month, event.date.day, event.date.hour, event.date.minutes);
            const today = new Date(Date.now());

            return (eventDate.getTime() - today.getTime());
        }
    }

    const [mostRecentEvent, setMostRecentEvent] = useState(getMostRecentEvents());
    const [differenceTime, setDifferenceTime] = useState(getDifference());

    return (
        <>
            {mostRecentEvent != null ? (
                <div className={styles.timer}>
                <div className={styles.col1}>
                    <p className={styles.timerTitle}>Próximo Evento: <span className={styles.eventTitle}>Brothers Rush</span></p>
                
                    <div className={styles.timerClock}>
                        <div className={styles.clockBox}>
                            <p className={styles.clockBoxNumbers}>{differenceTime ? Math.floor(((((differenceTime / 1000) / 60) / 60) / 24)) : ""}</p>
                            <p className={styles.clockBoxText}>Dias</p>
                        </div>

                        <div className={styles.separator}>
                            <span className={styles.circle}></span>
                            <span className={styles.circle}></span>
                        </div>

                        <div className={styles.clockBox}>
                            <p className={styles.clockBoxNumbers}>{differenceTime ? Math.floor(((((differenceTime / 1000) / 60) / 60))) - 24 : ""}</p>
                            <p className={styles.clockBoxText}>Horas</p>
                        </div>

                        <div className={styles.separator}>
                            <span className={styles.circle}></span>
                            <span className={styles.circle}></span>
                        </div>

                        <div className={styles.clockBox}>
                            <p className={styles.clockBoxNumbers}>{differenceTime ? Math.floor(((differenceTime / 1000) / 60)) : ""}</p>
                            <p className={styles.clockBoxText}>Minutos</p>
                        </div>
                    </div>
                </div>

                <Link href="#" className={styles.callToAction}>Ingressos</Link>
            </div> 
            ) : ""}
        </>
    )
}

export default Timer;