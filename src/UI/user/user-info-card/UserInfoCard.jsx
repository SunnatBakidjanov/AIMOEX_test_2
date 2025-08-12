import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

export const UserInfoCard = ({ user }) => {
    const randomColor = useSelector(state => state.theme.currentColor);

    return (
        <section className="flex items-center gap-4 p-4 bg-[var(--primary-transparent)] rounded-xl shadow-md transition-colors duration-400">
            <div className={classNames('w-20 h-20 text-[var(--same-white-color)] rounded-full flex items-center justify-center text-[1.75rem] font-bold')} style={{ backgroundColor: randomColor }}>
                {user.name.charAt(0)}
            </div>

            <div>
                <h2 className="text-2xl font-bold text-gray-800">Привет, {user.name}!</h2>
                <p className="text-sm text-gray-500">
                    Статус: <span className="text-green-600">Активный</span>
                </p>
                <p className="text-sm text-gray-400">Последний вход: 2 часа назад</p>
            </div>
        </section>
    );
};
