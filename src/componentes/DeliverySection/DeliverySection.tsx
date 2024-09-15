import styles from '../DeliverySection/DeliverySection.module.css';

type DeliverySectionProps = {
    image: string,
    icon_info: string
}
function DeliverySection(props: DeliverySectionProps) {

    const {
        image,
        icon_info
    } = props;

    return (
        <>
            <div className={styles.delivery_content}>
                <img src={image} />
                <p>{icon_info} </p>
            </div>

        </>
    )
}

export default DeliverySection;