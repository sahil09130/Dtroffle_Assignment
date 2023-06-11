import React, { useState, useEffect } from 'react';
import './ProductList.css';
// eslint-disable-next-line no-unused-vars


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: 'F8F8FF',
    }}>
     <img src="https://wallpapercave.com/dwp2x/wp4371959.jpg" alt="Loading..." style={{ maxWidth: '50%', maxHeight: '100%' }} />
    </div>;
  }
  
  if (error) {
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: 'White',
      color: 'Black'
    }}>
     <img src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?w=1800&t=st=1686476798~exp=1686477398~hmac=b5e3ebb887019b13d6bd9f6d319c3795e2546dbb244e61d37bca5ed65a92109f" alt="Loading..." style={{ maxWidth: '50%', maxHeight: '100%' }} />
    </div>;
  }
  
  

  return (
    <div className="container">
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product" key={product.id}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>
  <span style={{ fontSize: '28px' }}></span> {product.title}
</h2>

            <p><h2>Description:</h2>{product.description}</p>
            <h3 style={{ color: '#5390d9', fontStyle: 'italic' }}>Hover over the image to view Merchandise in a larger size.</h3>

            <img className="product-image" src={product.image} alt={product.title} />
            <p>Price: ${product.price}</p>
            <div className="overlay">
              <button
                style={{
                  padding: '10px 40px',
                  fontSize: '16px',
                  background: '#f8f8f8',
                  border: '1px solid #ccc',
                  transition: 'transform 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              >
                Buy
              </button>

              <button
                style={{
                  padding: '10px 40px',
                  fontSize: '16px',
                  background: '#f8f8f8',
                  border: '1px solid #ccc',
                  transition: 'transform 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
