// import FullScreen from "./components/Full_Screen"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Tostify from "./components/Toastify";
// reaproveitando a estrutura
import { Outlet } from "react-router-dom";

function App() {
 
 
  return (
    <div className="">
    <Header/>
    
    <Outlet/>
    
    <Footer/>

    <Tostify/>

   
    </div>
  );
}

export default App;
