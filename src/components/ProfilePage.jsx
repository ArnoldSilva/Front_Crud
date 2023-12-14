import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Perfil from "../img/Avatar.png";
import Eye from "../img/Eye.png";

const Profile = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleChangePassword = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        "https://api-login-mn7h.onrender.com/trocarSenha",
        {
          token,
          password,
          newPassword,
        }
      );

      if (response.status === 200) {
        toast.success("Senha alterada com sucesso!");
      } else {
        toast.error("Falha ao mudar a senha!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="m-auto mt-[20px] p-10 w-[508px] m-10 rounded border border-[color:var(--gray-100,#E4E7E9)] bg-white flex flex-wrap pb-6 border-solid items-start">
      <div className="flex flex-col items-stretch">
        <img
          loading="lazy"
          src={Perfil}
          className="aspect-square object-contain object-center w-44 overflow-hidden shrink-0 max-md:mt-6"
          alt="Profile"
        />
      </div>

      <div className="pb-10 items-stretch flex-grow flex-col">
        <div className="flex justify-between gap-4 flex-wrap">
          <div className="flex-grow px-5">
            <h1>Change Password</h1>

            <div className="text-zinc-900 text-sm leading-5 mb-2">Senha Atual</div>


            <div className="relative text-neutral-600 text-sm leading-5 whitespace-nowrap border border-[color:var(--gray-100,#E4E7E9)] bg-white mt-2 pl-4 pr-10 py-4 rounded-sm border-solid max-md:pr-5 focus:outline-none focus:border-blue-500">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-none"
                placeholder="Password"
              />
              <img
                onClick={togglePasswordVisibility}
                src={Eye}
                className="aspect-square object-contain object-center w-5 cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-3"
                alt="Toggle Password Visibility"
              />
            </div>

          </div>

          <div className="flex-grow px-5">
            <div className="text-zinc-900 text-sm leading-5 mb-2">Nova Senha</div>

            <div className="relative text-neutral-600 text-sm leading-5 whitespace-nowrap border border-[color:var(--gray-100,#E4E7E9)] bg-white mt-2 pl-4 pr-10 py-4 rounded-sm border-solid max-md:pr-5 focus:outline-none focus:border-blue-500">
              <input

                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full border-none"
                placeholder="Confirm Password"
              />
              <img
                onClick={toggleNewPasswordVisibility}
                src={Eye}
                className="aspect-square object-contain object-center w-5 cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-3"
                alt="Toggle New Password Visibility"
              />
            </div>

          </div>
        </div>

        <div
          onClick={handleChangePassword}
          className="w-[200px] text-white text-sm font-bold leading-10 tracking-normal uppercase whitespace-nowrap justify-center items-stretch bg-stone-900 ml-56 mt-6 px-6 rounded-sm cursor-pointer"
        >
          Save Changes
        </div>
      </div>
    </div>
  );
};

export default Profile;
