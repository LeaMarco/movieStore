import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Buscador.css";
import {addMovieFavorite,getMovies} from '../../actions';
import {ReactComponent as Search} from '../../img/Search.svg'
import {ReactComponent as Fav}  from '../../img/favorites.svg';




export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div className="buscador-component">
        {/* <h2>Buscador</h2> */}
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            {/* <label className="label" htmlFor="title">
              Película:{" "}
            </label> */}
            <input
              className="buscador-input"
              placeholder ="Buscar..."
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
            <div className="line"></div>
          </div>
          <button className="buscador-button-submit" type="submit"><Search className="buscador-lupa"/></button>
        </form>
        <div className="buscador-movies-container"> {
              this.props.movies && this.props.movies.map(el =>(
                <div className="buscador-movie" key={el.imdbID}> 
                  
                      <Link className="link" to={`/movie/${el.imdbID}`}>
                        <div className="buscador-movie-titulo">{el.Title}</div>
                        <img className="Movie" src={el.Poster}/>
                      </Link>

                      <div className="underImg">
                          
                          <button className="buscador-favorito-button" onClick={()=> {this.props.addMovieFavorite({ Title: el.Title ,id: el.imdbID, Poster:el.Poster});}}>
                                    <Fav className="favIconHome"/>
                                    <div classname="btnText">Add to favorites</div>
                          </button>
                      </div>                 
                </div>
              ))

              
              }
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
    getMovies: (title) => dispatch(getMovies(title)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);