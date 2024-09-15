import styles from './AboutSofa.module.css'
import SectionSubTitle from '../SectionSubTitle/SectionSubTitle'
import AboutSofaFeat from '../AboutSofaFeat/AboutSofaFeat';

type AboutSofaProps = {
  subTitle: string,
  paragraph: string;
  specs: { 
    title: string; 
    description: string }[];
};

  
  function AboutSofa(props: AboutSofaProps) {

    const { paragraph, specs, subTitle} = props;

    return (
        <>
        <SectionSubTitle subTitle={subTitle} />
        <div className={styles.about_description}>
          <p className={styles.description}>
          {paragraph}
          </p>
          <div className={styles.about_specs_container }>
            {specs.map((item) => (
            <AboutSofaFeat 
              title={item.title} 
              description={item.description} />
            ))}
          </div>
        </div>
        </>
  
    );
  }
  
  export default AboutSofa;
  