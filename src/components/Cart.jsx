import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Função para simular a atualização dos produtos
  const handleUpdateCart = () => {
    // Aqui você pode adicionar a lógica de atualização dos produtos no carrinho
    // Por exemplo, se você atualizar a quantidade dos itens no carrinho, pode chamar setCartItems com os novos valores
    // setCartItems(novosProdutos);
    console.log("Produtos atualizados!");
  };

  const handleProceedToPay = () => {
    navigate('/Checkup');
  };

  return (
    <div>
      <div className="container" style={{ display: 'flex' }}>
        <div className="produtos" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontSize: '15px', width: '1000px' }}>
          <h1 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '9xl', lineHeight: '5', letterSpacing: 'tighter', marginLeft: '10px' }}>
            Shopping Cart
          </h1>
          <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <thead style={{ backgroundColor: '#f2f2f2' }}>
              <tr>
                <th style={{ textAlign: 'left', padding: '10px' }}>PRODUCTS</th>
                <th style={{ textAlign: 'left', padding: '10px' }}>PRICE</th>
                <th style={{ textAlign: 'left', padding: '10px' }}>QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} style={{ borderBottom: '1px solid #ccc' }}>
                  <td style={{ padding: '10px' }}>{item.product}</td>
                  <td style={{ padding: '10px' }}>${item.price}</td>
                  <td style={{ padding: '10px' }}>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className='uptade'
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'block',
              fontSize: '16px',
              margin: '20px auto',
              transitionDuration: '0.4s',
              borderRadius: '5px',
              boxShadow: '0 4px 4px rgba(0, 0, 0, 0.2)',
              fontFamily: 'Arial, Helvetica, sans-serif'
            }}
            onClick={handleUpdateCart} // Associando a função ao botão de Update
          >
            Update
          </button>
        </div>

        <div className="cartao" style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 1px 10px rgba(0, 0, 0, 0.493)', padding: '30px', width: '300px', marginTop: '50px', marginRight: '30px', marginBottom: '20px' }}>
          <div className="totais" style={{ textAlign: 'center', fontFamily: 'Arial, Helvetica, sans-serif', marginBottom: '20px', fontSize: '14px' }}></div>
          <button
            id="ProceedToPay"
            style={{
              padding: '12px 24px',
              borderRadius: '5px',
              backgroundColor: '#4285f4',
              color: 'white',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              display: 'block',
              width: '100%',
              marginTop: '20px',
              boxShadow: '0 4px 4px rgba(0, 0, 0, 0.445)'
            }}
            onClick={handleProceedToPay}
          >
            PROCEED TO PAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
