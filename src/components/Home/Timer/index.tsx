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

    

    const [mostRecentEvent, setMostRecentEvent] = useState(getMostRecentEvents());
    
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);


    // setInterval(() => {
    //     let event = mostRecentEvent;

    //     let eventDate = new Date(event.date.day, event.date.month, event.date.year, event.date.hour, event.date.minutes);
    //     let today = new Date(Date.now());

    //     setDays(((((eventDate.getTime() - today.getTime()) / 1000) / 60) / 24) / 30 )
    // }, 60000);

    return (
        <>
            {mostRecentEvent != null ? (
                <div className={styles.timer}>
                <div className={styles.col1}>
                    <p className={styles.timerTitle}>Próximo Evento: <span className={styles.eventTitle}>Brothers Rush</span></p>
                
                    <div className={styles.timerClock}>
                        <div className={styles.clockBox}>
                            <p className={styles.clockBoxNumbers}>{days}</p>
                            <p className={styles.clockBoxText}>Dias</p>
                        </div>

                        <div className={styles.separator}>
                            <span className={styles.circle}></span>
                            <span className={styles.circle}></span>
                        </div>

                        <div className={styles.clockBox}>
                            <p className={styles.clockBoxNumbers}>{hours}</p>
                            <p className={styles.clockBoxText}>Horas</p>
                        </div>

                        <div className={styles.separator}>
                            <span className={styles.circle}></span>
                            <span className={styles.circle}></span>
                        </div>

                        <div className={styles.clockBox}>
                            <p className={styles.clockBoxNumbers}>{minutes}</p>
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