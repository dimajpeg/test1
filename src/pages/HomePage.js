import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX, FiHome, FiPlusSquare, FiUser } from "react-icons/fi";
import LanguageSelector from "../components/LanguageSelector";  // Импорт компонента для выбора языка

const HomePage = () => {
    const { t } = useTranslation();  // Получение функции перевода
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [blocks, setBlocks] = useState([]);

    const addBlock = () => {
        setBlocks([...blocks, `Блок ${blocks.length + 1}`]);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Верхняя панель */}
            <header className="w-full flex items-center justify-between p-6 bg-gray-800 shadow-lg text-white relative">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

                <img src={`${process.env.PUBLIC_URL}/photo/logo0.png`} alt="Лого" className="h-12 w-auto" />

                <input
                    type="text"
                    placeholder={t('search')}
                    className="w-2/3 p-2 rounded-lg border-none outline-none text-black"

                />

                <button onClick={addBlock} className="text-white text-3xl ml-4">
                    <FiPlusSquare />
                </button>

                <button className="text-white text-3xl ml-4">
                    <FiUser />
                </button>
            </header>

            {/* Боковое меню */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 shadow-lg p-6`}
            >
                <button onClick={() => setMenuOpen(false)} className="text-white text-3xl mb-4">
                    <FiX/>
                </button>

                <ul className="space-y-6">
                    <li>
                        <button
                            onClick={() => navigate("/home")}
                            className="flex items-center space-x-3 text-lg font-medium text-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-100"
                        >
                            <FiHome
                                className="text-3xl text-gray-400 transition-colors duration-300 hover:text-gray-100"/>
                            <span>{t('home')}</span> {/* Переводится по текущему языку */}
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={() => navigate("/my-blocks")}
                            className="flex items-center space-x-3 text-lg font-medium text-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-100"
                        >
                            <FiPlusSquare
                                className="text-3xl text-gray-400 transition-colors duration-300 hover:text-gray-100"/>
                            <span>{t('your_blocks')}</span> {/* Переводится по текущему языку */}
                        </button>
                    </li>
                </ul>
            </div>

            {/* Добавленные блоки */}
            <main className="p-6 flex-grow">
                {blocks.map((block, index) => (
                    <div key={index} className="p-4 bg-white shadow-md rounded-lg mb-4">{block}</div>
                ))}
            </main>

            {/* Footer */}
            <footer className="w-full p-10 bg-gray-200 text-gray-700">
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
                            <LanguageSelector /> {/* Компонент для выбора языка */}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
