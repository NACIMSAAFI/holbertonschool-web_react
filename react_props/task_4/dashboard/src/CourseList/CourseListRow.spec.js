import React from "react";
import { render, screen } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

describe("CourseListRow", () => {
  test("renders one header cell with colspan=2 if textSecondCell is null", () => {
    render(<CourseListRow isHeader={true} textFirstCell="Header" />);
    const thElement = screen.getByText("Header");
    expect(thElement).toBeInTheDocument();
    expect(thElement).toHaveAttribute("colspan", "2");
  });

  test("renders two header cells if textSecondCell is provided", () => {
    render(<CourseListRow isHeader={true} textFirstCell="Name" textSecondCell="Credit" />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Credit")).toBeInTheDocument();
  });

  test("renders two td elements when isHeader is false", () => {
    render(<CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />);
    expect(screen.getByText("ES6")).toBeInTheDocument();
    expect(screen.getByText("60")).toBeInTheDocument();
  });
});
