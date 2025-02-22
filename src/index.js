import React from "react";
import ReactDOM from "react-dom/client"; // Импортируем только из этого модуля
import Main from "./App";
import './index.css';
import './i18n'; // Подключаем i18n

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);
