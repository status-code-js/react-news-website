import React from 'react'
import { Link } from 'react-router-dom'


    const HeroSection = ({ item }) => {
        return (
            <div className="md:m-0 md:m-auto">
                <div className="flex flex-col max-w-md md:max-w-sm mt-4 mb-10 sm:mb-4">
                    <Link to={`/post/${item.id}`} className="ease-in-out duration-200 hover:opacity-80">
                        <img src={item.cover} alt="Post Image" className="w-448 h-292 md:w-356 md:h-234 sm:w-448 sm:h-292 md:m-0 md:m-auto object-cover"/>
                        <p className="text-xs font-plus text-color5 font-bold uppercase pt-4 pb-5">{item.category}</p>
                        <h2 className="text-3xl sm:text-lg text-color5 font-yeseva">{item.title}</h2>
                    </Link>
                </div>
            </div>
        )
    }


export default HeroSection
