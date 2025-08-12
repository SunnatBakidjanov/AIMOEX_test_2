import classNames from 'classnames';

export const MainContainer = ({ children, className }) => {
    return <div className={classNames('mx-auto max-w-[1440px] px-[0.75rem]', className)}>{children}</div>;
};
