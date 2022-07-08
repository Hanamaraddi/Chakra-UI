import "./App.css";
import { Form } from "./components/Form";
import { GridImg } from "./components/GridImg";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <GridImg />
      <Form />
    </div>
  );
}

export default App;
