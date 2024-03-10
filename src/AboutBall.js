import React, { useState } from "react";
function AboutBall({ image, name, year, competition }) {
    const [showDetails, setShowDetails] = useState(false);
    
    function handleClick() {
        setShowDetails(!showDetails);
    }

    return (
        <div>
            <img src={image} alt="soccer ball" onClick={handleClick} />
            {
                showDetails ? (
                    <div>
                        <h2>{name}</h2>
                        <p>Year: {year}</p>
                        <p>Competition: {competition}</p>
                    </div>
                ) : null
            }
        </div>
    )
}

export default AboutBall;