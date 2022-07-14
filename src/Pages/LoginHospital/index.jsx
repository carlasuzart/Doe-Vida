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
  const onSubmit = async (data) => {
    const response = await loginUser(data, "hospital");
    if (response.statusText === "OK") {
      const nameHospital = response.data.user.corporate_name;
      const addressHospital = response.data.user.address;
      const company_number = response.data.user.company_number;

      localStorage.setItem("@CapstoneM3:NameHospital", nameHospital);
      localStorage.setItem("@CapstoneM3:AddressHospital", addressHospital);
      localStorage.setItem("@CapstoneM3:company_number", company_number);
      history.push("/HospitalProfile");
    }
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
            <div className="labelDiv">
              <label htmlFor="email">Email</label>
              {errors?.email?.message && (
                <span> - {errors?.email?.message}</span>
              )}
            </div>
            <input
              type="email"
              placeholder="Digite aqui o seu email"
              {...register("email")}
            />
          </div>
          <div className="input">
            <div className="labelDiv">
              <label htmlFor="password">Senha</label>
              {errors?.password?.message && (
                <span> - {errors?.password?.message}</span>
              )}
            </div>
            <input
              type="password"
              placeholder="Digite aqui sua senha"
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

export default LoginHospital;
