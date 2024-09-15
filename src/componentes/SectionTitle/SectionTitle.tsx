import styles from './SectionTitle.module.css';

type SectionTitleProps = {
    title: string;
    align?: 'left' | 'center';
}

function SectionTitle(props: SectionTitleProps) {

    const { title, align = 'center' } = props;
    const {section_title, align_left, align_center} = styles;

    const alignmentTitle = align === 'left' ? align_left : align_center;

    return (
<div className={styles.subTitle_section}>
        <h2 className={`${section_title} ${alignmentTitle}`}>{title}</h2>
        </div>
)
}

export default SectionTitle;    