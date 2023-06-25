import React, {useEffect, useState} from 'react';
import {fetchCards} from "@api/cards";
import {analyticsTrack} from "@api/analytics";
import Card from "@components/Card/Card";
import Loader from "@components/Loader/Loader";
import cls from "./Page.module.scss";

const renderCards = (items) => {
    return items.map((item, index) => {
        return (
            <Card
                key={index}
                id={item.id}
                title={item.title}
                linkTitle={item.link_title}
                href={item.link}
                text={item.text}
                onClick={() => analyticsTrack(item.link)}
            />
        )
    })
}

export default function Page() {
    const [cards, setCards] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetchCards()
            .then(res => {
                setCards(Object.values(res));
                setLoaded(true);
            })
            .catch(e => {
                console.log('%c%s', 'color: #fced62', `Received object does not match the type: ${e}`)
                setLoaded(false)
            })
    }, [loaded]);

    return (
        <div className={cls.card_wrapper}>
            { loaded ? renderCards(cards) : <Loader /> }
        </div>
    );
}