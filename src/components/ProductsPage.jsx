import { useState, useEffect } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import medal from "../img/Medal.png";
import headphone from "../img/Headphone.png";
import hand from "../img/Handshake.png";
import credit from "../img/CreditCard1.png";
import truck from "../img/Truck.png";
import heartfav from "../img/heart_favorite.svg";
import cart from "../img/shopping-cart1.svg";
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import mongoose from 'mongoose';



function Productspage() {
  // const mongoose = require('mongoose');
  // const ObjectId = mongoose.Types.ObjectId;

  // const { _id } = useParams();
  const [product, setProduct] = useState({});
  const produtoId = localStorage.getItem('produtoId');
  console.log('ID do Produto:', produtoId);
  

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // const productId = new ObjectId(_id);
        const response = await axios.get(`https://marcha-api.onrender.com/produto/${produtoId}`);
        
        setProduct(response.data);
        console.log('Dados do Produto:', response.data);
        console.log('Dados do Produto:', response);
        console.log('produto:', product);
        
      } catch (error) {
        console.error('Erro ao buscar dados do produto:', error);
      }
    };

    fetchProductData();
  }, []);




  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);

  const handleTamanhoClick = (tamanho) => {
    setTamanhoSelecionado(tamanhoSelecionado === tamanho ? null : tamanho);
  };

  const tamanhosDisponiveis = ["41", "42", "43"];

  const [corSelecionada, setCorSelecionada] = useState(null);

  const handleClick = (cor) => {
    setCorSelecionada(corSelecionada === cor ? null : cor);
  };

  const coresDisponiveis = ["Azul", "Vermelho", "Branco"];

  const [favorito, setFavorito] = useState(false);

  const toggleFavorito = () => {
    setFavorito(!favorito);
  };

  const [quantidadeItens, setQuantidadeItens] = useState(1);

  const aumentarQuantidade = () => {
    setQuantidadeItens(quantidadeItens + 1);
  };

  const diminuirQuantidade = () => {
    if (quantidadeItens > 1) {
      setQuantidadeItens(quantidadeItens - 1);
    }
  };

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000, // Tempo em milissegundos entre as transições
    dots: false, // Mostra os pontos de navegação
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Número de marcas visíveis por vez
    slidesToScroll: 1,
    arrows: false,
  };

  const brands = [
    "https://images.unsplash.com/photo-1587107935279-5f654e1f17e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8OTQ5Mzc0Mnx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1587107935574-8f796f2db691?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8OTQ5Mzc0Mnx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1587107935480-17ee28b6d73e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8OTQ5Mzc0Mnx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1587107935286-f46e5210e943?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const imageUrls = [
    "https://images.unsplash.com/photo-1587107935279-5f654e1f17e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8OTQ5Mzc0Mnx8ZW58MHx8fHx8",
  ];
  const productLinks = [
    "link_para_produto_1",
    "link_para_produto_2",
    "link_para_produto_3",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imageUrls.length);
    }, 5000); // Trocar a cada 5 segundos (5000 milissegundos)

    return () => clearInterval(interval);
  }, []); // Executar somente na montagem

  return (
    <div className=" flex-col items-center justify-center bg-zinc-100  ">
      <div className="flex items-center justify-center pt-10 pb-10 ">
        <div className=" bg-white">
          <div className="flex flex-col sm:flex-row   sm:px-10 pt-10 ">
            <div className="flex items-center justify-center  ">
              <div className="flex-col items-center h-auto  ">
                <div className="flex items-center justify-center  ">
                  <a
                    href={productLinks[currentImage]}
                    target="_blank"
                    className=" "
                  >
                    <img
                      src={imageUrls[currentImage]}
                      alt={`Product ${currentImage + 1}`}
                      className=" min-w-64 min-h-40 sm:w-full sm:h-full  border  "
                    />
                  </a>
                </div>

                {/* <div className='mt-5'>
                                <div className='flex justify-center max-w-screen-xl  bg-white  space-x-4 mx-auto border'>
                                    <Slider {...settings} >
                                        {brands.map((brand, index) => (
                                            <div key={index} className="flex justify-center max-w-8 sm:w-20 max-h-26 border-r bg-white ">
                                                <img src={brand} alt={`Brand ${index + 1}`} className="ml-3 sm:ml-1 sm:mr-1 w-14 sm:w-32 " />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div> */}
              </div>
            </div>

            <div className="flex items-center justify-center sm:ml-5 ">
              <div className="flex-col items-center h-auto ">
                <div className="border-b sm:px-4 pt-4 pb-2  cursor-default">
                  <div>
                    <h1 className="font-bold text-[18px] sm:text-xl">{product.data.modelo}</h1>
                  </div>

                  <div className="flex items-center  space-x-10 ml-3 mt-2">
                    <div>
                      <p className="text-sm">
                        Marca: <strong className="text-xs">{product.data.fk_marcanome}</strong>
                      </p>
                      <p className="mt-1 text-sm">
                        Genero: <strong className="text-xs">{product.data.genero}</strong>
                      </p>
                    </div>

                    <div className="">
                      <p className="text-sm">Tags: </p>
                      <div className="flex justify-between space-x-3">
                      <p className="mt-2 p-1 text-xs border rounded-2xl">
                      {product.data.fk_tags[0]}
                      </p>
                      <p className="mt-2 p-1 text-xs border rounded-2xl">
                      {product.data.fk_tags[1]}
                      </p>
                      </div>
                    </div>
                  </div>

                  <div className=" ml-2">
                    <h1 className="font-medium text-[22px] sm:text-[26px] text-red-600">
                      R$ {product.data.preco} 
                    </h1>
                  </div>
                </div>

                <div className=" sm:px-4 pt-2 space-y-5 ">
                  <div className="ml-3">
                    <h1 className="text-sm">Tamanhos:</h1>
                    <div className="flex items-center space-x-4 mt-2 ">
                      {tamanhoSelecionado.map((tamanho) => (
                        <p
                          key={tamanho}
                          onClick={() => handleTamanhoClick(tamanho)}
                          className={`flex justify-center rounded-lg w-10 border text-sm hover:border-black transition duration-200 ease-in-out  cursor-pointer ${
                            tamanhoSelecionado === tamanho ? "border-black" : ""
                          }`}
                        >
                          {tamanho}
                        </p>
                      ))}
                    </div>
                    {/* <p className='text-sm mt-2'>Tamanho Selecionado: {tamanhoSelecionado || 'Nenhum'}</p> */}
                  </div>

                  <div className=" ml-3">
                    <h1 className="text-sm">Cores:</h1>
                    <div className="flex items-center space-x-4 mt-2 ">
                      {coresDisponiveis.map((cor) => (
                        <p
                          key={cor}
                          onClick={() => handleClick(cor)}
                          className={`flex justify-center rounded-lg w-auto text-sm border hover:border-black  transition duration-200 ease-in-out  p-1 cursor-pointer ${
                            corSelecionada === cor ? "border-black" : ""
                          }`}
                        >
                          {cor}
                        </p>
                      ))}
                    </div>
                    {/* <p className="mt-3">Cor Selecionada: {corSelecionada || 'Nenhuma'}</p> */}
                  </div>

                  <div className=" flex justify-start mt-20 ml-3 rounded">
                    <div className="flex items-center justify-between space-x-3 h-6 w-20 border rounded ">
                      <button
                        className="bg-inherit text-slate-500 h-6 w-6  border-r"
                        onClick={diminuirQuantidade}
                      >
                        -
                      </button>

                      <p className="text-base">{quantidadeItens}</p>

                      <button
                        className="bg-inherit text-slate-500 h-6 w-6 border-l"
                        onClick={aumentarQuantidade}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-5 sm:p-4 ">
                  <div className="flex items-start">

                    <div className="flex items-center sm:items-center justify-around space-x-5">
                      <div className="">
                        <button className="border p-1 bg-red-600 w-36 sm:w-64 h-11 drop-shadow-md rounded-lg text-base text-white">
                          Comprar agora
                        </button>
                      </div>

                      <div className=" flex  sm:items-center  space-x-5 ">
                        <div className="cursor-pointer ">
                          <img className="w-7 h-7 sm:w-7 sm:h-7" src={cart} />
                        </div>

                        <div className="cursor-pointer  ">
                          <img className="w-7 h-7 sm:w-7 sm:h-7" src={heartfav} />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start  space-x-30 px-10 pb-10 bg-innert ">
            <div className="pt-5 sm:p-5 mt-10 flex flex-col sm:flex-row justify-start border-t space-y-9 sm:space-y-0 sm:space-x-14 ">
              <div className=" sm:pr-14  sm:border-r ">
                <h1 className="text-base ">Descrição:</h1>
                <p className="text-justify text-sm mt-2">
                  É com grande entusiasmo que apresentamos o novo Nike Air
                  Precision Pro
                  <br />
                  um calçado que eleva os padrões de desempenho e estilo.
                  Projetado para
                  <br /> se destacar tanto nas quadras quanto nas ruas, este
                  tênis incorpora
                  <br /> a essência da inovação e qualidade que define a marca
                  Nike.<br />
                 
                </p>
              </div>

              <div className=" border-t sm:border-none pt-3 sm:pt-0 ">
                <div >
                  <h1 className="text-base ">Dados de Entrega:</h1>
                  <p className="text-sm mt-2">
                    <strong>Entrega: </strong>2 - 4 dias
                  </p>
                  <p className="text-sm mt-1">
                    <strong>Enviado de: </strong>Minas Gerais
                  </p>
                  <p className="text-sm mt-1">
                    <strong>Taxa: </strong>Definida pela distancia
                  </p>
                  <p className="text-sm mt-1">
                    <strong>Remetente: </strong>Sneaker House
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center items-end">
        <div className="flex items-center justify-center  w-full  ">
          <div className="border mt-20  bg-white">
            <div className="flex items-center  mt-5">
              <div className="flex  items-center justify-between space-x-20">
                <div className=" pr-6 border-r">
                  <h1 className="text-base">Nossas Funcionalidades:</h1>
                  <p className="mt-3 text-sm flex items-center justify-start ">
                    <img className="mr-2 " src={medal} />
                    Garantia de 1 ano
                  </p>
                  <p className="flex text-sm items-center justify-start mt-2">
                    <img className="mr-2" src={truck} />
                    Frete grátis e entrega rápida
                  </p>
                  <p className="flex text-sm items-center justify-start mt-2">
                    <img className="mr-2" src={hand} />
                    100% de garantia de devolução do dinheiro
                  </p>
                  <p className="flex text-sm items-center justify-start mt-2">
                    <img className="mr-2" src={headphone} />
                    Suporte ao cliente 24/7
                  </p>
                  <p className="flex text-sm items-center justify-start mt-2">
                    <img className="mr-2" src={credit} />
                    Método de pagamento seguro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default Productspage;
