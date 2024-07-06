import styles from "./styles.module.scss";

const QuestionsInfo = () => {
    return (
        <div className={styles.cardapioInfo}>
            <div className={styles.col1}>
                <p className={styles.menuTitle}>Perguntas Frequentes</p>
                
                <div className={styles.cardapioCard}>
                    <div className={styles.foodInfos}>
                        <p className={styles.foodName}>O local possui venda de ingressos na portaria?</p>
                        <p className={styles.foodDescription}>Sim! Além dos ingressos antecipados pelo nosso site, também vendemos ingressos na portaria.</p>
                    </div>
                </div>

                <div className={styles.cardapioCard}>
                    <div className={styles.foodInfos}>
                        <p className={styles.foodName}>O que toca na casa?</p>
                        <p className={styles.foodDescription}>A Garage é uma casa de eventos focada no gênero Rock Alternativo, trazendo inúmeras bandas independentes para o nosso palco.</p>
                    </div>
                </div>

                <div className={styles.cardapioCard}>
                    <div className={styles.foodInfos}>
                        <p className={styles.foodName}>Posso entrar na casa sendo menor de 18 anos?</p>
                        <p className={styles.foodDescription}>A entrada de menores é permitida apenas com o acompanhamento de um responsável legal durante TODO O PERÍODO DO EVENTO sem excecões</p>
                    </div>
                </div>

                <div className={styles.cardapioCard}>
                    <div className={styles.foodInfos}>
                        <p className={styles.foodName}>Tive um problema e não consegui ir ao evento, posso pedir reembolso?</p>
                        <p className={styles.foodDescription}>Cancelamentos e pedidos de reembolso podem ser realizados APENAS até 1 hora após o início do evento. Passado este horário, não será realizada a devolução ou cancelamento.</p>
                    </div>
                </div>

            </div>

            <div className={styles.col2}>
                
            </div>
        </div>
    )
}

export default QuestionsInfo;