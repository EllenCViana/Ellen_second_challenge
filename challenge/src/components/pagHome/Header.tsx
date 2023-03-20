import styles from "./Header.module.css";
import DateTime from "./DateTime";
import Img_uol from "../../imagens/typecoloredpositive.svg";
import Img_logout from "../../imagens/logout.svg";

function Header() {
  function sair() {
    localStorage.setItem("privado", "false");
    window.location.href = "/";
  }

  return (
    <>
      <section className={styles.menu_03}>
        <div className={styles.title}>
          <h1>Weekly Planner</h1>
          <h2>Use this planner to organize your daily issues.</h2>
        </div>
        <DateTime />
      </section>
      {/* Ir para pagina Compass.uol */}
      <a
        href="https://compass.uol"
        target="_blank"
        className={styles.logouol2}
        rel="noreferrer"
      >
        <img src={Img_uol} alt="" />
      </a>
      {/* Ir para pagina Compass.uol */}

      {/* Botão Logout */}
      <button onClick={sair} className={styles.botao_logout}>
        <img src={Img_logout} className={styles.Img_logout} alt="" />
        Logout
      </button>
      {/* Botão Logout */}
    </>
  );
}

export default Header;
