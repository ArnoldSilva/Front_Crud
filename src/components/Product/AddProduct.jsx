import React, { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ProductForm = () => {
  const [marcanome, setMarcanome] = useState("");
  const [modelo, setModelo] = useState("");
  const [genero, setGenero] = useState("");
  const [preco, setPreco] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [cores, setCores] = useState("");
  const [tags, setTags] = useState([]);
  const [imagem, setImagem] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const token = localStorage.getItem("token");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImagem(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    setImagem(file);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("token", token);
      formData.append("marcanome", marcanome);
      formData.append("modelo", modelo);
      formData.append("genero", genero);
      formData.append("preco", preco);
      formData.append("tamanho", tamanho);
      formData.append("cores", JSON.stringify(cores.split(", ")));
      formData.append("tags", JSON.stringify([tags.join(", ")]));
      formData.append("imagem", imagem);

      const response = await axios.post(
        "https://marcha-api.onrender.com/produto",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      treatResponse(response);
    } catch (error) {
      console.error("Erro inesperado:", error.message);
    }
  };

  const treatResponse = (response) => {
    if (response.status === 200 || response.status === 201) {
      toast.success("Produto criado com sucesso");
    } else {
      console.error("Erro:", response.status, response.data.message);
      toast.error(response.data.error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-8 bg-white rounded shadow-md">
      <div>
      
      <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Imagem:
          </label>
          <div
            className={`w-full px-4 py-2 mt-2 border rounded-md cursor-pointer ${
              isDragging ? "border-blue-500" : ""
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            {imagem && (
              <img
                src={URL.createObjectURL(imagem)}
                alt="Imagem selecionada"
                className="w-full h-40 object-cover mb-2"
                onClick={() => fileInputRef.current.click()}
              />
            )}
            {imagem
              ? ""
              : "Arraste e solte a imagem aqui ou clique para selecionar uma nova imagem."}
          </div>
        </div>

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
            value={tags.join(", ")}
            onChange={(e) => setTags(e.target.value.split(", "))}
            className="w-full px-4 py-2 mt-2 border rounded-md"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="justify-center text-white font-medium whitespace-nowrap bg-indigo-900 items-stretch pl-10 pr-5 p-1 rounded-lg"
        >
          Add Product +
        </button>
      </div>
    </div>
  );
};

export default ProductForm;
