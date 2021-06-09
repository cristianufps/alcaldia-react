import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import WhatToDo from '../pages/WhatToDo';
import { AsiVamos }  from '../pages/AsiVamos';
import { Transparencia } from '../pages/Transparencia';

function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/QueHacer' component={WhatToDo}/>
                    <Route exact path='/AsiVamos'>
                        <AsiVamos/>
                    </Route>
                    <Route exact path='/Transparencia'>
                        <Transparencia/>
                    </Route>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;