import { render, screen } from '@testing-library/react';
import Movies from "./Movies";

const moviesProps = {
    movies: [],
}

test("Movies grid exists", () => {
    render(<Movies {...moviesProps}  />);
    const moviesGrid = screen.getByTestId("moviesGrid");
    expect(moviesGrid).toBeInTheDocument();
})