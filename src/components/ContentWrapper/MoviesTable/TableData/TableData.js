import React from "react";

function TableData({titulo, duracion, rating, generos, premios}) {
    return (
        <React.Fragment>
            <td>{titulo}</td>
            <td>{duracion}</td>
            <td>{rating}</td>
            <td>
                <ul>
                    {generos.map((genero, index) => {
                        return <li key={genero.concat(index)}>{genero}</li>
                    })}
                </ul>
            </td>
            <td>{premios}</td>
        </React.Fragment>
    )
}

export default TableData;