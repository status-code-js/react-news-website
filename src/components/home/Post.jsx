import React from "react";
import { useParams } from 'react-router-dom';
import {posts} from "../../data/es/newsData";

const Post = () => {
    const { postId } = useParams();

    const post = posts.find((post) => post.id === parseInt(postId));

    return (
            <div className="max-w-7xl mx-auto p-4">
                <img src={process.env.PUBLIC_URL + post.cover} alt={post.title} className="w-full h-auto object-cover mb-10" />
                <h1 className="text-4xl font-bold text-color5 leading-tight mb-4">{post.title}</h1>
                <p className="text-base font-normal text-color5 mb-8 pt-2.5">{post.text}</p>

            </div>
        );
};
export default Post;
