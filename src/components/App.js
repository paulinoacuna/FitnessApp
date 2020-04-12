import React from "react"
import { BrowserRouter /*MANAGER DE RUTAS */, Route /*RUTA*/, Switch /*RENDEREA 1ER CHILD QUE CLIENTE BUSCA*/ } from "react-router-dom"
import Exercises from "../pages/Exercises"
import ExerciseNew from "../pages/ExerciseNew"
import NoFound from "../pages/NoFound"


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/exercise" /*DONDE RENDEREAR*/ component={Exercises} /* QUE RENDEREAR*/ />
            <Route exact path="/exercise/new" component={ExerciseNew} />
            <Route component={NoFound} /* ESTE ROUTE SE DESPLIEGA POR DEFECTO*/ />

        </Switch>
    </BrowserRouter>
)


export default App