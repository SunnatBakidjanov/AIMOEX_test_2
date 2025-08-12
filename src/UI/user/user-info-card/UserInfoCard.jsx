import classNames from 'classnames/bind';
import { Trans, useTranslation } from 'react-i18next';

import { formatDistanceToNow } from 'date-fns';
import { ru, enUS } from 'date-fns/locale';
import i18n from '../../../i18n/i18n';

export const UserInfoCard = ({ user }) => {
    const { t } = useTranslation('userDashboard');

    const userStatusText = user.status === 'active' ? t('userInfoCard.userStatus.active') : user.status === 'blocked' ? t('userInfoCard.userStatus.blocked') : t('userInfoCard.userStatus.inactive');
    const userStatusColor = user.status === 'active' ? 'var(--success-color)' : user.status === 'blocked' ? 'var(--error-color)' : 'var(--warning-color)';
    const currentDateLang = i18n.language === 'ru' ? ru : enUS;

    return (
        <section className="flex items-center gap-4 p-4 bg-[var(--primary-transparent)] rounded-xl shadow-md transition-colors duration-400">
            {/* Avatar */}
            <div className={classNames('w-20 h-20 text-[var(--same-white-color)] bg-[var(--accent-color)] rounded-full flex items-center transition-colors duration-400 justify-center text-[1.75rem] font-bold')}>{user.name.charAt(0)}</div>

            {/* Info */}
            <div>
                <h2 className="text-[1.5rem] font-bold text-[var(--primary-color)] transition-colors duration-400">
                    <Trans i18nKey="userDashboard:userInfoCard.user" values={{ userName: user.name }} components={[<span className="text-[var(--accent-color)] transition-colors duration-400" />]} />
                </h2>

                <p className="text-[0.95rem] text-[var(--primary-color)] transition-colors duration-400">
                    <Trans
                        i18nKey="userDashboard:userInfoCard.status"
                        values={{ userStatus: userStatusText }}
                        components={[
                            <span style={{ color: userStatusColor }} className="font-bold tracking-[0.2px] ml-1">
                                {userStatusText}
                            </span>,
                        ]}
                    />
                </p>

                <p className="text-[0.95rem] text-[var(--primary-color)] transition-colors duration-400">
                    <Trans
                        i18nKey="userDashboard:userInfoCard.lastLogin"
                        values={{
                            userLastLoginDate: formatDistanceToNow(user.lastLogin, {
                                addSuffix: true,
                                includeSeconds: true,
                                locale: currentDateLang,
                            }),
                        }}
                        components={[<span className="font-bold ml-1 text-[var(--accent-color)] transition-colors duration-400" />]}
                    />
                </p>
            </div>
        </section>
    );
};
