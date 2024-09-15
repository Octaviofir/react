import Section from "../Section/section";
import styles from './ArrowUp.module.css';
import ArrowUpImg from '../../assets/Arrow up.png';


function ArrowUp() {
    return (
        <>
        <Section>
            <img src={ArrowUpImg} alt='arrow go top' className={styles.arrow_Up} />
            </Section>
        </>
    );
}
export default ArrowUp;
