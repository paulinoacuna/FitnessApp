import React from "react"
import Card from "./Card"


function ExerciseList(props) {
    return (
        <div>
            {props.exercises.map((exercise) => {
                //la funcion map recorre todos los elementos de un array y los pinta automaticamente
                return (
                    <Card
                        title={exercise.title}
                        description={exercise.description}
                        img={exercise.img}
                        leftColor={exercise.leftColor}
                        rightColor={exercise.rightColor}
                    />
                )
            })}
        </div>


    )

}

export default ExerciseList