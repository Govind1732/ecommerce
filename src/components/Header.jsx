// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container">
    //     <Link className="navbar-brand" to="/">E-Commerce</Link>
    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //       <ul className="navbar-nav mr-auto">
    //         <li className="nav-item dropdown">
    //           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //             Categories
    //           </a>
    //           <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    //             <Link className="dropdown-item" to="/mobiles">Mobiles</Link>
    //             <Link className="dropdown-item" to="/groceries">Groceries</Link>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/mobiles">Mobiles</Link></li>
            <li><Link className="dropdown-item" to="/groceries">Groceries</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Header;
