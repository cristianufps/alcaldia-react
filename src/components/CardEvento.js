import React, { Component } from 'react'
import axios from "axios";
import './styles/CardEvento.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
const url="https://jsonplaceholder.typicode.com/photos";

class CardEvento extends Component {
  state = {
    data: []
  }

  peticionGet = () => {
    axios.get(url).then(response => {
      const limit = 6;
      this.setState({ data: response.data });
      this.setState({ data: response.data.slice(0, limit) });
    })
  }
  componentDidMount() {
    this.peticionGet();
  }
  render() {
    return (
      <div className="dark-back">
        <div className="container col-10 d-flex justify-content-center align-items-center h-100">
          <div className="row col-10">
            <div className="enc_imagen col-md-12">
              <img src="http://estoyenlafrontera.com/sites/default/files/styles/s_apertura/public/2019-11/Cristo%20rey%2011%20pagina1.jpg?itok=3OfPIcNL" alt="" className="card-img-t enc-img"></img>
              <div class="card-title">Cúcuta</div><br></br>
              <div class="card-titl"><FontAwesomeIcon icon={faCloudSun} /> 30 °C</div>
            </div>
            <div className="encabezado col-md-12 text-left">
              <h2>Eventos de la Semana</h2>
              <br />
            </div>
            {
              this.state.data.map(props => {
                return (
                  <div className="evento col-md-4 col-sm-6 col-xs-12" >
                    <div className="card card-3 ">

                      <span className="views-field views-field-field-categoria">
                        <span className="field-content"><a href="#" hrefLang="es">Cultura</a></span>
                      </span>
                      <span className="views-field views-field-field.image">
                        <span className="field-content">
                          <div className="overflow">

                            <a id="link" href={props.url} target="_blanck"><img src={props.url} alt="" className="card-img img-responsive lazyloaded" />
                            </a>
                          </div>
                        </span>
                      </span>
                      <span className="views-field views-field-title">
                        <h2 className="field-content titulo--card"><a href="">Programate este fin de semana</a></h2>
                      </span>
                      <span className="views-field views-field-fecha">
                        <div className="field-content">
                          <div>15/06/2021</div>
                        </div>
                      </span>
                      <div className="views-field views-field-nothing">
                        <span className="field-content">
                          <a id="link" href="#" target="_blank">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti cum inventore veniam vel odio nihil quaerat unde maxime quas ullam, et nobis doloribus magni voluptatibus nesciunt aperiam dolor vitae facilis!</p>
                          </a>
                        </span>
                      </div>
                      <span className="views-field views-field-share">
                        <span className="views-label views-label-share">
                          Lea Antes de Compartir:
                        </span>
                        <span className="field-content">
                          <a href="#" className="icon_face"><FontAwesomeIcon icon={faFacebook} /></a>
                          <a href="#" className="icon_face"><FontAwesomeIcon icon={faTwitter} /></a>
                        </span>
                      </span>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default CardEvento;