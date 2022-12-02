import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import MovieCard from "./MovieCard";

const movie = {
    description: "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
    images: {
        posterArt: {
            height: 736,
            url: "https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/assets/american_history_x.jpg",
            width: 497
        }
    },
    releaseYear: 1998,
    title: "American History X"
}

test("Movie Title exists", () => {
    render(<MovieCard movie={movie}   />);
    const text = screen.getByTestId("movieTitle");
    expect(text).toBeInTheDocument();
})

test("Movie Title text exists", () => {
    render(<MovieCard movie={movie}   />) 
    const text = screen.getByTestId("movieTitle"); 
    expect(text).toHaveTextContent("American History X"); 
})

test("Movie Description exists", async () => {
    render(<MovieCard movie={movie}   />);
    fireEvent.mouseOver(screen.getByTestId('movieTitle'));
    await waitFor(() => screen.getByTestId('hoverDescription'))
    const description = screen.getByTestId("hoverDescription"); 
    expect(description).toBeVisible();
})

