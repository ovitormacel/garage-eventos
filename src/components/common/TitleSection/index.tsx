import styles from "./styles.module.scss";

interface props {
    title: string,
    subtitle: string
}

const TitleSection = ({title, subtitle}: props) => {
    return (
        <div className={styles.titleSection}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    )
}

export default TitleSection;