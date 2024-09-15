//@ts-nocheck

import Header from "@/components/Home/Header";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../../styles/Event.module.scss";
import Link from "next/link";

import { FaRegClock, FaAngleDown } from "react-icons/fa";
import { FaArrowRight, FaMinus, FaPlus } from "react-icons/fa6";
import Footer from "@/components/Home/Footer";
import { useEffect, useState } from "react";


const Event: NextPage = () => {

    let event = {
        id: 5,
        name: "CubaLibre",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: {
            day: 20,
            month: 6,
            year: 2024,
            hour: 21,
            minutes: 0,
        },
        classification: 18,
        ticketPrice: 119,
        cover: "cubaLibre_back"
    }
    
    const [ticketsMenu, setTicketsMenu] = useState(false);

    const [ticketComum, setTicketComum] = useState(0);
    const [ticketMeia, setTicketMeia] = useState(0);

    const [finishValue, setFinishValue] = useState(0);

    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    const openMenuTicket = () => {
        if(!ticketsMenu) {
            setTicketsMenu(true);
        } else {
            setTicketsMenu(false);
        }
    };

    const addTicket = (value, ticket) => {
        if(ticket == 1){
            const newQtde = ticketComum + 1;
            setTicketComum(newQtde);

        } else if(ticket == 2){
            const newQtde = ticketMeia + 1;
            setTicketMeia(newQtde);

        }

        let newValue = finishValue + value;
        setFinishValue(newValue);
        
    }

    const removeTicket = (value, ticket) => {
        let newValue;
        
        if(ticket == 1 && ticketComum > 0){
            const newQtde = ticketComum - 1;
            setTicketComum(newQtde);
            newValue = finishValue - value;

        } else if(ticket == 2 && ticketMeia > 0){
            const newQtde = ticketMeia - 1;
            setTicketMeia(newQtde);
            newValue = finishValue - value;

        }

        
        if(newValue && newValue <= 0) {
            setFinishValue(0);
        } else if (newValue) {
            setFinishValue(newValue);
        } else if (ticketComum <= 0 && ticketMeia <= 0) {
            setFinishValue(0);
        }

    }

  return (
    <>
      <Head>
        <title>{event.name} - Garage Eventos</title>
        <meta name="description" content="A casa de show mais braba que você vai conhecer." />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <main>
        <Header />

        <div className={styles.mainBackground} style={{backgroundImage: `url("/uploads/${event.cover}.jpg")`}}></div>

        <div className={`${styles.mainContent} container`}>
                <div className={styles.mainCover} style={{backgroundImage: `url("/uploads/${event.cover}.jpg")`}}></div>

                <div className={styles.content}>
                    <h1 className={styles.eventTitle}>{event.name}</h1>
                    <p className={styles.dateAndHour}><span><FaRegClock /></span> {String(event.date.day).padStart(2, "0")} de {meses[event.date.month - 1]} de {event.date.year} - {event.date.hour}:{String(event.date.minutes).padStart(2, "0")}</p>
                
                    <div className={styles.menuTickets}>
                        <button className={`${styles.ticketsButton} ${ticketsMenu ? styles.active : ""}`} onClick={openMenuTicket}>Ingressos<span><FaAngleDown /></span></button>
                        
                        <ul className={`${ticketsMenu ? styles.active : ""}`}>
                            <li className={styles.ticketOption}>
                                <div className={styles.ticketInfos}>
                                    <p className={styles.ticketTitle}>Ingresso Comum</p>
                                    <p className={styles.ticketPrice}>R$ 60,00</p>
                                </div>

                                {/* COMUM = 1, MEIA = 2 */}
                                <div className={styles.inputTicketQtde}>
                                    <button onClick={() => removeTicket(60, 1)}><FaMinus /></button>
                                    <p className={styles.qtde}>{ticketComum}</p>
                                    <button onClick={() => addTicket(60, 1)}><FaPlus /></button>
                                </div>
                            </li>

                            <li className={styles.ticketOption}>
                                <div className={styles.ticketInfos}>
                                    <p className={styles.ticketTitle}>Ingresso Meia</p>
                                    <p className={styles.ticketPrice}>R$ 30,00</p>
                                </div>

                                <div className={styles.inputTicketQtde}>
                                    <button onClick={() => removeTicket(30, 2)}><FaMinus /></button>
                                    <p className={styles.qtde}>{ticketMeia}</p>
                                    <button onClick={() => addTicket(30, 2)}><FaPlus /></button>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.description}>
                        <p className={styles.title}>Descrição</p>
                        <p>{event.description}</p>
                    </div>

                    <div className={styles.classification}>
                        <p className={styles.title}>Classificação</p>
                        <p>Apenas maiores de {event.classification} Anos</p>
                    </div>
                </div>

            </div>
            
            <div className={`${styles.finishBuy} ${finishValue > 0 ? styles.active : ""}`}>
                <div className={`${styles.infos} container`}>
                    <div className={styles.buyInfo}>
                        <p>Valor Total</p>
                        <p className={styles.valueFinished}>{finishValue.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
                    </div>

                    <Link className={styles.buttonBuyTicket} href="#">Continuar <FaArrowRight /></Link>
                </div>
            </div>
      </main>

      <Footer />
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
    
//     const {id} = context.query;
//     let event;
  
//     try {
//         event = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events/${id}`).then(res => res.json());
//     } catch (error) {
//         event = {}
//     }

//     return {
//         props: {
//             event
//         }
//     }
// }

export default Event;