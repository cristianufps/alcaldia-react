import React from 'react'
import Card from './Card'
import ambiente from '../images/eventos_semana/ambiente.jpg' 
import cultura from '../images/eventos_semana/cultura.jpg' 
import desarrollo from '../images/eventos_semana/desarrollo.jpg' 
import educacion from '../images/eventos_semana/educacion.jpg' 
import juridica from '../images/eventos_semana/juridica.jpg' 
import publica from '../images/eventos_semana/publica.jpg'
import salud from '../images/eventos_semana/salud.jpg' 
import seguridad from '../images/eventos_semana/seguridad.jpg'
import './CardTemas.css'
const cards = [{
id: 1,
title: "AMBIENTE",
image: ambiente,
url: 'http://www.cucuta-nortedesantander.gov.co/directorio-institucional/secretaria-de-agricultura-medio-ambiente-y-desarrollo',
text: 'Conoce cómo trabajamos para preservar la diversidad e integridad de los recursos naturales distritales.'

},
{
    id: 2,
    title: "CULTURA Y RECREACIÓN",
    image: cultura,
    url: 'https://imrd-cucuta.gov.co/',
    text: '¡Disfruta de Cúcuta y sus eventos! Entérate de las últimas noticias de cultura, recreación y deporte.'
},
{
id: 3,
title: "DESARROLLO ECONOMICO",
image: desarrollo,
url: 'http://www.nortedesantander.gov.co/Gobernaci%C3%B3n/Administraci%C3%B3n-Departamental/Secretar%C3%ADas/Secretar%C3%ADa-de-Desarrollo-Econ%C3%B3mico',
text: 'Te compartimos las noticias de desarrollo económico. Conoce las acciones que harán de Cúcuta una ciudad más competitiva.'
},
{
id: 4,
title: "EDUCACIÓN",
image: educacion,
url: 'http://www.sednortedesantander.gov.co/',
text: 'Descubre las principales noticias, servicios y trámites del sector de educación. '
},
{
id: 5,
title: "GESTIÓN JURIDICA",
image: juridica,
url: 'https://www.eiscucuta.com.co/category/s-i-g/iii-macroproceso-de-apoyo/i-gestion-juridica/',
text: 'Trabajamos en defensa de los intereses de la ciudad, de manera íntegra, responsable y comprometida, evitándole a la ciudadanía gastos millonarios.'
},
{
id: 6,
title: "GESTIÓN PUBLICA",
image: publica,
url: 'http://www.cucuta-nortedesantander.gov.co/',
text: 'Te presentamos la gestión pública en Cúcuta. Aquí sabrás cómo se están inviertiendo los recursos de la ciudad.'
},
{
id: 7,
title: "SALUD",
image: salud,
url: 'http://www.ssmcucuta.gov.co/drupal/',
text: 'Conoce toda la oferta disponible en tu barrio para garantizarte el ejercicio efectivo del derecho a la salud.'
},
{
id: 8,
title: "SEGURIDAD",
image: seguridad,
url: 'http://www.cucuta-nortedesantander.gov.co/directorio-institucional/secretaria-de-seguridad-ciudadana-394660',
text: 'Conoce la politica pública en materia de seguridad, convivencia y acceso a la justicia.'
}
]
function Cards() {
    return (
        <div className="light-back">
        <div className="container col-10 d-flex justify-content-center align-items-center h-100 bg-white">
            
            <div className="row col-10">
            <div className="encabezado col-md-12">
            <h1 className="tit_temas">Temas de Interés</h1>
      <p>Mi ciudad te brinda información sobre cómo funciona la administración pública y te acerca a los temas que te interesan y a la oferta de servicios públicos cerca de ti. Conócelos.</p>
      <br/>
      </div>
           {
               cards.map(card =>(
                <div className="col-md-4" key={card.id}>
                <Card title={card.title} imageSource={card.image} url={card.url} text={card.text}/>
            </div>
               ))
           }
<hr></hr>
            </div>
        </div>
        </div>
    )
}

export default Cards;

