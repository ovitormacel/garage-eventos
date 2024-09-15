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
import { allEvents } from "../events.js";


const Home: NextPage = () => {

  let events = allEvents;

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

export default Home;