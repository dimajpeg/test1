import React from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageSelector from '../components/LanguageSelector';
import { useTranslation } from 'react-i18next';

const LandingPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
            <header
                className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 shadow-lg">

                <img
                    src={`${process.env.PUBLIC_URL}/photo/logo0.png`}
                    alt="Лого"
                    className="h-16 w-auto"
                />
                <button onClick={() => navigate("/auth?type=login")}
                        className="text-gray-700 hover:text-gray-900 text-lg font-semibold">
                    {t('login')}
                </button>
            </header>


            <main className="flex flex-col items-center text-center p-10 space-y-8">
                <h1 className="text-5xl font-extrabold text-gray-800 mb-4">{t('welcome')}</h1>
                <p className="text-xl text-gray-700 mb-8 max-w-xl">{t('description')}</p>
                <button
                    onClick={() => navigate("/auth?type=register")}
                    className="bg-gray-800 text-white px-12 py-5 rounded-full text-2xl shadow-lg hover:bg-gray-900 transition-all duration-300"
                >
                    {t('register')}
                </button>
                <button
                    onClick={() => navigate("/auth?type=login")}
                    className="bg-transparent text-gray-800 border-2 border-gray-800 px-12 py-5 rounded-full text-xl shadow-lg hover:bg-gray-100 transition-all duration-300"
                >
                    {t('login')}
                </button>
            </main>

            <div className="w-full h-0.5 bg-gray-600 mt-8"></div>

            <footer className="w-full p-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-700">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                        <div className="footer-category flex flex-col items-start">
                            <h4 className="text-2xl font-semibold text-gray-800 mb-4">{t('developer_info')}</h4>
                            <div className="flex items-center space-x-3">
                                <a
                                    href="https://t.me/dimalsd1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-800 hover:text-gray-900 flex items-center space-x-2"
                                >
                                    <img
                                        src={`${process.env.PUBLIC_URL}/photo/tg.icon.png`}
                                        alt="Telegram"
                                        className="w-8 h-8"
                                    />
                                    <span className="text-lg">Telegram: @dimalsd1</span>
                                </a>
                            </div>
                        </div>
                        <div className="footer-category flex flex-col items-start">
                            <h4 className="text-2xl font-semibold text-gray-800 mb-4">{t('about_us')}</h4>
                            <button onClick={() => navigate("/about-us")}
                                    className="text-gray-800 hover:text-gray-900 text-lg">
                                {t('learn_more')}
                            </button>
                        </div>
                        <div className="footer-category flex flex-col items-start mt-6 sm:mt-0">
                            <h4 className="text-2xl font-semibold text-gray-800 mb-4">{t('language_choice')}</h4>
                            <LanguageSelector/>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
