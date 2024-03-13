import React from 'react';
import { Link } from 'react-router-dom';

function Mobiles() {
  const mobiles = [
    { id: 1, name: 'iPhone 13', price: 999 },
    { id: 2, name: 'Samsung Galaxy S21', price: 899 },
  ];

  return (
    <div className="container">
      <h2 className="mt-3 mb-4">Mobiles</h2>
      <div className="row">
        {mobiles.map(mobile => (
          <div key={mobile.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{mobile.name}</h5>
                <p className="card-text">Price: ${mobile.price}</p>
                <Link to={`/mobiles/${mobile.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mobiles;
