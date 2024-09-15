import styles from './ProductGrid.module.css'

type ProductGridProps = {
    children: React.ReactNode;
}

function ProductGrid({children}: ProductGridProps) {
    return (
            <div className={styles.wrapper}>
                {children}
        </div>
    )
}

export default ProductGrid;