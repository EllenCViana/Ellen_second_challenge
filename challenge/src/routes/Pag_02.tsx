import "./Pag_02.css";
import Img_pc from "./imagens/image2.svg";
import Img_uol from "./imagens/Type=Colored negative.svg";

function Pag_02() {
  return (
    <main id="pag02">
      <section id="lado_1_02">
        <form>
          <h1>Welcome,</h1>
          <p>Please, register to continue</p>

          <section className=" section_label">
            <div>
              <label htmlFor="firstname">first name</label>
            </div>
            <input
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
