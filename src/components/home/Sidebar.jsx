import React, { useState } from "react";
import BannerAdsSmall from "../common/BannerAdsSmall";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { esData } from "../../data/es/newsData";
import { ruData } from "../../data/ru/newsData";
import { enData } from "../../data/en/newsData";


function Sidebar() {
  const [activeId, setActiveId] = useState(null);

  const { t, i18n } = useTranslation();

  const handleHover = (id) => {
    setActiveId(id);
  };
  const getPopular = () => {
    const currentLanguage = i18n.language;
    switch(currentLanguage) {
      case 'ru':
        return ruData.main.sidebar.popular;
      case 'en':
        return enData.main.sidebar.popular;
      default:
        return esData.main.sidebar.popular;
    }
  }

  const popular = getPopular();


  return (
      <div>
        <div className="flex flex-col xl:hidden w-72 lg:w-60 mt-4 mb-4 pr-4 xl:pl-4">
          <div className="border-t border-b">
            <h3 className="text-lg font-bold py-1 font-plus">{t("main.sidebar.text3")}</h3>
          </div>
          <div className="flex flex-col gap-y-1 mt-4 mb-4">
            {popular.map((item, index) => {
              const isActive = activeId === item.id;

              return (
                  <Link
                      to={`/post/${item.id}`}
                      className={`${
                          isActive ? "text-color7" : "text-color5"
                      } `}
                      key={item.id}
                      onMouseEnter={() => handleHover(item.id)}
                      onMouseLeave={() => handleHover(null)}
                  >
                    <div className="bg-color3 rounded-lg p-2.5">
                      <ul>
                        <li className="flex gap-3">
                          <div className={`w-7 h-7 flex items-center justify-center rounded-full font-bold ${
                          isActive ? "text-color7" : "text-color5"
                          }`}
                          style={{ backgroundColor: "currentcolor" }}
                            >
                            <span className="text-color1 w-7 h-7 flex justify-center items-center">{index + 1}</span>
                          </div>
                          <h2
                              className={`text-sm ${
                                  isActive ? "text-color7" : "text-color5"
                              } font-yeseva`}
                          >
                            {item.title}
                          </h2>
                        </li>
                      </ul>
                    </div>
                  </Link>
              );
            })}
          </div>
          <BannerAdsSmall />
          <div className="font-plus px-1 mt-4 mb-4">
            <h3 className="text-lg font-bold pb-2">{t("main.sidebar.text1")}</h3>
            <p className="text-xs max-w-282">
              {t("main.sidebar.text2")}
            </p>
          </div>
          <Button />
        </div>
      </div>
  );
}

export default Sidebar;
