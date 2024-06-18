

import AboutSection from "@/components/Home/AboutSection";
import EventsSection from "@/components/Home/EventsSection";
import Header from "@/components/Home/Header";
import InfosSection from "@/components/Home/InfosSection";
import MainSlider from "@/components/Home/MainSlider";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Garage Eventos</title>
        <meta name="description" content="A casa de show mais braba que você vai conhecer." />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <main>
        <Header />
        <MainSlider />
        <EventsSection />
        <AboutSection />
        <InfosSection />
        <AboutSection />
      </main>
    </>
  )
}

export default Home;