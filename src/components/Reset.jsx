import React from "react";
import { useState } from "react";
import Api from "../Api"
import Eye from "../img/Eye.png"
import Arrow from "../img/ArrowRight.png"

function Reset() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePassword = async () => {
    try {
      
      const password = document.getElementById('password').value;
      const token = localStorage.getItem("token")

      const data = {
        password: password,
        token: token
      };
    
      const response = await Api.patch("https://api-login-mn7h.onrender.com/recuperarSenha/novaSenha", data);

      console.log(response.data);
      
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  };



  return (
    <div className="bg-white flex flex-col m-auto">

      <div className="items-stretch rounded border border-[color:var(--gray-100,#E4E7E9)] shadow-2xl bg-white self-center flex w-[424px] max-w-full flex-col mt-24 p-8 border-solid max-md:mt-10 max-md:px-5">
        <div className="text-zinc-900 text-center text-xl font-semibold leading-7">
          Reset Password
        </div>
        <div className="text-gray-500 text-center text-sm leading-5 mt-3">
            Enter your new password
        </div>


        <div className="text-zinc-900 text-sm leading-5 mt-6">Password</div>

        <div className="self-center border border-[color:var(--gray-100,#E4E7E9)] bg-white flex w-[360px] shrink-0 h-11 flex-col mt-2 rounded-sm border-solid">
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="8+ characters"
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


        <div className="text-zinc-900 text-sm leading-5 mt-4">
          Confirm Password
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

        <button onClick={handlePassword} className="flex justify-center items-center bg-stone-900 self-center w-[360px] max-w-full mt-6 px-5 rounded-sm">
          <div className="flex items-center gap-2">

            <div className="text-white text-sm font-bold leading-10 tracking-normal uppercase">
              Reset Password
            </div>

            <img
              loading="lazy"
              src={Arrow}
              className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto"
              alt="arrow"
            />

          </div>
        </button>



      </div>

    </div>
  );
}


export default Reset;