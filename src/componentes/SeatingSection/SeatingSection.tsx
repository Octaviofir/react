import Section from '../../componentes/Section/section';
import SectionTitle from '../../componentes/SectionTitle/SectionTitle';
import couple from '../../assets/couple.png'
import { useNavigate } from 'react-router-dom'; 
import styles from './SeatingSection.module.css'
import Btn from '../Btn/Btn';

function SeatingSection() {
    const navigate = useNavigate(); 

    const handleSeatingClick = () => {
        navigate('/seating'); 
    };

    return (
        <>
            <Section fullwidth={true} padding="0">
                <SectionTitle title="Modular, easy-to-move design" />
                <Section fullwidth={true} backgroundImage={couple} height="70rem" />
                <div className={styles.btn_Section}>
                  <Btn onClick={handleSeatingClick} text='SHOP SEATING'></Btn>
                </div>
            </Section>
            {}
        </>
    );
}

export default SeatingSection;
