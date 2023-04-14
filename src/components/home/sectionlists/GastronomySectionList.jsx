import React from 'react';
import GastronomySection from "../sections/GastronomySection";

const GastronomySectionList = ({ items }) => {
    return (
        <div className="xl:max-w-4xl md:max-w-none xl:m-0 xl:m-auto lg:m-0 lg:m-auto md:m-0 md:m-auto">
            <div>
                <h4 className="font-plus text-sm uppercase text-color5 font-normal">Gastronomía</h4>
                <div className="bg-color5 h-px w-full"></div>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4 my-5">
                <div className="col-span-1 lg:hidden">
                    {items.filter(post => post.category === 'Gastronomía').length > 0 && (
                        <GastronomySection
                            key={items.filter(post => post.category === 'Gastronomía')[0].id}
                            item={items.filter(post => post.category === 'Gastronomía')[0]}
                            showImage={true}
                            index={0}
                        />
                    )}
                </div>
                <div className="col-span-2 grid grid-cols-2 md:grid-cols-1 gap-8 md:mx-auto md:text-center">
                    {items
                        .filter(post => post.category === 'Gastronomía')
                        .slice(1, 5)
                        .map((post, index) => {
                            return (
                                <GastronomySection
                                    key={post.id}
                                    item={post}
                                    showImage={false}
                                    index={index + 1}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};
export default GastronomySectionList;