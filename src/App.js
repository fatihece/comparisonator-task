import Navbars from "./components/Navbars";
import "./App.css";
import MainContextProvider from "./context/Context";

function App() {
  return (
    <MainContextProvider>
      <Navbars />
    </MainContextProvider>
  );
}

export default App;
