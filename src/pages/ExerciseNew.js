import React from "react"

class ExerciseNew extends React.Component {
    /*                                  //se envian las props dentro del scope de handleClick
     constructor(props) {
            super(props)
            this.handleClick = this.handleClick.bind(this)
        }
    
                                        //Pero Babel nos ahorra crear el constructor mediante public class fields, asi entonces...
    handleClick = () => {
        console.log("Clicked")
    }
                                        //Finalmente llamamos la funcion en el render

    <button onClick={this.handleClick}>
    Send
    </button>

*/

    handleChange = e => (
        //accendemos al tipo de elemento y al valor
        console.log(`${e.target.name} : ${e.target.value}`)
        
      
    )

render() {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="title"
                        name="title"
                        onChange={this.handleChange}

                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="description"
                        name="description"
                        onChange={this.handleChange}

                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="img"
                        name="img"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-row">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="leftColor"
                            name="leftColor"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="rightColor"
                            name="rightColor"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                    </button>
            </form>
        </div>
    )
}
}

export default ExerciseNew