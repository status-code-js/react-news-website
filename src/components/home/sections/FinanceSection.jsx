import React from 'react';
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';

const FinanceSection = ({ item, showImage }) => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="flex flex-col max-w-282 lg:max-w-356 mt-4 mb-4">
                <Link to={`/post/${item.id}`} className="ease-in-out duration-200 hover:opacity-80">
                {showImage && (
                    <img src={process.env.PUBLIC_URL + item.cover} alt={item.title} className="w-305 h-185 lg:w-356 lg:h-234 mb-4"/>
                )}
                <h2 className="text-lg text-color5 leading-5 font-yeseva pb-2.5">{t(`main.posts.${item.id - 1}.title`)}</h2>
                <p className="text-xs font-plus font-normal text-color5 line-clamp-5">{t(`main.posts.${item.id - 1}.text`)}</p>
                </Link>
            </div>
        </div>
    )
}

export default FinanceSection;