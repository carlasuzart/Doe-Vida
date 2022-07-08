import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { HeaderStyle } from "./style";
function Header() {
  const history = useHistory();
  return (
    <HeaderStyle>
      <div className="header">
        <img src={logo} alt="Gota de Sangue" />
        <h1>Doe</h1>
        <h2>Vida</h2>
      </div>
      <div className="buttons">
        <button className="red" onClick={() => history.push("/LoginUser")}>
          Doador
        </button>
        <button
          className="green"
          onClick={() => history.push("/LoginHospital")}
        >
          Hospital
        </button>
      </div>
    </HeaderStyle>
  );
}

export default Header;
