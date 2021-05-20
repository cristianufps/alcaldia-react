import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Galeria from '../pages/Galeria';

function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/galeria' component={Galeria}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;