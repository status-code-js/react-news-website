import React from 'react';
import {Link} from "react-router-dom";

const Button = () => {
    return (
            <Link className="ease-in-out duration-200 hover:opacity-80 flex items-center justify-center rounded-xl bg-color2">
                <button className="text-lg text-color1 font-plus font-bold py-2.5 ">
                    <p className="">Suscríbete</p>
                </button>
            </Link>
    );
};

export default Button;