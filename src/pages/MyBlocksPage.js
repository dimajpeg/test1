import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LanguageSelector from '../components/LanguageSelector';

const MyBlocksPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col justify-between bg-gray-100">
            {/* Основной контент */}
            <main className="flex flex-col items-center justify-center flex-grow">
                <h1 className="text-4xl font-bold text-gray-800">{t('your_blocks')}</h1>
            </main>

            {/* Черная полоска между контентом и футером */}
            <div className="w-full h-0.5 bg-gray-600"></div>

            {/* Footer */}
            <footer className="w-full p-10 bg-gray-200 text-gray-700">
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
                            <button
                                onClick={() => navigate("/about-us")}
                                className="text-gray-800 hover:text-gray-900 text-lg"
                            >
                                {t('learn_more')}
                            </button>
                        </div>

                        {/* Выбор языка */}
                        <div className="footer-category flex flex-col items-start mt-6 sm:mt-0">
                            <h4 className="text-2xl font-semibold text-gray-800 mb-4">{t('language_choice')}</h4>
                            <LanguageSelector /> {/* Компонент для выбора языка */}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MyBlocksPage;
