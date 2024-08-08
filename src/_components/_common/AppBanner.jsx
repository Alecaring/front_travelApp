function AppBanner({img, title}) {
    return (
        <>
        <div className="containerMainBanner">
        <div className="containerImgBanner">
        <img src={ img } alt="" />
        </div>
        <div className="ContainerTextBanner">
            { title }
        </div>
        </div>
        </>
    )
};

export default AppBanner;
