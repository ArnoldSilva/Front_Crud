import React, { useState, useEffect } from "react";
import axios from "axios";

import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

function Product() {
  const [response, setResponse] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);

  const navigate = useNavigate();

  function EditProduct(){
    navigate("/editproduct")
  }

  const handleGet = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(
        `https://marcha-api.onrender.com/produto/todos/${token}`
      );

      if (response.status === 200) {
        setResponse(response.data.data);
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  const Edit = (id) => {
    navigate("/editproduct");
    localStorage.setItem("id", id);
  };

  const handleDelete = async (id) => {
    setProductIdToDelete(id);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.delete(
        `https://marcha-api.onrender.com/produto/${productIdToDelete}/${token}`
      );

      treatResponse(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  const treatResponse = (response) => {
    if (response.status === 200 || response.status === 201) {
      console.log("Produto deletado com sucesso!");

      setResponse((prevResponse) =>
        prevResponse.filter((product) => product._id !== productIdToDelete)
      );

      setShowModal(false);
    } else {
      console.error("Erro:", response.status, response.data.message);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold mb-6">Todos os Seus Produtos</h1>
        <button
          onClick={EditProduct}
          className=" m-[20px] justify-center text-white font-medium whitespace-nowrap bg-stone-900 "
        >
          Novo Produto
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {response.map((product) => (
          <div className="min-w-[200px] my-[20px] m-auto w-[251px]   flex flex-col px-7 py-7 rounded-xl shadow-md">
            <img
              src={`https://marcha-api.onrender.com/${product.imagem}`}
              className="w-[251px] object-cover w-full h-64"
              alt="Imagem"
            />

            <h2 className="mt-6 text-2xl font-bold">{product.modelo}</h2>
            <p className="mt-2 text-lg">Marca: {product.fk_marcanome}</p>
            <p className="mt-2 text-lg">Gênero: {product.genero}</p>
            <p className="mt-2 text-lg">Preço: R$ {product.preco}</p>
            <p className="mt-2 text-lg">Tamanho: {product.tamanho}</p>
            <p className="mt-2 text-lg">Cores: {product.cores}</p>
            <p className="mt-2 text-lg">Tags: {product.fk_tags.join(", ")}</p>

            <button
              onClick={() => Edit(product._id)}
              className="mt-6 text-white text-base font-medium capitalize whitespace-nowrap bg-indigo-900 px-8 py-4 rounded-md"
            >
              Edit
            </button>

            <div className="flex justify-between gap-5 mt-6 pr-3.5">
              <button
                onClick={() => handleDelete(product._id)}
                className="text-white text-base font-medium capitalize whitespace-nowrap bg-red-600 px-7 py-4 rounded-md max-md:px-4"
              >
                Delete
              </button>
              <button className="text-white text-base font-medium capitalize whitespace-nowrap px-7 py-4 rounded-md max-md:px-4 bg-amber-400 w-full">
                Hide
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
  isOpen={showModal}
  onRequestClose={() => setShowModal(false)}
  contentLabel="Confirmação de Exclusão"
  className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
  overlayClassName="fixed inset-0"
>
  <div className="bg-white w-96 p-6 rounded-md text-center">
    <h2 className="text-xl font-bold mb-4">Tem certeza?</h2>
    <div className="flex justify-center mb-4">
      <button
        onClick={confirmDelete}
        className="bg-red-600 text-white px-4 py-2 mr-2 rounded-md hover:bg-red-700"
      >
        Confirmar
      </button>
      <button
        onClick={() => setShowModal(false)}
        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
      >
        Cancelar
      </button>
    </div>
  </div>
</Modal>

    </div>
  );
}

export default Product;
