import { Container, Content } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { registerUser } from "../../services/FakeApi";

function RegisterUser() {
  const history = useHistory();
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email Obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha Obrigatória")
      .matches(
        /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve conter ao menos um símbolo, letras, números e ter no mínimo 8 caracteres!"
      ),
    passwordConfirm: yup
      .string()
      .required("Confirme a senha ")
      .oneOf([yup.ref("password")], "As senhas não são iguais!"),
    user_number: yup
      .string()
      .required("CPF Obrigatório")
      .matches(
        /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
        "Formato do Cpf: 000.000.000-00."
      ),
    tel: yup
      .string()
      .required("Telefone Obrigatório")
      .matches(
        /^[1-9]{2} (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/,
        "Formato do telefone: 00 00000-0000"
      ),
    address: yup.string().required("Endereço Obrigatório"),
    birth_date: yup
      .string()
      .required("Data de nascimento Obrigatória")
      .matches(
        /([0-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/[0-9]{4}/,
        "Formato da data dd/mm/yyyy."
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  async function registerUserForm(data) {
    const newUser = {
      address: data.address,
      birth_date: data.birth_date,
      email: data.email,
      name: data.name,
      password: data.password,
      tel: data.tel,
      user_number: data.user_number,
      type: "user",
    };
    const resposta = await registerUser(newUser);

    if (resposta.statusText === "Created") {
      history.push("/LoginUser");
    }
  }
  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit(registerUserForm)}>
          <h1>Cadastro</h1>
          <div>
            <div className="labelArea">
              <label>Nome</label>
              <p className="Error">{errors.name?.message}</p>
            </div>
            <input
              type="text"
              placeholder=" Digite seu nome"
              {...register("name")}
            />
          </div>

          <div>
            <div className="labelArea">
              <label>Data de nascimento</label>
              <p className="Error">{errors.birth_date?.message}</p>
            </div>
            <input
              type="text"
              placeholder=" ex: 07/07/1979"
              {...register("birth_date")}
            />
          </div>

          <div>
            <div className="labelArea">
              <label>CPF</label>
              <p className="Error">{errors.user_number?.message}</p>
            </div>
            <input
              type="text"
              placeholder=" ex: 123.456.789-01"
              {...register("user_number")}
            />
          </div>
          <div>
            <div className="labelArea">
              <label>Email</label>
              <p className="Error">{errors.email?.message}</p>
            </div>
            <input
              type="text"
              placeholder=" Digite seu email"
              {...register("email")}
            />
          </div>

          <div>
            <div className="labelArea">
              <label>Telefone</label>
              <p className="Error">{errors.tel?.message}</p>
            </div>
            <input
              type="text"
              placeholder=" Digite seu Telefone"
              {...register("tel")}
            />
          </div>

          <div>
            <div className="labelArea">
              <label>Endereço</label>
              <p className="Error"> {errors.address?.message}</p>
            </div>
            <input
              type="text"
              placeholder=" Digite aqui seu endereço"
              {...register("address")}
            />
          </div>

          <div>
            <div className="labelArea">
              <label>Senha</label>
              <p className="Error"> {errors.password?.message}</p>
            </div>
            <input
              type="password"
              placeholder=" Digite uma senha"
              {...register("password")}
            />
          </div>
          <div>
            <div className="labelArea">
              <label>Confirmar senha</label>
              <p className="Error"> {errors.passwordConfirm?.message}</p>
            </div>
            <input
              type="password"
              placeholder=" Confirme sua senha"
              {...register("passwordConfirm")}
            />
          </div>
          <button type="submit">Cadastrar</button>
          <span
            onClick={() => {
              history.push("/LoginUser");
            }}
          >
            Voltar
          </span>
        </form>
      </Content>
    </Container>
  );
}

export default RegisterUser;
