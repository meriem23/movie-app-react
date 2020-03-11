import React, { Component } from 'react'
import RatingMovies from './RatingMovies'


class SearchMovies extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 3
  //   };
  // }
  render() {
    return (
      <div className="searching" >
        <input type="search" className="searchTerm" maxLength="50"
          name="input" placeholder="Search for a Movie" onChange={(e) => this.props.getkeyword(e.target.value)} />
      </div>
    );
  }
}
export default SearchMovies