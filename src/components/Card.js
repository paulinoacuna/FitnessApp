import React from "react"
import img_1 from "../images/exercise.png"
//importar estilos
import "./styles/Card.css"

//Componente de tipo Clase
class Card extends React.Component {
    //FUNCION OBLIGATORIA RENDER
    render() {
        return (

            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img_1} className="float-right" />
                        </div>

                        <div className="col-6 Fitness-Card-Info">
                            <h1>Technique Guides</h1>
                            <p>Learn amazing street workout and calisthenics skills</p>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default Card

//al momento de instanciar en el index.js usar <Card>  <Card/>