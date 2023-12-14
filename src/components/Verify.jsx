import React from "react";
import Arrow from "../img/ArrowRight.png"
import Api from "../Api"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Verify() {

  const navigate = useNavigate()

  function Resend(){
    navigate("/forget")
  }

  

    const handleSendCode = async () => {
      try {
       
        const code = document.getElementById('code').value;
        const email = localStorage.getItem("email")
  
        const data = {
          email: email,
          code: code
        };
      
        const response = await Api.post("https://api-login-mn7h.onrender.com/recuperarSenha/validar", data);
  
        console.log(response.data);
        
        const token = response.data.token;
        localStorage.setItem("token", token);

        if(response === 201){
          toast.success("Codigo Confirmado")
          navigate('/reset')
        }
  
      } catch (error) {
        
        console.error('Erro na solicitação:', error);
      }
    };




  return (

    <div className="items-stretch rounded border border-[color:var(--gray-100,#E4E7E9)] shadow-2xl bg-white flex flex-col px-8 border-solid max-md:px-5 w-[424px] m-auto p-8 mt-24">
      <div className="text-zinc-900 text-center text-xl font-semibold leading-7 mt-8">
        Verify Your Email Address
      </div>
      <div className="text-gray-500 text-center text-sm leading-5 mt-3">
            Check your email and send the code
      </div>
      <div className="justify-between items-stretch flex gap-5 mt-6">
        <div className="text-zinc-900 text-sm leading-5">Verification Code</div>
        <button onClick={Resend} className="text-sky-400 text-sm font-medium leading-5 whitespace-nowrap">
          Resend Code
        </button>
      </div>
      
      <div className="self-center border border-[color:var(--gray-100,#E4E7E9)] bg-white flex w-[360px] shrink-0 h-11 flex-col mt-2 rounded-sm border-solid">
          <div className="relative">
            <input
              id="code"
              placeholder="Code"
              className="py-2 px-4 w-full h-full border-none rounded-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>


        <button onClick={handleSendCode} className="justify-center items-center bg-stone-900 self-center flex flex-row w-[360px] max-w-full mt-6 px-5 rounded-sm">
          <div className="text-white text-sm font-bold leading-10 tracking-normal uppercase">
            Verify Me
          </div>
          <img
            loading="lazy"
            src={Arrow}
            className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 ml-2"
            alt="arrow"
          />
        </button>


    </div>
  );
}

export default Verify;


