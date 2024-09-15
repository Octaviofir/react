import styles from './Footer.module.css';
import Section from '../Section/section';

function Footer() {
    return (
        <>

<Section fullwidth={true} isFlex={true} backgroundColor="#131313">
            <div className={styles.wrapper}>
                <div className={styles.col}>
                    <h3>Shopping Services</h3>
                    <ul>
                        <li>Schedule Consultation</li>
                        <li>Showrooms</li>
                        <li>Trade Program</li>
                        <li>Outlet</li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <h3>About</h3>
                    <ul>
                        <li>Our Story</li>
                        <li>Reviews</li>
                        <li>Careers</li>
                        <li>Financing</li>
                        <li>Patents</li>
                        <li>Our Blog</li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <h3>Resources</h3>
                    <ul>
                        <li>Look Up Order Status</li>
                        <li>Assembly Instructions</li>
                        <li>Returns</li>
                        <li>Shipping & Delivery</li>
                        <li>FAQ</li>
                        <li>Refer a Friend</li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <h3>Contact Customer Experience</h3>
                    <ul>
                        <li>Email: support@template.com</li>
                        <li>Text: 224-628-7769</li>
                        <li>Hours:</li>
                        <li>Monday to Friday — 10a to 8p EST</li>
                        <li>Saturday to Sunday — 10a to 2p EST</li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className={styles.footerCopyWritte}>
                    <span>© 2023 Template</span>
                    <span>Terms - Accessibility - Sitemap - Privacy</span>
                </div>
                <div className={styles.footerCoordinates}>
                    <span>15 W 27th Street, 9th Floor New York, NY, 10001</span>
                </div>
            </div>
            </Section> 
        </>
    );
}

export default Footer;


