import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
 

function AppIcons ({iconsArr}) {

    

    return (
        <>
        <div className="containerMainIcons">

            {iconsArr.map((item) => (
                <Link key={item.key} className='cellI' to={item.link}>
            <div className='cellI'>
                <svg height="24" viewBox="0 0 24 24" width="24" focusable="false" ><rect fill="none" height="24" width="24"></rect><path d={item.d}></path></svg>
                <span>{ item.name }</span>
            </div>
                </Link>
            ))}


        </div>
        </>
    )
};

export default AppIcons;