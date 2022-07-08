import { Container, LoginForm } from "./style";
import { useHistory } from "react-router-dom";

function LoginHospital() {
  const history = useHistory();

  function goToRegisterPage() {
    history.push("/RegisterHospital");
  }

  return (
    <Container>
      <section className="logoHospital">
        <h1>Doe Vida</h1>
        <span>Hospital</span>
      </section>
      <LoginForm>
        <h2>Login</h2>
        <section className="inputSection">
          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Digite aqui o seu email" />
          </div>
          <div className="input">
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="Digite aqui sua senha" />
          </div>
        </section>
        <section className="buttonSection">
          <button>Entrar</button>
          <span onClick={goToRegisterPage}>Não possui cadastro?</span>
        </section>
      </LoginForm>
    </Container>
  );
}

export default LoginHospital;
