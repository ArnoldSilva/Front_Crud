import { useState, useEffect } from 'react';
import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import fone from "../img/Headphones.png"
import caixa from "../img/Untitled.png"
import trofeu from "../img/Trophy.png"
import cartao from "../img/CreditCard.png"



function Home(){

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
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png",
        "https://seeklogo.com/images/P/puma-se-logo-ACC0F72575-seeklogo.com.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Adidas_logo.png/1200px-Adidas_logo.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Converse_logo.svg/2560px-Converse_logo.svg.png",
        "https://logodownload.org/wp-content/uploads/2014/10/umbro-logo-1.png",
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const imageUrls = [
        'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ];
    const productLinks = [
      'link_para_produto_1',
      'link_para_produto_2',
      'link_para_produto_3',
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % imageUrls.length);
      }, 5000); // Trocar a cada 5 segundos (5000 milissegundos)
  
      return () => clearInterval(interval);
    }, []); // Executar somente na montagem



    return(
        

        <div className='space-y-20'>
           
            <div className='flex items-center justify-between mt-7'>
                <div className="mx-auto flex items-center h-auto rounded-lg shadow-lg space-x-0.5 sm:space-x-0.5">
                    {/* Imagem Principal (Maior) */}
                    <div className="flex items-center">
                        <a href={productLinks[currentImage]} target="_blank" >
                            <img
                            src={imageUrls[currentImage]}
                            alt={`Product ${currentImage + 1}`}
                            className="w-64 h-40 sm:w-full sm:h-96"
                            />
                        </a>
                    </div>

                    {/* Container para as Outras Duas Imagens (Menores) */}
                    <div className='flex flex-col items-center space-y-0.5 sm:space-y-0.5'>
                    {/* Segunda Imagem (Menor) */}
                        <div>
                            <a href={productLinks[currentImage]} target="_blank" >
                            <img
                                src={imageUrls[currentImage]}
                                alt={`Product ${currentImage + 1}`}
                                className="w-36 h-20 sm:w-64 sm:h-48"
                            />
                            </a>
                        </div>

                        {/* Terceira Imagem (Menor) */}
                        <div >
                            <a href={productLinks[currentImage]} target="_blank" >
                            <img
                                src={imageUrls[currentImage]}
                                alt={`Product ${currentImage + 1}`}
                                className="w-36 h-20 sm:w-64 sm:h-48"
                            />
                            </a>
                        </div>
                    </div>
                </div>
            </div>



        {/* <nav className="flex items-center justify-between">
            <div className="mx-auto flex justify-between items-center max-w-4xl h-20 space-x-4 border border-solid border-slate-50 rounded-lg shadow-2xl">
        
                <div className="flex justify-between items-center space-x-10 m-4">
                    <div className="flex justify-between items-center space-x-2 pr-2 border-r">
                        <img 
                        src={caixa}/>
                        <div>
                            <p className="text-sm">Fasted Delivery</p>
                            <p className="text-xs">Delivery in 24/H</p>
                        </div>
                    </div>
                    
                    <div className="flex justify-between items-center space-x-2 pr-2 border-r">
                        <img 
                        src={trofeu}/>
                        <div>
                            <p className="text-sm">24 Hours Return</p>
                            <p className="text-xs">100% money-back guarante</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center space-x-2 pr-2  border-r">
                        <img                     
                        src={cartao}/>
                        <div>
                            <p className="text-sm">Secure Payment</p>   
                            <p className="text-xs">Your money is safe</p>   
                        </div>
                    </div>

                    <div className="flex justify-between items-center space-x-2 ">
                        <img 
                        src={fone}/>
                        <div>
                            <p className="text-sm">Support 24/7</p>
                            <p className="text-xs">Live contact/message</p>
                        </div>
                    </div>
                </div>

            </div>
        </nav> */}

        <div className='max-w-screen-xl mx-auto'>
            <Slider {...settings}>
                {brands.map((brand, index) => (
                <div key={index} className="flex justify-around max-w-8 sm:max-w-16 max-h-26 ">
                    <img src={brand} alt={`Brand ${index + 1}`} className="ml-3 sm:ml-16 w-14 sm:w-32 " />
                </div>
                ))}
            </Slider>
        </div>

            
    </div>
    )
}

export default Home;