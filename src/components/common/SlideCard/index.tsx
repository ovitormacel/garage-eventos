import Link from "next/link";
import styles from "./styles.module.scss";

interface SlideProps {
    image: string,
    title: string,
    date: Date
}


const SlideCard = ({image, title, date}: SlideProps) => {
    console.log(date);
    const semana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
    return (
        <>
            <div className={styles.slideContent}>
                <div className={styles.slideImage} style={{backgroundImage: `url(${image})`}}></div>

                <div className="container">
                    <div className={styles.slideInfo}>
                        <p className={styles.date}>{date.getDate().toString().padStart(2, '0')}/{String(date.getMonth() + 1).padStart(2, '0')}<span>{semana[date.getDay() - 1]}</span></p>
                        <h2 className={styles.eventTitle}>{title}</h2>
                        <Link href="#" className={styles.slideLink}>Ver Mais</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SlideCard;