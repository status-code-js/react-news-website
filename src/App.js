import React, { useState } from 'react';
import './App.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from './components/common/Header';
import PostList from "./components/home/PostList";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/common/Footer";
import Post from "./components/home/Post";
import { esData } from './data/es/newsData';
import { enData } from './data/en/newsData';
import { ruData } from './data/ru/newsData';

function App() {
    const [currentLanguage, setCurrentLanguage] = useState('es');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setCurrentLanguage(lng);
    };

    const data = {
        en: enData,
        es: esData,
        ru: ruData
    };

    const posts = data[currentLanguage];

    return (
        <I18nextProvider i18n={i18n}>
            <div>
                <Router>
                    <Header currentLanguage={currentLanguage} changeLanguage={changeLanguage} />
                    <Routes>
                        <Route path='/' element={<PostList posts={posts} currentLanguage={currentLanguage} changeLanguage={changeLanguage} />} />
                        <Route path='/es' element={<PostList posts={posts} currentLanguage='es' changeLanguage={changeLanguage} />} />
                        <Route path='/ru' element={<PostList posts={posts} currentLanguage='ru' changeLanguage={changeLanguage} />} />
                        <Route path='/en' element={<PostList posts={posts} currentLanguage='en' changeLanguage={changeLanguage} />} />
                        <Route path='/post/:postId' element={<Post posts={posts} />} />
                    </Routes>
                    <Footer changeLanguage={changeLanguage} />
                </Router>
            </div>
        </I18nextProvider>
    );
}

export default App;