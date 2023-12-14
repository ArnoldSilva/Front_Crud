import { useState, useEffect } from 'react';
import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import fone from "../img/Headphones.png"
import caixa from "../img/Untitled.png"
import trofeu from "../img/Trophy.png"
import cartao from "../img/CreditCard.png"
import axios from 'axios';

function Home(){
     // Estado para armazenar as URLs das imagens
  const [imageURLs1, setImageURLs1] = useState([]); // Inicializa com as URLs vazias

  // Efeito para fazer a chamada à API quando o componente montar
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Substitua a URL abaixo pela URL real da sua API
        const response = await axios.get('https://marcha-api.onrender.com/produto/all');        
        console.log('Resposta da API:', response);

        // Atualiza o estado com as URLs das imagens selecionadas
        console.log(response.data.data[1]);
        setImageURLs1(response.data.data); 
        console.log(imageURLs1,'aquiiiii')
      } catch (error) {
        console.error('Erro ao obter imagens do produto:', error);
      }
    };

    // Chama a função fetchData
    fetchData();
  }, []); // O segundo argumento [] garante que o efeito seja executado apenas uma vez ao montar o componente


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

    // const [currentImage, setCurrentImage] = useState(0);
    // const imageUrls1 = [
    //     'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // ];
    // const productLinks = [
    //   'link_para_produto_1',
    //   'link_para_produto_2',
    //   'link_para_produto_3',
    // ];
  

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setCurrentImage((prevImage) => (prevImage + 1) % imageUrls1.length);
    //   }, 5000); // Trocar a cada 5 segundos (5000 milissegundos)
  
    //   return () => clearInterval(interval);
    // }, []); // Executar somente na montagem



    return(
        <div className='space-y-20 bg-zinc-100 pt-7 pb-7'>
            <div className='flex items-center justify-between '>
                <div className="mx-auto flex items-center h-auto rounded-lg shadow-lg space-x-0.5 sm:space-x-0.5">
                    {/* Imagem Principal (Maior) */}
                    <div className="flex items-center">
                        {imageURLs1.slice(0, 1).map((novos) => (                           
                                <a href={`Productspage/${novos._id}`} key={novos._id} className="block">              
                                    <img
                                    src={`https://marcha-api.onrender.com/${novos.imagem}`}
                                    alt={`Product ${novos._id}`}
                                    className="w-64 h-40 sm:w-full sm:h-96"
                                    />
                                </a>
                        ))}
                    </div>

                    {/* Container para as Outras Duas Imagens (Menores) */}
                    <div className='flex flex-col items-center space-y-0.5 sm:space-y-0.5'>
                    {/* Segunda Imagem (Menor) */}
                        <div>
                            {imageURLs1.slice(1, 2).map((novos) => (
                               
                                    <a href={`Productspage/${novos._id}`} key={novos._id} className="block">              
                                        <img
                                        src={`https://marcha-api.onrender.com/${novos.imagem}`}
                                        alt={`Product ${novos._id}`}
                                        className="w-36 h-20 sm:w-full sm:h-48"
                                        />
                                    </a>
                              
                            ))}
                        </div>

                        {/* Terceira Imagem (Menor) */}
                        <div >
                            {imageURLs1.slice(2, 3).map((novos) => (
                               
                                    <a href={`Productspage/${novos._id}`} key={novos._id} className="block">              
                                        <img
                                        src={`https://marcha-api.onrender.com/${novos.imagem}`}
                                        alt={`Product ${novos._id}`}
                                        className="w-36 h-20 sm:w-full sm:h-48"
                                        />
                                    </a>
                               
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
        <nav className="flex items-center justify-between ">
            <div className="mx-auto flex justify-between items-center max-w-4xl h-14 sm:h-20 space-x-4 bg-white border border-solid border-slate-50 rounded-lg shadow-2xl">
        
                <div className="flex justify-between items-center space-x-2 sm:space-x-5 m-4">
                    <div className="flex justify-between items-center space-x-2 pr-2 border-r">
                        <img 
                        className='w-3 sm:w-10 h-3 sm:h-10 '
                        src={caixa}/>
                        <div>
                            <p className="text-[8px] sm:text-sm">Delivery Rapido</p>
                            <p className="text-[6px] sm:text-xs">Delivery 24/h</p>
                        </div>
                    </div>
                    
                    <div className="flex justify-between items-center space-x-2 pr-2 border-r">
                        <img 
                        className='w-3 sm:w-10 h-3  sm:h-10 '
                        src={trofeu}/>
                        <div>
                            <p className="text-[8px] sm:text-sm">Entrega em 24h</p>
                            <p className="text-[6px] sm:text-xs">reembolso integral</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center space-x-2 pr-2 border-r">
                        <img   
                        className='w-3 sm:w-10 h-3 sm:h-10 '                  
                        src={cartao}/>
                        <div>
                            <p className="text-[8px] sm:text-sm">Pagamento Seguro</p>   
                            <p className="text-[6px] sm:text-xs">Seu dinheiro está seguro</p>   
                        </div>
                    </div>

                    <div className="flex justify-between items-center space-x-2 ">
                        <img 
                        className='w-3 sm:w-10 h-3 sm:h-10 '
                        src={fone}/>
                        <div>
                            <p className="text-[8px] sm:text-sm">Suporte 24/7</p>
                            <p className="text-[6px] sm:text-xs">Contato/mensagem ao vivo</p>
                        </div>
                    </div>
                </div>

            </div>
        </nav>

        {imageURLs1.length > 0 && (
                <div className="flex justify-center mt-8">
                <ul className="max-w-5xl w-full bg-white  p-2 rounded shadow-md ">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
                    {imageURLs1.slice(0, 12).map((produto) => (
                    <li key={produto._id} className="w-40 sm:w-40 mb-4 text-sm  sm:text-base border">
                        <a href={`Productspage/${produto._id}`} className="block">
                        <img
                            src={`https://marcha-api.onrender.com/${produto.imagem}`}
                            alt={`Product ${produto._id}`}
                            className="w-full h-15 object-cover mb-2"
                        />
                        <div className='text-left ml-5 mb-3'>
                            <div className='font-light '>{produto.fk_marcanome}<br/></div>
                            <div className='font-bold text-sm'>{produto.modelo} - {produto.genero}<br/></div>
                            <div className='text-red-600 font-medium'>R$ {produto.preco}</div>
                        </div>
                        </a>
                    </li>
                    ))}
                </div>
                </ul>
            </div>
            )}

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
