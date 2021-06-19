import './App.css';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App(props) {
  const [active, setActive] = useState(false);
  return (
    <div className="App">
      <Header />
      <Main setActive={setActive} />
      <Footer />
      <Modal setActive={setActive} active={active} />
    </div>
  );
}

export default App;
