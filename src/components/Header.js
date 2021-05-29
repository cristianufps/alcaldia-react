import React from 'react';

import './styles/Header.css';
import logoAlcaldia from '../images/escudo.png';
import { FaHome } from "react-icons/fa";
class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <nav class="navbar navbar-light nav-dark">
                    <div class="container">
                        <span className="alcaldia">El sitio oficial de la Ciudad de Cúcuta</span>
                        <a class="navbar-brand" href="#">
                            <img className="logo-alcaldia " src={logoAlcaldia} alt=""  class="d-inline-block align-text-top"/>
                        </a>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><FaHome></FaHome></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Servicios</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Que Hacer</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Noticias</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Noticias</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Header;