import { useState } from 'react';

function AppSearch() {
    const data = [
        { key: 1, name: 'banana', category: 'fruit' },
        { key: 2, name: 'mela', category: 'fruit' },
        { key: 3, name: 'pera', category: 'fruit' },
        { key: 4, name: 'cavolo', category: 'vegetale' },
        { key: 5, name: 'arancia', category: 'fruit' },
    ];


    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);

    const hendleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
        setResult(
            value ? data.filter(item => item.name.toLowerCase().includes(value.toLowerCase())) : []
        );
        
    }
    return (
        <div className='mainSearch'>
            <div className="containerMainSearch">
                <div className='input'>
                    <div className='icon'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input
                        type="text"
                        value={query}
                        onChange={hendleSearch}
                        placeholder="Cerca Voli, Hotel e molto altro" />

                    <div id='list' className={result.length === 0 ? 'containerListSearchMain none' : 'containerListSearchMain'}>
                        <ul>
                            {result.map((item) => (
                                <li key={item.key}>{item.name} - {item.category}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default AppSearch;