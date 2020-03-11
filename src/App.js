import React, { Component } from 'react'
import SearchMovies from './components/SearchMovies'
import ListMovies from './components/ListMovies'
import RatingMovies from './components/RatingMovies'
import AddMovies from './components/AddMovies'
import { v4 as uuidv4 } from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


class App extends Component {
  state = {
    movies: [
      { id: uuidv4(),title: 'Avengers:Endgame', imgURL: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ed5a1f0-a8ce-4b86-8f52-89607c9827f1/dd76mdz-69d22a8f-d511-4724-9ef4-f7a8adcc97b1.png/v1/fill/w_1280,h_1811,q_80,strp/avengers__endgame___minimalist_poster___stones_by_yagneshlp_dd76mdz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxMSIsInBhdGgiOiJcL2ZcLzVlZDVhMWYwLWE4Y2UtNGI4Ni04ZjUyLTg5NjA3Yzk4MjdmMVwvZGQ3Nm1kei02OWQyMmE4Zi1kNTExLTQ3MjQtOWVmNC1mN2E4YWRjYzk3YjEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.igN7OLU5tRMPP8nnvJw_kpI-SiXYoN70IozoKzBrB5I', ratings: 5, year: '2019' },
      { id: uuidv4(),title: 'Inception', imgURL: 'https://i.pinimg.com/originals/b3/12/09/b31209cd43ba1bde909ebdd01112caf8.jpg', ratings: 5, year: '2010' },
      { id: uuidv4(),title: 'Men in Black', imgURL: 'https://i.pinimg.com/originals/31/c0/d7/31c0d78c922a702a0fa81c772f9684e2.jpg', ratings: 4, year: '1997' },
      { id: uuidv4(),title: 'Eternal sunshine of the spotless mind', imgURL: 'https://i.pinimg.com/originals/61/b0/8f/61b08f31668c8984277d43b0b68a166f.jpg', ratings: 4, year: '2004' }],
    keyword: "",
    keyrate: 1,
    id:""
  }
  search = (y) => {
    this.setState({
      keyword: y
    });
  };
  rating = (r) => {
    this.setState({
      keyrate: r
    });
  };
  add = (m) => {
    this.setState({
      movies: this.state.movies.concat(m)
    });
  };
  delete =(id) =>{
    this.setState({movies: this.state.movies.filter(el => el.id !== id)})
  }
  render() {
    return (
      <div className='App'>
        <div className="searchAndrate">
          <SearchMovies getkeyword={(y) => this.search(y)} />
          <h6 className="searchRating">Minimum Rating</h6>
          <ul><RatingMovies getkeyrate={(r) => this.rating(r)}
            rate={this.state.keyrate} /></ul>
        </div>
          <ListMovies delete={id => this.delete(id)} movies={this.state.movies.filter(
            el => (el.title.toUpperCase().indexOf(this.state.keyword.toUpperCase().trim()) >= "") && (el.ratings >= this.state.keyrate))} />
        <AddMovies addMovie={(m) => this.add(m)} />
      </div>
    );
  }
}

export default App;
