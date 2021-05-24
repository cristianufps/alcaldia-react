import React from 'react';

import './styles/Home.css';
import ItemsParticipacion from '../components/Participacion-Ciudadana/ItemsParticipacion';
class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <ItemsParticipacion></ItemsParticipacion>
            </div>
        );
    }
}

export default Home;