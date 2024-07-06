import TitleSection from "@/components/common/TitleSection";
import styles from "./styles.module.scss";
import InfoCard from "@/components/common/InfoCard";
import CardapioInfo from "../CardapioInfo";
import DrinksInfo from "../DrinksInfo";
import QuestionsInfo from "../QuestionsInfo";
import { useState } from "react";

const InfosSection = () => {

    const [info, setInfo] = useState(0);

    const handleChangeInfo = (infoNumb: number) => {
        if(info == infoNumb) {
            setInfo(0);
        } else {
            setInfo(infoNumb);
        }
    }

    return (
        <section>
            <TitleSection title="Informações" subtitle="Nosso Cardápio, Drinks e Perguntas Frequentes" />
            <div className="container">
                <div className={styles.infoCards}>
                    <div onClick={() => {handleChangeInfo(1)}}>
                        <InfoCard icon="1" title="Cardápio"/>
                    </div>

                    <div onClick={() => {handleChangeInfo(2)}}>
                        <InfoCard icon="2" title="Drinks"/>
                    </div>

                    <div onClick={() => {handleChangeInfo(3)}}>
                        <InfoCard icon="3" title="Perguntas Frequentes"/>
                    </div>
                </div>

                <div className={`${styles.infosContainer} ${info === 1 ? styles.active : ""}`}>
                    <div className={styles.content}>
                        <CardapioInfo />
                    </div>
                </div>

                <div className={`${styles.infosContainer} ${info === 2 ? styles.active : ""}`}>
                    <div className={styles.content}>
                        <DrinksInfo />
                    </div>
                </div>

                <div className={`${styles.infosContainer} ${info === 3 ? styles.active : ""}`}>
                    <div className={styles.content}>
                        <QuestionsInfo />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfosSection;