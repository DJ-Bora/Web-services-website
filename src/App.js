import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home.jsx";
import  Footer  from "./components/Footer.jsx";
import  Contact  from "./components/Contact.jsx";
import Services from "./components/Services.jsx";

import "./style/App.scss";  
import "./style/Header.scss"
import "./style/Home.scss"
import "./style/Footer.scss"
import "./style/Contact.scss"
import "./style/Mediaquery.scss"

function App() {
  return (
<Router>
<Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Services" element={<Services />} />
  </Routes>
  <Footer />
</Router>

  );
}

export default App;
