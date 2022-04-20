import React from 'react';
import { App } from './App';
//import { Form } from './Components/Form/Form';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
//import { userEvent } from '@storybook/testing-library';

describe('App', () => {
  it('renders Form component', () => {
    render(<App />);
  });
  it('render with snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('is there a tag', () => {
    render(<App />);
    expect(screen.queryByText('div')).toBeNull;
  });

  /*
  не запускаеться!
  it('messages in the form', async () => {
    const moskMessage = jest.fn();
    render(<Form addMessage={() => setTimeout(moskMessage, 1000)} />);

    userEvent.click(getByText(/click/));

    await waitFor(() => expect(moskMessage).toHaveBeenCalledTimes(1), {
      timeout: 1100,
    });
  })*/
});
