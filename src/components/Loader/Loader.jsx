import cls from './Loader.module.scss'

const Loader = props => {

    const {
        attrs = ''
    } = props;

    return (
        <div className={cls.loader_wrapper}>
            <div {...attrs} className={cls.loader}>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
export default Loader;
