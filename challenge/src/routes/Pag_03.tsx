import React from "react";
import "./Pag_03.css";
import Img_mais from "./imagens/mais.svg";
import Img_menos from "./imagens/menos.svg";
import Img_logouol from "./imagens/logouol.svg";
import Img_uol from "./imagens/Type=Colored positive 1.svg";
import Img_logout from "./imagens/logout.svg"

function Pag_03() {
  const data = new Date()
  const dia = String(data.getDate()).padStart(2, '0')
  const mes = String(data.getMonth() + 1).padStart(2, '0')
  
  const ano = data.getFullYear()
  const dataAtual = `${dia}/${mes}/${ano}`
  console.log(dataAtual)

  function showTime() {
    var time:any = new Date();
    var hour:any = time.getHours();
    var minute:any = time.getMinutes();

    if(hour<10) hour = "0"+ hour;
    if(minute < 10) minute = "0"+ minute;
    var tempo = hour+":"+minute;

    document.getElementById("timer")!.innerHTML=tempo;
  }
  function initTime(){
    setInterval(showTime, 1000);
  }
  initTime()



  let nome_planejador:any= localStorage.getItem("home")
    nome_planejador=JSON.parse(nome_planejador);
    const home = nome_planejador;

    function sair(){
        localStorage.setItem("privado","false")
        window.location.href = "/";
        
    }

  return (
    <main id="pag_03">

        <section id="menu_03">
        <div id="relogio" onLoad={initTime}>
        <span id="timer"></span>
        <br/>
        <span id="data">{dataAtual}</span>

      </div>
          <div id="title">
            <h1>{home.firstname} {home.lastname}</h1>
            <h2>Use this planner to organize your daily issues.</h2>
          </div>
        </section>
        <img src={Img_uol} id="logouol2" alt="" />
        <button onClick={sair} id="botao_logout"><img src={Img_logout} id="img_logout" alt=""/>Logout</button>
        <section id="addtask">
          <section>
            <input type="text"  id="taskorissue" placeholder="Task or issue" maxLength={100}></input>
          </section>
          <section>
            <select id="diadasemana" name="diadasemana">
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
          <input id="intervalo" type="time" name="hora"></input>
          </section>
          <button id="addcalendar">
            <img src={Img_mais} alt="" />
            <p >Add to calendar</p>
          </button>
          <button id="delete">
          <img src={Img_menos} alt="" />
          <p >Delete All</p>
          </button>
        </section>
        <section id="semana"> 
          <p id="monday">Monday</p>
          <p id="tuesday">Tuesday</p>
          <p id="wednesday">Wednesday</p>
          <p id="thursday">Thursday</p>
          <p id="friday">Friday</p>
          <p id="saturday">Saturday</p>
          <p id="sunday">Sunday</p>
        </section>
        <div id="line">
          <div></div>
        </div>
        <img src={Img_logouol} id="logouol" alt="" />
        <div id="time">
          <p>Time</p>
        </div>

        <div className="rolagem">
          <section className="tarefas">
            <div id="h">
              <p>10h30m</p>
            </div>
            <div className="tasks">
              <div id="cor"></div>
              <div id="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
              <button>Delete</button>
            </div>
          </section>
          <section className="tarefas">
            <div id="h">
              <p>11h00m</p>
            </div>
            <div className="tasks">
              <div id="cor"></div>
              <div id="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
              <button>Delete</button>
            </div>
          </section>
          <section className="tarefas">
            <div id="h">
              <p>14h15m</p>
            </div>
            <div className="tasks">
              <div id="cor"></div>
              <div id="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
              <button>Delete</button>
            </div>
          </section>
          <section className="tarefas">
            <div id="h">
              <p>15h00m</p>
            </div>
            <div className="tasks">
              <div id="cor"></div>
              <div id="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
              <button>Delete</button>
            </div>
          </section>
          <section className="tarefas">
            <div id="h">
              <p>17h10m</p>
            </div>
            <div className="tasks">
              <div id="cor"></div>
              <div id="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
              <button>Delete</button>
            </div>
          </section>
          <section className="tarefas">
            <div id="h">
              <p>18h15m</p>
            </div>
            <div className="tasks">
              <div id="cor"></div>
              <div id="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
              <button>Delete</button>
            </div>
          </section>
          <section className="tarefas">
            <div id="h">
              <p>18h15m</p>
            </div>
            <div className="tasks">
              <div id="cor"></div>
              <div id="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
              <button>Delete</button>
            </div>
          </section>
          <section className="tarefas">
            <div id="h">
              <p>18h15m</p>
            </div>
            <div className="tasks">
              <div id="cor"></div>
              <div id="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
              <button>Delete</button>
            </div>
          </section>
          <section className="tarefas">
            <div id="h">
              <p>19h40m</p>
            </div>
            <div className="tasks">
              <div id="cor"></div>
              <div id="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
              <button>Delete</button>
            </div>
          </section>
          <section className="tarefas">
            <div id="h">
              <p>12h15m</p>
            </div>
            <div className="tasks">
              <div id="cor"></div>
              <div id="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
              <button>Delete</button>
            </div>
          </section>
        </div>
        {/* <div id="line_2">
            <div></div>
          </div> */}
    </main>
  );
}

export default Pag_03;
