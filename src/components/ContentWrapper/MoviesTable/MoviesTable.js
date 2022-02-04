import React from "react";
import TableData from './TableData/TableData'

let data = [
    {
        titulo: 'Billy Elliot',
        duracion: 123,
        rating: 5,
        genero: ['Drama', 'Comedia'],
        premios: 2
    },
    {
        titulo: 'Alicia en el pais de las maravillas',
        duracion: 142,
        rating: 4.8,
        genero: ['Drama', 'Acción', 'Comedia'],
        premios: 3
    },

]

function MoviesTable () {
    return (
        <React.Fragment>
            <table>
                <thead>
                    <th>Título</th>
                    <th>Duración</th>
                    <th>Rating</th>
                    <th>Género</th>
                    <th>Premios</th>
                </thead>
                <tbody>
                    {data.map((pelicula, index) => {
                        return <TableData pelicula={pelicula} key={ pelicula.titulo.concat(index) }/>
                    })}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default MoviesTable;