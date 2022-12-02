import { Grid } from "@mui/material";
import { useState } from "react";
import './MovieCard.scss';

const MovieCard = ({ movie }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <>
    <Grid item xs ={12} sm={2.4} >
      <div
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={movie.images.posterArt.url}
          className="card-img-top"
        />
        <div className="hoverwrap" data-testid="hoverWrap">
          {isHover ? (
            <div data-testid="hoverDescription" className="hovercap">
            <div>{movie.title}</div>
              <p className="description" data-testid="description">{movie?.description}</p>
            </div>
          ) : (
            <div className="cap">
            <div data-testid="movieTitle">{movie?.title}</div>
            </div>          
          )}
        </div>
      </div>
      </Grid>
    </>
  );
};

export default MovieCard;