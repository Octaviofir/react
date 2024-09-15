import AboutSofa from "../AboutSofa/AboutSofa";
import styles from './ImageText.module.css'
import Section from "../Section/section";
import JumpSofa from '../../assets/JumpSofa.png'


function ImageText() {

    const specs = [
        { title: 'Low carbon footprint', description: 'Fabric made from upcycled materials' },
        { title: 'Sustainable wood', description: 'Sourced from responsibly managed forests' }
      ];
      
    return (
        <>
        <Section>
            <div className={styles.wrapper}>
        <div className={styles.image}>
            <img src={JumpSofa} alt="Humans jumping on a sofa" />
        </div>
         <div className={styles.AboutSofa}>
         <AboutSofa subTitle="Durable enough for everyday drama"
         paragraph="Each and every component of our furniture is selected for durability, 
         from the galvanized steel latches to the precision-milled Baltic Birch frame. 
         The fabric is inherently scratch-resistant, thanks to an incredibly tight weave, which makes 
         t perfect for pets and their parents."
         specs={specs}
         />
         </div>
         </div>
        </Section>
        </>
    )
}

export default ImageText;