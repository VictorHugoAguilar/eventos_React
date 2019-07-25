import React from "react";

// Importamos los componenetes para la app
import Header from "./Components/Header";
import Formulario from "./Components/Formulario";
import ListaEventos from './Components/ListaEventos';

// Servicios
import CategoriasProvider from "./Context/CategoriasContext";
import EventosProvider from "./Context/EventosContext";

function App() {
    return (
        <EventosProvider>
            <CategoriasProvider>
                <Header />
                <div className="uk-container">
                    <Formulario />
                    <ListaEventos />

                </div>
            </CategoriasProvider>
        </EventosProvider>
    );
}

export default App;
