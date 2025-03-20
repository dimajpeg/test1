import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import LanguageSelector from '../components/LanguageSelector';
import { initializeApp } from 'firebase/app';
import { useTranslation } from 'react-i18next'; // Подключаем useTranslation

// Firebase конфигурация
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();  // Подключаем хук для переводов

    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const type = params.get('type');
        setIsLogin(type !== 'register');
    }, [location]);

    const handleRegister = async () => {
        // Проверка на пустые поля
        if (!email || !password || !confirmPassword || !username) {
            setError(t('auth.errors.emptyFields'));
            return;
        }

        // Проверка совпадения паролей
        if (password !== confirmPassword) {
            setError(t('auth.errors.passwordMismatch'));
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User registered:', userCredential.user);
            navigate('/home');
        } catch (error) {
            // Проверяем код ошибки и выдаём соответствующее сообщение
            switch (error.code) {
                case 'auth/email-already-in-use':
                    setError(t('auth.errors.emailInUse'));
                    break;
                case 'auth/weak-password':
                    setError(t('auth.errors.weakPassword'));
                    break;
                case 'auth/invalid-email':
                    setError(t('auth.errors.invalidEmail'));
                    break;
                default:
                    setError(error.message);
            }
        }
    };


    const handleLogin = async () => {
        if (email === "dmat771@gmail.com" && password === "12345678") {
            console.log("Вход с тестовыми данными");
            navigate('/home'); // Переход на главную
            return;
        }

        setError("Неверный логин или пароль");
    };



    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log('Google sign in:', result.user);
            navigate('/home');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-between bg-gray-100">
            <div className="flex-grow flex flex-col items-center justify-center p-6">
                <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-md space-y-6">
                    <div className="flex justify-between items-center mb-4">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`text-xl font-bold ${isLogin ? 'text-gray-800' : 'text-gray-500'}`}
                        >
                            {t('auth.login')} {/* Вход */}
                        </button>

                        <button
                            onClick={() => setIsLogin(false)}
                            className={`text-xl font-bold ${!isLogin ? 'text-gray-800' : 'text-gray-500'}`}
                        >
                            {t('auth.register')} {/* Регистрация */}
                        </button>
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    {!isLogin ? (
                        <div className="space-y-4">
                            <button
                                onClick={handleGoogleSignIn}
                                className="flex items-center justify-center w-full p-3 bg-red-500 text-white rounded-md"
                            >
                                <FaGoogle className="mr-2"/> {t('auth.loginWithGoogle')}
                            </button>

                            <div className="flex items-center justify-center">
                                <hr className="flex-grow border-t border-gray-300"/>
                                <span className="px-3 text-gray-500">{t('auth.orWithEmail')}</span>
                                <hr className="flex-grow border-t border-gray-300"/>
                            </div>


                            <input
                                type="email"
                                placeholder={t('auth.email')}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border rounded-md"
                            />

                            <input
                                type="text"
                                placeholder={t('auth.username')}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full p-3 border rounded-md"
                            />

                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder={t('auth.password')}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full p-3 border rounded-md"
                                />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 cursor-pointer"
                                >
                                    {showPassword ? <FaEyeSlash/> : <FaEye/>}
                                </span>
                            </div>

                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder={t('auth.confirmPassword')}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full p-3 border rounded-md"
                                />
                                <span
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-3 cursor-pointer"
                                >
                                    {showConfirmPassword ? <FaEyeSlash/> : <FaEye/>}
                                </span>
                            </div>

                            <button
                                onClick={handleRegister}
                                className="w-full p-3 bg-blue-600 text-white rounded-md"
                            >
                                {t('auth.register')}
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <button
                                onClick={handleGoogleSignIn}
                                className="flex items-center justify-center w-full p-3 bg-red-500 text-white rounded-md"
                            >
                                <FaGoogle className="mr-2"/> {t('auth.loginWithGoogle')}
                            </button>


                            <div className="flex items-center justify-center">
                                <hr className="flex-grow border-t border-gray-300"/>
                                <span className="px-3 text-gray-500">{t('auth.orWithEmail')}</span>
                                <hr className="flex-grow border-t border-gray-300"/>
                            </div>


                            <input
                                type="email"
                                placeholder={t('auth.email')}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border rounded-md"
                            />

                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder={t('auth.password')}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full p-3 border rounded-md"
                                />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 cursor-pointer"
                                >
        {showPassword ? <FaEyeSlash/> : <FaEye/>}
    </span>
                            </div>


                            <button
                                onClick={handleLogin}
                                className="w-full p-3 bg-blue-600 text-white rounded-md"
                            >
                                {t('auth.login')}
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <footer
                className="w-full p-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-700 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
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
                        <div className="footer-language flex flex-col items-end">
                            <h4 className="text-2xl font-semibold text-gray-800 mb-4">{t('language_choice')}</h4>
                            <div className="mt-2">
                                <LanguageSelector/>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    );
};

export default AuthPage;
