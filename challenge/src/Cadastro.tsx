import "./Cadastro.css";
import ImgNote from "./components/backgroundImage/ImagemNotebook";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Pag_02() {
  const [mensagemsucesso, setMensagemSucesso] = useState(false);
  const [mensagemerro, setMensagemErro] = useState(false);
  const [mensagemvalidar, setMensagemValidar] = useState("");
  const navigate = useNavigate();
  const [isValid1, setIsValid1] = useState(true);
  const [isValid2, setIsValid2] = useState(true);
  const [isValid4, setIsValid4] = useState(true);
  const [isValid5, setIsValid5] = useState(true);
  const [isValid6, setIsValid6] = useState(true);
  const [isValid7, setIsValid7] = useState(true);
  const [isValid8, setIsValid8] = useState(true);

  const onInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[a-zA-ZÀ-ÿ]+$/;
    if (!regex.test(e.target.value)) {
      setIsValid1(false);
    } else {
      setIsValid1(true);
    }
  };

  const onInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[a-zA-ZÀ-ÿ]+$/;
    if (!regex.test(e.target.value)) {
      setIsValid2(false);
    } else {
      setIsValid2(true);
    }
  };

  const onInputChange4 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[a-zA-ZÀ-ÿ]+$/;
    if (!regex.test(e.target.value)) {
      setIsValid4(false);
    } else {
      setIsValid4(true);
    }
  };

  const onInputChange5 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[a-zA-ZÀ-ÿ]+$/;
    if (!regex.test(e.target.value)) {
      setIsValid5(false);
    } else {
      setIsValid5(true);
    }
  };

  const onInputChange6 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[a-zA-ZÀ-ÿ0-9._-]+@[a-zA-ZÀ-ÿ0-9.-]+\.[a-zA-ZÀ-ÿ]{2,}$/;
    if (!regex.test(e.target.value)) {
      setIsValid6(false);
    } else {
      setIsValid6(true);
    }
  };

  const onInputChange7 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!regex.test(e.target.value)) {
      setIsValid7(false);
    } else {
      setIsValid7(true);
    }
  };

  const onInputChange8 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!regex.test(e.target.value)) {
      setIsValid8(false);
    } else {
      setIsValid8(true);
    }
  };

  const cadastrar = (e: any) => {
    e.preventDefault();

    const firstname = e.target.elements.firstName.value;
    const lastname = e.target.elements.lastName.value;
    const birthdate = e.target.elements.birthDate.value;
    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const confirmpassword = e.target.elements.password2.value;

    const usuario = {
      firstName: `${firstname}`,
      lastName: `${lastname}`,
      birthDate: `${birthdate}`,
      city: `${city}`,
      country: `${country}`,
      email: `${email}`,
      password: `${password}`,
      confirmPassword: `${confirmpassword}`,
    };
    fetch("https:/latam-challenge-2.deta.dev/api/v1/users/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(usuario),
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          //cadastrado
          setMensagemSucesso(true);
          setMensagemErro(true);
          setMensagemValidar(`User successfully registered!`);
          setTimeout(() => {
            setMensagemSucesso(false);
            setMensagemErro(false);
          }, 6000);
        } else if (response.status === 400) {
          setMensagemErro(true);
          setMensagemValidar(`Por favor, revise seus dados e tente novamente!`);
          setTimeout(() => setMensagemErro(false), 6000);
        } else if (response.status === 500) {
          setMensagemErro(true);
          setMensagemValidar(`Erro de comunicação com Api`);
          setTimeout(() => setMensagemErro(false), 6000);
        } else {
          setMensagemErro(true);
          setMensagemValidar(`Erro desconhecido!`);
          setTimeout(() => setMensagemErro(false), 6000);
        }
      })
      .catch((error) => {
        setMensagemErro(true);
        setMensagemValidar(`Sem conexão com a rede!`);
        setTimeout(() => setMensagemErro(false), 6000);
      });
  };
  return (
    <main id="pag02">
      <section id="lado_1_02">
        <div
          className="mensagemdeerro"
          style={{
            backgroundColor: mensagemsucesso
              ? "rgba(93, 247, 22, 0.080)"
              : "rgba(255, 230, 0, 0.080)rgb(255, 251, 9)",
            color: mensagemsucesso ? "#ffffff" : "rgb(255, 251, 9)",
            border: mensagemsucesso
              ? "1px solid green"
              : "1px solid rgb(218, 214, 7)",
            opacity: mensagemerro ? "1" : "0",
          }}
        >
          {mensagemvalidar}
        </div>
        <form onSubmit={cadastrar}>
          <h1>Welcome,</h1>
          <p>Please, register to continue</p>

          <section className=" section_label">
            <div>
              <label htmlFor="firstname">first name</label>
            </div>
            <input
              name="firstName"
              type="text"
              id="firstname"
              placeholder="Your first name"
              required
              onChange={onInputChange1}
              style={{ borderColor: isValid1 ? "" : "#E9B425" }}
            ></input>
          </section>

          <section className=" section_label">
            <div>
              <label htmlFor="lastname">last name</label>
            </div>
            <input
              name="lastName"
              type="text"
              id="lastname"
              placeholder="Your last name"
              required
              onChange={onInputChange2}
              style={{ borderColor: isValid2 ? "" : "#E9B425" }}
            ></input>
          </section>

          <section className=" section_label">
            <div>
              <label htmlFor="birthdate">birth date</label>
            </div>
            <input name="birthDate" type="date" id="birthdate" required></input>
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
              onChange={onInputChange4}
              style={{ borderColor: isValid4 ? "" : "#E9B425" }}
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
              onChange={onInputChange5}
              style={{ borderColor: isValid5 ? "" : "#E9B425" }}
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
              onChange={onInputChange6}
              style={{ borderColor: isValid6 ? "" : "#E9B425" }}
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
              minLength={6}
              maxLength={20}
              size={20}
              required
              onChange={onInputChange7}
              style={{ borderColor: isValid7 ? "" : "#E9B425" }}
            ></input>
          </section>
          <section className=" section_label ultimasection">
            <div>
              <label htmlFor="password2">password</label>
            </div>
            <input
              name="password2"
              type="password"
              id="password2"
              placeholder="Confirm your password"
              minLength={6}
              maxLength={20}
              size={20}
              required
              onChange={onInputChange8}
              style={{ borderColor: isValid8 ? "" : "#E9B425" }}
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
        <ImgNote />
      </section>
    </main>
  );
}

export default Pag_02;
