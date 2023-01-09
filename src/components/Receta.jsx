import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Receta = (props) => {
    const [loading, setLoading] = useState(true);
    
    const loadHandler = () => {
        setLoading(false);
    }

    return(
        <div className="container-receta">
            <figure>
                <img onLoad={loadHandler} className={loading ? "display-none" : ""} src={props.image} alt={props.name} />
                {
                    loading && <div className="circles margin-auto"><span className="circle1"></span><span className="circle2"></span><span className="circle3"></span></div>
                }
            </figure>
            <NavLink to={`/detail/${props.id}`}>
                <h3 className="name-receta">{props.name}</h3>
            </NavLink>
        </div>
    )
}

export default Receta;