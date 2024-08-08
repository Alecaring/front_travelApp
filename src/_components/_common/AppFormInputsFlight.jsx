import { useState } from 'react';


function AppFormInputsFlight() {

    const data = [
        { key: 1, name: 'banana', category: 'fruit' },
        { key: 2, name: 'mela', category: 'fruit' },
        { key: 3, name: 'pera', category: 'fruit' },
        { key: 4, name: 'cavolo', category: 'vegetale' },
        { key: 5, name: 'arancia', category: 'fruit' },
    ];

    const [queryP, setQueryP] = useState('');
    const [resultP, setResultP] = useState([]);

    const hendleSearchP = (e) => {
        const valueP = e.target.value;
        setQueryP(valueP);
        setResultP(
            valueP ? data.filter(item => item.name.toLowerCase().includes(valueP.toLowerCase())) : []
        );
    }

    const setValueP = (value) => {
        setQueryP(value);
        setResultP([]);
    }

    const handleTravel = (e) => {
        e.preventDefault();
        console.log('cccc');
    }
    return (
        <>
            <div className="containerMainFormInpunt">
                <form action="">
                    <div className="topImput">
                        <div className="input">
                            <i className="fa-solid fa-map-pin"></i>
                            <input
                                type="text"
                                onChange={hendleSearchP}
                                value={queryP}
                                name="" placeholder="Partenza" />
                        </div>

                        <span className="circle">
                            <svg enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" focusable="false" className=" NMm5M hhikbc"><g><rect fill="none" height="24" width="24" x="0"></rect></g><g><g><polygon points="8.41,12.41 7,11 2,16 7,21 8.41,19.59 5.83,17 21,17 21,15 5.83,15"></polygon><polygon points="15.59,11.59 17,13 22,8 17,3 15.59,4.41 18.17,7 3,7 3,9 18.17,9"></polygon></g></g></svg>
                        </span>

                        <div className="input">
                            <i className="fa-solid fa-location-dot"></i>
                            <input type="text" name="" placeholder="Arrivo" required/>
                        </div>
                        <div className={resultP.length === 0 ? 'containerListSearchMain none' : 'containerListSearchMain'}>
                            <ul>
                                <span>Partenza</span>
                                {resultP.map((item) => (
                                    <li
                                        onClick={() => setValueP(item.name)}
                                        key={item.key}>
                                        {item.name} - {item.category}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="bottomInput">
                        <div className="containerCal">
                            <i className="fa-solid fa-calendar-days"></i>
                            <p>Partenza</p>
                        </div>
                        <hr />
                        <p>Arrivo</p>
                    </div>
                    <button onClick={handleTravel}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <span>Esplora</span>
                    </button>
                </form>
            </div>
        </>
    )
};

export default AppFormInputsFlight;