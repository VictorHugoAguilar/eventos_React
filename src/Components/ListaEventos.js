import React from "react";

// Importamos componente
import Evento from '../Components/Evento';

// Importamos los servicios para consumir
import { EventosConsumer } from "../Context/EventosContext";

const ListaEventos = () => {
    return (
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <EventosConsumer>
                {(value) => {
                   return value.eventos.map(evento => (
                       <Evento 
                       key={evento.id}
                       evento={evento}
                       />
                   ))
                }}
            </EventosConsumer>
        </div>
    );
};

export default ListaEventos;
