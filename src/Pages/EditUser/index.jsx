import HeaderAlt from "../../components/HeaderAlt";
import { Container, Content } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { userDataContext } from "../../providers/UserDataProfile";
import { useContext } from "react";
import { getUser } from "../../services/FakeApi";
import { editUser } from "../../services/FakeApi";

function EditUser() {
  const history = useHistory();
  const { UserDataProfile, setUserDataProfile } = useContext(userDataContext);

  const formSchema = yup.object().shape({
    name: yup.string(),
    dataNascimento: yup
      .string()
      .matches("^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}$", {
        message: "Formato da data:dd/mm/aaaa",
        excludeEmptyString: true,
      }),
    cpf: yup.string().matches("[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}", {
      message: "Formato para CPF:000.000.000-00",
      excludeEmptyString: true,
    }),
    telefone: yup
      .string()
      .matches("^([1-9]{2}) [9]{0,1}[6-9]{1}[0-9]{3}-[0-9]{4}$", {
        message: "Formato do telefone :00 0000-0000",
        excludeEmptyString: true,
      }),
    email: yup.string().email("Email inválido"),
    senha: yup
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
      .oneOf([yup.ref("senha"), null], "As senhas devem corresponder"),
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
    const id = localStorage.getItem("@CapstoneM3:userId")
    editUser(data,id);
    history.push("/Schedules")

  };

  useEffect(() => {
    const id = localStorage.getItem("@CapstoneM3:userId");
    setUserDataProfile(getUser(id))
    console.log(getUser(id))
    
    if (!localStorage.getItem("token")) {
      history.push("/");
    }
  }, []);
  const teste = UserDataProfile.email;
  console.log(teste);

  return (
    <>
      <HeaderAlt />

      <Container>
        <Content>
          <form onSubmit={handleSubmit(handleChange)}>
            <h1>Editar</h1>

            <div>
              <div className="validacao">
                <label>Nome</label>
                <p className="erro">{errors.name?.message}</p>
              </div>
              <input
                type="text"
                defaultValue={ UserDataProfile.email && UserDataProfile.email}
                placeholder=" Digite seu nome"
                {...register("name")}
              />
            </div>

            <div>
              <div className="validacao">
                <label>Data de nascimento</label>
                <p className="erro">{errors.dataNascimento?.message}</p>
              </div>
              <input
                type="text"
                placeholder=" ex: 07/07/1979"
                defaultValue={ UserDataProfile.birth_date && UserDataProfile.birth_date}
                {...register("dataNascimento")}
              />
            </div>

            <div>
              <div className="validacao">
                <label>CPF</label>
                <p className="erro">{errors.cpf?.message}</p>
              </div>
              <input
                type="text"
                placeholder=" ex: 123.456.789-01"
                defaultValue={ UserDataProfile.user_number && UserDataProfile.user_number}

                {...register("cpf")}
              />
            </div>

            <div>
              <div className="validacao">
                <label>Email</label>
                <p className="erro">{errors.email?.message}</p>
              </div>
              <input
                type="text"
                defaultValue={ UserDataProfile.email && UserDataProfile.email}
                placeholder=" Digite seu email"
                {...register("email")}
              />
            </div>

            <div>
              <div className="validacao">
                <label>Endereço</label>
                <p className="erro">{errors.endereco?.message}</p>
              </div>
              <input
                type="text"
                placeholder=" Digite seu endereço"
                defaultValue={ UserDataProfile.address && UserDataProfile.address}

                {...register("endereco")}
              />
            </div>

            <div>
              <div className="validacao">
                <label>Telefone</label>
                <p className="erro">{errors.telefone?.message}</p>
              </div>
              <input
                type="text"
                defaultValue={ UserDataProfile.tel && UserDataProfile.tel}

                placeholder=" Digite seu telefone"
                {...register("telefone")}
              />
            </div>

            <div>
              <div className="validacao">
                <label>Senha</label>
                <p className="erro">{errors.senha?.message}</p>
              </div>
              <input
                type="password"
                defaultValue={ UserDataProfile.password && UserDataProfile.password}
                placeholder=" Digite uma senha"
                {...register("senha")}
              />
            </div>

            <div>
              <div className="validacao">
                <label>Confirmar senha</label>
                <p className="erro">{errors.confirmarSenha?.message}</p>
              </div>
              <input
                type="password"
                placeholder=" Confirme sua senha"
                {...register("confirmarSenha")}
              />
            </div>

            <div className="btn">
              <button type="submit">Editar</button>
            </div>
            <span>
              <Link to="/Schedules">Voltar</Link>
            </span>
          </form>
        </Content>
      </Container>
    </>
  );
}

export default EditUser;
