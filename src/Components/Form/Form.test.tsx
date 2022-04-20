import React from 'react';
import Form from './Form';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';



describe('Form', () => {
  it('renders Form component', () => {
    render(<Form addMessage={Object} />);
  });

  it('have to the input', () => {
    render(<Form addMessage={Object} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('render to by placeholder', () => {
    render(<Form addMessage={Object} />);
    expect(screen.getByPlaceholderText('Введите текст')).toBeInTheDocument();
  });

  it('value is empty string', () => {
    render(<Form addMessage={Object} />);
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<Form addMessage={Object} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
