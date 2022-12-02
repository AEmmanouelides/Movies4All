import { render, screen } from '@testing-library/react';
import Search from "./Search";

const searchProps1 = {
    value: "",
    handleSearch: () => {}
}

test("Search field exists", () => {
    render(<Search {...searchProps1}  />);
    const searchField = screen.getByTestId("searchField");
    expect(searchField).toBeInTheDocument();
})