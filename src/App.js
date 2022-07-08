import "./App.css";
import Routes from "./Routes";
import { GlobalStyle } from "./style/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";


function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
     />
        
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
