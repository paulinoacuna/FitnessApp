/**Autor: Paulino Acuña
 * Curso de React.js
 * 
 * index.js es el archivo principal que se conecta con el index.html, 
 * que tiene como elemento un div con id = root
 */

//FORMA ANTIGUA DE TRABAJAR

//const element = document.createElement("h1");         //crea un elemento para ser usado en html de tipo h1
//element.innerText = "Hello React..";                  //inyecta un texto al elemento
//const container = document.getElementById("root");    //crea contenedor y lo asocia al div con id "root" del html
//container.appendChild(element);                       //agrega un hijo al contenedor


//FORMA DE CREARLO CON REACT!

import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.css"
import App from "./components/App"

/**
 * //objeto user
const user = {
    firstName: "Raul",
    lastName: "Palacios",
    avatar: "http://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png"
}
//metodos
function getName(user) {
    return `${user.firstName} ${user.lastName}`
}
function getGreeting(user) {
    if (user) {
        return <h1>Hello {getName(user)} </h1>
    }
    return <h1>Hello Stranger</h1>
}
 */


//MAIN
/**
 * const element = (
    <div>
        <h1>{getGreeting(user)}</h1>
        <img src={user.avatar} />
    </div>
)
 */



//FINAL RENDER EXPORTATION
const container = document.getElementById("root")
ReactDOM.render(<App/>, container)