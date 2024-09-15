import styles from './Section.module.css';

type SectionProps = {
    children?: React.ReactNode,
    fullwidth?: boolean,
    backgroundImage?: string,
    isFlex?: boolean,
    isBrown?: boolean,
    className?: string,
    height?: string,  
    padding?: string,
    backgroundColor?: string
    
}

function Section(props: SectionProps) {
    const { children, fullwidth, backgroundImage, isFlex, isBrown, height, padding, backgroundColor} = props;

    const backgroundStyle = backgroundImage
        ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }
        : {};

    
        const customStyle = {
            ...backgroundStyle,
            height: height || 'auto', 
            padding: padding || '8rem' ,
            backgroundColor: isBrown ? '#F7EEE3': backgroundColor || '#FFF'
        };

    return (
        <section
        className={`${styles.section} ${fullwidth ? styles.fullwidth : ''} ${isFlex ? styles.flexSection : ''} ${isBrown ? styles.brown_section : ''} ${props.className || ''}`}
        style={customStyle}
    >
        {children}
    </section>
    
    );
}

export default Section;

