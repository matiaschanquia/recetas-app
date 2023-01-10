import React, { useEffect, useState } from "react";
import Receta from "./Receta";

const Search = () => {
    const getRecetasStorage = JSON.parse(sessionStorage.getItem("recetas"));
    const [input, setInput] = useState("");
    const [recetas, setRecetas] = useState(getRecetasStorage || []);
    const [loading, setLoading] = useState(false);

    const submitHandler = (e) => {
        setInput("");
        e.preventDefault();
        if(!input) {
            alert("Debe escribir algo en la búsqueda");
            return;
        }
        setLoading(true);
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
            .then(response => response.json())
            .then(data => {
                if(data.meals) {
                    setRecetas(data.meals);
                } else {
                    alert("No existen recetas con ese nombre");
                }
                setLoading(false);
            });
    }
    useEffect(() => {
        sessionStorage.setItem("recetas", JSON.stringify(recetas))
    }, [recetas])

    const clickHandlerLimpiar = () => {
        setRecetas([]);
    }

    return(
        <div className="container-search">
            <h2 className="titulo">Haga una búsqueda de recetas</h2>
            <form className="form-search" onSubmit={submitHandler}>
                <input type="text" name="food" placeholder="Haga su búsqueda..." value={input} onChange={e => setInput(e.target.value)}/>
                <button>Buscar</button>
            </form>
            {
                recetas.length > 0 && <button onClick={clickHandlerLimpiar} className="btn-limpiar">Limpiar</button>
            }
            {
                loading && <div className="loading"> <div className="circles"><span className="circle1"></span><span className="circle2"></span><span className="circle3"></span></div> </div>
            }
            <div className="container-recetas">
                {
                    recetas.map(item => (
                        <Receta key={item.idMeal} id={item.idMeal} name={item.strMeal} image={item.strMealThumb}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Search;