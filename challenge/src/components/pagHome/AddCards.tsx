import Img_mais from "../../imagens/mais.svg";
import Img_menos from "../../imagens/menos.svg";
import styles from "./AddCards.module.css";
import React, { useState, useRef } from "react";
import DiasdaSemana from "./DiasdaSemana";

interface AddCardsProps {}

function AddCards(props: AddCardsProps) {

  //barra de rolagem quadro
  const referenteAScrollbar = useRef<HTMLDivElement>(null);
  const interligandoscrollbar = () => {
    const quadro = referenteAScrollbar.current;
    if (quadro) {
      const { scrollTop } = quadro;
      const altura_copiada = scrollTop;
      const quadro_texto = document.querySelector(
        "#quadro_texto"
      ) as HTMLAnchorElement;
      quadro_texto.scrollTop = -altura_copiada;
    }
  };
  //barra de rolagem quadro

  //guarda os valores dos inputs - submiçao
  const [tasks, setTasks] = useState<any[]>([]);

  function submitForm(e:any) {
    e.preventDefault();
    const form = e.currentTarget;

    //inputs e seus valores
    const conteudo= e.target.elements.conteudo.value
    const dia_semana= e.target.elements.diadasemana.value
    const hora= e.target.elements.hora.value
    //inputs e seus valores

    setTasks([...tasks, { hora, conteudo, dia_semana }]);

    form.reset();


  }
  //guarda os valores dos inputs

  //deleta uma tarefa
  function tarefaDelete(index: number) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }
  //deleta uma tarefa

  //delete todos as tasks
  function limpar() {
    setTasks([]);
  }

  return (
    <>
      <form onSubmit={submitForm} className={styles.addtask}>
        <section>
          <input
            name="conteudo"
            type="text"
            className={styles.taskorissue}
            placeholder="Task or issue"
            maxLength={100}
            required
          />
        </section>
        <section>
          <select className={styles.diadasemana} name="diadasemana">
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </select>
        </section>
        <section>
          <input
            className={styles.intervalo}
            type="time"
            name="hora"
            required
          ></input>
        </section>
        {/* Button add to calendar */}
        <button className={styles.addcalendar}>
          <img src={Img_mais} alt="" />
          <p>Add to calendar</p>
        </button>
        
        {/* Button delete all */}
        <button className={styles.delete} 
        onClick={limpar}
        type="button">
          <img src={Img_menos} alt="" />
          <p>Delete All</p>
        </button>
      </form>
      <DiasdaSemana />
      <p
        className={styles.time}
        style={{
          position: "absolute",
        }}
      >
        Time
      </p>
      <div className="todo-list">
        {/* atualizando o cards */}

        <div
          ref={referenteAScrollbar}
          onScroll={interligandoscrollbar}
          className={styles.scrollBar}
          style={{
            height: "808px",
            width: "1904px",
            overflowY: "scroll",
          }}
        >
          <div className={styles.quadro}>
            {tasks.map((task, index) => (
              <div className={styles.h}>{task.hora}</div>
            ))}
          </div>
          
          {/* segundo quadro */}
          <div className={styles.girar}>
            <div
              className={styles.quadro2}
              style={{
                position: "relative",
              }}
              id="quadro_texto"
            >
              <div
                style={{
                  position: "absolute",
                  paddingTop: "81px",
                  bottom: "0",
                  transform: "rotate3d(1,0,0,180deg)",
                }}
              >
                {tasks.map((task,index) => (
                  <div
                    className={styles.tasks}
                    style={{
                      marginBottom: "14px",
                      boxSizing: "border-box",
                    }}
                  >
                    <div className={styles.hcor}></div>
                    <div className={styles.texto}>
                      <div className={styles.tarefas}>
                      <div >                      
                      <p >{task.conteudo}</p>
                        <button className={styles.botao} 
                        onClick={() => tarefaDelete(index)
                        }>Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* segundo quadro */}
        </div>
      </div>
    </>
  );
}
export default AddCards;
