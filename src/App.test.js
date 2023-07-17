import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";
import { CARDS } from "./constants";
import {fetchCards} from "./api/cards";

global.fetch = jest.fn();

describe('App component', () => {
  it('render App component with fetched data',  async () => {

    fetch.mockResolvedValue({
      json: () => Promise.resolve(CARDS)
    })

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




