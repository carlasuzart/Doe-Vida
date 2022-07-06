import { Container, Content } from "./style"

function EditUser() {
    return (
        <>
            <header>Header</header>

            <Container>
                <Content>
                    <h1>Editar</h1>
                    <form>
                        <div>
                            <label>Nome</label>
                            <input
                                type="text"
                                placeholder=" Nome"
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

                        <div className="btn">
                            <button type="submit">Editar</button>
                        </div>
                        <span>Voltar</span>

                    </form>
                </Content>
            </Container>
        </>

    )
}

export default EditUser