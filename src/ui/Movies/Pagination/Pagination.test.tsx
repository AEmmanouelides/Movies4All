import { render, screen } from '@testing-library/react';
import Pagination from "./Pagination";

const paginationProps1 = {
    itemsPerPage: 10,
    totalItems: 30,
    paginate: () => {},
    currentPage: 1
}

const paginationProps2 = {
    itemsPerPage: 1,
    totalItems: 1,
    paginate: () => {},
    currentPage: 1
}

test("Pagination exists", () => {
    render(<Pagination {...paginationProps1 }  />);
    const pagination = screen.getByTestId("pagination");
    expect(pagination).toBeInTheDocument();
})

test("LeftArrow exists", () => {
    render(<Pagination {...paginationProps1 }  />);
    const leftArrow = screen.getByTestId("leftArrow");
    expect(leftArrow).toBeVisible();
})

test("LeftArrow is not visible", () => {
    const { queryByTestId } = render(
        <Pagination {...paginationProps2 }/>
      );
      expect(queryByTestId("leftArrow")).toBeNull();
})

