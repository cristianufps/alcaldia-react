import React from 'react';

import Cards from '../components/Cards';
import CardEvento from '../components/CardEvento';
class WhatToDo extends React.Component{
    render(){
        return(
            <div className="home">
                <Cards></Cards>
                <CardEvento></CardEvento>
            </div>
        );
    }
}
export default WhatToDo;