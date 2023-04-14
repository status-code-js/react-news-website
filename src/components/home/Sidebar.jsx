import React, { useState } from "react";
import BannerAdsSmall from "../common/BannerAdsSmall";
import Button from "../common/Button";
import { popular } from "../../data/newsData";
import { Link } from "react-router-dom";

function Sidebar({ item }) {
  const [activeId, setActiveId] = useState(null);

  const handleHover = (id) => {
    setActiveId(id);
  };

  return (
      <div>
        <div className="flex flex-col xl:hidden w-72 lg:w-60 mt-4 mb-4 pr-4 xl:pl-4">
          <div className="border-t border-b">
            <h3 className="text-lg font-bold py-1 font-plus">Lo más leído</h3>
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
            <h3 className="text-lg font-bold pb-2">Suscríbete a la revista Impuls</h3>
            <p className="text-xs max-w-282">
              Un boletín semanal de primicias, análisis e información exclusiva sobre lo que está sucediendo en la Comunidad Valenciana y más allá del equipo de informes
            </p>
          </div>
          <Button />
        </div>
      </div>
  );
}

export default Sidebar;
