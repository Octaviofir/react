import styles from './AboutSofaFeat.module.css'

type AboutSofaFeatProps = {
    title: string;
    description: string;
  };
  
  function AboutSofaFeat({ title, description }: AboutSofaFeatProps) {
    return (
      <div className={styles.about_specs}>
        <h3 className={styles.about_spec_title}>{title}</h3>
        <p className={styles.about_spec_description}>{description}</p>
      </div>
    );
  }
  
  export default AboutSofaFeat;
  