import cls from './Loader.module.scss'

const Loader = () => (
    <div className={cls.loader_wrapper}>
        <div className={cls.lds_ripple}>
            <div></div>
            <div></div>
        </div>
    </div>
)

export default Loader;