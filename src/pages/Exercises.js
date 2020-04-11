import React from "react"
import Card from "../components/Card"  //importamos el componente Card
import Welcome from "../components/Welcome";

class Exercises extends React.Component {

    render() {
        return (
            <div>
                <Welcome username="Paulino" />

                <Card
                    //a continuacion defino el elemento card con sus atributos y estilos para que el componente los reciba
                    title="Technique Guides"
                    description="Learn amazing street workout and calisthenics skills"
                    img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
                    leftColor="#A74CF2"
                    rightColor="#617BFB"
                />
            </div>
        )
    }
}

export default Exercises