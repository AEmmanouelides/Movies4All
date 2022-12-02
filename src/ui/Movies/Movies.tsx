import { Box, Grid, Typography } from "@mui/material";
import MovieCard from "./MovieCard/MovieCard";
import './Movies.scss';

const Movies = ( {movies} ) => {
    return (
        <div className="container gridCards" data-testid="moviesGrid">
        <Typography variant="h5" className="moviesTitle">Popular Movies</Typography>
        <Box>
            <Grid container rowSpacing={1} spacing={3} mt={3} className="gridCards">
            {movies?.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
            ))}
            </Grid>
        </Box>
        </div>
    );
  };
  export default Movies;

  