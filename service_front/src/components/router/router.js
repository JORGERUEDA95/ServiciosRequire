import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import PrivateRoute from '../auth/privateroute';


import Login from "../login/login";
import Servicios from '../servicios/servicios.buscar';
import Inicio from "../index/index";


export default function AppRouter(){
    return(
        
        <Router>
            <Switch>
                <Route exact path={["/login"]} component={Login} />
                <Route  exact  path={["/servicios"]} component={Servicios} />
                <Route exact path={["/"]} component={Inicio}/>
                <Route exact path={["/index"]} component={Inicio}/>
                
                <Route path={'*'} component={() => (
                    <h1 style={{ marginTop: 300}}> 404 <br /> Pagina no encontrada </h1>
                )}/>
            </Switch>
        </Router>
    );
}


