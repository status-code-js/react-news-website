import React from 'react'
import './App.css'
import Header from './components/common/Header';
import PostList from "./components/home/PostList";
import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/common/Footer";
import Post from "./components/home/Post";
import {posts} from './data/newsData'

function App() {
  return (
        <div>
            <Router>
            <Header />
            <Routes>
                <Route path='/' element={<PostList posts={posts} />} />
                <Route path='/post/:postId' element={<Post posts={posts} />} />
            </Routes>
                <Footer />
            </Router>
        </div>
  );
}

export default App;
