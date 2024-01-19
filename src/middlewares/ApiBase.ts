import axios from 'axios';

/**
 * je créer un objet axios qui me permettra de faire des requêtes vers mon API
 * je lui défini une url de base afin de centraliser l'url vers mon API
 */
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
});

/**
 * je vérifie si un token est présent dans le localstorage
 * si oui, je l'ajoute dans le header de toutes mes requêtes
 * afin de pouvoir accéder aux routes protégées de mon API
 */
if(localStorage.getItem("auth") !== null){
    let token = localStorage.getItem("auth");
    axiosInstance.defaults.headers.common = {
        'Authorization': `Bearer ${token}`
    };
}

export default axiosInstance;
