import { Container, RegisterForm } from "./style";

function RegisterHospital() {
  return (
    <Container>
      <RegisterForm>
        <h1>Cadastro</h1>
        <section className="inputSection">
          <div className="input">
            <label htmlFor="cnpj">CNPJ</label>
            <input type="text" placeholder="Digite aqui o cnpj" />
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Digite aqui o email" />
          </div>
          <div className="input">
            <label htmlFor="social">Razão Social</label>
            <input type="text" placeholder="Digite aqui a social" />
          </div>
          <div className="input">
            <label htmlFor="address">Endereço</label>
            <input type="text" placeholder="Digite aqui o endereço" />
          </div>
          <div className="input">
            <label htmlFor="passord">Senha</label>
            <input type="password" placeholder="Digite aqui a senha" />
          </div>
          <div className="input">
            <label htmlFor="confirmPassord">Confirmar senha</label>
            <input type="password" placeholder="Digite aqui a senha" />
          </div>
        </section>
        <section className="buttonSection">
          <button>Cadastrar</button>
          <span>voltar</span>
        </section>
      </RegisterForm>
    </Container>
  );
}

export default RegisterHospital;
