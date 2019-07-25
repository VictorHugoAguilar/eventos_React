import React, { Fragment } from "react";

// Importamos los componenetes para la app
import Header from "./Components/Header";
import Formulario from "./Components/Formulario";

import CategoriasProvider from "./Context/CategoriasContext";

function App() {
    return (
        <CategoriasProvider>
            <Header />

            <div className="uk-container">
                <Formulario />
            </div>
        </CategoriasProvider>
    );
}

export default App;
