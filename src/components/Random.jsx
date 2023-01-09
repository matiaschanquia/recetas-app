import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Receta from "./Receta";

const Random = () => {
    const [receta, setReceta] = useState({});

    const clickHandler = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then(response => response.json())
            .then(data => {
                setReceta(data.meals[0]);
            });
    };

    return(
        <div className="container-random">
            <button onClick={clickHandler}>Receta al azar</button>
            {
                receta.strMeal && (
                    <Receta id={receta.idMeal} name={receta.strMeal} image={receta.strMealThumb}/>
                )
            }
        </div>
    );
}

export default Random;