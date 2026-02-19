import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders todo items", () => {
    const todos = [
      { id: 1, text: "Learn React" },
      { id: 2, text: "Build Project" },
    ];

    render(<TodoList todos={todos} />);

    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Project")).toBeInTheDocument();
  });

  test("renders empty list message", () => {
    render(<TodoList todos={[]} />);
    expect(screen.getByText(/no todos/i)).toBeInTheDocument();
  });
});
