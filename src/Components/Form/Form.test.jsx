import React from 'react';
import Form from './Form';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Form', () => {
  it('renders Form component', () => {
    render(<Form />);
  });

  it('have to the input', () => {
    render(<Form />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('render to by placeholder', () => {
    render(<Form />);
    expect(screen.getByPlaceholderText('Введите текст')).toBeInTheDocument();
  });

  it('value is empty string', () => {
    render(<Form />);
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<Form />);
    expect(asFragment()).toMatchSnapshot();
  });
});
