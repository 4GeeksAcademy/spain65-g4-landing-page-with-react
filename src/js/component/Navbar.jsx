import React from "react";

export const Navbar = () =>{


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark d-flex justify-content-between" aria-label="Third navbar example">
        <div className="container-fluid">
        <a className="navbar-brand" href="#"> Landing Page con React </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse"  id="navbarsExample03">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="#">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="#">Services</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="#">Contact</a>
            </li>
            </ul>
            <form role="search">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
            </form>

        </div>
        </div>
     </nav>
 
    )

}