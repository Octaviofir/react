import styles from './GalleryProducts.module.css'

type GalleryProductsProps = {
    image: string;
    className: string
}

function GalleryProducts(props: GalleryProductsProps) {
    const {
        image
    } = props

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.flex_section}>
                    <div className={styles.card}>  
                    <img src={image} alt="galleryProducts" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryProducts;

