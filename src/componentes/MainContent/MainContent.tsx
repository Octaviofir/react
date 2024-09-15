import Section from '../Section/section';
import SectionTitle from '../SectionTitle/SectionTitle';
import ProductGrid from '../ProductGrid/ProductGrid';
import ProductCard from '../ProductCard/ProductCard';
import SmallSofa from '../../assets/smallsofa.png'
import outdoor from '../../assets/outdoor.png'
import storage from '../../assets/storage.png';
import cama from '../../assets/cama.png';
import tables from '../../assets/tables.png';
import rugs from '../../assets/rugs.png';
import DeliverySection from '../DeliverySection/DeliverySection';
import truck from '../../assets/truck.png'
import deliver_icon from "../../assets/deliver_icon.png";
import tree_icon from '../../assets/tree_icon.png';
import Gallery from '../Gallery/Gallery';
import gallery1 from '../../assets/gallery1.png';
import gallery2 from '../../assets/gallery2.png';
import gallery3 from '../../assets/gallery3.png';
import gallery4 from '../../assets/gallery4.png';
import NomadeSection from '../NomadeSection/NomadeSection';
import GalleryProducts1 from '../../assets/GalleryProduct1.png';
import GalleryProducts2 from '../../assets/GalleryProduct2.png';
import GalleryProducts3 from '../../assets/GalleryProduct3.png';
import GalleryProducts4 from '../../assets/GalleryProduct4.png';
import GalleryProducts5 from '../../assets/GalleryProduct5.png';
import SeatingSection from '../SeatingSection/SeatingSection';
import bannerImage from '../../assets/banner.png'
import styles from './MainContent.module.css'
import Btn from '../Btn/Btn';

function MainContent() {
    return (
        <>
           
           <Section fullwidth={true} backgroundImage={bannerImage} height="60.4rem">
           <div className={styles.bannerContent}> 
                    <h1 className={styles.bannerText}>Clever designs, delivered free</h1>
                    <Btn text='SHOP BEDDROOM'></Btn>
                </div>
            </Section>
            <Section fullwidth={false}>
                <SectionTitle align='center' title="Clever designs, delivered free" />

                <ProductGrid>
                    <ProductCard
                        image={SmallSofa}
                        productInfo="Seating"
                    />
                    <ProductCard
                        image={outdoor}
                    />

                    <ProductCard
                        image={storage}

                    />

                    <ProductCard
                        image={cama}
                    />
                    <ProductCard
                        image={tables}

                    />
                    <ProductCard
                        image={rugs}
                    />

                </ProductGrid>
            </Section>
            <Section fullwidth={true} isFlex={true} isBrown={true}>
            <div className={`${styles.flex_section} ${styles.delivery_section}`}>
                    <DeliverySection
                        image={truck}
                        icon_info="Fast & free shipping
Every single order ships for free. No minimums, no tiers, no fine print whatsoever."
                    />
                    <DeliverySection
                        image={deliver_icon}
                        icon_info="Modular, easy-to-move design
Our innovative modular design is driven by the belief that furniture should fit this home, and the next one."
                    />
                    <DeliverySection
                        image={tree_icon}
                        icon_info="Durable, premium materials
We use materials like sustainably-forested wood, strengthened steel hardware, and top-grain Italian leather."
                    />
                </div>
            </ Section>
            <Section fullwidth={false}>
                <SectionTitle align='center' title="Clever designs, delivered free" />
                <div className={`${styles.flex_section} ${styles.section_gallery}`}>
                    <Gallery
                        image={gallery1}
                    >
                    </Gallery>
                    <Gallery
                        image={gallery2}
                    >
                    </Gallery>
                    <Gallery
                        image={gallery3}
                    >
                    </Gallery>
                    <Gallery
                        image={gallery4}
                    >
                    </Gallery>
                </div>
            </Section>
            <Section fullwidth={true} isBrown={true} padding="0 0 0 8rem">
                <NomadeSection />
            </Section>
            <Section fullwidth={true}>
                <SectionTitle align='center' title="Shop these real-life spaces" />
                <div className={`${styles.flex_section} ${styles.gallery_Products}`}>
                    <Gallery
                        image={GalleryProducts1} />
                    <Gallery
                        image={GalleryProducts2}
                    />
                    <Gallery
                        image={GalleryProducts3}
                    />
                    <Gallery
                        image={GalleryProducts4}
                    />
                    <Gallery
                        image={GalleryProducts5}
                    />
                </div>
            </Section>
            <SeatingSection />
        </>
    );
}

export default MainContent;
