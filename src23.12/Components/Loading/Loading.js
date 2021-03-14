import React from "react"
import "./Loading.scss"

const Loading = () => {
    return (
        <div className="loading-container col-12 d-flex justify-content-center align-items-center">
            <div className="loader triangle ">
                <svg viewBox="0 0 86 80">
                    <polygon points="43 8 79 72 7 72"></polygon>
                </svg>
                <p> Loading... </p>
            </div>
        </div>
    )
}

export default Loading