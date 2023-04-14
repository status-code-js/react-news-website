import React from 'react';
import NetworkingSection from "../sections/NetworkingSection";

const NetworkingSectionList = ({ items }) => {
    return (
        <div className="flex flex-col md:m-0 md:m-auto">
            <div>
                <h4 className="font-plus text-sm uppercase text-color5 font-normal">Networking</h4>
                <div className="bg-color5 h-px w-full"></div>
            </div>
            <div>
                {items
                    .filter(post => post.category === 'Networking')
                    .slice(0, 1)
                    .map((post) => {
                        return (
                            <NetworkingSection key={post.id} item={post}
                            />
                        )
                    })}
            </div>
        </div>
    );
};

export default NetworkingSectionList;