import React, { Fragment } from "react";

// Importamos los componenetes para la app
import Header from "./Components/Header";

import CategoriasProvider from './Context/CategoriasContext';

function App() {
    return (
        <CategoriasProvider>
            <Header />
        </CategoriasProvider>
    );
}

export default App;
