import React from 'react';

import './Copyright.css';
import { FaFacebookF }  from "react-icons/fa";
import { FaInstagram }  from "react-icons/fa";
import { FaYoutube}  from "react-icons/fa";
import { FaTwitter }  from "react-icons/fa";

class Copyright extends React.Component{
    render(){
        return(   
            <div id="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 brand">
                            <span>Alcaldía de Generica - Nit: 00000000 </span>
                            <a href="#">Políticas de seguridad de la información y protección de datos
                            personales</a>
                            <span>Todos los Derechos Reservados © 2021</span>
                        </div>

                        <div className="col-md-6 socialnetworks bottom">
                            <ul>
                                <li>
                                    <span>Síguenos en:</span>
                                </li>
                                <li className="facebook">
                                    <a>
                                        <span class="icon fa"><FaFacebookF/></span>
                                    </a>
                                </li>
                                <li className="twitter">
                                    <a>
                                        <span class="icon fa"><FaTwitter/></span>
                                    </a>
                                </li>
                                <li className="youTube">
                                    <a>
                                        <span class="icon fa"><FaYoutube/></span>
                                    </a>
                                </li>
                                <li className="instagram">
                                    <a>
                                        <span class="icon fa"><FaInstagram/></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Copyright;