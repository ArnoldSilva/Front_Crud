import React, { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const EditForm = () => {
  const [Id, setId] = useState("");
  const [image, setImage] = useState(null); // Inicializa como null para indicar que nenhuma imagem foi selecionada
  const [isDragging, setIsDragging] = useState(false);

  const token = localStorage.getItem("token");



  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
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
    setImage(file);
  };

  const handleClickImage = () => {
    // Aciona o clique no input de arquivo
    fileInputRef.current.click();
  };

  const handleSubmit = async () => {
    try {
      if (!image) {
      
        toast.error("Nenhuma imagem selecionada");
        return;
      }

      const formData = new FormData();

      formData.append("imagem", image);

      const response = await axios.patch(
        `https://marcha-api.onrender.com/produto/imagem/${Id}/${token}`,
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
      toast.success("Imagem do produto editada com sucesso");
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
            onClick={handleClickImage}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="Imagem selecionada"
                className="w-full h-40 object-cover mb-2"
                onClick={handleClickImage}
              />
            )}
            {image ? "" : "Arraste e solte a imagem aqui ou clique para selecionar uma nova imagem."}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="justify-center text-white font-medium whitespace-nowrap bg-stone-900 items-stretch pl-10 pr-5 p-1 rounded-lg"
        >
          Edit imagem
        </button>
      </div>
    </div>
  );
};

export default EditForm;
