import React from "react";
import Setting from "../img/Gear.png";
// import Heart2 from "../img/heart2.png";
// import Cart2 from "../img/ShoppingCartSimple.png";
import tag from "../img/Tag.png"
import dolar from "../img/CurrencyDollar.png"

import Note from "../img/Notebook.png";
import SignOut from "../img/SignOut.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Menubar() {
  const navigate = useNavigate();

  const  Profilepage = ()=>{
    navigate("/profilepage")
  }

  const  Cardpage = ()=>{
    navigate("/card")
  }

  const  Productpage = ()=>{
    navigate("/getall")
  }

  const Logout = () => {
   
    if (!localStorage.getItem('token')) {
    
      toast.warning("Você não está logado.");
      return;
    }
    localStorage.clear(); 
    toast.success("Saiu Com Sucesso");
    navigate("/");
  };

  return (
    <div className="menubar">
      <div className="w-[264px] items-stretch rounded border border-[color:var(--gray-100,#E4E7E9)] shadow-2xl bg-white flex flex-col py-4 border-solid">
        
        <div onClick={Cardpage} className="cursor-pointer hover:bg-gray-200 transition-all duration-300 items-stretch flex justify-between gap-3 pl-6 pr-20 py-2.5 max-md:px-5">
          <img
            loading="lazy"
            src={dolar}
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            alt=""
          />
          <p className="text-gray-500 text-sm leading-5 self-center grow whitespace-nowrap my-auto">
            Cards & Address
          </p>
        </div>

        <div onClick={Productpage} className="cursor-pointer hover:bg-gray-200 transition-all duration-300 items-stretch flex justify-between gap-3 pl-6 pr-20 py-2.5 max-md:px-5">
          <img
            loading="lazy"
            src={tag}
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            alt=""
          />
          <p className="text-gray-500 text-sm leading-5 self-center grow whitespace-nowrap my-auto">
            Produtos
          </p>
        </div>

          <div onClick={Profilepage} className="cursor-pointer hover:bg-gray-200 transition-all duration-300 items-stretch flex justify-between gap-3 pl-6 pr-20 py-2.5 max-md:px-5">
            <img
              loading="lazy"
              src={Setting}
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              alt=""
            />
            <p className="text-gray-500 text-sm leading-5 self-center grow whitespace-nowrap my-auto">
              Settings
            </p>
          </div>
    

        <div onClick={Logout} className="cursor-pointer hover:bg-gray-200 transition-all duration-300 items-stretch flex justify-between gap-3 pl-6 pr-20 py-2.5 max-md:px-5">
          <img
            loading="lazy"
            src={SignOut}
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            alt=""
          />
          <p className="text-gray-500 text-sm leading-5 self-center grow whitespace-nowrap my-auto">
            Log-out
          </p>
        </div>

      </div>
    </div>
  );
}

export default Menubar;
