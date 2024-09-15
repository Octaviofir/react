import styles from './SectionSubTitle.module.css'

type SectionSubTitleProps = {
    subTitle: string,
    margin?: string
}


function SectionSubTitle (props: SectionSubTitleProps) {
    const {
        subTitle,
        margin = '4rem'
    } = props

    return (
      
        <div className={styles.subTitle_section} style={{ marginBottom: margin }}>
        <h2 className={styles.sub_title}>{subTitle}</h2>
   </div>
    )
} 

export default SectionSubTitle;