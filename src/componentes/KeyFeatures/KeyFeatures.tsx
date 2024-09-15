import Section from '../Section/section'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './KeyFeatures.module.css'
import customizable from '../../assets/customizable.png'
import frame from '../../assets/frame.png'
import hardware from '../../assets/hardware.png'
import charger from '../../assets/charger.png'
import legs from '../../assets/frame.png'


function KeyFeatures() {

    const FeatureList = [
        { label: "Customizable", icon: customizable },
        { label: "Frame", icon: frame},
        { label: "Hardware", icon: hardware},
        { label: "Charger", icon: charger },
        { label: "Legs", icon: legs}
    ] 

    return (
        <>
            <Section padding='0 8rem 8rem 8rem'>
            <SectionTitle title='Key Features' align='left' />
                <div className={styles.wrapper}>
                    {FeatureList.map((item) => (
                    <div className={styles.features_icon}>
                    <img src={item.icon} alt={item.label} className={styles.icon} />
                    <p>{item.label}</p>
                    </div>
                    ))}
                </div>
            </Section>
        </>
    )
}

export default KeyFeatures