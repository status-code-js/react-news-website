import React from 'react';
import SportSection from "../sections/SportSection";
import { useTranslation } from 'react-i18next';

const SportSectionList = ({ items }) => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col md:m-0 md:m-auto">
            <div>
                <h4 className="font-plus text-sm uppercase text-color5 font-normal">
                    {t('main.categories.category.sport')}
                </h4>
                <div className="bg-color5 h-px w-full"></div>
            </div>
            <div>
                {items
                    .filter(post => post.category === 'Sport')
                    .slice(0, 2)
                    .map((post, index) => {
                        return (
                            <React.Fragment key={post.id}>
                            <SportSection item={post} showImage={index === 0}
                            />
                                {index === 0 ? (
                                    <div className="w-full h-px mb-4 bg-color6 md:hidden"></div>
                                ) : null}
                                {index === 0 ? (
                                    <div className="hidden md:block border-l border-color6"></div>
                                ) : null}
                            </React.Fragment>
                        )})}
            </div>

        </div>
    );
};

export default SportSectionList;