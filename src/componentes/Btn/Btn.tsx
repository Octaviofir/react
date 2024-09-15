import styles from './Btn.module.css'

type BtnProps = {
    text: string,
    backgroundColor?: string,
    onClick?: () => void
}

function Btn(props: BtnProps) {
    const { text, backgroundColor, onClick } = props;

    return (
        <>
            <button 
            onClick={onClick}
                className={styles.Btn} 
                style={{ backgroundColor: backgroundColor || '#FCED70' }} 
            >
                {text}
            </button>
        </>
    )
}

export default Btn;

