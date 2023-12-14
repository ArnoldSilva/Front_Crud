import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Api from '../Api';

import Google from "../img/Google.png";
import Arrow from "../img/ArrowRight.png";
import Eye from "../img/Eye.png";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();

  const Redirect = () => {
    navigate('/signin');
  };



  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async () => {
    try {
     
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const data = {
        username: name,
        email: email,
        password: password,
      };


      const response = await Api.post('https://api-login-mn7h.onrender.com/', data);

      
      treatResponse(response);

      if (response.status === 200 === 201) {
        toast.success("Registration completed successfully", { autoClose: 5000 });
      };
      } catch {
      console.log('Login Error');
      toast.error("Check your information!")

     }
  };

  const treatResponse = (response) => {
    if (response.status === 200 || response.status === 201) {
      toast.success("Cadastro realizado com sucesso", { autoClose: 5000 });
      navigate('/signin');
    } else {
      console.error('Erro:', response.status, response.data.message);
      toast.error(response.data.error);
    }
  };
  







  return (
    <div className="rounded border border-[color:var(--gray-100,#E4E7E9)] shadow-2xl bg-white self-center flex w-[424px] max-w-full flex-col items-stretch mt-24 border-solid max-md:mt-10 m-auto">

      <div className="border border-[color:var(--gray-100,#E4E7E9)] shadow-2xl bg-white flex flex-col pb-8 px-5 border-solid max-md:max-w-full">


        {/* Nome */}
        <div className="text-zinc-900 text-sm leading-5 mt-6">
          Name
        </div>

        <div className="self-center border border-[color:var(--gray-100,#E4E7E9)] bg-white flex w-[360px] shrink-0 h-11 flex-col mt-2 rounded-sm border-solid">
          <div className="relative">
            <input
              id="name"
              placeholder="Name"
              className="py-2 px-4 w-full h-full border-none rounded-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Email */}
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

        {/* Senha */}
        <div className="justify-between items-stretch self-center flex w-[360px] max-w-full gap-5 mt-4">
          <div className="text-zinc-900 text-sm leading-5 ">Password</div>
        </div>

        <div className="self-center border border-[color:var(--gray-100,#E4E7E9)] bg-white flex w-[360px] shrink-0 h-11 flex-col mt-2 rounded-sm border-solid">
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="py-2 px-4 w-full h-full border-none rounded-sm focus:outline-none focus:border-blue-500"
            />
            <img
              onClick={togglePasswordVisibility}
              loading="lazy"
              src={Eye}
              className="aspect-square object-contain object-center w-5 cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-3"
              alt="Toggle Password Visibility"
            />
          </div>
        </div>

        {/* Confirmar Senha */}
        <div className="justify-between items-stretch self-center flex w-[360px] max-w-full gap-5 mt-4">
          <div className="text-zinc-900 text-sm leading-5 ">Confirm Password</div>
        </div>

        <div className="self-center border border-[color:var(--gray-100,#E4E7E9)] bg-white flex w-[360px] shrink-0 h-11 flex-col mt-2 rounded-sm border-solid">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              className="py-2 px-4 w-full h-full border-none rounded-sm focus:outline-none focus:border-blue-500"
            />
            <img
              onClick={togglePasswordVisibility}
              loading="lazy"
              src={Eye}
              className="aspect-square object-contain object-center w-5 cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-3"
              alt="Toggle Password Visibility"
            />
          </div>
        </div>

        {/* Botão de Registro */}
        <button onClick={handleSignUp} className="flex items-center justify-center bg-stone-900 w-[360px] max-w-full mt-6 px-5 rounded-sm">
          <div className="flex items-center justify-center gap-2">
            <div className="text-white text-sm font-bold leading-10 tracking-normal uppercase">
              Sign up
            </div>
            <img
              loading="lazy"
              src={Arrow}
              className="w-5 h-5 object-contain"
              alt="arrow"
            />
          </div>
        </button>



        {/* Texto entre os botões */}
        <div className="text-slate-500 text-sm leading-5 whitespace-nowrap items-stretch bg-white self-center aspect-[1.5] mt-6 px-2">
          or
        </div>

        {/* Botão Google */}
        <button className="items-stretch border border-[color:var(--gray-100,#E4E7E9)] bg-white self-center flex w-[360px] max-w-full justify-between gap-5 mt-3 pl-4 pr-20 py-3 rounded-sm border-solid max-md:pr-5">
          <img
            loading="lazy"
            srcSet={Google}
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            alt="google"
          />
          <div className="text-neutral-600 text-center text-sm leading-5 self-center grow whitespace-nowrap my-auto">
            Login with Google
          </div>
        </button>

        <div className="items-stretch flex justify-between gap-1.5 mt-6">
          <div className="text-gray-500 text-sm leading-5">
            Already have account?
          </div>

          <button onClick={Redirect} className="text-sky-400 text-sm font-medium leading-5 whitespace-nowrap">
            Sign In
          </button>
        </div>

      </div>
    </div>  

  )
};

export default SignUp;