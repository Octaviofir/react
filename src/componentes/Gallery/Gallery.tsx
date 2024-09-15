import styles from './Gallery.module.css';


type GalleryProps = {
    image: string
}



function Gallery(props: GalleryProps) {

    const {
        image,
    } = props

    return (
        <>
            <div className={styles.gallery}>
                    <img src={image} alt="gallery1" />
                </div>
        </>
    )
}

export default Gallery; 