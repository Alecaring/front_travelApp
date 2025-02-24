function AppFlightFilters() {
    let kindOfFlight = 'Andata e Ritorno';
    let numebrOfPass = 1;
    let classTravel = 'economy'
    return (
        <>
        <div className="mainContainerFilter">
        <div className="left">
        <svg enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" focusable="false" className=" NMm5M hhikbc"><g><rect fill="none" height="24" width="24" x="0"></rect></g><g><g><polygon points="8.41,12.41 7,11 2,16 7,21 8.41,19.59 5.83,17 21,17 21,15 5.83,15"></polygon><polygon points="15.59,11.59 17,13 22,8 17,3 15.59,4.41 18.17,7 3,7 3,9 18.17,9"></polygon></g></g></svg>
        <span>{ kindOfFlight }</span>
        <i className="fa-solid fa-caret-down"></i>
        </div>
        <div className="center">

        <i className="fa-regular fa-user"></i>
        <span>{ numebrOfPass }</span>
        <i className="fa-solid fa-caret-down"></i>

        </div>
        <div className="right">

        <span>{ classTravel }</span>
        <i className="fa-solid fa-caret-down"></i>

        </div>
        </div>
        </>
    )
};

export default AppFlightFilters;