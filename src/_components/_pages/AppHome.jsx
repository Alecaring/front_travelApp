import AppBanner from "../_common/AppBanner";
import AppCard from "../_common/AppCard";
import AppHeader from "../_common/AppHeader";
import AppIcons from "../_common/AppIcons";
import AppSearch from "../_common/AppSearch";
import { useState } from "react";
import AppMap from "../_common/AppMap";



function AppHome({ iconsArr, HomeCardArr, customIcon, positions }) {



    return (
        <>
            <div className="header">
                <AppHeader />
            </div>
            <AppBanner img='/trips_4.svg' title='Viaggi' />
            <AppSearch />
            <AppIcons iconsArr={iconsArr} />

            <div className="containerMainCardHome">
                <h3>Destinazioni popolari</h3>
                <AppMap customIcon={customIcon} positions={positions} />
                {HomeCardArr.map((item) => (

                    <div className="card" key={item.key}>
                        <AppCard
                            img={item.img}
                            title={item.title}
                            description={item.description}
                            flightPrice={item.flightPrice}
                            hotelPrice={item.hotelPrice}
                        />
                    </div>

                ))}
            </div>


        </>
    )
};


export default AppHome;