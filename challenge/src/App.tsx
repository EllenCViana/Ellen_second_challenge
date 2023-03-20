import "./App.css";
import Img_user from "./imagens/icon-user.svg";
import Img_password from "./imagens/icon-password.svg";
import ImagemNotebook from "./components/backgroundImage/ImagemNotebook";
import { useNavigate } from "react-router-dom";

function App() {
  let nome_email_login: any;
  let login_password: any;
  let controle_nome_password: any;
  let controle: any;

  const navigate = useNavigate();
  function navegar_login() {
    navigate("/home");
  }
  const onsubmitlogin = (e: any) => {
    e.preventDefault();
    nome_email_login = e.target.elements.nome_email_login.value;
    login_password = e.target.elements.login_password.value;
    nome_email_login = nome_email_login.replace(" ", "_");
    nome_email_login = nome_email_login.replace("_", "");
    controle_nome_password = `${nome_email_login}_${login_password}`;

    

    // Adicionando validação nos inputs
    const regexUsername = /^[a-zA-Z]+$/;
    const regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!regexUsername.test(nome_email_login)) {
      alert("Nome de usuário deve conter apenas letras.");
      return;
    }

    if (!regexPassword.test(login_password)) {
      alert(
        "A senha deve conter pelo menos 6 caracteres, 1 caracter especial, 1 letra maiúscula, 1 letra minúscula e 1 número."
      );
      return;
    }
  };

const mudarhome = ()=>{
  navegar_login()
}
  return (
    <main className="pag01">
      <section className="lado_1_01">
        <form onSubmit={onsubmitlogin}>
          <h1>Welcome,</h1>
          <p>To continue browsing safely, log in to the network.</p>
          <h2>Login</h2>

          <div className="inputuser">
            <input
              name="nome_email_login"
              className="form"
              id="username"
              type="text"
              placeholder="user name"
              required
              minLength={3}
              maxLength={20}
              pattern="^[a-zA-Z]+$"
              title="Nome de usuário deve conter apenas letras."
            />
            <label htmlFor="username" id="user_01">
              <img src={Img_user} alt=""></img>
            </label>
          </div>

          <div className="inputpassword">
            <input
              name="login_password"
              className="form"
              id="password_01"
              type="password"
              placeholder="password"
              minLength={6}
              maxLength={20}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$"
              title="A senha deve conter pelo menos 6 caracteres, 1 caracter especial, 1 letra maiúscula, 1 letra minúscula e 1 número."
              required
            />
            <label htmlFor="password_01" id="senha_01">
              <img src={Img_password} alt=""></img>
            </label>
          </div>

          <button onClick={mudarhome} id="login_01">Log in</button>
          <a href="/cadastro" id="createaccount_01">
            Don't have an account yet?
          </a>
        </form>
      </section>

      <section className="lado_2_01">
        <ImagemNotebook />
      </section>
    </main>
  );
}
export default App;
