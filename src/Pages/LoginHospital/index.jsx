import { Container, LoginForm } from "./style";

function LoginHospital() {
  return (
    <Container>
      <section className="logoHospital">
        <h1>Sangue na Veia</h1>
        <span>hospital</span>
      </section>
      <LoginForm>
        <h2>Login</h2>
        <section className="inputSection">
          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Digite aqui o seu email" />
          </div>
          <div className="input">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Digite aqui sua senha" />
          </div>
        </section>
        <section className="buttonSection">
          <button>Entrar</button>
          <span>Não possui cadastro?</span>
        </section>
      </LoginForm>
    </Container>
  );
}

export default LoginHospital;
