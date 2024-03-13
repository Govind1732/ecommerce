import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const product = {
    id: 1,
    name: 'iPhone 13',
    price: 999,
    description: 'The latest iPhone from Apple with advanced features.',
    specs: ['6.1-inch Super Retina XDR display', 'A15 Bionic chip', 'Dual-camera system'],
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p className="card-text">Price: ${product.price}</p>
          <p className="card-text">Description: {product.description}</p>
          <h5 className="card-subtitle mb-2">Specifications:</h5>
          <ul className="list-group list-group-flush">
            {product.specs.map((spec, index) => (
              <li key={index} className="list-group-item">{spec}</li>
            ))}
          </ul>
          <button className="btn btn-primary mt-3">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
