import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import IconButton from './IconButton';
import { ReactComponent as Arrow } from '../../assets/icon-arrow.svg';

expect.extend(toHaveNoViolations);

describe('IconButton Component', () => {
  it('Should render without errors', () => {
    render(<IconButton icon={Arrow} label={'submit'} />);
    expect(screen.getByLabelText('submit')).toBeInTheDocument();
  });
  it('Should render without axe A11y errors', async () => {
    render(<IconButton icon={Arrow} label={'search'} />);
    expect(await axe(screen.getByLabelText('search'))).toHaveNoViolations();
  });
});
