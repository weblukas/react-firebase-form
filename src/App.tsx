import React from 'react';
import { Route, Routes } from 'react-router-dom';
import style from './App.module.scss';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import SharedLayout from './pages/SharedLayout/SharedLayout';

function App() {
    return (
        <div className={style.app}>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Registration />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
            
        </div>
    );
}

export default App;
