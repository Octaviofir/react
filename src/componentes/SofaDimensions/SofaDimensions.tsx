import styles from './SofaDimensions.module.css'
import sofaDimensions from '../../assets/sofaDimensions.png'
import Section from '../Section/section';
import SectionSubTitle from '../SectionSubTitle/SectionSubTitle';

function SofaDimensions() {

    const dimensionsData = [
        { label: "General Dimensions", value: '86" L x 61" D x 33" H' },
        { label: "Seat Height", value: '17"' },
        { label: "Arm Height", value: '23"' },
        { label: "Chaise Length", value: '13"' },
        { label: "Seat Depth", value: '134"' },
        { label: "Chaise Seat Depth", value: '11"' },
        { label: "Leg Height", value: '7"' },
        { label: "Ottoman Dimensions", value: '26" L x 26" W x 17" H' },
    ];

    return (

        <Section padding='0 8rem 0 8rem'>
             <div className={styles.wrapper}>
                <div className={styles.flex_col}>
            <SectionSubTitle margin='0' subTitle="Dimensions"/>
       
        <div className={styles.dimensions_wrapper}>
            {dimensionsData.map((dimension) => (
                <div className={`${styles.wrapper_line} ${styles.flex}`}>
                    <p className={styles.line_text}>{dimension.label}</p>
                    <p className={styles.line_text}>{dimension.value}</p>
                </div>
                
            ))}
            </div>
        </div>
            
        <div className={styles.sofa_image}>
        <img src={sofaDimensions} alt="sofaDimensions" />
        </div>
        </div>
        </Section>
    );
}

export default SofaDimensions;
