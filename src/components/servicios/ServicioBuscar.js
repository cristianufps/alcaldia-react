import React from 'react';

class ServicioBuscar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="tramite-buscarserv">
                    <h2>¿QUE ESTAS BUSCANDO?</h2>
                    <div>
                        <input type="text" className="text" ></input>
                        <button>Buscar</button>
                    </div>
                </div>
                <br></br>
                <table className="tramite-table">
                    <thead>
                        <tr><th><h2>Servicios </h2> </th>
                            <th> <h2>Población</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Saca Copia de RUT</td>
                            <td>Comedores comunitarios</td>
                        </tr>
                        <tr>
                            <td>Paga infracciones de transito</td>
                            <td>Actualiza datos del sisben</td>
                        </tr>
                        <tr>
                            <td>Informacion del regimen Subsidiado</td>
                            <td>Apoyos economicos de adultos mayores</td>
                        </tr>
                        <tr>
                            <td>Actualiza el puntaje del sisben</td>
                            <td>Atencion a mujeres gestantes </td>
                        </tr>
                        <tr>
                            <td>Adopta animales de compañia </td>
                            <td>Perdida de capacidad laboral </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ServicioBuscar;