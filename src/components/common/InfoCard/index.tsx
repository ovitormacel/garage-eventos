import styles from "./styles.module.scss";

import { FaCookieBite, FaQuestion } from "react-icons/fa";
import { BiSolidDrink } from "react-icons/bi";
import { IconType } from "react-icons";


interface props {
    icon: string,
    title: string
}

const InfoCard = ({icon, title}: props) => {

    var icone: any;

    if(parseInt(icon) === 1) {
        icone = <FaCookieBite />;
    } else if(parseInt(icon) === 2) {
        icone = <BiSolidDrink />;
    } else if(parseInt(icon) === 3) {
        icone = <FaQuestion />;
    }

    return (
        <div className={styles.infoCard}>
            <div className={styles.infoIcon}>{icone}</div>
            <p className={styles.infoTitle}>{title}</p>
        </div>
    )
}

export default InfoCard;