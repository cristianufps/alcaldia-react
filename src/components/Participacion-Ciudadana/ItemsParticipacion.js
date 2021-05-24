import React from 'react';

import { FaCheckSquare } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import './ItemsParticipacion.css';

class ItemsParticipacion extends React.Component{
    state = {
        icon:[FaCheckSquare, FaEye, FaEdit, FaFileAlt, FaRegComments, FaRegCommentDots],       
    };
    render(){
        return(
            <div className="citizens-block">
                <div className="container">
                    <div className="row">
                        <h2>Participación Ciudadana</h2>    
                    </div>
                    <div className="row">
                        <div className="col-md-3 item">
                            <div className="block-container">
                                <span className=""><FaCheckSquare color="white" fontSize="4em"/></span>
                                <span className="icon_description">Encuestas</span>
                            </div>
                        </div>

                        <div className="col-md-3 item">
                            <div className="block-container">
                                <span className=""><FaFileAlt color="white" fontSize="4em"/></span>
                                <span className="icon_description">PQR</span>
                            </div>
                        </div>

                        <div className="col-md-3 item">
                            <div className="block-container">
                                <span className=""><FaEye color="white" fontSize="4em"/></span>  
                                <span className="icon_description">Seguimiento PQR</span>     
                            </div>               
                        </div>

                        <div className="col-md-3 item">
                            <div className="block-container">
                                <span className=""><FaEdit color="white" fontSize="4em"/></span>
                                <span className="icon_description">Proceso de Seleccion</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemsParticipacion;