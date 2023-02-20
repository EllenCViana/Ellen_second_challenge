import "./App.css";
import Img_user from "./imagens/icon-user.svg";
import Img_password from "./imagens/icon-password.svg";
import Img_pc from "./imagens/image2.svg";
import Img_uol from "./imagens/Type=Colored negative.svg";

function App() {
  return (
    <main className="pag01">
      <section className="lado_1_01">
        <form>
          <h1>Welcome,</h1>
          <p>To continue browsing safely, log in to the network.</p>
          <h2>Login</h2>

          <div className="inputuser">
            <input
              className="form"
              id="username"
              type="email"
              placeholder="user name"
              required
            />
            <label htmlFor="username" id="user_01">
              <img src={Img_user} alt=""></img>
            </label>
          </div>

          <div className="inputpassword">
            <input
              className="form"
              id="password_01"
              type="password"
              placeholder="password"
              minLength={4}
              maxLength={8}
              size={8}
              required
            />
            <label htmlFor="password_01" id="senha_01">
              <img src={Img_password} alt=""></img>
            </label>
          </div>

          <button id="login_01">Log in</button>
          <a href="/cadastro" id="createaccount_01">
            Don't have an account yet?
          </a>
        </form>
      </section>

      <section className="lado_2_01">
        <a href="https://compass.uol" target="_blank" id="uol" rel="noreferrer">
          <img src={Img_uol} alt="" />
        </a>
        <img src={Img_pc} id="pc" alt="" />
      </section>
    </main>
  );
}
export default App;
