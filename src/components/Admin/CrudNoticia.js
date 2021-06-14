import React from 'react';
import noticias from '../../jsons/Noticias.json';
import { FaEdit }  from "react-icons/fa";
import { FaTrashAlt }  from "react-icons/fa";
import { FaPlusCircle }  from "react-icons/fa";
import '../styles/CrudNoticia.css';

class CrudNoticia extends React.Component{
    render(){
        return(
            <div>
                <div class="container-fluid pt-4">
                    <div class="row">
                        <div class="table-responsive col-md-8 offset-md-2"> 
                            <div class="row align-items-center">
                                <div class="col"><h2>Crear Noticia</h2></div>
                                <div class="col">
                                    <a id="create-icon"><FaPlusCircle/></a>
                                </div>
                            </div>
                            <table class="table pt-4 text-center ">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Titulo</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {   
                                     noticias.map((noticia) => (
                                         <tr key={noticia.id}>
                                            <td>{noticia.id}</td>
                                            <td>{noticia.fecha}</td>
                                            <td>{noticia.tittle}</td>
                                            <td>
                                                <a id="edit-icon"><FaEdit/></a>
                                                <a id="delete-icon"><FaTrashAlt/></a>
                                            </td>
                                         </tr>
                                     ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CrudNoticia;