import React from "react";
import img_1 from "../images/exercise.png"
//Componente de tipo Clase

class Card extends React.Component {
    //FUNCION OBLIGATORIA RENDER
    render() {
        return (
            <div>
                <div>
                    <img src={img_1} />
                </div>

                <div>
                    <h1>Technique Guides</h1>
                    <p>Learn amazing street workout and calisthenics</p>
                </div>
            </div>
        )
    }
}

export default Card

//al momento de instanciar en el index.js usar <Card>   <Card/>