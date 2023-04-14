import React from 'react';
import {Link} from "react-router-dom";

const HealthSection = ({ item }) => {
    return (
        <div className="md:m-0 md:m-auto">
            <div className="flex flex-col max-w-282 lg:max-w-356 mb-6 sm:mb-4">
                <Link to={`/post/${item.id}`} className="ease-in-out duration-200 hover:opacity-80">
                <img src={item.cover} alt={item.title} className="w-305 h-185 lg:w-356 lg:h-234 mb-4"/>
                <h2 className="text-lg text-color5 leading-5 font-yeseva pb-2.5">{item.title}</h2>
                <p className="text-xs font-plus font-normal text-color5 line-clamp-5">{item.text}</p>
                </Link>
            </div>
        </div>
    )
}

export default HealthSection;