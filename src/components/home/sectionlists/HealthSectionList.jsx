import React from 'react';
import HealthSection from "../sections/HealthSection";
import { useTranslation } from 'react-i18next';

const HealthSectionList = ( { items }) => {
    const { t } = useTranslation();
    return (
        <div>
        <div className="mt-2.5">
            <h4 className="font-plus text-sm uppercase text-color5 font-normal">
                {t('main.categories.category.health')}
            </h4>
            <div className="bg-color5 h-px w-full"></div>
        </div>
        <div className="flex flex-row lg:flex-col gap-x-10 mt-5">
            {items
                .filter(post => post.category === 'Salud')
                .slice(0, 3)
                .map((post, index) => {
                    return (
                        <HealthSection
                            key={post.id}
                            item={post}
                            showImage={false}
                        />
                    )
                })}
    </div>
        </div>
    );
};

export default HealthSectionList;