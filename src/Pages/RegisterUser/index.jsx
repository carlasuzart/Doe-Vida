import { Container, Content } from "./style";

function RegisterUser() {
  return (
    <Container>
      <Content>
        <form>
          <p>Cadastro</p>
          <div>
            <label>Nome</label>
            <input type="text" placeholder=" Digite seu nome" />
          </div>
          <div>
            <label>Data de nascimento</label>
            <input type="text" placeholder=" ex: 07/07/1979" />
          </div>
          <div>
            <label>CPF</label>
            <input type="text" placeholder=" ex: 123.456.789-01" />
          </div>
          <div>
            <label>Email</label>
            <input type="text" placeholder=" Digite seu email" />
          </div>
          <div>
            <label>Endereço</label>
            <input type="text" placeholder=" Digite aqui seu endereço" />
          </div>
          <div>
            <label>Senha</label>
            <input type="password" placeholder=" Digite uma senha" />
          </div>
          <div>
            <label>Confirmar senha</label>
            <input type="password" placeholder=" Confirme sua senha" />
          </div>
          <button type="submit">Cadastrar</button>
          <span>Voltar</span>
        </form>
      </Content>
    </Container>
  );
}

export default RegisterUser;
