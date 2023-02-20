import "./App.css";
import Img_user from "./imagens/icon-user.svg";
import Img_password from "./imagens/icon-password.svg";
import Img_pc from "./imagens/image2.svg";
import Img_uol from "./imagens/Type=Colored negative.svg";
import {useNavigate} from 'react-router-dom';

function App() {

  let nome_email_login:any;
  let login_password:any
  let controle_nome_password:any
  let controle:any
  


  const navigate = useNavigate();
  const onsubmitlogin = (e:any) =>{
    e.preventDefault();
    nome_email_login=e.target.elements.nome_email_login.value
    login_password =e.target.elements.login_password.value
    nome_email_login=  nome_email_login.replace(" ", "_")
    nome_email_login=  nome_email_login.replace("_", "")
    controle_nome_password = `${nome_email_login}_${login_password}`

    function navegar_login (){
      navigate("/home")
    }
    if (localStorage.getItem(controle_nome_password)== null){
    
        console.log("poxa vida")
    }
    else{
      
      localStorage.setItem("privado","true")
      controle=localStorage.getItem(controle_nome_password)
      controle=localStorage.getItem(controle)

      localStorage.setItem("home",controle)

      navegar_login();
    }
    
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
