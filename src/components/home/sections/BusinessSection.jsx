import React from 'react';
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';

const BusinessSection  = ({ item }) => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="flex flex-col max-w-530 lg:max-w-356 mt-4 mb-10 sm:mb-4">
                <Link to={`/post/${item.id}`} className="ease-in-out duration-200 hover:opacity-80">
                    <img src={process.env.PUBLIC_URL + item.cover} alt={item.title} className="w-530 h-348 lg:w-356 lg:h-234 mb-4"/>
                    <h2 className="text-3xl sm:text-lg text-color5 font-yeseva">{t(`main.posts.${item.id - 1}.title`)}</h2>
                </Link>
            </div>
        </div>
    )
}

export default BusinessSection;