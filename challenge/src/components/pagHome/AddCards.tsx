import Img_mais from "../../imagens/mais.svg";
import Img_menos from "../../imagens/menos.svg";
import styles from "./AddCards.module.css";
import React, { useState } from 'react';
import DiasdaSemana from "./DiasdaSemana";

interface AddCardsProps {}
function AddCards(props: AddCardsProps) {
    const [timeValue, setTimeValue] = useState<string>('');
  
    function handleTimeChange(event: React.ChangeEvent<HTMLInputElement>) {
      setTimeValue(event.target.value);
    }

  const [task, setTask] = useState<string>(""); 
  const [itemsList, setItemsList] = useState<string[]>([]);

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>): void {
    const inputTask: string = event.target.value;

    setTask(inputTask); 
  }
  
  function handleAddItemToList(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault(); 
    if (!task) { 
      return
    };

    setItemsList([...itemsList, task]); 
    setTask(""); 
  }
    return (
      <>
        <form onSubmit={handleAddItemToList} className={styles.addtask}>
          <section>
            <input
              type="text"
              className={styles.taskorissue}
              placeholder="Task or issue"
              maxLength={100}
              onChange={handleChangeInput} 
              value={task} 
              />
          
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
            <input className={styles.intervalo} type="time" name="hora" value={timeValue} onChange={handleTimeChange}></input>
          </section>
          {/* Botões */}
          <button className={styles.addcalendar}>
            <img src={Img_mais} alt="" />
            <p>Add to calendar</p>
          </button>
          <button className={styles.delete}>
            <img src={Img_menos} alt="" />
            <p>Delete All</p>
          </button>
          </form>
          <DiasdaSemana />
          <p className={styles.time}>Time</p>
          <div className="todo-list" >

        {itemsList.map((item: string, index: number) => (
            <div className={styles.quadro}>
            <div className={styles.h}>{timeValue}</div>
            <div className={styles.tasks}>
            
            <div className={styles.hcor}></div>
            <div className={styles.texto}>
              <div className={styles.tarefas}>
                                    
              <p key={index}>{item}</p>
              <button className={styles.botao} >Delete</button>
              </div>              
              </div>             
            </div>
            </div>
        ))}
        </div>       
      </>
    );
}
export default AddCards;
