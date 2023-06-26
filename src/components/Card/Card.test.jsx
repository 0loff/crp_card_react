import {fireEvent, getByRole, render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Card from './Card';
import React from "react";
import {analyticsTrack} from "../../api/analytics";

const cardData = {
    "id": 1,
    "title": {
        "en": "Post 1",
        "id": "Pos 1"
    },
    "body": {
        "en": "post 1 text",
        "id": "pos 1 teks"
    },
    "link_title": "go to goole",
    "link": "https://google.com"
}

const onClick = jest.fn()

describe('Card component', () => {
    it('Card renders', function () {
        render(<Card
            key={cardData.id}
            id={cardData.id}
            title={cardData.title}
            linkTitle={cardData.link_title}
            href={cardData.link}
            text={cardData.text}
            onClick={onclick}
        />)

        expect(screen.getByRole('link')).toHaveAttribute('href', cardData.link)
        expect(screen.getByText(/go to goole/)).toBeInTheDocument()
    });

    it('Analytics tracking cliked', () => {
        render(<Card
            key={cardData.id}
            id={cardData.id}
            title={cardData.title}
            linkTitle={cardData.link_title}
            href={cardData.link}
            text={cardData.text}
            onClick={onClick}
        />)

        const link = screen.getByRole('link');

        userEvent.click(link);

        expect(link).toHaveAttribute('href', cardData.link)
        expect(onClick).toHaveBeenCalled();
        expect(onClick).toBeCalledTimes(1)
    })
})