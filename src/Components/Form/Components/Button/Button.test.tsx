import React from 'react';
import { Button } from './Button';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@storybook/testing-library';

describe('Button', () => {
  it('render component', () => {
    render(<Button disabled={false} />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<Button disabled={false} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with text', () => {
    render(<Button disabled={false} />);
    expect(screen.getByText(/click/)).toBeInTheDocument();
  });

  it('render multiply components', () => {
    render(
      <>
        <Button disabled={false} />
        <Button disabled={false} />
      </>
    );
    expect(screen.queryAllByRole('button').length).toBe(2);
  });

  it('button is disabled', () => {
    render(<Button disabled />);

    expect(screen.getByText('click')).toBeDisabled();
  });

  it('button async click', async () => {
    const mockHandler = jest.fn();
    render(<Button disabled={false} onButtonClick={() => setTimeout(mockHandler, 1000)} />);

    userEvent.click(screen.getByText(/click/));

    await waitFor(() => expect(mockHandler).toHaveBeenCalledTimes(1), {
      timeout: 1100,
    });
  });
});
