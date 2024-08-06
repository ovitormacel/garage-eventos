import TitleSection from "@/components/common/TitleSection";
import styles from "./styles.module.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock, FaEnvelope, FaAngleDown } from "react-icons/fa";

const ContactSection = () => {
    return (
        <section id="contact">
            <TitleSection title="Contato" subtitle="Entre em Contato Conosco" />
        
            <div className="container">
                <div className={styles.columns}>
                    <div className={styles.contactForm}>
                        <form className={styles.formContent}>
                            <h2 className={styles.formTitle}>Envie uma Mensagem</h2>
                        
                            <div className={styles.formColumns}>
                                <div className={styles.formCol1}>
                                    <label htmlFor="name">Nome:</label>
                                    <input type="text" name="name" id="name" className={styles.formInput} placeholder="Nome"/>

                                    <label htmlFor="phone">Celular:</label>
                                    <input type="tel" name="phone" id="phone" className={styles.formInput} placeholder="Celular"/>
                                    
                                </div>

                                <div className={styles.formCol2}>
                                    <label htmlFor="lastName">Sobrenome:</label>
                                    <input type="text" name="lastName" id="lastName" className={styles.formInput} placeholder="Sobrenome"/>

                                    <label htmlFor="assunto">Assunto:</label>
                                    <div className={styles.customSelect}>
                                        <select name="assunto" id="assunto" className={`${styles.formInput} ${styles.formSelect}`}>
                                            <option value="1">Dúvidas</option>
                                            <option value="2">Shows e Eventos</option>
                                            <option value="3">Divulgação</option>
                                            <option value="4">Parceirias</option>
                                            <option value="5">Outro</option>
                                        </select>
                                        <div className={styles.customArrow}><FaAngleDown /></div>
                                    </div>
                                </div>
                            </div>
                            <textarea name="message" id="message" placeholder="Mensagem" className={styles.formInput} ></textarea>

                            <div className={styles.submitDiv}>
                                <p className={styles.submitWarning}>Ao clicar no botão "Enviar" você concorda com as <a href="#">Políticas de Privacidade</a>.</p>
                                <button type="submit" className={styles.formBtnSubmit}>Enviar</button>
                            </div>
                        </form>
                    </div>
                    
                    <div className={styles.locationCol}>
                    
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916261109483!2d2.291906375665578!3d48.85837007133214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sbr!4v1720464751204!5m2!1sen!2sbr" className={styles.maps} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <div className={styles.locationInfos}>
                            <p><FaLocationDot style={{color: "black",  fontSize: "1.2em"}}/> Avenida Simsalabim, 999 - Alakazam | SP</p>
                            <p><FaClock style={{color: "black",  fontSize: "1.2em"}}/> Segunda a Sábado - Das 21:00h às 04:00h</p>
                            <p><FaEnvelope style={{color: "black", fontSize: "1.2em"}}/>contato@agarageshow.com.br</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;