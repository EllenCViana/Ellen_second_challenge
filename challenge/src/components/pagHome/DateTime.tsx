import React, { useState, useEffect } from "react";
import styles from "./DateTime.module.css";

const DateTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  const formattedDate = time.toLocaleDateString("en-US", {
    month: "long",
  });

  const formattedDia = time.toLocaleDateString("en-US", {
    weekday: "short",
  });
  const formattedDianumero = time.toLocaleDateString("en-US", {
    day: "numeric",
  });

  const formattedano = time.toLocaleDateString("en-US", {
    year: "numeric",
  });

  const data_mes_dia_ano = `${formattedDate} ${formattedDianumero}${formattedDia}, ${formattedano}`;

  return (
    <div
      style={{
        marginLeft: "800px",
      }}
    >
      <p className={styles.timeplanner}>{formattedTime}</p>
      <p className={styles.dateplanner}>{data_mes_dia_ano}</p>
    </div>
  );
};

export default DateTime;
