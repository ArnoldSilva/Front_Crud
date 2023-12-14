// consulta todas as marcas

import React, { useState } from "react";
import axios from "axios";

function Product() {
  const [showContent, setShowContent] = useState(false);
  const [Response, setResponse] = useState("");
 

  const handleGet = async () => {
    try {
      const response = await axios.get("https://marcha-api.onrender.com/marca");

      if (response.status === 200) {
        console.log(response);
        setShowContent(true);
        setResponse(response)

      }
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleGet}
        className="text-center items-center text-white text-base font-medium capitalize whitespace-nowrap bg-indigo-900 mt-20 px-16 py-6 rounded-md"
      >
        Chamar API
      </button>

      {showContent && (
        <div className="">
          <h1>Marca</h1>
          <h1>  {Response.data.data} </h1>

        
      <div className="m-auto">

<div className="m-auto w-[429px] h-[580] bg-neutral-300 flex flex-col  px-7 py-7 rounded-xl">

  <img
    loading="lazy"
    src=""
    className=""
    alt=""
  />
  <button className="text-center items-center text-white text-base font-medium capitalize whitespace-nowrap bg-indigo-900 mt-20 px-16 py-6 rounded-md">
    Edit
  </button>

  <div className="flex justify-center gap-5 mt-6 pr-3.5 ">
    <button className="text-white text-base font-medium capitalize whitespace-nowrap bg-red-600 justify-center items-center px-16 py-6 rounded-md max-md:px-5">
      Delete
    </button>
    <button className="text-white text-base font-medium capitalize whitespace-nowrap bg-amber-400 justify-center items-center px-16 py-6 rounded-md max-md:px-5">
      Hide
    </button>
  </div>


</div>
</div> 

 
        </div>
      )}
    </div>
  );
}

export default Product;
