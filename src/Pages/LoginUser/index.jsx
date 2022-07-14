import { useForm } from "react-hook-form";
import { Container, LoginForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginUser } from "../../services/FakeApi";
import { useHistory } from "react-router-dom";

function LoginUser() {
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
  const history = useHistory();

  const onSubmit = async (data) => {
    const response = await loginUser(data, "user");
    console.log(response);

    if (response.statusText === "OK") {
      const nameUser = response.data.user.name;
      const userId = response.data.user.id;

      localStorage.setItem("@CapstoneM3:userId", userId);
      localStorage.setItem("@CapstoneM3:NameUser", nameUser);
      history.push("/Schedules");
    }
  };

  function goToRegisterPage() {
    history.push("/RegisterUser");
  }
  return (
    <Container>
      <section className="logoUser">
        <h1>Doe Vida</h1>
        <span>Doador</span>
      </section>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <section className="inputSection">
          <div className="input">
            <div className="labelDiv">
              <label htmlFor="email">Email</label>
              {errors?.email?.message && (
                <span> - {errors?.email?.message}</span>
              )}
            </div>
            <input
              type="email"
              placeholder=" Digite aqui o seu email"
              {...register("email")}
            />
          </div>
          <div className="input">
            <div className="labelDiv">
              <label htmlFor="password">Senha</label>
              {errors?.password?.message && (
                <span> - {errors?.password?.message} </span>
              )}
            </div>
            <input
              type="password"
              placeholder=" Digite aqui sua senha"
              {...register("password")}
            />
          </div>
        </section>
        <section className="buttonSection">
          <button type="submit">Entrar</button>
          <span onClick={goToRegisterPage}>Não possui uma conta?</span>
          <span
            onClick={() => {
              history.push("/");
            }}
            className="voltar"
          >
            Voltar
          </span>
        </section>
      </LoginForm>
    </Container>
  );
}

export default LoginUser;
