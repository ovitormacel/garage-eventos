import styles from "./styles.module.scss";

const DrinksInfo = () => {
    return (
        <div className={styles.cardapioInfo}>
            <div className={styles.col1}>
                <p className={styles.menuTitle}>Drinks</p>
                
                <div className={styles.cardapioCard}>
                    <div className={styles.foodInfos}>
                        <p className={styles.foodName}>Caipirinha</p>
                        <p className={styles.foodDescription}>Limão, Morango, Maracujá, Cachaça, Vodka, Saque.</p>
                    </div>
                    <p className={styles.foodPrice}>R$22,00</p>
                </div>

                <div className={styles.cardapioCard}>
                    <div className={styles.foodInfos}>
                        <p className={styles.foodName}>Negroni</p>
                        <p className={styles.foodDescription}>Campari, Gin, Laranja, Gelo.</p>
                    </div>
                    <p className={styles.foodPrice}>R$25,00</p>
                </div>

                <div className={styles.cardapioCard}>
                    <div className={styles.foodInfos}>
                        <p className={styles.foodName}>Espanhola</p>
                        <p className={styles.foodDescription}>Vinho Suave, Leite Condensado, Maracujá.</p>
                    </div>
                    <p className={styles.foodPrice}>R$18,00</p>
                </div>

                <p className={styles.menuTitle}>Cervejas</p>
                
                <div className={styles.cardapioCard}>
                    <div className={styles.foodInfos}>
                        <p className={styles.foodName}>Skol</p>
                        <p className={styles.foodDescription}>269 ml</p>
                    </div>
                    <p className={styles.foodPrice}>R$3,50</p>
                </div>

                <div className={styles.cardapioCard}>
                    <div className={styles.foodInfos}>
                        <p className={styles.foodName}>Duplo-Malte</p>
                        <p className={styles.foodDescription}>350 ml</p>
                    </div>
                    <p className={styles.foodPrice}>R$7,00</p>
                </div>

                <div className={styles.cardapioCard}>
                    <div className={styles.foodInfos}>
                        <p className={styles.foodName}>Heineken</p>
                        <p className={styles.foodDescription}>Longnek 310 ml</p>
                    </div>
                    <p className={styles.foodPrice}>R$10,00</p>
                </div>

            </div>

            <div className={styles.col2}>

            </div>
        </div>
    )
}

export default DrinksInfo;