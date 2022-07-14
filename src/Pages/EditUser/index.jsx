import HeaderAlt from "../../components/HeaderAlt";
import { Container, RegisterForm } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { userDataContext } from "../../providers/UserDataProfile";
import { useContext } from "react";
import { getUser } from "../../services/FakeApi";
import { editUser } from "../../services/FakeApi";

function EditUser() {
  const { UserDataProfile, setUserDataProfile } = useContext(userDataContext);
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string(),
    dbirth_date: yup
      .string()
      .matches("^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}$", {
        message: "Formato da data:dd/mm/aaaa",
        excludeEmptyString: true,
      }),
    user_number: yup
      .string()
      .matches("[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}", {
        message: "Formato para CPF:000.000.000-00",
        excludeEmptyString: true,
      }),
    tel: yup
      .string()
      .matches("^([1-9]{2}) [9]{0,1}[6-9]{1}[0-9]{3}-[0-9]{4}$", {
        message: "Formato do telefone :00 0000-0000",
        excludeEmptyString: true,
      }),
    email: yup.string().email("Email inválido"),
    password: yup
      .string()
      .matches(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$",
        {
          message:
            " A senha deve conter 8 caracteres, uma letra maiúscula, um número e um caractere especial!",
          excludeEmptyString: true,
        }
      ),
    confirmarSenha: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem corresponder"),
    check: yup.boolean().isTrue("Você não aceitou os termos!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleChange = (data) => {
    const id = localStorage.getItem("@CapstoneM3:userId");
    console.log(data);
    editUser(data, id);
    history.push("/Schedules");
  };

  useEffect(
    () => async () => {
      const id = localStorage.getItem("@CapstoneM3:userId");
      const userInfo = await getUser(id);
      setUserDataProfile(userInfo);
      console.log(userInfo);

      if (!localStorage.getItem("token")) {
        history.push("/");
      }
    },
    []
  );

  return (
    <>
      <HeaderAlt />

      <Container>
        <RegisterForm onSubmit={handleSubmit(handleChange)}>
          <h1>Editar Cadastro</h1>
          <section className="inputSection">
            <div className="inputs">
              <label htmlFor="name">Nome</label>
              <p className="erro">{errors.name?.message}</p>
            </div>
            <input
              defaultValue={UserDataProfile.name && UserDataProfile.name}
              type="text"
              placeholder=" Digite seu nome"
              {...register("name")}
            />

            <div className="inputs">
              <label htmlFor="dataNascimento">Data de nascimento</label>
              <p className="erro">{errors.birth_date?.message}</p>
            </div>
            <input
              defaultValue={
                UserDataProfile.birth_date && UserDataProfile.birth_date
              }
              type="text"
              placeholder=" ex: 07/07/1979"
              {...register("birth_date")}
            />

            <div className="inputs">
              <label htmlFor="cpf">CPF</label>
              <p className="erro">{errors.user_number?.message}</p>
            </div>
            <input
              defaultValue={
                UserDataProfile.user_number && UserDataProfile.user_number
              }
              type="text"
              placeholder=" ex: 123.456.789-01"
              {...register("user_number")}
            />

            <div className="inputs">
              <label htmlFor="email">Email</label>
              <p className="erro">{errors.email?.message}</p>
            </div>
            <input
              defaultValue={UserDataProfile.email && UserDataProfile.email}
              type="text"
              placeholder=" Digite seu email"
              {...register("email")}
            />

            <div className="inputs">
              <label htmlFor="endereco">Endereço</label>
              <p className="erro">{errors.address?.message}</p>
            </div>
            <input
              defaultValue={UserDataProfile.address && UserDataProfile.address}
              type="text"
              placeholder=" Digite seu endereço"
              {...register("address")}
            />

            <div className="inputs">
              <label htmlFor="telefone">Telefone</label>
              <p className="erro">{errors.tel?.message}</p>
            </div>
            <input
              defaultValue={UserDataProfile.tel && UserDataProfile.tel}
              type="text"
              placeholder=" Digite seu telefone"
              {...register("tel")}
            />

            <div className="inputs">
              <label htmlFor="senha">Senha</label>
              <p className="erro">{errors.password?.message}</p>
            </div>
            <input
              type="password"
              placeholder=" Digite uma senha"
              {...register("password")}
            />

            <div className="inputs">
              <label htmlFor="confirmarSenha">Confirmar senha</label>
              <p className="erro">{errors.confirmarSenha?.message}</p>
            </div>
            <input
              type="password"
              placeholder=" Confirme sua senha"
              {...register("confirmarSenha")}
            />
          </section>
          <section className="buttonSection">
            <button type="submit">Editar Cadastro</button>
            <span
              onClick={() => {
                history.push("/Schedules");
              }}
            >
              Voltar
            </span>
          </section>
        </RegisterForm>
      </Container>
    </>
  );
}

export default EditUser;
