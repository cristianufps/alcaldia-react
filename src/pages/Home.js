import React from 'react';

import './styles/Home.css';
import ItemsParticipacion from '../components/ItemsParticipacion';
import Eventos from '../components/Eventos';
import Proyecto from '../components/Proyecto';
import Redes from '../components/Redes';
import Noticia from '../components/Noticias';
import Tramites from '../components/Tramites';
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import CardEvento from '../components/CardEvento';
class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <Banner></Banner>
                <Tramites></Tramites>
                <Noticia></Noticia>
                <Redes></Redes>
                <Proyecto></Proyecto>
                <Eventos></Eventos>
                <ItemsParticipacion></ItemsParticipacion>
                <Cards></Cards>
                <CardEvento></CardEvento>
            </div>
        );
    }
}
export default Home;