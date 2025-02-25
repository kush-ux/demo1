import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/contact";
import{BrowserRouter,Routes,Route} from "react-router-dom";

function App(){
  return(
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App