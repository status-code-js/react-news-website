import React, { useState } from 'react';
import './App.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from './components/common/Header';
import PostList from "./components/home/PostList";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/common/Footer";
import Post from "./components/home/Post";
import { posts as spanishPosts } from './data/es/newsData';
import { posts as englishPosts } from './data/en/newsData';

function App() {
    const [currentLanguage, setCurrentLanguage] = useState('es');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setCurrentLanguage(lng);
    };

    const posts = currentLanguage === 'es' ? spanishPosts : englishPosts;

    return (
        <I18nextProvider i18n={i18n}>
            <div>
                <Router>
                    <Header currentLanguage={currentLanguage} changeLanguage={changeLanguage} />
                    <Routes>
                        <Route path='/' element={<PostList posts={posts} />} />
                        <Route path='/post/:postId' element={<Post posts={posts} />} />
                    </Routes>
                    <Footer />
                </Router>
            </div>
        </I18nextProvider>
    );
}

export default App;