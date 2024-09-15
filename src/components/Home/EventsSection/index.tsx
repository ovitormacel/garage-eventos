import TitleSection from "@/components/common/TitleSection";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import EventsCard from "@/components/common/EventCard";
import { Event } from "@/pages/api/getAllNextEvents";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";

interface props {
  eventsList: Event[]
}

const EventsSection = ({eventsList}: props) => {
  const [eventImage, setEventImage] = useState(`/uploads/${eventsList[1].cover}.jpg`);
  
  const [pageActual, setPageActual] = useState(1);
  const [totalPage, setTotalPage] = useState(Math.ceil(eventsList.length / 3));

  const [paginatedList, setPaginatedList] = useState<Event[]>([]);


  const paginateList = (page: number) => {
    if(eventsList && pageActual <= totalPage && pageActual >= 0) {
      let count = (page * 3) - 3;
      let delimiter = count + 3;
      let result: Event[] = [];

      for(let i = count; i < delimiter; i++){
        if(eventsList[i] != null) {
          result.push(eventsList[i]);
        }
      }

      setPaginatedList(result);

    }
  }
  
  const moveList = (direction: number) => {
    let result = pageActual;

    if(direction == -1) { // LEFT
      if(pageActual > 1){
        result -= 1;
      }
    } else if(direction == 1) { // RIGHT
      if(pageActual < totalPage){
        result += 1;
      }
    } else {
      return;
    }

    setPageActual(result);
    paginateList(result);
  }

  const changeEventImage = (cover: string) => {
    setEventImage(`/uploads/${cover}.jpg`);
  }


  useEffect(() => {
    paginateList(1);
  }, [])

  return (
      <section id="events">
        <TitleSection title="Programação" subtitle="O que vai rolar nas próximas semanas"/>
      
        <div className="container">
          <div className={styles.events}>

            <ul className={styles.listEvents}>
              {paginatedList ? paginatedList.map((eventInfos: Event) => (
                <div onMouseEnter={() => {changeEventImage(eventInfos.cover)}} key={eventInfos.id}>
                  <EventsCard event={eventInfos}/>
                </div>
              )) : ""}

            </ul>

            <div className={styles.eventImage}>
              <Image width={800} height={800} src={eventImage} alt="Imagem do Evento"></Image>
            </div>
          </div>
        </div>

        <div className={styles.changeList}>
          <button onClick={() => moveList(-1)} className={`${styles.change}`}><FaAngleLeft /></button>
          <button onClick={() => moveList(1)} className={`${styles.change}`}><FaAngleRight /></button>
        </div>
      </section>
    )
  }
  
  export default EventsSection;