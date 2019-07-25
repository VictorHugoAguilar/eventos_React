import React, { Component } from "react";

// importamos el consumer
import { CategoriasConsumer } from "../Context/CategoriasContext";
import { EventosConsumer } from "../Context/EventosContext";

class Formulario extends Component {
    state = {
        nombre: "",
        categoria: ""
    };

    // Si el usuario agrega un evento o categoria
    obtenerDatosEvento = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <EventosConsumer>
                {value => {
                                     return (
                        <form onSubmit={ e => { 
                                e.preventDefault();
                                value.obtenerEventos(this.state);
                            }}>
                            <fieldset className="uk-fieldset ul-margin">
                                <legend className="uk-legend uk-text-center">
                                    Buscar tu evento por nombre o categoria
                                </legend>
                            </fieldset>
                            <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk-margin="true">
                                    <input
                                        name="nombre"
                                        className="uk-input"
                                        type="text"
                                        placeholder="Nombre de Evento o ciudad"
                                        onChange={this.obtenerDatosEvento}
                                    />
                                </div>

                                <div className="uk-margin" uk-margin="true">
                                    <select
                                        className="uk-select"
                                        name="categoria"
                                        onChange={this.obtenerDatosEvento}
                                    >
                                        <option>
                                            {" "}
                                            -- Seleccione una Categoria --{" "}
                                        </option>
                                        <CategoriasConsumer>
                                            {value => {
                                                return value.categorias.map(
                                                    categoria => (
                                                        <option
                                                            key={categoria.id}
                                                            value={categoria.id}
                                                            data-uk-form-select
                                                        >
                                                            {
                                                                categoria.name_localized
                                                            }
                                                        </option>
                                                    )
                                                );
                                            }}
                                        </CategoriasConsumer>
                                    </select>
                                </div>

                                <div>
                                    <input
                                        type="submit"
                                        className="uk-button uk-button-danger"
                                        value="Busca Eventos"
                                    />
                                </div>
                            </div>
                        </form>
                    );
                }}
            </EventosConsumer>
        );
    }
}

export default Formulario;
