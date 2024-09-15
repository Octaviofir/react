import BlockNomad from "../../componentes/BlockNomad/BlockNomad"
import SofaDimensions from "../../componentes/SofaDimensions/SofaDimensions";
import AboutSofa from "../../componentes/AboutSofa/AboutSofa";
import KeyFeatures from "../../componentes/KeyFeatures/KeyFeatures";
import ImageText from "../../componentes/ImageText/ImageText";
import Section from "../../componentes/Section/section";
import TextImage from "../../componentes/TextImage/TextImage";
import SectionTitle from "../../componentes/SectionTitle/SectionTitle";
import ProductGrid from "../../componentes/ProductGrid/ProductGrid";
import CardSofa from "../../componentes/CardSofa/CardSofa";
import { useEffect } from "react";


function Seating () {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

    return (
        <>
        <BlockNomad />
        <SofaDimensions />
        <Section padding='8rem 8rem 8rem 8rem '>
        <AboutSofa subTitle="About this piece"
            paragraph="The ideal three-seat sofa featuring one seat with a chaise lounge addition, 
            one seat with an ottoman, and one seat for the chiropractor who loves to sit upright with 
            their feet on the floor. Like everything we make, our modular design is incredibly easy to move and 
            packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger."
            
            specs={[
                {
                  title: "Customizable",
                  description:
                    "Create your ideal sectional sofa with five fabric colors, six leg finishes, and three armrest heights. You can even swap the reversible back cushions: one side is tufted for a classic look, the other smooth and contemporary."
                },
                {
                  title: "Adaptable",
                  description:
                    "Rest easy with the knowledge that your new furniture can grow and expand with your life, thanks to the universal, modular design of our Nomad Collection."
                }
              ]}
            />
            </Section>
            <KeyFeatures />
            <ImageText />
            <TextImage />
            <Section>
            <SectionTitle title="Here's what else our designers recommend" />
            <ProductGrid>
                <CardSofa />
                <CardSofa />
                <CardSofa />
            </ProductGrid>
        </Section>

        </>
    )
}

export default Seating;