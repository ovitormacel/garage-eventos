import TitleSection from "@/components/common/TitleSection";
import styles from "./styles.module.scss";
import { useState } from "react";
import Link from "next/link";

const EventsSection = () => {
  const [eventImage, setEventImage] = useState("/banda-teste.jpg");  
  
  return (
      <section>
        <TitleSection title="Programação" subtitle="O que vai rolar nas próximas semanas"/>
      
        <div className="container">
          <div className={styles.events}>

            <ul className={styles.listEvents}>
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
            </ul>

            <div className={styles.eventImage}>
              <img src={eventImage} alt="Imagem do Evento" />
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default EventsSection;