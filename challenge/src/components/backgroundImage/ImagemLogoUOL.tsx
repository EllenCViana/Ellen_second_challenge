import styles from "./ImagemLogoUOL.module.css";
import Img_logouol from "../../imagens/logouol.svg"
function ImagemLogoUOL() {
    return (
      <>
        <img className={styles.logouol}
        src={Img_logouol} alt="" />
      </>
    );
  }
  
  export default ImagemLogoUOL;