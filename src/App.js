import "./App.css";
import Routes from "./Routes";
import { GlobalStyle } from "./style/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes />
    </>
  );
}

export default App;
