import React from "react"
import './styles/AddButton.css'
import img from '../images/add.png'
import { Link } from "react-router-dom"


const Button = () => (

    <Link to="/exercise/new">
        <img src={img} className="Fitness-Add" alt="exercise" />
    </Link>

)

export default Button