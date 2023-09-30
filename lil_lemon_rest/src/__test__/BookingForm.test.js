import React from 'react';
import { render, screen } from '@testing-library/react';
import Reservations from '../components/Reservations';

test('Renders the Reservations static text', () => {
  render(<Reservations />);


  expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();

  expect(screen.getByText(/Reserve/i)).toBeInTheDocument();
});



