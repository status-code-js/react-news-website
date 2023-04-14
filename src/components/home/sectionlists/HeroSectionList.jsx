import React from 'react';
import HeroSection from "../sections/HeroSection";

const HeroSectionList = ({ items }) => {
    return (
                <div className="flex flex-row md:flex-col justify-between xl:justify-center gap-x-4 md:text-center">
                    {items
                        .slice(0, 2)
                        .map((post, index) => {
                            return (
                                <React.Fragment key={post.id}>
                                    <HeroSection item={post} />
                                        {index === 0 ? (
                                            <div className="w-px mt-4 bg-color6 md:hidden"></div>
                                        ) : null}
                                        {index === 0 ? (
                                            <div className="hidden md:block border-l border-color6"></div>
                                        ) : null}
                                </React.Fragment>
                            )})}
                </div>
    );
};

export default HeroSectionList;