import { Container, RegisterForm } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerUser } from "../../services/FakeApi";
import {  useHistory } from "react-router-dom";



function RegisterHospital() {

  const history = useHistory();
  const formSchema = yup.object().shape({
    corporate_name:yup.string().required("Nome Obrigatório"),
    company_name:yup.string().required("Razão Social Obrigatória "),
    email:yup.string().required("Email Obrigatório ").email("Email Inválido"),
    address:yup.string().required("Endereço Obrigatório "),
    password:yup.string().required("Senha Obrigatório ").matches( /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,"A senha deve conter ao menos um símbolo, letras, números e ter no mínimo 8 caracteres!"),
    passwordConfirm:yup.string().required("Confirme a senha ").oneOf([yup.ref("password")], "As senhas não são iguais!"),
    company_number:yup.string().required("CNPJ obrigatório").matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,'Formato do CNPJ:00.000.000/0000-00'),
    company_tel:yup.string().required("Telefone Obrigatório").matches(/^[1-9]{2} (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/,"Formato do telefone: 00 00000-0000")

  });

  const { register, handleSubmit,formState:{errors} } = useForm({
    resolver:yupResolver(formSchema)
  });

  async function registerCompany(data) {

     const newCompany={
      corporate_name: data.corporate_name,
      company_name: data.company_name,
      email: data.email,
      address: data.address,
      password: data.password,
      company_number: data.company_number,
      company_tel: data.company_tel,

     }
     const resposta =await registerUser(newCompany)

    if( resposta.statusText==='Created'){
   
   history.push("/LoginHospital")
    } 
  }

  return (
    <Container>
      <RegisterForm onSubmit={handleSubmit(registerCompany)}>
        <h1>Cadastro</h1>
        <section className="inputSection">
          <div className="input">
          <div className="labelArea">
            <label htmlFor="name">Nome da empresa</label>
            <p className="Error"> {errors.corporate_name?.message}</p>
            </div>
            <input
              type="text"
              placeholder="Digite aqui o nome do hospital"
             {...register("corporate_name")}
            />
             
          </div>
          <div className="input">
            <div className="labelArea">
            <label htmlFor="social">Razão Social</label> 
            <p className="Error"> {errors.company_name?.message}</p>
            </div>
            <input type="text" placeholder="Digite aqui a social"  {...register("company_name")} />
           
          </div>
          <div className="input">
          <div className="labelArea">
            <label htmlFor="cnpj">CNPJ</label>
            <p className="Error"> {errors.company_number?.message}</p>
            </div>
            <input type="text" placeholder="Digite aqui o cnpj" {...register("company_number")}  />
          </div>

          <div className="input">
          <div className="labelArea">
            <label htmlFor="email">Email</label>
            <p className="Error"> {errors.email?.message}</p>
            </div>
            <input
              type="text"
              placeholder="Digite aqui o email"
              {...register("email")}
            />
          </div>

             
          <div className="input">
          <div className="labelArea">
            <label htmlFor="confirmPassword">Telefone</label>
            <p className="Error"> {errors.company_tel?.message}</p>
            </div>
            <input type="text" placeholder="Digite aqui seu telefone"  {...register("company_tel")} />
          </div>

          <div className="input">
          <div className="labelArea">
            <label htmlFor="address">Endereço</label>
            <p className="Error"> {errors.address?.message}</p>
            </div>
            <input
              type="text"
              placeholder="Digite aqui o endereço"
              {...register("address")}
            />
          </div>
          <div className="input">
          <div className="labelArea">
            <label htmlFor="password">Senha</label>
            <p className="Error"> {errors.password?.message}</p>
            </div>
            <input
              type="password"
              placeholder="Digite aqui a senha"
              {...register("password")}
            />
          </div>
          <div className="input">
          <div className="labelArea">
            <label htmlFor="confirmPassword"  >Confirmar senha</label>
            <p className="Error"> {errors.passwordConfirm?.message}</p>
            </div>
            <input type="password" placeholder="Confirme sua senha"  {...register("passwordConfirm")}/>
          </div>


        </section>
        <section className="buttonSection">
          <button type="submit">Cadastrar</button>
          <span onClick={()=>{
            history.push("/LoginHospital")
          }}>voltar</span>
        </section>
      </RegisterForm>
    </Container>
  );
}

export default RegisterHospital;
