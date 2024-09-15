import styles from '././Subscrive.module.css'
import fb_icon from '../../assets/Facebook_Icon.png';
import wh_icon from '../../assets/WhatsApp_icon.png';
import insta_icon from '../../assets/Instagram_Icon.png';
import Btn from '../Btn/Btn';

function Subscribe() {
    return (
        <div className={styles.subscribe}>
            <div className={styles.newsletterSection}>
                <input
                    type="text"
                    className={styles.newsletterInput}
                    placeholder="Sign Up For Enthralling Couch Reads"
                />
               <Btn text='SUBSCRIBE' backgroundColor='#F7EEE3' />
            </div>
            <div className={styles.socialIcons}>
                <img src={fb_icon} alt="Facebook Icon" className={styles.icons} />
                <img src={wh_icon} alt="WhatsApp Icon" className={styles.icon} />
                <img src={insta_icon} alt="Instagram Icon" className={styles.icon} />
            </div>
        </div>
    );
}

export default Subscribe;

