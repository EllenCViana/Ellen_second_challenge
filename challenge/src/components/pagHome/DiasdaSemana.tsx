import React, { useState } from "react";
import styles from "./DiasdaSemana.module.css";

function DiasdaSemana() {
  const [weekdays, setWeekdays] = useState([
    { day: "Monday", active: true },
    { day: "Tuesday", active: false },
    { day: "Wednesday", active: false },
    { day: "Thursday", active: false },
    { day: "Friday", active: false },
    { day: "Saturday", active: false },
    { day: "Sunday", active: false },
  ]);

  function diaSemana(day: string) {
    const updatedDaysOfWeek = weekdays.map((valor) => {
      if (valor.day === day) {
        return { ...valor, active: true };
      } else {
        return { ...valor, active: false };
      }
    });
    setWeekdays(updatedDaysOfWeek);
  }

  return (
    <>
      <section className={styles.semana}>
        <p
          id="Monday"
          style={{
            width: weekdays[0].active ? "284px" : "234px",
            transition: "0.2s",
            boxShadow: weekdays[0].active
              ? "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 24px rgba(168, 168, 168, 0.25)"
              : "0px 4px 24px rgba(168, 168, 168, 0.25)",
          }}
          onClick={() => diaSemana("Monday")}
          className={styles.monday}
        >
          Monday
        </p>

        <p
          id="Tuesday"
          style={{
            width: weekdays[1].active ? "284px" : "234px",
            transition: "0.2s",
            boxShadow: weekdays[1].active
              ? "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 24px rgba(168, 168, 168, 0.25)"
              : "0px 4px 24px rgba(168, 168, 168, 0.25)",
          }}
          onClick={() => diaSemana("Tuesday")}
          className={styles.tuesday}
        >
          Tuesday
        </p>

        <p
          id="Wednesday"
          style={{
            width: weekdays[2].active ? "284px" : "234px",
            transition: "0.2s",
            boxShadow: weekdays[2].active
              ? "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 24px rgba(168, 168, 168, 0.25)"
              : "0px 4px 24px rgba(168, 168, 168, 0.25)",
          }}
          onClick={() => diaSemana("Wednesday")}
          className={styles.wednesday}
        >
          Wednesday
        </p>

        <p
          id="Thursday"
          style={{
            width: weekdays[3].active ? "284px" : "234px",
            transition: "0.2s",
            boxShadow: weekdays[3].active
              ? "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 24px rgba(168, 168, 168, 0.25)"
              : "0px 4px 24px rgba(168, 168, 168, 0.25)",
          }}
          onClick={() => diaSemana("Thursday")}
          className={styles.thursday}
        >
          Thursday
        </p>

        <p
          id="Friday"
          style={{
            width: weekdays[4].active ? "284px" : "234px",
            transition: "0.2s",
            boxShadow: weekdays[4].active
              ? "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 24px rgba(168, 168, 168, 0.25)"
              : "0px 4px 24px rgba(168, 168, 168, 0.25)",
          }}
          onClick={() => diaSemana("Friday")}
          className={styles.friday}
        >
          Friday
        </p>

        <p
          id="Saturday"
          style={{
            width: weekdays[5].active ? "284px" : "234px",
            transition: "0.2s",
            boxShadow: weekdays[5].active
              ? "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 24px rgba(168, 168, 168, 0.25)"
              : "0px 4px 24px rgba(168, 168, 168, 0.25)",
          }}
          onClick={() => diaSemana("Saturday")}
          className={styles.saturday}
        >
          Saturday
        </p>

        <p
          id="Sunday"
          style={{
            width: weekdays[6].active ? "284px" : "234px",
            transition: "0.1s",
            boxShadow: weekdays[6].active
              ? "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 24px rgba(168, 168, 168, 0.25)"
              : "0px 4px 24px rgba(168, 168, 168, 0.25)",
          }}
          onClick={() => diaSemana("Sunday")}
          className={styles.sunday}
        >
          Sunday
        </p>
      </section>
    </>
  );
}

export default DiasdaSemana;
