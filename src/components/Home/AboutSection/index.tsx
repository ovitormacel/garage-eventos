import TitleSection from "@/components/common/TitleSection";
import styles from "./styles.module.scss";
import Link from "next/link";

const AboutSection = () => {
    return (
        <section>
            <TitleSection title="Sobre a casa" subtitle="Conheça mais sobre nossa História e Estrutura" />
        
            <div className="container">
                <div className={styles.about}>
                    <div className={styles.aboutImage}></div>

                    <div className={styles.aboutInfos}>
                        <div className={styles.aboutInfosInfos}>
                            <p className={styles.prefix}>Nossa História</p>
                            <h3 className={styles.title}>O Início de Tudo</h3>
                            
                            <span className={styles.separator}></span>

                            <p className={styles.textInfo}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero, numquam vel, harum, porro nesciunt nemo dolorem unde asperiores iure dolore natus tempore reprehenderit iste rem? Repudiandae praesentium veritatis dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus exercitationem eaque officia est repellendus ab corporis recusandae ratione. Consequatur qui nostrum ratione quibusdam illum, alias neque impedit. Velit, suscipit nesciunt?
                            </p>
                        
                            <Link href="#" className={styles.linkInfo}>Saiba Mais</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;