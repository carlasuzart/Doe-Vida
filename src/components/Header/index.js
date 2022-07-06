import logo from "../../assets/logo.jpg";
import { HeaderStyle } from "./style";
function Header() {
  return (
    <HeaderStyle>
      <div className="header">
        <img src={logo} alt="Gota de Sangue" />
        <h1>Doe</h1>
        <h2>Vida</h2>
      </div>
      <div className="buttons">
        <button className="red">Doador</button>
        <button className="green">Hospital</button>
      </div>
    </HeaderStyle>
  );
}

export default Header;
