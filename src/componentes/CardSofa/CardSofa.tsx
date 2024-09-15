import styles from './CardSofa.module.css'
import NomadSofa from '../../assets/nomadSofa.png'
import { useNavigate } from 'react-router-dom';

function CardSofa() {

    const navigate = useNavigate();
    const sofaPage = () => {
        navigate('/nomad-collection')
    }

    return (
        <>
        <div className={styles.wrapper}>
            <div className={styles.Product_image}>
            
                <img src={NomadSofa} alt="Sofa Nomad" onClick={sofaPage}/>
                </div>
                <div className={styles.product_description}>
                    <p>Nomad Sofa</p>
                </div>
                <div >
                    <p className={styles.product_price}>$1595 or as low as $100/mo</p>
                </div>
            
        </div>
        </>
    )
}

export default CardSofa; 