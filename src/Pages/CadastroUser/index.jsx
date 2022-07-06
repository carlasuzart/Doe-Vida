import { Container, Content } from "./style";

function CadastroUser() {
    return (
        <Container>
            <Content>
                <form>
                    <p>Cadastro</p>
                    <div>
                        <label>Nome</label>
                        <input
                            type="text"
                            placeholder=" Email"
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder=" Email"
                        />
                    </div>
                    <div>
                        <label>Senha</label>
                        <input
                            type="password"
                            placeholder=" Senha"
                        />
                    </div>
                    <div>
                        <label>Confirmar senha</label>
                        <input
                            type="password"
                            placeholder=" Email"
                        />
                    </div>
                    <button type="submit">Cadastrar</button>
                    <span>Voltar</span>

                </form>
            </Content>
        </Container>


    )
}

export default CadastroUser