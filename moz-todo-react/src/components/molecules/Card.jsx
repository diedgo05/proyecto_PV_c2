import React from "react";
import Imagen_interstellar from "../atoms/Imagen/Imagen_interstellar";

function Card () {
    return (
        <>
    <div class="card">
        <a href="index.html">
            <Imagen_interstellar/>
        </a>
        <div class="content">
            <p>Protagonizada por Matthew McConaughey, Anne Hathaway...</p>
            <div class="rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
        </div>
    </div>
        </>
    )
}

export default Card