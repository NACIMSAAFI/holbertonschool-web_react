import React from "react";
import { render, screen } from "@testing-library/react";
import CourseList from "./CourseList";

describe("CourseList", () => {
  test("renders 5 rows when given an array of courses", () => {
    const courses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    render(<CourseList courses={courses} />);
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(5); // 2 headers + 3 courses
  });

  test("renders 1 row when courses prop is empty", () => {
    render(<CourseList courses={[]} />);
    expect(screen.getByText("No course available yet")).toBeInTheDocument();
  });
});
