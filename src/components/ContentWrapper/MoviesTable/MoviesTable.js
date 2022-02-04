import React from "react";
import TableData from './TableData/TableData'

let data = [
    {
        titulo: 'Billy Elliot',
        duracion: 123,
        rating: 5,
        generos: ['Drama', 'Comedia'],
        premios: 2
    },
    {
        titulo: 'Alicia en el pais de las maravillas',
        duracion: 142,
        rating: 4.8,
        generos: ['Drama', 'Acción', 'Comedia'],
        premios: 3
    },

]

function MoviesTable () {
    return (
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
                    return <TableData 
                                titulo={pelicula.titulo} 
                                duracion={pelicula.duracion} 
                                rating={pelicula.rating} 
                                generos={pelicula.generos} 
                                premios={pelicula.premios}
                                key={ pelicula.titulo.concat(index) }/>
                })}
            </tbody>
        </table>
    )
}

export default MoviesTable;