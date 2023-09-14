import React from "react";
import "../../src/index.css";
import 'bootstrap/dist/css/bootstrap.css';


export const TablaActividadesComponent = ({ actividadesdata }) => {
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Hora</th>
                        <th>Dia</th>
                        <th>Actividad</th>
                        <th>Lugar</th>
                        <th>Participantes</th>
                    </tr>

                    {actividadesdata.map((actividad) => (
                        <tr>
                            <td>{actividad.hora}</td>
                            <td>{actividad.dia}</td>
                            <td>{actividad.actividad.nombre}</td>
                            <td>{actividad.lugar.nombre}</td>
                            <td>{actividad.participantes}</td>
                        </tr>
                    ))}
                    
                </thead>
            </table>

        </div>
    );
};

