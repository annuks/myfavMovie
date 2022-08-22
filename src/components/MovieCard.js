import React from "react";
import { addFavourite, removeFromFavourite } from "../actions";

class MovieCard extends React.Component {
  handleFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavourite(movie));
  };

  handleUnFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFromFavourite(movie));
  };
  render() {
    const { movie, isFavourites } = this.props;
    // console.log("MONNN",isFavourites)
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster}></img>
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer"></div>
          <div className="rating">{movie.imdbRating}</div>
          {isFavourites ? (
            <button
              className="unfavourite-btn"
              onClick={this.handleUnFavouriteClick}
            >
              Unfavourite
            </button>
          ) : (
            <button
              className="favourite-btn"
              onClick={this.handleFavouriteClick}
            >
              Favourite
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default MovieCard;
