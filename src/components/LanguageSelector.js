import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { i18n } = useTranslation();  // Хук для работы с i18next
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);  // Инициализируем выбранный язык

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language);  // Меняем язык через i18next
        setSelectedLanguage(language);  // Обновляем выбранный язык
        setIsOpen(false);  // Закрываем выпадающий список после выбора языка
    };

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="bg-gray-800 text-white border-2 border-gray-800 rounded-lg py-1 px-2 text-xs font-medium hover:bg-gray-900 hover:border-gray-900 flex items-center"
            >
                {selectedLanguage === 'ru' ? 'Русский' : selectedLanguage === 'uk' ? 'Українська' : 'English'}
                <span className="ml-1 text-base">&#9660;</span>
            </button>

            {isOpen && (
                <div className="absolute bottom-full mb-2 left-0 bg-gray-800 shadow-lg rounded-lg w-32 z-10">
                    <ul className="list-none m-0 p-1">
                        <li
                            onClick={() => handleLanguageChange('ru')}
                            className="cursor-pointer text-white hover:bg-gray-700 p-2 rounded-lg"
                        >
                            Русский
                        </li>
                        <li
                            onClick={() => handleLanguageChange('uk')}
                            className="cursor-pointer text-white hover:bg-gray-700 p-2 rounded-lg"
                        >
                            Українська
                        </li>
                        <li
                            onClick={() => handleLanguageChange('en')}
                            className="cursor-pointer text-white hover:bg-gray-700 p-2 rounded-lg"
                        >
                            English
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
