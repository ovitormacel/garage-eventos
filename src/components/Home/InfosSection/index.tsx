import TitleSection from "@/components/common/TitleSection";
import styles from "./styles.module.scss";
import InfoCard from "@/components/common/InfoCard";
import CardapioInfo from "../CardapioInfo";

const InfosSection = () => {
    return (
        <section>
            <TitleSection title="Informações" subtitle="Nosso Cardápio, Drinks e Perguntas Frequentes" />
            <div className="container">
                <div className={styles.infoCards}>
                    <InfoCard icon="1" title="Cardápio"/>
                    <InfoCard icon="2" title="Drinks"/>
                    <InfoCard icon="3" title="Perguntas Frequentes"/>
                </div>

                <div className={`${styles.infosContainer} ${styles.active}`}>
                    <div className={styles.content}>
                        <CardapioInfo />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfosSection;