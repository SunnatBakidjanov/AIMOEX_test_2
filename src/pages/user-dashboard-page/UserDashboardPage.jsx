import { ChangeThemeBtn } from '../../UI/buttons/change-theme-btn/ChangeThemeBtn';
import { MainContainer } from '../../UI/containers/main-container/MainContainer';
import { user, stats, recentResults } from '../../mocks/mocks';
import ProfileNav from './UI/profile-nav/ProfileNav';
import { RoundToolbarUserDashboard } from './UI/round-toolbar/RoundToolbarUserDashboard';

export const UserDashboardPage = () => {
    return (
        <MainContainer>
            <main>
                <div className="max-w-4xl mx-auto p-4 space-y-6">
                    {/* Заголовок */}
                    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
                        {/* Аватар */}
                        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-600">{user.name.charAt(0)}</div>

                        {/* Информация */}
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">Привет, {user.name}!</h1>
                            <p className="text-sm text-gray-500">
                                Статус: <span className="text-green-600">Активный</span>
                            </p>
                            <p className="text-sm text-gray-400">Последний вход: 2 часа назад</p>
                        </div>
                    </div>

                    <ProfileNav />

                    {/* Прогресс */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white rounded-xl shadow p-4 text-center">
                            <p className="text-gray-500 text-sm">Пройдено тестов</p>
                            <p className="text-3xl font-semibold">{stats.testsTaken}</p>
                        </div>
                        <div className="bg-white rounded-xl shadow p-4 text-center">
                            <p className="text-gray-500 text-sm">Средний балл</p>
                            <p className="text-3xl font-semibold">{stats.averageScore}%</p>
                        </div>
                    </div>

                    {/* Последние результаты */}
                    <div className="bg-white rounded-xl shadow p-4">
                        <h2 className="text-lg font-bold mb-4">Последние результаты</h2>
                        <div className="space-y-3">
                            {recentResults.map(result => (
                                <div key={result.id} className="flex justify-between items-center border-b pb-2 last:border-none">
                                    <div>
                                        <p className="font-medium">{result.testName}</p>
                                        <p className="text-xs text-gray-500">{new Date(result.date).toLocaleDateString('ru-RU')}</p>
                                    </div>
                                    <div className={`font-bold ${result.passed ? 'text-green-600' : 'text-red-600'}`}>{result.score}%</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <RoundToolbarUserDashboard />
        </MainContainer>
    );
};
