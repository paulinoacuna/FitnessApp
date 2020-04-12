import React from "react"


function Button(props) {
    return (
        <div
            style={{
                marginTop: `30px`,
                marginBottom: `30px`,
                marginLeft: `620px`
            }}
        >
            <img src={props.image} />


        </div>
    )
}

export default Button