import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // required for toBeInTheDocument matcher
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm Habakuk`", () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    name: /hi, i'm habakuk/i,
    level: 1,
  });
  expect(heading).toBeInTheDocument();
});

test("displays an image of yourself with alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/photo of habakuk/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", expect.stringContaining("https://"));
});

test("displays a second-level heading with text `About Me`", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(aboutHeading).toBeInTheDocument();
});

test("displays a paragraph for biography", () => {
  render(<App />);
  const bio = screen.getByText(/i am/i);
  expect(bio).toBeInTheDocument();
});

test("displays links to GitHub and LinkedIn", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("github.com")
  );
  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("linkedin.com")
  );
});
