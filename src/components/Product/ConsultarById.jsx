import axios from "axios";
import { useState } from "react"; // Importe o useState se ainda não estiver

function ConsultaId() {
  const [id, setId] = useState(""); // Adicione o estado para armazenar o ID



  const GetById = async () => {
    try {
      const response = await axios.get(
        `https://marcha-api.onrender.com/produto/${id}/`
      );
  
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };


  return (
    <div className="border-stone-900">
    
      <input className="border-stone-900"
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      
      <button onClick={GetById}>Consultar</button>
    </div>
  );
}

export default ConsultaId;
