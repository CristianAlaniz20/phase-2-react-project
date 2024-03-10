import React, { useState } from 'react'

function AddBall() {
    const [ballForm, setBallForm] = useState({
        name: "",
        year: "",
        competition: "",
        image: ""
    })
    console.log(ballForm)

    function handleInputChange(event) {
        setBallForm({
            ...ballForm,
            [event.target.name]: event.target.value
        })
    }
    
    return (
        <div>
            <h2>Your favorite ball not on the list? Add it:</h2>
            <br />
            <form>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text"
                    name="name"
                    id="name"
                    placeholder="ball name"
                    value={ballForm.name}
                    onChange={handleInputChange}
                />
                <label htmlFor="year">Year: </label>
                <input 
                    type="text"
                    name="year"
                    id="year"
                    placeholder="year made"
                    value={ballForm.year}
                    onChange={handleInputChange}
                />
                <label htmlFor="competition">Competition: </label>
                <input 
                    type="text"
                    name="competition"
                    id="competition"
                    placeholder="competition name"
                    value={ballForm.competition}
                    onChange={handleInputChange}
                />
                <label htmlFor="image">Image: </label>
                <input 
                    type="text"
                    name="image"
                    id="image"
                    placeholder="image url"
                    value={ballForm.image}
                    onChange={handleInputChange}
                />
            </form>
        </div>
    )
}

export default AddBall;