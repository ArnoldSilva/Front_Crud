import React from "react";

import Arrow from "../img/ArrowRight.png";

import { useNavigate } from "react-router-dom";
import Api from '../Api';
import { toast } from "react-toastify";

function Forget() {
  const navigate = useNavigate();

  const SignIn_Page = () => {
    navigate('/signin');
  };

  const SignUp_Page = () => {
    navigate('/signup');
  };

  const handleSendCode = async () => {
    try {
      // Obtenha o valor do campo de e-mail
      const email = document.getElementById('email').value;

      localStorage.setItem("email", email);

      const data = {
        email: email,
      };
    
      const response = await Api.patch("https://api-login-mn7h.onrender.com/recuperarSenha", data);

      console.log(response.data);

      if(response === 201){
        toast.success("Codigo enviado")
        navigate("/verify")
      }

    }
  
    
    
    catch (error) {
      // Em caso de erro, você pode lidar com ele aqui
      console.error('Erro na solicitação:', error);
    }
  };



  return (
    <div className="bg-white flex flex-col m-auto ">
      <div className="items-stretch rounded border border-[color:var(--gray-100,#E4E7E9)] shadow-2xl bg-white self-center flex w-[424px] max-w-full flex-col mt-24 p-8 border-solid max-md:mt-10 max-md:px-5">
        <div className="text-stone-900 text-center text-xl font-semibold leading-7">
          Forget Password
        </div>

        <div className="text-gray-500 text-center text-sm leading-5 mt-3">
          Enter the email address or mobile phone number associated with your
          Clicon account.
        </div>

        <div className="text-zinc-900 text-sm leading-5 mt-6">
          Email Address
        </div>

        <div className="self-center border border-[color:var(--gray-100,#E4E7E9)] bg-white flex w-[360px] shrink-0 h-11 flex-col mt-2 rounded-sm border-solid">
          <div className="relative">
            <input
              id="email"
              placeholder="Email"
              className="py-2 px-4 w-full h-full border-none rounded-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <button onClick={handleSendCode} className="justify-center items-center bg-stone-900 self-center flex flex-row w-[360px] max-w-full mt-6 px-5 rounded-sm">
          <div className="text-white text-sm font-bold leading-10 tracking-normal uppercase">
            Send Code
          </div>
          <img
            loading="lazy"
            src={Arrow}
            className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 ml-2"
            alt="arrow"
          />
        </button>

        <div className="items-stretch flex justify-between gap-1.5 mt-6">
          <div className="text-gray-500 text-sm leading-5">
            Already have account?
          </div>

          <button onClick={SignIn_Page} className="text-sky-400 text-sm font-medium leading-5 whitespace-nowrap">
            Sign In
          </button>
        </div>


        <div className="items-stretch flex justify-between gap-1.5 mt-2">
          <div className="text-gray-500 text-sm leading-5">
            Don’t have account?
          </div>

          <button onClick={SignUp_Page} className="text-sky-400 text-sm font-medium leading-5 whitespace-nowrap">
            Sign Up
          </button>
        </div>

        <div className="bg-gray-200 shrink-0 h-px mt-6" />

        <div className="text-orange-400 text-sm leading-5 mt-6">
          <span className=" text-neutral-600">You may contact </span>
          <span className="font-medium text-stone-900">Customer  Service </span>
          <span className=" text-neutral-600">
           
            for help restoring access to your account.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Forget;
