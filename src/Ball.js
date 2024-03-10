import { useOutletContext } from "react-router-dom";
import AboutBall from "./AboutBall";
function Ball() {
    const balls = useOutletContext();

    return (
        <div>
            {
                balls.map(ball => {
                    return (
                        <AboutBall 
                            key={ball.id}
                            image={ball.image}
                            name={ball.name}
                            year={ball.year}
                            competition={ball.competition}
                        />
                    )
                })
            }
        </div>
    )
}

export default Ball;