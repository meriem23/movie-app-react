import React, { Component } from 'react'
import MoviesCard from './MoviesCard';


const ListMovies = props => {
        return (
            <div className="listMovie">
                {props.movies.map(el => (<MoviesCard delete={id => props.delete(id)} movie={el} />))}
            </div>
        );
    }

export default ListMovies;