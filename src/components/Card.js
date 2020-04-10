import React from "react"
import img_1 from "../images/exercise.png"
import img_2 from "../images/circles.png"
//importar estilos
import "./styles/Card.css"

//Componente de tipo Clase
class Card extends React.Component {
    //FUNCION OBLIGATORIA RENDER
    render() {
        const { title, description, img, leftColor, rightColor } = this.props


        return (
            <div className="card mx-auto Fitness-Card"
                //ESTILOS EN LINEA: ABRE LA CAPACIDAD DE INYECTAR VARIABLES EN LOS ESTILOS
                style={{
                    backgroundImage: `url(${img_2}), linear-gradient(to right, ${leftColor}, ${rightColor})`
                }}
            >


                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img} className="float-right" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default Card

//al momento de instanciar en el index.js usar <Card><Card/>