import { render } from '@testing-library/react';
import Footer from "./Footer";

test("footer exists", () => {
  const { getByTestId } = render(
    <Footer />
  );
  expect(getByTestId("footerContainer")).toBeTruthy();
});

test("logoFooter exists", () => {
    const { getByTestId } = render(
      <Footer />
    );
    expect(getByTestId("logoFooter")).toBeTruthy();
});

test("appStoreLogo exists", () => {
    const { getByTestId } = render(
      <Footer />
    );
    expect(getByTestId("appStoreLogo")).toBeTruthy();
});

test("googleStoreLogo exists", () => {
    const { getByTestId } = render(
      <Footer />
    );
    expect(getByTestId("googleStoreLogo")).toBeTruthy();
});

test("copyright exists", () => {
    const { getByTestId } = render(
      <Footer />
    );
    expect(getByTestId("copyright")).toBeTruthy();
});