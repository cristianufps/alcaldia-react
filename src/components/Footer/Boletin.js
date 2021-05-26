import React from 'react';

import './Boletin.css';
import { FaRegEnvelope } from "react-icons/fa";
class Boletin extends React.Component{
    render(){
        return(
            <div id="newsletter-home">
                <div className="title-section">
                    <div className="row">
                        <div>
                            <span className="icon"><FaRegEnvelope color="#66A9F4" fontSize="1.6em"/></span>
                            <span className="special_letter">Suscríbase al Boletín Digital</span>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <a type="button" className="btn btn-default" 
                    >Suscribirme</a>
                    <a className="desubscribirse">Desubscribirse</a>
                </div>
            </div>
        );
    }
}

export default Boletin;