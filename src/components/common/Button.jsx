import React from 'react';
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Button = () => {
    const { t } = useTranslation();
    return (
            <Link className="ease-in-out duration-200 hover:opacity-80 flex items-center justify-center rounded-xl bg-color2">
                <button className="text-lg text-color1 font-plus font-bold py-2.5 ">
                    <p className="">{t("main.sidebar.button")}</p>
                </button>
            </Link>
    );
};

export default Button;