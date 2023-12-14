import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import UpdateImage from "../UpdateImage"

const EditForm = () => {
  const [Id, setId] = useState("");
  const [marcanome, setMarcanome] = useState("");
  const [modelo, setModelo] = useState("");
  const [genero, setGenero] = useState("");
  const [preco, setPreco] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [cores, setCores] = useState("");
  const [tags, setTags] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const storedId = localStorage.getItem("id");
        if (!storedId) {
          toast.error("ID não encontrado no localStorage.");
          return;
        }

        const response = await axios.get(
          `https://marcha-api.onrender.com/produto/${storedId}/`
        );
        const produto = response.data.data;

        // localStorage.setItem(produto.imagem)

        setMarcanome(produto.fk_marcanome || "");
        setModelo(produto.modelo || "");
        setGenero(produto.genero || "");

        setPreco(produto.preco || "");
        setTamanho(produto.tamanho || "");
        setCores(produto.cores || "");
        setTags((produto.fk_tags || []).join(","));
      } catch (error) {
        console.error("Erro ao buscar dados por ID:", error.message);
        toast.error(
          "Erro ao buscar dados por ID. Verifique o ID e tente novamente."
        );
      }
    };

    fetchDataById();
  }, []);

  const handleSubmit = async () => {
    const storedId = localStorage.getItem("id");
    try {
      if (!marcanome || !modelo || !genero || !preco || !tamanho || !tags) {
        toast.error("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      const response = await axios.patch(
        `https://marcha-api.onrender.com/produto/campo/${storedId}`,
        {
          token,
          marcanome,
          modelo,
          genero,
          preco,
          tamanho,
          cores,
          tags: JSON.stringify(tags.split(",")),
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Produto editado com sucesso");
        setId("");
      } else {
        console.error("Erro:", response.status, response.data.message);
        toast.error(response.data.error);
      }
    } catch (error) {
      console.error("Erro inesperado:", error.message);
      toast.error("Erro ao editar o produto. Tente novamente.");
    }
  };
  
  return (
    <div className="max-w-md mx-auto my-8 p-8 bg-white rounded shadow-md">
      <h1 id="titulo" class="text-[30px] py-[20px]  ">
        Edit Product
      </h1>

      <UpdateImage/>

      <div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Nome da Marca:
          </label>
          <input
            type="text"
            id="marcanome"
            name="marcanome"
            value={marcanome}
            onChange={(e) => setMarcanome(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Modelo:
          </label>
          <input
            type="text"
            id="modelo"
            name="modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Gênero:
          </label>
          <input
            type="text"
            id="genero"
            name="genero"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Preço:
          </label>
          <input
            type="text"
            id="preco"
            name="preco"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Cores:
          </label>
          <input
            type="text"
            id="cores"
            name="cores"
            value={cores}
            onChange={(e) => setCores(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Tamanho:
          </label>
          <input
            type="text"
            id="tamanho"
            name="tamanho"
            value={tamanho}
            onChange={(e) => setTamanho(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Tags:
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="justify-center text-white font-medium whitespace-nowrap bg-stone-900 items-stretch pl-10 pr-5 p-1 rounded-lg"
        >
          Edit Product 
        </button>
      </div>
    </div>
  );
};

export default EditForm;
