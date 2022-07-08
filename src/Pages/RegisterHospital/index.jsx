import { Container, RegisterForm } from "./style";
import { useHistory } from "react-router-dom";

function RegisterHospital() {
  const history = useHistory();

  function goToLoginPage() {
    history.push("/LoginHospital");
  }

  return (
    <Container>
      <RegisterForm>
        <h1>Cadastro</h1>
        <section className="inputSection">
          <div className="input">
            <label htmlFor="name">Nome da empresa</label>
            <input type="text" placeholder="Digite aqui o nome do hospital" />
          </div>
          <div className="input">
            <label htmlFor="social">Razão Social</label>
            <input type="text" placeholder="Digite aqui a social" />
          </div>
          <div className="input">
            <label htmlFor="cnpj">CNPJ</label>
            <input type="text" placeholder="Digite aqui o cnpj" />
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Digite aqui o email" />
          </div>
          <div className="input">
            <label htmlFor="address">Endereço</label>
            <input type="text" placeholder="Digite aqui o endereço" />
          </div>
          <div className="input">
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="Digite aqui a senha" />
          </div>
          <div className="input">
            <label htmlFor="confirmPassword">Confirmar senha</label>
            <input type="password" placeholder="Confirme sua senha" />
          </div>
        </section>
        <section className="buttonSection">
          <button>Cadastrar</button>
          <span onClick={goToLoginPage}>voltar</span>
        </section>
      </RegisterForm>
    </Container>
  );
}

export default RegisterHospital;
