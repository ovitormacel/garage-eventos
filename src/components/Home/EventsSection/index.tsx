import TitleSection from "@/components/common/TitleSection";
import styles from "./styles.module.scss";
import { useState } from "react";
import Link from "next/link";
import EventsCard from "@/components/common/EventCard";

const EventsSection = () => {
  const [eventImage, setEventImage] = useState("/banda-teste.jpg");  
  
  return (
      <section>
        <TitleSection title="Programação" subtitle="O que vai rolar nas próximas semanas"/>
      
        <div className="container">
          <div className={styles.events}>

            <ul className={styles.listEvents}>
              <EventsCard />
              <EventsCard />
              <EventsCard />
            </ul>

            <div className={styles.eventImage}>
              <img src={eventImage} alt="Imagem do Evento" />
            </div>
          </div>
        </div>

        <div className={styles.changeList}>
          <button className={`${styles.change} ${styles.active}`}>1</button>
          <button className={`${styles.change}`}>2</button>
          <button className={`${styles.change}`}>3</button>
        </div>
      </section>
    )
  }
  
  export default EventsSection;