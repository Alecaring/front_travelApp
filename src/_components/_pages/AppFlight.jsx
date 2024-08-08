import AppBanner from "../_common/AppBanner";
import AppFlightFilters from "../_common/AppFlightFilters";
import AppFormInputsFlight from "../_common/AppFormInputsFlight";
import AppHeader from "../_common/AppHeader";

function AppFlight() {
    return (
        <>
            <div className="header">
                <AppHeader />
            </div>
            <AppBanner
                img='/flights_nc_4.svg'
                title='Voli'
            />
            <AppFlightFilters />
            <AppFormInputsFlight />
        </>
    )
};

export default AppFlight;