import React, { Component } from 'react';
import { Route } from 'react-router4-with-layouts';
import { BrowserRouter, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Layout1 from './Layout';
import Layout2 from './Layout2';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import WhatToDo from '../pages/WhatToDo';
import Temas from '../pages/Temas';
import AsiVamos from '../pages/AsiVamos';
import Transparencia  from '../pages/Transparencia';
import Mayor  from '../pages/Mayor';
import Services from '../pages/Services';
import CrudNoticia from './Admin/CrudNoticia';
import Test2 from './Test2';

const history = createBrowserHistory();
function App(){
    return (
        <BrowserRouter history={history}>      
                <Switch>
                    <Route exact path='/' layout={Layout1} component={Home}/>
                    <Route exact path='/QueHacer' layout={Layout1} component={WhatToDo}/>
                    <Route exact path='/AsiVamos' layout={Layout1} component={AsiVamos}/>
                    <Route exact path='/Transparencia' layout={Layout1} component={Transparencia}/>
                    <Route exact path='/Alcalde' layout={Layout1} component={Mayor}/>
                    <Route exact path='/Temas' layout={Layout1} component={Temas}/>
                    <Route exact path='/Servicios' layout={Layout1} component={Services}/>
                    <Route exact path='/Admin' layout={Layout2} component={CrudNoticia}/>
                    <Route exact path='/Admin/noticias' layout={Layout2} component={Test2}/>
                    <Route component={NotFound}/>
                </Switch>   
        </BrowserRouter>
    );
}

export default App;