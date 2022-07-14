import { Container, RegisterForm } from "./style";
import HeaderAlt from "../../components/HeaderAlt";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { editUser } from "../../services/FakeApi";
import { useContext } from "react";
import { userDataContext } from "../../providers/UserDataProfile";
import { getUser } from "../../services/FakeApi";

function EditHospital() {
  const history = useHistory();
  const { UserDataProfile, setUserDataProfile } = useContext(userDataContext);

  const validationForm = yup.object().shape({
    company_name: yup.string().required("Este campo é obrigatório"),
    corporate_name: yup.string().required("Este campo é obrigatório"),
    company_number: yup.string().matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, {
      message: "Formato do CNPJ:00.000.000/0000-00",
      excludeEmptyString: true,
    }),

    address: yup.string().required("Este campo é obrigatório"),
    company_tel: yup
      .string()
      .required("Este campo é obrigatório")
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
    resolver: yupResolver(validationForm),
  });

  const handleChange = (data) => {
    editUser(data, localStorage.getItem("@CapstoneM3:userId"));
    history.push("/HospitalProfile");
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
      <HeaderAlt type="hospital" />
      <Container>
        <RegisterForm onSubmit={handleSubmit(handleChange)}>
          <h1> Editar Cadastro</h1>
          <section className="inputSection">
            <div className="inputs">
              <label htmlFor="name">Nome da empresa</label>
              <p className="erro">{errors.company_name?.message}</p>
            </div>
            <input
              type="text"
              defaultValue={
                UserDataProfile.corporate_name && UserDataProfile.corporate_name
              }
              placeholder="Digite aqui o nome do hospital"
              {...register("corporate_name")}
            />
            <div className="inputs">
              <label htmlFor="social">Razão Social</label>
              <p className="erro">{errors.company_name?.message}</p>
            </div>
            <input
              type="text"
              defaultValue={
                UserDataProfile.company_name && UserDataProfile.company_name
              }
              placeholder="Digite aqui a social"
              {...register("company_name")}
            />
            <div className="inputs">
              <label htmlFor="cnpj">CNPJ</label>
              <p className="erro">{errors.company_number?.message}</p>
            </div>
            <input
              type="text"
              placeholder="Digite aqui o cnpj"
              defaultValue={
                UserDataProfile.company_number && UserDataProfile.company_number
              }
              {...register("company_number")}
            />
            <div className="inputs">
              <label htmlFor="email">Email</label>
              <p className="erro">{errors.email?.message}</p>
            </div>
            <input
              type="email"
              placeholder="Digite aqui o email"
              defaultValue={UserDataProfile.email && UserDataProfile.email}
              {...register("email")}
            />
            <div className="inputs">
              <label htmlFor="address">Endereço</label>
              <p className="erro">{errors.address?.message}</p>
            </div>
            <input
              type="text"
              defaultValue={UserDataProfile.address && UserDataProfile.address}
              placeholder="Digite aqui o endereço"
              {...register("address")}
            />
            <div className="inputs">
              <label htmlFor="Telefone">Telefone</label>
              <p className="erro">{errors.company_tel?.message}</p>
            </div>
            <input
              type="text"
              defaultValue={
                UserDataProfile.company_tel && UserDataProfile.company_tel
              }
              placeholder="Digite seu telefone"
              {...register("company_tel")}
            />
            <div className="inputs">
              <label htmlFor="password">Senha</label>
              <p className="erro">{errors.password?.message}</p>
            </div>
            <input
              type="password"
              placeholder="Digite aqui a senha"
              {...register("password")}
            />
            <div className="inputs">
              <label htmlFor="confirmPassword">Confirmar senha</label>
              <p className="erro">{errors.confirmarSenha?.message}</p>
            </div>
            <input
              type="password"
              placeholder="Confirme sua senha"
              {...register("confirmarSenha")}
            />
          </section>
          <section className="buttonSection">
            <button type="submit">Editar Cadastro</button>
            <span
              onClick={() => {
                history.push("/HospitalProfile");
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

export default EditHospital;
