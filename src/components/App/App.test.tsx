import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import App from './App';

expect.extend(toHaveNoViolations);

describe('App Component', () => {
  it('Should render without errors', () => {
    render(<App />);
    expect(screen.getByTitle('base apparel logo')).toBeInTheDocument();
    expect(screen.getByText(/soon/i)).toBeInTheDocument();
    expect(screen.getByText(/hello fellow shoppers/i)).toBeInTheDocument();
  });
  it('Should render without axe a11y errors', async () => {
    render(<App />);
    expect(await axe(screen.getByTestId('app'))).toHaveNoViolations();
  });
});
