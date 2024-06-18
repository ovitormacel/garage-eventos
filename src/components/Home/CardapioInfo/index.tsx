import styles from "./styles.module.scss";

const CardapioInfo = () => {
    return (
        <div className={styles.cardapioInfo}>
            <div className={styles.col1}>
                <p className={styles.menuTitle}>Lanches</p>
                
                <div className={styles.cardapioCard}>
                    <div className={styles.foodInfos}>
                        <p className={styles.foodName}>Baconation</p>
                        <p className={styles.foodDescription}>Pão brioche, Hamburguer 150g, Bacon, Alface, Tomate Queijo Prato e Molho Especial.</p>
                    </div>
                    <p className={styles.foodPrice}>R$28,00</p>
                </div>

                <div className={styles.cardapioCard}>
                    <div className={styles.foodInfos}>
                        <p className={styles.foodName}>Duplo-Queijo</p>
                        <p className={styles.foodDescription}>Pão brioche, Hamburguer 150g, Cebola Caramelizada, Queijo Prato, Queijo Cheddar e Molho Barbecue.</p>
                    </div>
                    <p className={styles.foodPrice}>R$32,00</p>
                </div>

                <div className={styles.cardapioCard}>
                    <div className={styles.foodInfos}>
                        <p className={styles.foodName}>Moda do João</p>
                        <p className={styles.foodDescription}>Pão brioche, Hamburguer 150g, Cebola Empanada, Tomate, Queijo Cheddar, Bacon e Molho Especial.</p>
                    </div>
                    <p className={styles.foodPrice}>R$38,00</p>
                </div>

                <p className={styles.menuTitle}>Porções</p>
                
                <div className={styles.cardapioCard}>
                    <div className={styles.foodInfos}>
                        <p className={styles.foodName}>Batata Frita</p>
                        <p className={styles.foodDescription}>Batata Frita no Capricho.</p>
                    </div>
                    <p className={styles.foodPrice}>R$15,00</p>
                </div>

                <div className={styles.cardapioCard}>
                    <div className={styles.foodInfos}>
                        <p className={styles.foodName}>Cebola Empanada</p>
                        <p className={styles.foodDescription}>Cebola Empanada e Molho Especial.</p>
                    </div>
                    <p className={styles.foodPrice}>R$22,00</p>
                </div>

                <div className={styles.cardapioCard}>
                    <div className={styles.foodInfos}>
                        <p className={styles.foodName}>Filé de Peixe</p>
                        <p className={styles.foodDescription}>Filé de Peixe e Molho Especial.</p>
                    </div>
                    <p className={styles.foodPrice}>R$24,00</p>
                </div>

            </div>

            <div className={styles.col2}>

            </div>
        </div>
    )
}

export default CardapioInfo;