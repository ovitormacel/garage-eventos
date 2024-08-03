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


const Event: NextPage = ({event}) => {

    console.log(event)

    const [ticketsMenu, setTicketsMenu] = useState(false);

    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    const openMenuTicket = () => {
        if(!ticketsMenu) {
            setTicketsMenu(true);
        } else {
            setTicketsMenu(false);
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

                                <div className={styles.inputTicketQtde}>
                                    <button><FaMinus /></button>
                                    <p className={styles.qtde}>0</p>
                                    <button><FaPlus /></button>
                                </div>
                            </li>

                            <li className={styles.ticketOption}>
                                <div className={styles.ticketInfos}>
                                    <p className={styles.ticketTitle}>Ingresso Meia</p>
                                    <p className={styles.ticketPrice}>R$ 30,00</p>
                                </div>

                                <div className={styles.inputTicketQtde}>
                                    <button><FaMinus /></button>
                                    <p className={styles.qtde}>0</p>
                                    <button><FaPlus /></button>
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
            
            <div className={`${styles.finishBuy}`}>
                <div className={`${styles.infos} container`}>
                    <div className={styles.buyInfo}>
                        <p>Valor Total</p>
                        <p className={styles.valueFinished}>R$ 120,00</p>
                    </div>

                    <Link className={styles.buttonBuyTicket} href="#">Continuar <FaArrowRight /></Link>
                </div>
            </div>
      </main>

      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    
    const {id} = context.query;
    let event;
  
    try {
        event = await fetch(`http://localhost:3000/api/events/${id}`).then(res => res.json());
    } catch (error) {
        event = {}
    }

    return {
        props: {
            event
        }
    }
}

export default Event;