import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div>
      <div className="contanier">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
};

export default App;
