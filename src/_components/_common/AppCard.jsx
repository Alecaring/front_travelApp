


function AppCard({ img, title, description, flightPrice, hotelPrice }) {

    

    return (
        <>


            <div className="imgCont">
                <img src={img} alt="" />
            </div>

            <div className="textCont">
                <div className="top">
                    <h4>
                    {title}
                    </h4>
                    <p>
                    {description}
                    </p>
                </div>
                <div className="bottom">
                    <p>
                        <i className="fas fa-plane"></i>
                    {flightPrice} €
                    </p>
                    <p>
                    <i className="fa-solid fa-hotel"></i>
                    {hotelPrice} €
                    </p>
                </div>
            </div>

        </>
    )
};

export default AppCard;