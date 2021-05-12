import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';



class Movie extends React.Component {
    componentDidMount(){
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId);
    }

    render() {
        return (
            <article className="container movie-card">
                
                <div className="infoCarta">
                    <figure className="img">
                        <img src={this.props.movieDetail.Poster} width={300} height={450}></img>
                    </figure>
                    <div className="dataContenedor"> 
                        <h1 className="title">{this.props.movieDetail.Title}</h1>
                        <h3>Year: {this.props.movieDetail.Year}</h3>
                        <h5>Runtime: {this.props.movieDetail.Runtime}</h5>
                        <div className="infoTitles">Plot</div>
                        <p className="plotText">{this.props.movieDetail.Plot}</p>
                        
                        <div className="detailRenglon">
                            <p className="detailTitle">Director: <span className="detailInfo">{this.props.movieDetail.Director}</span></p>
                        </div>
                        <div className="detailRenglon">
                            <p className="detailTitle">Genre: <span className="detailInfo">{this.props.movieDetail.Genre}</span></p>
                        </div>
                        <div className="detailRenglon">
                            <p className="detailTitle">Actors: <span className="detailInfo">{this.props.movieDetail.Actors}</span></p>
                        </div>
                        
                    </div>
                </div>
            </article>
        );
    }
}

function mapSateToProps(state){
    return {
        movieDetail: state.movieDetail,
    };
}
function mapDispatchToProps(dispatch){
    return{
        getMovieDetail: (movie) => dispatch(getMovieDetail(movie))
    };
}


export default connect(mapSateToProps,mapDispatchToProps)(Movie);