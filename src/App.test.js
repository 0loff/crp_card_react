import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";

describe('App component', () => {
  it('render App component with fetched data',  async () => {
    render(<App />);

    expect(await screen.findByText(/Post 1/i)).toBeInTheDocument();
    expect(await screen.findByText(/Post 2/i)).toBeInTheDocument();
    expect(await screen.findByText(/Post 3/i)).toBeInTheDocument();

    expect(await screen.findByText('go to goole')).toHaveProperty('href')
    expect(await screen.findByText('go to yandex')).toHaveProperty('href')
    expect(await screen.findByText('go to bing')).toHaveProperty('href')
  });

  it('render App component without waiting fetched data', () => {
    const { asFragment } = render(<App />);

    expect(asFragment(<App />)).toMatchSnapshot();
  })
})




