import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Header from "./component/header/Header";
import Portfolio from "./pages/portfolio/Portfolio";
import Services from "./pages/servicess/Services";
import Contact from "./pages/contact/Contact";
import { Route, Routes } from "react-router";
import "./App.css";
import Desc from "./pages/servicess/Description/Desc";
function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/service" element={<Services />} />
        <Route path="/service/:desc" element={<Desc />} />
        <Route path="/contactUs" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
