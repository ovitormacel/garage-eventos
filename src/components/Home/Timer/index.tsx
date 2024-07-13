import Link from "next/link";
import styles from "./styles.module.scss";

const Timer = () => {
    return (
        <>
            <div className={styles.timer}>
                <div className={styles.col1}>
                    <p className={styles.timerTitle}>Próximo Evento: <span className={styles.eventTitle}>Brothers Rush</span></p>
                
                    <div className={styles.timerClock}>
                        <div className={styles.clockBox}>
                            <p className={styles.clockBoxNumbers}>09</p>
                            <p className={styles.clockBoxText}>Dias</p>
                        </div>

                        <div className={styles.separator}>
                            <span className={styles.circle}></span>
                            <span className={styles.circle}></span>
                        </div>

                        <div className={styles.clockBox}>
                            <p className={styles.clockBoxNumbers}>09</p>
                            <p className={styles.clockBoxText}>Horas</p>
                        </div>

                        <div className={styles.separator}>
                            <span className={styles.circle}></span>
                            <span className={styles.circle}></span>
                        </div>

                        <div className={styles.clockBox}>
                            <p className={styles.clockBoxNumbers}>09</p>
                            <p className={styles.clockBoxText}>Minutos</p>
                        </div>
                    </div>
                </div>

                <Link href="#" className={styles.callToAction}>Ingressos</Link>
            </div> 
        </>
    )
}

export default Timer;