import React from "react";
import styles from "./AddCards.module.css";
import Img_mais from "../../imagens/mais.svg";
import Img_menos from "../../imagens/menos.svg";

function AddCards() {
  return (
    <>
      <section className={styles.addtask}>
        <section>
          <input
            type="text"
            className={styles.taskorissue}
            placeholder="Task or issue"
            maxLength={100}
          ></input>
        </section>
        <section>
          <select className={styles.diadasemana} name="diadasemana">
            <option value="mon">Monday</option>
            <option value="tue">Tuesday</option>
            <option value="wed">Wednesday</option>
            <option value="thu">Thursday</option>
            <option value="fri">Friday</option>
            <option value="sat">Saturday</option>
            <option value="sun">Sunday</option>
          </select>
        </section>
        <section>
          <input className={styles.intervalo} type="time" name="hora"></input>
        </section>
        <button className={styles.addcalendar}>
          <img src={Img_mais} alt="" />
          <p>Add to calendar</p>
        </button>
        <button className={styles.delete}>
          <img src={Img_menos} alt="" />
          <p>Delete All</p>
        </button>
      </section>
    </>
  );
}

export default AddCards;
