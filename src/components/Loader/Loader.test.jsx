import React from 'react';
import Loader from './Loader';
import {render, screen} from "@testing-library/react";

describe('Loader component', () => {
    it('render Loader component', () => {
        render(<Loader attrs={{'data-testid': 'loader'}} />)

        expect(screen.getByTestId('loader')).toBeInTheDocument();
    })

    it('The Loader component is equal the snapshot', function () {
        const { asFragment } = render(<Loader />);

        expect(asFragment(<Loader />)).toMatchSnapshot();
    });
})