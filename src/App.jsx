import AppFlight from "./_components/_pages/AppFlight";
import AppHome from "./_components/_pages/AppHome";
import L from 'leaflet';
import { Routes, Route } from 'react-router-dom';


function App() {
  const iconsArr = [
    { key: 1, link: '/', d: 'M19.3,16.9c0.4-0.7,0.7-1.5,0.7-2.4c0-2.5-2-4.5-4.5-4.5S11,12,11,14.5s2,4.5,4.5,4.5c0.9,0,1.7-0.3,2.4-0.7l3.2,3.2 l1.4-1.4L19.3,16.9z M15.5,17c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S16.9,17,15.5,17z M12,20v2 C6.48,22,2,17.52,2,12C2,6.48,6.48,2,12,2c4.84,0,8.87,3.44,9.8,8h-2.07c-0.64-2.46-2.4-4.47-4.73-5.41V5c0,1.1-0.9,2-2,2h-2v2 c0,0.55-0.45,1-1,1H8v2h2v3H9l-4.79-4.79C4.08,10.79,4,11.38,4,12C4,16.41,7.59,20,12,20z', name: 'Esplora' },
    { key: 2, link: '/flight', d: "M3.29,6.56l1.41-1.41l9.55,2.47l3.89-3.89c0.59-0.59,1.53-0.59,2.12,0s0.59,1.53,0,2.12l-3.89,3.89l2.47,9.55l-1.41,1.41 l-4.24-7.78l-3.89,3.89l0.35,2.47L8.6,20.35l-1.77-3.18L3.65,15.4l1.06-1.06l2.47,0.35l3.89-3.89L3.29,6.56z", name: 'Voli' },
    { key: 3, link: '/', d: "M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm12-7h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z", name: 'Hotel' },
    { key: 4, link: '/', d: "M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z", name: 'Esperienze' },
  ];
  const HomeCardArr = [
    { key: 1, title: 'Atene', img: 'https://www.grecia.info/wp-content/uploads/sites/71/atene-partenone-sera.jpg', description: "l'antica Acropoli e il Partenope", flightPrice: 100, hotelPrice: 80 },
    { key: 2, title: 'Londra', img: 'https://media.istockphoto.com/id/1294454411/it/foto/simboli-di-londra-con-big-ben-double-decker-buses-e-red-phone-booth-in-inghilterra-regno-unito.jpg?s=612x612&w=0&k=20&c=JF8JoL8lUktgjkMI8UAD91bOzkKTZScmr-HvHJW2RAY=', description: "Buckingham Palace e il British Museum", flightPrice: 100, hotelPrice: 80 },
    { key: 3, title: 'Amsterdam', img: 'https://media.istockphoto.com/id/477307170/it/foto/notte-vista-sulla-citt%C3%A0-di-amsterdam-olanda.jpg?s=612x612&w=0&k=20&c=HaUna2Kmw-NAYAlwo0JqNllIg-0iOSPY3emn8d719MQ=', description: "Biciclette, canali e museo Van Gogh", flightPrice: 100, hotelPrice: 80 },
  ];
  const positions = [
    { key: 1, name: 'Atene', lat: 37.98555359679631, lng: 23.72546401052363 },
    { key: 2, name: 'Londra', lat: 51.515, lng: -0.1 },
    { key: 3, name: 'Amsterdam', lat: 52.36973224398227, lng: 4.898464900139973 },
  ];
  const customIcon = L.divIcon({
    className: 'custom-marker', // Usa la classe CSS definita
    html: '', // Puoi lasciare vuoto se usi solo CSS
    iconSize: [24, 24] // Dimensioni del marker
  });
  return (
    <>
      <Routes>
        <Route path="/" element=
          {
            <AppHome
              iconsArr={iconsArr}
              HomeCardArr={HomeCardArr}
              positions={positions}
              customIcon={customIcon}
            />
          }
        />
        <Route path="/flight" element={<AppFlight />} />
      </Routes>
    </>
  )
};

export default App;