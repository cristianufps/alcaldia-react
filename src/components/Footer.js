import React from 'react';

import './styles/Footer.css';

class Footer extends React.Component{
    render(){
        return(   
            <React.Fragment>
                <div className="container-fluid footer_middle">
                    <div className="row">
                        <div className="col-8">
                            <h3>Contáctenos</h3>
                            <div className="row">
                                <div className="col-6">
                                    <p>Horario de atención</p>
                                    <p>Atención al ciudadano</p>
                                    <p>Directorio dependencias</p>
                                </div>
                            <div className="container col-6">
                                <p>Linea Nacional</p>
                                <p>Lineas Locales</p>
                                <p>NIT 890399011-3</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <img src="https://1.bp.blogspot.com/-tCDXxsQb7dE/X54LZYfvjkI/AAAAAAABhJ4/pAYf0nJ-mTsSoozwSBm8IgIU7zXJ1EuzACLcBGAsYHQ/s0/FC%2BBarcelona256x.png"></img>
                        </div>
                    </div>
                </div>

                <div className="footer_bottom">
                    <div className="row">
                        <div className="col-6">
                            <div className="container footer_infoAlcaldia">
                                <p>Alcaldia de Cúcuta - Nit 890399011-3</p>
                                <p className="letter_color">Politicas de seguridad de la informacion y protección de datos personales</p>
                                <p>Todos los derechos reservados 2021</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <p>Siguenos en :</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;