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
        <section
            className="
                bg-[var(--primary-transparent)] rounded-xl transition-colors duration-400
                flex flex-col items-center justify-center
                sm:flex-row sm:justify-start
                gap-5 sm:gap-4
                p-4
            "
        >
            {/* Avatar */}
            <div
                className="
                    text-[var(--same-white-color)] bg-[var(--accent-color)] rounded-full flex items-center transition-colors duration-400 justify-center font-bold
                    text-4xl sm:text-3xl
                    w-22 h-22
                    sm:w-20 sm:h-20
                "
            >
                {user.name.charAt(0)}
            </div>

            {/* Info */}
            <div
                className="
                    flex 
                    flex-col items-center
                    sm:items-start
                    gap-y-0.5 sm:gap-y-0
                "
            >
                <h2
                    className="
                        font-bold text-[var(--primary-color)] transition-colors duration-400
                        text-3xl sm:text-2xl
                        w-full sm:w-auto
                        text-center sm:text-left
                        pb-1.5 sm:pb-0
                        mb-3 sm:mb-0
                        border-b-2 sm:border-b-0 border-[var(--accent-color)]
                    "
                >
                    <Trans i18nKey="userDashboard:userInfoCard.user" values={{ userName: user.name }} components={[<span className="text-[var(--accent-color)] transition-colors duration-400" />]} />
                </h2>

                <p
                    className="
                        text-[var(--primary-color)] transition-colors duration-400
                        text-lg sm:text-base
                    "
                >
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

                <p className="text-base text-center text-[var(--primary-color)] transition-colors duration-400">
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
