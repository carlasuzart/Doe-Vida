import { Container, RegisterForm } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function RegisterHospital() {
  const formSchema = yup.object().shape({
    company_name:yup.string().required("Nome Obrigatório "),
    email:yup.string().required("Email Obrigatório ").email("Email Inválido"),
    address:yup.string().required("Endereço Obrigatório "),
    password:yup.string().required("Senha Obrigatório "),
  });

  const { register, handleSubmit,formState:{errors} } = useForm({
    resolver:yupResolver(formSchema)
  });

  function registerCompany(data) {
    console.log(data);
  }

  return (
    <Container>
      <RegisterForm onSubmit={handleSubmit(registerCompany)}>
        <h1>Cadastro</h1>
        <section className="inputSection">
          <div className="input">
            <label htmlFor="name">Nome da empresa</label>
            <input
              type="text"
              placeholder="Digite aqui o nome do hospital"
              {...register("company_name")}
            />
             <p className="Error"> {errors.company_name?.message}</p>
          </div>
          <div className="input">
            <label htmlFor="social">Razão Social</label>
            <input type="text" placeholder="Digite aqui a social" />
          </div>
          <div className="input">
            <label htmlFor="cnpj">CNPJ</label>
            <input type="text" placeholder="Digite aqui o cnpj" />
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Digite aqui o email"
              {...register("email")}
            />
             <p className="Error"> {errors.email?.message}</p>
          </div>
          <div className="input">
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              placeholder="Digite aqui o endereço"
              {...register("address")}
            />
             <p className="Error"> {errors.address?.message}</p>
          </div>
          <div className="input">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              placeholder="Digite aqui a senha"
              {...register("password")}
            />
             <p className="Error"> {errors.password?.message}</p>
          </div>
          <div className="input">
            <label htmlFor="confirmPassword">Confirmar senha</label>
            <input type="password" placeholder="Confirme sua senha" />
          </div>
        </section>
        <section className="buttonSection">
          <button type="submit">Cadastrar</button>
          <span>voltar</span>
        </section>
      </RegisterForm>
    </Container>
  );
}

export default RegisterHospital;
