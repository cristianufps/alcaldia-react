import React from 'react';

import noticias from '../Noticias.json';
import './Noticia.css';
class Noticias extends React.Component{
    render(){
        return(
            <div className="dark-back">
                <div className="container-fluid">
                    <div className="row">
                        <h2 className="section_tittles">Noticias</h2>    
                    </div>
                    <div className="row">
                    {
                        noticias.map((noticia) => (
                            <div key={noticia.id} className="col-md-3">
                                <div className="card">
                                    <img className="card-img-top" src={noticia.image} alt="Card image cap"/>
                                        <div className="card-body dark-back">
                                            <h5 className="card-title">{noticia.tittle}</h5>
                                            <p className="light-back">{noticia.fecha}</p>
                                        </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>   
        );
    }
}

export default Noticias;