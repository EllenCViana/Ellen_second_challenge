import styles from "./ImagemNotebook.module.css";
import Imagem_Notebook from "../../imagens/image2.svg";
import Img_uol from "../../imagens/typecolorednegative.svg";

function ImagemNotebook() {
  return (
    <>
      <img src={Imagem_Notebook} className={styles.pc} alt="" />
      <a href="https://compass.uol" target="_blank" className={styles.uol} rel="noreferrer">
        <img src={Img_uol} alt="" />
      </a>
    </>
  );
}

export default ImagemNotebook;
