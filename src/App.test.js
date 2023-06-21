import { fireEvent, render, screen } from "@testing-library/react"
import Navbar from "./Navbar";
import Landing from './Landing';

test('renders log out', () => {
  render(<Navbar />);
  // const linkElement = screen.getByText('Sign');
  expect(screen.getByText(/Log Out/i)).toBeInTheDocument();
});

test('renders Bank Statement', () => {
  render(<Navbar />);
  expect(screen.getByText(/Bank Statement/i)).toBeInTheDocument();
});

test('renders Transaction History', () => {
  render(<Navbar />);
  expect(screen.getByText(/Transaction History/i)).toBeInTheDocument();
});

test('renders Financing Options', () => {
  render(<Navbar />);
  expect(screen.getByText(/Financing Options/i)).toBeInTheDocument();
});


test('email input should be rendered', () => {
  render(<Landing/>);
  const emailInputEl = screen.getByPlaceholderText(/email/i);
  expect(emailInputEl).toBeInTheDocument()
})

test('password input should be rendered', () => {
  render(<Landing/>);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument()
})

test('button input should be rendered', () => {
  render(<Landing/>);
  const userInputEl = screen.getByRole("button");
  expect(userInputEl).toBeInTheDocument()
})

test('email input should be empty', () => {
  render(<Landing/>);
  const emailInputEl = screen.getByPlaceholderText(/email/i);
  expect(emailInputEl.value).toBe("")
})

test('password input should be empty', () => {
  render(<Landing/>);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl.value).toBe("")
})

test('email input should change', () => {
  render(<Landing/>);
  const emailInputEl = screen.getByPlaceholderText(/email/i);
  const testValue = "test";
  fireEvent.change(emailInputEl, {target:{value:testValue}});
  expect(emailInputEl.value).toBe(testValue);
})

test('password input should change', () => {
  render(<Landing/>);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = "test";
  fireEvent.change(passwordInputEl, {target:{value:testValue}});
  expect(passwordInputEl.value).toBe(testValue);
})

test('button input should not be disabled', () => {
  render(<Landing/>);
  const userInputEl = screen.getByRole("button");
  expect(userInputEl).not.toBeDisabled()
})