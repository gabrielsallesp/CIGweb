import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../views/Home';
import Maquininhas from '../views/Maquininhas';
import AdicionarMaquininhas from '../views/Adicionar_Maquininhas';
import Relatorios from '../views/Relatorios';
import Insights from '../views/insights';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/maquininhas" exact component={Maquininhas}/>
                <Route path="/maquininhas/nova" exact component={AdicionarMaquininhas}/>
                <Route path="/maquininhas/:id" exact component={AdicionarMaquininhas}/>
                <Route path="/relatorios" exact component={Relatorios}/>
                <Route path="/insights" exact component={Insights}/>
            </Switch>
        </BrowserRouter>

    )
}
