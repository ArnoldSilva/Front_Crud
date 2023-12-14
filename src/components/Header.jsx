import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Heart from "../img/heart.svg";
import Lupa from "../img/search.svg";
import Cart from "../img/shopping-bag.svg";
import User from "../img/profile-circle.svg";



function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    // const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchTerm.trim() !== '') {
          const response = await axios.get(`https://marcha-api.onrender.com/search?q=${searchTerm}`);
          setSearchResults(response.data.resultados);
          console.log('Resposta da API:', response);
          console.log("funcionado")
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        setSearchResults([]);
      }
    };

    fetchData();
  }, [searchTerm]);

    const Search = () => {
     
        console.log("Searching...");
        
    };

    const navigate = useNavigate();                                      


  const Cart_Page = () => {

    navigate('/cart');
  };
  const Favorites_Page = () => {

    navigate('/favorites');
  };
  const Profile_Page = () => {

    navigate('/profilepage');
  };
  const Home_Page = () => {

    navigate('/');
  };

    return (
        <div className="w-full">
            
            <div className="flex justify-between bg-stone-900  p-3 ">
                <div className=" flex justify-between items-center w-full ">
                    
                    <div onClick={Home_Page} className="flex  cursor-pointer ml-2 sm:ml-10 ">
                        <div className="text-white  text-base sm:text-3xl font-bold leading-10 tracking-tighter self-center">
                        sneaker house
                        </div>
                    </div> 

                    <div className="relative flex justify-center">
                        <div className="relative">
                          <div className="flex justify-center">
                            <input
                                type="text"
                                className="rounded-xl drop-shadow-xl text-slate-500 text-sm  px-8 h-7 sm:h-10 w-32 sm:w-72 border border-slate-4200 focus:outline-none focus:border-cyan-500"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {searchResults.length > 0 && (
                            <ul className=" flex justify-center  absolute mt-8 sm:top-3  h-auto bg-white border p-2 rounded shadow-md">
                              <div className="flex justify-between">
                                {searchResults.slice(0, 5).map((produto) => (
                                <li key={produto._id} className="w-52 sm:w-80  text-sm sm:text-base">
                                  <a href={`Productspage/${produto._id}`}
                                  className="text-center">
                                    
                                  
                                  
                                  <img
                                  onClick={() => {
                                    localStorage.setItem('produtoId', produto._id);
                                  }}
                                    src={`https://marcha-api.onrender.com/${produto.imagem}`}
                                    alt={`Product ${produto._id}`}
                                    className="w-20 h-15 object-cover mb-2"
                                  />
                                  
                                  {produto.modelo} - {produto.fk_marcanome}
                                  </a>
                                </li>
                                ))}
                                </div>
                            </ul>
                            )}
                            </div>
                            
                            <img
                                loading="lazy"
                                src={Lupa}
                                className="absolute top-1/2 transform -translate-y-1/2 w-5 h-4 ml-2 cursor-pointer opacity-50"
                                alt="Search"
                                onClick={Search}
                            />
                        </div>
                    </div>
                    
                    

                    <div className="flex justify-between mr-2 space-x-1 sm:space-x-3 ">
                        <img
                            loading="lazy"
                            src={Cart}
                            onClick={Cart_Page}
                            className=" w-6 sm:w-8  cursor-pointer flex-shrink-0"
                            alt="Cart"
                        />
                        <img
                            loading="lazy"
                            src={Heart}
                            onClick={Favorites_Page}
                            className="w-6 sm:w-8  cursor-pointer flex-shrink-0"
                            alt="Heart"
                        />
                        <img
                            loading="lazy"
                            src={User}
                            onClick={Profile_Page}
                            className="w-6 sm:w-8   cursor-pointer flex-shrink-0"
                            alt="User"
                        />
                    </div> 

                </div>
            </div>


            

    </div>
    );
}

export default Header;
