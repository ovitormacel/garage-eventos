import Link from "next/link";
import styles from "./styles.module.scss";

interface SlideProps {
    image: string,
    title: string
}


const SlideCard = ({image, title}: SlideProps) => {
    return (
        <>
            <div className={styles.slideContent}>
                <div className={styles.slideImage} style={{backgroundImage: `url(${image})`}}></div>

                <div className="container">
                    <div className={styles.slideInfo}>
                        <p className={styles.date}>11/07<span>Sexta</span></p>
                        <h2 className={styles.eventTitle}>{title}</h2>
                        <Link href="#" className={styles.slideLink}>Ver Mais</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SlideCard;