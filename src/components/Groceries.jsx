import React from 'react';

function Groceries() {
  const groceries = [
    { id: 1, name: 'Apples', price: 2.99 },
    { id: 2, name: 'Bananas', price: 1.99 },
  ];

  return (
    <div>
      <h2>Groceries</h2>
      <ul>
        {groceries.map(grocery => (
          <li key={grocery.id}>
            {grocery.name}
            <span>{grocery.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Groceries;
