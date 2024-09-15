import styles from './ProductCard.module.css'

type ProductCardProps = {
    image: string,
    productInfo?: string
}

function ProductCard(props: ProductCardProps) {

    const {
    image,
    productInfo 

} = props

    return (
        <div className={styles.productCard}>
            <img src={image} alt="sofa" />
            <caption className={styles.productInfo}>{productInfo}</caption>
        </div>
    )
}

export default ProductCard;