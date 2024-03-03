import { render, screen } from '@testing-library/react';
// import App from './App';
import BookingForm from './Components/BookingForm';

  test('Check if this Text is avaliable in the screen', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText('Choose date');

    expect(headingElement).toBeInTheDocument();
  })