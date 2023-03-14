import React from 'react'
import styles from "./DiasdaSemana.module.css";

function DiasdaSemana () {
  return (
    <>
    <section className={styles.semana}>
        <p className={styles.monday}>Monday</p>
        <p className={styles.tuesday}>Tuesday</p>
        <p className={styles.wednesday}>Wednesday</p>
        <p className={styles.thursday}>Thursday</p>
        <p className={styles.friday}>Friday</p>
        <p className={styles.saturday}>Saturday</p>
        <p className={styles.sunday}>Sunday</p>
    </section>
    </>
  )
}

export default DiasdaSemana