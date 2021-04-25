import { render, screen } from '@testing-library/react';
import Pet from './Pet';

describe('Checking content', () => {
  
    test('should render heading', () => {
    render(<Pet />);
    const linkElement = screen.getByText(/Pet Store/i);
    expect(linkElement).toBeInTheDocument();
    });
});