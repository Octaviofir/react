import Section from "../Section/section";
import AboutSofa from "../AboutSofa/AboutSofa";
import WomanGlass from "../../assets/woman_glass.png"
import styles from "./TextImage.module.css"


function TextImage () {

    const specs = [
        { title: 'Non toxic', description: 'Zero chemical additives or treatments' },
        { title: 'Zero PFCs', description: 'Fabric free of dangerous formaldehydes' }
      ];

    return (
        <>
            <Section> 
            <div className={styles.wrapper}>
            
         <div className={styles.AboutSofa}>
         <AboutSofa subTitle="Durable enough for everyday drama"
         paragraph="Our olefin fabric is stain-resistant thanks to a deep dyeing process that colors each individual strand 
         to the core, as opposed to other fibers that have little pores that absorb stains. 
         You can even spray spills with a water and bleach solution (yes, we said bleach) and blot it out to clean stains."
         specs={specs}
         />
         </div>
         <div className={styles.image}>
            <img src={WomanGlass} alt="woman seeting on a sofa with a cuz" />
            </div>
         </div>
        </Section>
        </>
    )
}

export default TextImage;