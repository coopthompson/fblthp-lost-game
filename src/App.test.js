import { render, screen } from '@testing-library/react';
import App from './App';

test('render test div', () => {
  render(<App />);
  const linkElement = screen.getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});
