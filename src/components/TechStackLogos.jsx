
import styles from '../styles/styles';

const TechStackLogos = ({ url, alt, title, type="large" }) => (
  <img 
    src={url} 
    alt={alt} 
    draggable="false"
    className={
    type === "large" ? (
      `${styles.techLogoLarge}`
    ) : (
      `${styles.techLogoSmall}`
    )
  }/>
);

export default TechStackLogos;