import React from "react";
import mandalorian from '../../../../assets/images/mandalorian.jpg'
import PropTypes from "prop-types";

function LastMovieInDb ({titulo='Not-available', descripcion='Not-available'}) {
    return (
        <React.Fragment>
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">{titulo}</h5>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" Style="width: 40rem;" src={ mandalorian } alt=" Star Wars - Mandalorian "/>
                            </div>
                            <p>{descripcion}</p>
                            <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

LastMovieInDb.propTypes = {
    titulo: PropTypes.string,
    descripcion: PropTypes.string
}


export default LastMovieInDb;