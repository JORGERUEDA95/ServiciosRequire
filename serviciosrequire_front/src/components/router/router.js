import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "../login/login";
import Inicio from "../index/index";
import PrivateRouter from '../auth/privateroute';
import Empleados from "../empleados/empleados.buscar";

export default function  AppRoutes(){
    return(
        <Router>
            <Switch>
                <Route exact path={["/login"]} component={Login}/>
                <Route exact path={["/index"]} component={Inicio}/>
                <PrivateRouter exact path={["empleados"]} component={Empleados}/> 
                <Route path={"*"} component={() => (
                    <h1 style={{ marginTop: 300 }}>
                        404
                        <br />
                        Pagina no encontrada
                    </h1>
                )}/>
            </Switch>
        </Router>
    );
}

