import { Container, RegisterForm } from "./style";
import HeaderAlt from "../../components/HeaderAlt"

function EditHospital() {

  return (
    <>
      <HeaderAlt type="hospital" />
      <Container>
        <RegisterForm>
          <h1> Editar Cadastro</h1>
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
              <label htmlFor="Telefone">Telefone</label>
              <input type="text" placeholder="Digite seu telefone" />
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
            <button>Editar Cadastro</button>
            <span>Voltar</span>
          </section>
        </RegisterForm>
      </Container>
    </>
  );
}

export default EditHospital;
