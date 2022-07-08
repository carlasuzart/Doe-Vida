import { Container, Content } from "./style";
import { useForm } from "react-hook-form";
import{yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup";

function RegisterUser() {

     const formSchema=yup.object().shape({
       name:yup.string().required("Nome Obrigatório"),
       email:yup.string().required("Email Obrigatório").email("Email inválido"),
       password:yup.string().required("Senha Obrigatório"),

     })

  const { register, handleSubmit,formState:{errors} } = useForm({
    resolver: yupResolver(formSchema)  
  });

  function registerUser(data) {
    console.log(data);
  }
  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit(registerUser)}>
          <p>Cadastro</p>
          <div>
            <label>Nome</label>
            <input
              type="text"
              placeholder=" Digite seu nome"
              {...register("name")}
            />
            <p className="Error">{errors.name?.message}</p>
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
            <input
              type="text"
              placeholder=" Digite seu email"
              {...register("email")}
            />
            <p className="Error">{errors.email?.message}</p>
             
          </div>
          <div>
            <label>Endereço</label>
            <input type="text" placeholder=" Digite aqui seu endereço" />
          </div>
          <div>
            <label>Senha</label>
            <input
              type="password"
              placeholder=" Digite uma senha"
              {...register("password")}
            />
            <p className="Error"> {errors.password?.message}</p>
            
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
