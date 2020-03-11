import React, { Component } from 'react'
import RatingMovies from './RatingMovies'

const MoviesCard = props => {
  return (
    <div className="card">
      <img src={props.movie.imgURL} className="movieImg" />
      <div className="hoverInfo">
        <div className="movieTandY">
        <i onClick={() => props.delete(props.movie.id)} className="fas fa-ban fa-2x banBtn"></i>
          <p className="movieTitle">{props.movie.title}</p>
          <h5 className="movieYear">{props.movie.year}</h5>
          <ul className="movieRating"><RatingMovies rate={props.movie.ratings} getkeyrate={() => { }} /></ul>
        </div>
      </div>
    </div>
  );
}

export default MoviesCard;