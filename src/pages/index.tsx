// @ts-nocheck

import AboutSection from "@/components/Home/AboutSection";
import ContactSection from "@/components/Home/ContactSection";
import EventsSection from "@/components/Home/EventsSection";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import InfosSection from "@/components/Home/InfosSection";
import MainSlider from "@/components/Home/MainSlider";
import Timer from "@/components/Home/Timer";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Event } from "./api/getAllNextEvents";

interface props {
  events: Event[]
}

const Home: NextPage = () => {

  let events = [
    {
        id: 1,
        name: "Brothers Rush",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: {
            day: 17,
            month: 8,
            year: 2024,
            hour: 21,
            minutes: 0,
        },
        classification: 18,
        ticketPrice: 119,
        cover: "brothersRush_back"
    },

    {
        id: 2,
        name: "Assalariados",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: {
            day: 19,
            month: 8,
            year: 2024,
            hour: 21,
            minutes: 0,
        },
        classification: 18,
        ticketPrice: 119,
        cover: "assalariados_back"
    },

    {
        id: 3,
        name: "Colab Santos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: {
            day: 30,
            month: 8,
            year: 2024,
            hour: 21,
            minutes: 0,
        },
        classification: 18,
        ticketPrice: 119,
        cover: "colabSantos_back"
    },

    {
        id: 4,
        name: "Ana Luiza",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: {
            day: 10,
            month: 9,
            year: 2024,
            hour: 21,
            minutes: 0,
        },
        classification: 18,
        ticketPrice: 119,
        cover: "analuiza_back"
    },

    {
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
    },

    {
        id: 6,
        name: "Engenheiros de Dubai",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: {
            day: 20,
            month: 9,
            year: 2024,
            hour: 21,
            minutes: 0,
        },
        classification: 18,
        ticketPrice: 119,
        cover: "engenheirosDeDubai_back"
    }
];

  return (
    <>
      <Head>
        <title>Garage Eventos</title>
        <meta name="description" content="A casa de show mais braba que você vai conhecer." />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <main>
        <Header />
        <MainSlider eventsList={events}/>
        <EventsSection eventsList={events}/>
        <AboutSection />
        <InfosSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   let events;

//   try {
//     events = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/getAllNextEvents").then(res => res.json());
//   } catch (error) {
//     events = {}
//     throw new Error("Nenhum dado recuperado")
//   }

//   return {
//     props: {
//       events
//     }
//   }
// }

export default Home;