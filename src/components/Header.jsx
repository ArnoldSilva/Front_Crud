import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Heart from "../img/heart.svg";
import Lupa from "../img/search.svg";
import Cart from "../img/shopping-bag.svg";
import User from "../img/profile-circle.svg";

import Menubar from "./MenuBar";

function Header() {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  const openProfileMenu = () => {
    setProfileMenuOpen(true);
  };

  const closeProfileMenu = () => {
    setProfileMenuOpen(false);
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get('https://your-api-endpoint/user-data');
      setUserData(response.data); // Assuming the user data is present in the response
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchSearchResults = async () => {
    try {
      if (searchTerm.trim() !== '') {
        const response = await axios.get(`https://marcha-api.onrender.com/search?q=${searchTerm}`);
        setSearchResults(response.data.resultados);
        console.log('Search results:', response.data.resultados);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      setSearchResults([]);
    }
  };

  useEffect(() => {
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Fetch user data once when the component mounts

  useEffect(() => {
    fetchSearchResults();
  }, [searchTerm]);

  const Search = () => {
    console.log("Searching...");
    // You can perform additional actions related to search here if needed
  };

  const Cart_Page = () => {
    navigate("/cart");
  };

  const Favorites_Page = () => {
    navigate("/favorites");
  };

  const Home_Page = () => {
    navigate("/");
  };

  return (
    <div className="w-full">
      <div className="flex justify-between bg-stone-900 p-3">
        <div className="flex justify-between items-center w-full">
          <div
            onClick={Home_Page}
            className="flex justify-between cursor-pointer ml-3 sm:ml-10"
          >
            <div className="text-white text-base sm:text-3xl font-bold leading-10 tracking-tighter self-center">
              sneaker house
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative">
              <input
                type="text"
                className="rounded-xl drop-shadow-xl text-slate-500 text-sm px-8 h-7 sm:h-10 w-32 sm:w-72 border border-slate-4200 focus:outline-none focus:border-cyan-500"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchResults.length > 0 && (
                <ul className="flex justify-center absolute mt-8 sm:top-3 h-auto bg-white border p-2 rounded shadow-md">
                  <div className="flex justify-between">
                    {searchResults.slice(0, 5).map((produto) => (
                      <li key={produto._id} className="w-52 sm:w-80 text-sm sm:text-base">
                        <a href={`Productspage/${produto._id}`} className="text-center">
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

          <div className="flex justify-between mr-2 space-x-1 sm:space-x-3">
            <img
              loading="lazy"
              src={Cart}
              onClick={Cart_Page}
              className="w-6 sm:w-8 cursor-pointer flex-shrink-0"
              alt="Cart"
            />
            <img
              loading="lazy"
              src={Heart}
              onClick={Favorites_Page}
              className="w-6 sm:w-8 cursor-pointer flex-shrink-0"
              alt="Heart"
            />
            <div
              className="relative group"
              onClick={toggleProfileMenu}
              onBlur={closeProfileMenu}
              tabIndex={0}
            >
              <img
                loading="lazy"
                src={User}
                className="w-6 sm:w-8 cursor-pointer flex-shrink-0"
                alt="User"
              />
              {isProfileMenuOpen && (
                <div className="absolute right-0">
                  {/* Assuming Menubar is a component that renders user-related information */}
                  <Menubar userData={userData} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
