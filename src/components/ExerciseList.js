import React from "react"
import Card from "./Card"

const ExerciseList = ({exercises}) => (
    <div>
        {exercises.map((exercise) => {
            //la funcion map recorre todos los elementos de un array y los pinta automaticamente
            return (
                <Card
                    key={exercise.id}
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


export default ExerciseList