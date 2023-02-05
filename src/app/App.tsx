
import './styles/index.scss'
import React, { Suspense } from 'react';
import {Link, Route, Routes } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { classNames } from 'shared/lib/classNames/classNames';





const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route element={<MainPage/>} path={'/'} />
                    <Route element={<AboutPage/>} path={'/about'} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;