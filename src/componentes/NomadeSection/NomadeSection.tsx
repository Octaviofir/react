import styles from './NomadeSection.module.css';
import bigsofa from '../../assets/bigsofa.png'; // Certifique-se de ajustar o caminho da imagem

function NomadeSection() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <p>NOMAD</p>
                </div>
                <div className={styles.description}>
                    <span className={styles.bold}>The Ambid</span>
                    <span className={styles.text}>system works beautifully. It's comfortable, absolutely solid, and looks great.</span>
                </div>
                <div className={styles.button}>
                    <button>SHOP NOW</button>
                </div>
            </div>
            <div className={styles.sofa}>
                <img src={bigsofa} alt="sofa" />
            </div>
        </div>
    );
}

export default NomadeSection;

