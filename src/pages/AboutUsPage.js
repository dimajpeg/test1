import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
            {/* Header */}
            <header
                className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 shadow-lg">
                <img
                    src={`${process.env.PUBLIC_URL}/photo/logo0.png`}
                    alt="Лого"
                    className="h-16 w-auto"
                />

            </header>

            {/* Основной контент */}
            <main className="flex flex-col items-center text-center p-10 space-y-6">
                <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
                    {t('about_us')}
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
                    {t('about_us_description')}
                </p>
                <div className="mt-4">
                    <Link
                        to="/"
                        className="text-gray-800 hover:text-gray-900 text-lg font-semibold"
                    >
                        {t('back_to_home')}
                    </Link>
                </div>
            </main>

            {/* Черная полоска между контентом и футером */}
            <div className="w-full h-0.5 bg-gray-600 mt-8"></div>

            {/* Footer */}
            <footer className="w-full p-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-700">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                        {/* Информация о разработчике */}
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

                        {/* О нас */}
                        <div className="footer-category flex flex-col items-start">
                            <h4 className="text-2xl font-semibold text-gray-800 mb-4">{t('about_us')}</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        to="/about-us"
                                        className="text-gray-800 hover:text-gray-900 text-lg"
                                    >
                                        {t('learn_more')}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Выбор языка */}
                        <div className="footer-category flex flex-col items-start mt-6 sm:mt-0">
                            <h4 className="text-2xl font-semibold text-gray-800 mb-4">{t('language_choice')}</h4>
                            <LanguageSelector />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AboutUsPage;
