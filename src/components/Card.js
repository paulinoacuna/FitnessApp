import React from "react"
import img_1 from "../images/exercise.png"
import img_2 from "../images/circles.png"
//importar estilos
import "./styles/Card.css"

//Componente de tipo Clase
class Card extends React.Component {

    //definir constructor pasando props al padre
    constructor(props) {
        super(props)
        //default state
        this.state = {
            image: "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc"
        }
    }


    
    componentDidMount() { //se invoca inmediatamente despues de que un componente es montado
        setTimeout(() => {
            //aqui se modifica el estado del componente a los 5 seg
            this.setState({
                image: "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
            })

        }, 5000)
    }

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
                            <img src={this.state.image} className="float-right" />
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