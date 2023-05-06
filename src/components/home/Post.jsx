import React from "react";
import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Post = () => {
    const { postId } = useParams();
    const { t } = useTranslation();
    const postTitle = t(`main.posts.${postId - 1}.title`);
    const postText = t(`main.posts.${postId - 1}.text`);
    const postCover = t(`main.posts.${postId - 1}.cover`);

    return (
            <div className="max-w-7xl mx-auto p-4">
                <img src={process.env.PUBLIC_URL + postCover} alt={postTitle} className="w-full h-auto object-cover mb-10" />
                <h1 className="text-4xl font-bold text-color5 leading-tight mb-4">{postTitle}</h1>
                <p className="text-base font-normal text-color5 mb-8 pt-2.5">{postText}</p>
            </div>
        );
};
export default Post;
