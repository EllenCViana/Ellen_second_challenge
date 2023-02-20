import "./Pag_02.css";
import Img_pc from "./imagens/image2.svg";
import Img_uol from "./imagens/Type=Colored negative.svg";
import {useNavigate} from 'react-router-dom'

function Pag_02() {
  const navigate = useNavigate();
  let nome:any;
  let sobrenome:any;
  let data:any;
  let country:any;
  let city:any
  let email:any;
  let password:any;
  let usuario:object;
  
  let nome_password:any;
  let email_password:any;
  let nome_email_password:any;
  let converter:any;
  

  const onsubmit = (e:any) => {
    e.preventDefault();


    
    nome = e.target.elements.firstname.value
    sobrenome = e.target.elements.lastname.value
    data = e.target.elements.data.value
    country = e.target.elements.country.value
    city = e.target.elements.city.value
    email = e.target.elements.email.value
    password = e.target.elements.password.value

    usuario = {
        firstname: nome,
        lastname: sobrenome,
        data: data,
        country: country,
        city: city,
        email: email,
        password: password,
      }
    
      nome =`${nome}${sobrenome}`
      nome_password = `${nome}_${password}`
      email_password = `${email}_${password}`
      nome_email_password = `${nome}_${email}_${password}`
      converter=JSON.stringify(usuario)
      localStorage.setItem(nome_password,nome_email_password);
      localStorage.setItem(email_password,nome_email_password);
      localStorage.setItem(nome_email_password,converter);

      function navegar_login (){
        navigate("/")
      }

      navegar_login();
  }

  
  
  
  
  
  
  return (
    <main id="pag02">
      <section id="lado_1_02">
        <form onSubmit={onsubmit}>
          <h1>Welcome,</h1>
          <p>Please, register to continue</p>

          <section className=" section_label">
            <div>
              <label htmlFor="firstname">first name</label>
            </div>
            <input
              name="firstname"
              type="text"
              id="firstname"
              placeholder="Your first name"
              required
            ></input>
          </section>

          <section className=" section_label">
            <div>
              <label htmlFor="lastname">last name</label>
            </div>
            <input
              name="lastname"
              type="text"
              id="lastname"
              placeholder="Your last name"
              required
            ></input>
          </section>

          <section className=" section_label">
            <div>
              <label htmlFor="birthdate">birth date</label>
            </div>
            <input
              name="data"
              type="date"
              id="birthdate"
              required
            ></input>
          </section>

          <section className=" section_label">
            <div>
              <label htmlFor="country">Country</label>
            </div>
            <input
              name="country"
              type="text"
              id="country"
              placeholder="Your Country"
              required
            ></input>
          </section>

          <section className=" section_label">
            <div>
              <label htmlFor="city">City</label>
            </div>
            <input
              name="city"
              type="text"
              id="city"
              placeholder="Your City"
              required
            ></input>
          </section>

          <section className=" section_label">
            <div>
              <label htmlFor="email">e-mail</label>
            </div>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="A valid e-mail here"
              required
            ></input>
          </section>

          <section className=" section_label">
            <div>
              <label htmlFor="password">password</label>
            </div>
            <input
              name="password"
              type="password"
              id="password"
              placeholder="Your password"
              minLength={4}
              maxLength={8}
              size={8}
              required
            ></input>
          </section>
          <section className=" section_label ultimasection">
            <div>
              <label htmlFor="password2">password</label>
            </div>
            <input
              type="password"
              id="password2"
              placeholder="Confirm your password"
              minLength={4}
              maxLength={8}
              size={8}
            ></input>
          </section>

          <section>
            <button id="registernow">Register Now</button>
            <br />
            <a href="/" id="createaccount_00">
              Already have an account?
            </a>
          </section>
        </form>
      </section>

      <section id="lado_2_02">
        <a href="https://compass.uol" target="_blank" id="uol" rel="noreferrer">
          <img src={Img_uol} alt="" />
        </a>
        <img src={Img_pc} id="pc" alt="" />
      </section>
    </main>
  );
}

export default Pag_02;
