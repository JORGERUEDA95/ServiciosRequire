import { isUndefined } from "util";
import axios from "axios";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

export function calculaExtracionSesion(){
    const now = new Date().getTime();
    const newDate = now + 60 * 30 *1000;
    return new Date(newDate);
}

export function getSession(){
    return isUndefined(cookies.get('-_s'))? false : cookies.get('_s');

}

function renovarSession(){
    const sesion = getSession();
    if(!sesion) window.location.href = "/login";

    cookies.set("-s", sesion,{
        path: "/",
        expires: calculaExtracionSesion(),

    });

}

export const request ={
    get: function (url){
        renovarSession();
        return axios.get(url);
    }
}