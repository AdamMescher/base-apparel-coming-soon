import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import Subscribe from './Subscribe';

expect.extend(toHaveNoViolations);

describe('Subscribe Component', () => {
  it('Should render without errors', () => {
    render(<Subscribe />);
    expect(screen.getByPlaceholderText(/email address/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('Should render without axe a11y errors', async () => {
    render(<Subscribe />);
    expect(
      await axe(screen.getByRole('form', { 'aria-label': 'subscribe' }))
    ).toHaveNoViolations();
  });
  it('Should return an inline error message when the email input is empty', async () => {
    const user = userEvent.setup();
    render(<Subscribe />);
    await user.click(screen.getByRole('button'));
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
  });
  it('Should return an inline error message when the email input is invalid', async () => {
    const user = userEvent.setup();
    render(<Subscribe />);
    await user.type(
      screen.getByPlaceholderText(/email address/i),
      'invalid#mail.com'
    );
    await user.click(screen.getByRole('button'));
    expect(
      screen.getByText(/please provide a valid email/i)
    ).toBeInTheDocument();
  });
  it('Should return an inline error message when the email input is less than the defined minLength for characters', async () => {
    const user = userEvent.setup();
    render(<Subscribe />);
    await user.type(screen.getByPlaceholderText(/email address/i), 'four');
    await user.click(screen.getByRole('button'));
    expect(
      screen.getByText(/email must have a minimum length of 5 characters/i)
    ).toBeInTheDocument();
  });
  it('Should return an inline error message when the email input is greater than the defined minLength for characters', async () => {
    const longString =
      '0PNuCTWTrTfzVUQ79kNeFYN9cpCezKn66Fk6CJ6cwFsV1mntDcqNyp21hCKDs3NHWRR6rhsH4EQonxtaY4md3yFQJC261pBOqm70D';
    const user = userEvent.setup();
    render(<Subscribe />);
    await user.type(screen.getByPlaceholderText(/email address/i), longString);
    await user.click(screen.getByRole('button'));
    expect(
      screen.getByText(/email has a maximum length of 100 characters/i)
    ).toBeInTheDocument();
  });
});
