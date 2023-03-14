import React from "react";
import "./Home.css";
import Header from "./components/pagHome/Header";
import ImagemLogoUOL from "./components/backgroundImage/ImagemLogoUOL";
import AddCards from "./components/pagHome/AddCards";
import Line from "./components/pagHome/Line";
import DiasdaSemana from "./components/pagHome/DiasdaSemana";

function Pag_03() {
  return (
    <main id="pag_03">
      <Header />
      <AddCards />
      <DiasdaSemana />
      <Line />
      <ImagemLogoUOL />
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
            <div id="texto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
              ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <button>Delete</button>
          </div>
        </section>
        <section className="tarefas">
          <div id="h">
            <p>11h00m</p>
          </div>
          <div className="tasks">
            <div id="cor"></div>
            <div id="texto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
              ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <button>Delete</button>
          </div>
        </section>
        <section className="tarefas">
          <div id="h">
            <p>14h15m</p>
          </div>
          <div className="tasks">
            <div id="cor"></div>
            <div id="texto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
              ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <button>Delete</button>
          </div>
        </section>
        <section className="tarefas">
          <div id="h">
            <p>15h00m</p>
          </div>
          <div className="tasks">
            <div id="cor"></div>
            <div id="texto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
              ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <button>Delete</button>
          </div>
        </section>
        <section className="tarefas">
          <div id="h">
            <p>17h10m</p>
          </div>
          <div className="tasks">
            <div id="cor"></div>
            <div id="texto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
              ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <button>Delete</button>
          </div>
        </section>
        <section className="tarefas">
          <div id="h">
            <p>18h15m</p>
          </div>
          <div className="tasks">
            <div id="cor"></div>
            <div id="texto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
              ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <button>Delete</button>
          </div>
        </section>
        <section className="tarefas">
          <div id="h">
            <p>18h15m</p>
          </div>
          <div className="tasks">
            <div id="cor"></div>
            <div id="texto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
              ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <button>Delete</button>
          </div>
        </section>
        <section className="tarefas">
          <div id="h">
            <p>18h15m</p>
          </div>
          <div className="tasks">
            <div id="cor"></div>
            <div id="texto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
              ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <button>Delete</button>
          </div>
        </section>
        <section className="tarefas">
          <div id="h">
            <p>19h40m</p>
          </div>
          <div className="tasks">
            <div id="cor"></div>
            <div id="texto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
              ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <button>Delete</button>
          </div>
        </section>
        <section className="tarefas">
          <div id="h">
            <p>12h15m</p>
          </div>
          <div className="tasks">
            <div id="cor"></div>
            <div id="texto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
              ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <button>Delete</button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Pag_03;
