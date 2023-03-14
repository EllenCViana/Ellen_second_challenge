import  React, { useState } from 'react'
import styles from "./DateTime.module.css";

export const DateTime = () => {

    var [date] = useState(new Date());

   
    return(
        <div >
            <p className={styles.timeplanner} >{date.toLocaleTimeString('PT-br', {
                    hour: 'numeric',
                    minute:'numeric',
                })}</p>
            <p className={styles.dateplanner}>{date.toLocaleDateString('en-US', {
                    month:"long",
                    day: 'numeric',
                    year: 'numeric',
                })}</p>

        </div>
    )
}

export default DateTime;