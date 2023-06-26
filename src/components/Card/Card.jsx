import cls from './Card.module.scss'

const Card = (props) => {
    const {
        id,
        title,
        linkTitle,
        href,
        text = '',
        onClick
    } = props;

    const linkClasses = [
        cls.default_link,
        cls.card__link
    ]

    if (id === 1) {
        linkClasses.push(cls.card__link_red)
    }

    return (
        <div className={cls.card}>
            <div className={cls.card__title}>{title.en}</div>
            <div className={cls.card__text}>
                {text ? text.slice(0, 50) : ''}
            </div>
            <a
                className={linkClasses.join(' ')}
                target={id === 1 ? '_blank' : ''}
                rel={id === 1 ? 'noreferrer' : ''}
                href={href}
                onClick={onClick}
            >
                {linkTitle}
            </a>
        </div>
    );
}

export default Card;