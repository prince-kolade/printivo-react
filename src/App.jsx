import { useState } from "react";
import "./App.css";
import "./navbar.css";
import Navbar from "./navbar";
import MainPage from "./mainpage";
import Section from "./section";
import Footer from "./footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <MainPage />
      <Section />
      <Footer />
    </>
  );
}

export default App;
