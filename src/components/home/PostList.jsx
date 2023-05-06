import React, {useState, useEffect} from 'react';
import {posts} from '../../data/es/newsData'
import BannerAds from "../common/BannerAds";
import Sidebar from "./Sidebar";
import HeroSectionList from "./sectionlists/HeroSectionList";
import GastronomySectionList from "./sectionlists/GastronomySectionList";
import BusinessSectionList from "./sectionlists/BusinessSectionList";
import TourismSectionList from "./sectionlists/TourismSectionList";
import HealthSectionList from "./sectionlists/HealthSectionList";
import SportSectionList from "./sectionlists/SportSectionList";
import NetworkingSectionList from "./sectionlists/NetworkingSectionList";
import EducationSectionList from "./sectionlists/EducationSectionList";
import FinanceSectionList from "./sectionlists/FinanceSectionList";
import TrendsSectionList from "./sectionlists/TrendsSectionList";


const PostList = ({ currentLanguage }) => {

    const [items, setItems] = useState([])


    useEffect(() => {
        setItems(posts)
    }, [])

    
    
    return (
        <div className="max-w-7xl border border-t-0 border-color4 xl:border-0 m-0 m-auto pt-4 pb-4 xl:pb-0">
            <div className="px-4">
            <BannerAds />
            </div>
            <div className="flex xl:block justify-between">
                <div className="px-4">
                <HeroSectionList items={items} />
                    <GastronomySectionList items={items} />
                    <div className="flex md:flex-col justify-between xl:justify-center gap-x-4">
                            <BusinessSectionList items={items}/>
                        <div className="bg-color6 w-px mt-9 mb-4 md:hidden"></div>
                            <TourismSectionList items={items} />
                        </div>
                    <BannerAds />
                    <div className="flex xl:justify-center">
                    <HealthSectionList items={items} />
                    </div>
                    <div className="flex md:flex-col justify-between xl:justify-center gap-x-4">
                        <SportSectionList items={items} />
                        <div className="bg-color6 w-px mt-9 mb-4 md:hidden"></div>
                        <NetworkingSectionList items={items}/>
                    </div>
                    <div className="flex md:flex-col lg:flex-wrap justify-between xl:justify-center gap-x-4">
                        <EducationSectionList items={items}/>
                        <FinanceSectionList items={items}/>
                        <TrendsSectionList items={items}/>
                    </div>
                </div>
                <div>
                <Sidebar />
                </div>
            </div>
            <div className="px-4">
                <BannerAds />
            </div>
        </div>
    );
};


export default PostList;