import React from 'react';
import { Link } from "react-router-dom";


const GastronomySection = ({ item, showImage, index }) => {
    return (
        <div className={`max-w-282 lg:max-w-sm border-b ${index < 3 && index > 0 ? 'border-color6' : 'border-hidden'} lg:border-hidden`}>
            <Link to={`/post/${item.id}`} className="ease-in-out duration-200 hover:opacity-80">
                {showImage && (
                    <img src={process.env.PUBLIC_URL + item.cover} alt={item.title} className="w-282 h-185 mb-4" />
                )}
                <h2 className="text-lg text-color5 leading-5 font-yeseva pb-2.5">{item.title}</h2>
                <p className="text-xs md:text-left font-plus font-normal text-color5 line-clamp-5">{item.text}</p>
            </Link>
        </div>
    );
};



export default GastronomySection;