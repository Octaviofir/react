import styles from './BlockNomad.module.css'
import NomadSofa from '../../assets/nomadSofa.png'
import arm1 from '../../assets/arm1.png'
import arm2 from '../../assets/arm2.png'
import flip1 from '../../assets/flip1.png'
import flip2 from '../../assets/flip2.png'
import SectionSubTitle from '../SectionSubTitle/SectionSubTitle'
import Section from '../Section/section'
import Btn from '../Btn/Btn'



const colors = [
    "#011F89",
    "#890109",
    "#3D8901",
    "#3D8901",
    "#131313",
    "#131313"

]

function BlockNomad() {

    return (
        <Section>
        <div className={styles.wrapper}>
            <div className={styles.sofa_wrapper}>
                <div className={styles.caption}>
                    <p><b>Nomad Collection</b></p>
                </div>
                <div className={styles.block_image}>
                    <img src={NomadSofa} alt="NomadSofa" />
                </div>
                <div className={styles.sofa_squares}>
                    <div className={styles.square}></div>
                    <div className={styles.square}></div>
                    <div className={styles.square}></div>
                    <div className={styles.square}></div>
                    <div className={styles.square}></div>
                </div>
            </div>
            <div className={styles.details_wrapper}>
                <SectionSubTitle margin='0' subTitle='Block Nomad Sofa'></SectionSubTitle>
                <p className={styles.head_price}>$1595+ Free Shipping</p>
                <div className={styles.details_colors}>
                    <span><b>Fabric Color - </b> Navy Blue</span>
                    <div className={styles.details_color}>
                        {
                            colors.map((color) => {
                                return <span style={{ backgroundColor: color }}></span>
                            })
                        }
                    </div>
                    </div>
                    <div className={`${styles.options} ${styles.flex}`}>
                        <div className={styles.arm_style}>
                            <p><b>Arm Style</b></p>
                            <div className={`${styles.arm_images} ${styles.flex}`}>
                                <div className={styles.details_square}> <img className={styles.details_image} src={arm1} alt="armStyle1" /></div>
                                <div className={styles.details_square}> <img className={styles.details_image} src={arm2} alt="armStyle2" /></div>
                            </div>
                        </div>
                        <div className={styles.arm_style}>
                            <p><b>Flip Back Cushions</b></p>
                            <div className={`${styles.arm_images} ${styles.flex}`}>
                                <div className={styles.details_square}> <img className={styles.details_image} src={flip1} alt="armStyle1" /></div>
                                <div className={styles.details_square}> <img className={styles.details_image} src={flip2} alt="armStyle2" /></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.upgrate_wrapper}>
                        <p><b>Upgrades</b></p>
                        <div className={styles.upgrate_item}>
                            <div className={styles.upgrate_square}></div>
                            <span className={styles.upgrate_item_text}>Moveable chaise + $495</span>
                            </div>
                            <div className={styles.upgrate_item}>
                                <div className={styles.upgrate_square}></div>
                                <span className={styles.upgrate_item_text}>Ottoman + $345</span>
                            </div>
                            <div className={styles.upgrate_item}>
                                <div className={styles.upgrate_square}></div>
                                <span className={styles.upgrate_item_text}>Lumbar Pillows + $135</span>
                            </div>
                            <div className={styles.upgrate_item}>
                                <div className={styles.upgrate_square}></div>
                                <span className={styles.upgrate_item_text}>Sleep Kit + $295</span>
                            </div>
                        </div>
                        <div className={styles.bnt_section}>
                           <Btn text="ADD TO CART" />
                        </div>
                    </div>
                </div>
                </Section>
    
    )
}

export default BlockNomad;