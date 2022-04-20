import React from 'react';
import { MessageList } from './MessageList';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('MessageList', () => {
  it('renders MessageList component', () => {
    render(<MessageList messages={[]} />);
  });
  it('render with snapshot', () => {
    const { asFragment } = render(<MessageList messages={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('correct output of messages', () => {
    const mess = {
      id: '1',
      author: 'pety',
      value: 'hello',
    };
    render(<MessageList messages={[mess]} />);
    expect(screen.getByText(/hello/i)).toBeTruthy();
  });
});
