import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
});

test("adds todo", () => {
  render(<TodoList />);

  fireEvent.change(screen.getByPlaceholderText(/add todo/i), {
    target: { value: "Test Task" },
  });

  fireEvent.click(screen.getByText(/add/i));

  expect(screen.getByText("Test Task")).toBeInTheDocument();
});

test("toggle todo", () => {
  render(<TodoList />);
  const todo = screen.getByText(/Learn React/i);
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("delete todo", () => {
  render(<TodoList />);
  fireEvent.click(screen.getAllByText(/delete/i)[0]);
  expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
});
