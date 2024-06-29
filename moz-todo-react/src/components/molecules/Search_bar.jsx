import React from "react";

function Search_bar () {
    return (
        <>
        <header>
         <nav>
            <ul>
                <li><a href="visual3.html">Inicio</a></li>
                <li><a href="login.html">Login</a></li>
                <li><input type="text" className="search"/><button id="buscar">Buscar</button></li>
            </ul>
        </nav>
        </header> 
        </>
    )
}

export default Search_bar