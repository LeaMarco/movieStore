import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeMovieFavorite } from "../../actions";
import "./Favorites.css";
import {ReactComponent as Delete}  from '../../img/delete.svg';


export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2 className="favTitle">Pelí­culas Favoritas</h2>
        <ul className="favContainer">
          {console.log(this.props.moviesFavourites)}
          {this.props.moviesFavourites.map((el) => (
            <div className="buscador-movie" key={el.imdbID}> 
                  
            <Link className="link" to={`/movie/${el.imdbID}`}>
              <div className="buscador-movie-titulo">{el.Title}</div>
              <img className="Movie" src={el.Poster}/>
            </Link>

            <div className="underImg">
                
                <button className="buscador-favorito-button" onClick={()=> {this.props.removeMovieFavorite(el.id);}}>
                    <Delete className="favIconHome"/>
                    <div classname="btnText">Remove</div>
                </button>
            </div>                 
      </div>
            
          ))}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
    moviesFavourites: state.moviesFavourites,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: (id) => dispatch(removeMovieFavorite(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
