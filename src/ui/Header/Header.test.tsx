import { render, screen } from '@testing-library/react';
import Header from "./Header";

test("logo exists", () => {
  const { getByTestId } = render(
    <Header />
  );
  expect(getByTestId(/logo/i)).toBeTruthy();
});