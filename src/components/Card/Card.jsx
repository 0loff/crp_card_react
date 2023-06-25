import cls from './Card.module.scss'

export default function Card(props) {

    const linkClasses = [
        cls.default_link,
        cls.card__link
    ]

    if (props.id === 1) {
        linkClasses.push(cls.card__link_red)
    }

    return (
        <div className={cls.card}>
            <div className={cls.card__title}>{props.title.en}</div>
            <div className={cls.card__text}>{props.text}</div>
            <a
                className={linkClasses.join(' ')}
                target={props.id === 1 ? '_blank' : ''}
                rel={props.rel}
                href={props.href}
                onClick={props.onClick}
            >
                {props.linkTitle}
            </a>
        </div>
    );
}
