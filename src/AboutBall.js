import React, { useState } from "react";
import "./AboutBall.css"
function AboutBall({ image, name, year, competition }) {
    const [showDetails, setShowDetails] = useState(false);
    
    function handleClick() {
        setShowDetails(!showDetails);
    }

    return (
        <div className="ball-card">
            <h2>{name}</h2>
            <img src={image} alt="soccer ball" className="Ball" onClick={handleClick} />
            {
                showDetails ? (
                    <div>
                        <p className="description">Year: {year}</p>
                        <p className="description">Competition: {competition}</p>
                    </div>
                ) : null
            }
        </div>
    )
}

export default AboutBall;