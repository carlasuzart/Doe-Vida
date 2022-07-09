import { Container, LoginForm } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginUser } from "../../services/FakeApi";
import { useHistory } from "react-router-dom";

function LoginHospital() {
  const schema = yup
    .object({
      email: yup.string().required("Digite seu e-mail").email("email inválido"),
      password: yup.string().required("Digite sua senha"),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    loginUser(data);
  };
  
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
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <section className="inputSection">
          <div className="input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Digite aqui o seu email"
              {...register("email")}
            />
          </div>
          <div className="input">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
          </div>
        </section>
        <section className="buttonSection">
          <button type="submit">Entrar</button>
          <span onClick={goToRegisterPage}>Não possui cadastro?</span>
        </section>
      </LoginForm>
    </Container>
  );
}

export default LoginHospital;
