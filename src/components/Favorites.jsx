import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [wishlistData, setWishlistData] = useState([]);

  useEffect(() => {
    // Simulando a obtenção dos dados da API (wishlist)
    const fetchData = async () => {
      try {
        // Suponha que 'api' seja sua rota para obter os produtos favoritos
        const response = await fetch("api");
        const data = await response.json();
        setWishlistData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    navigate("/Cart");
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          margin: "40px 0",
          fontSize: "24px",
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Favorites
      </h2>
      <div>
        
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {wishlistData.map((item) => (
              <tr key={item.id}>
                <td>{item.product}</td>
                <td>${item.price}</td>
                <td>{item.status}</td>
                <td>
                  <button
                    onClick={() => addToCart(item)}
                    style={{
                      backgroundColor: "rgb(41, 37, 36)",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Favorites;
