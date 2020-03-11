import React, { Component } from 'react'


class RatingMovies extends Component {
  render() {
    let starRate = [];
    for (let i = 0; i < 5; i++) {
      if (this.props.rate > i) {
        starRate.push(
          <li><i className="fas fa-star fa-2x" onClick={(r) => this.props.getkeyrate(i + 1)}></i>
          </li>
        );
      } else {
        starRate.push(
          <li><i className="far fa-star fa-2x" onClick={(r) => this.props.getkeyrate(i + 1)}></i>
          </li>
        );
      }
    }
    return (
      <div className="starList">
        {starRate}
      </div>
    )
  }
}

export default RatingMovies;