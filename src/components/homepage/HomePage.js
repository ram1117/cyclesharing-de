import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LanguageButtons from './LanguageButtons';

const HomePage = () => {
  const cities = useSelector((state) => state.cities.cities);
  const status = useSelector((state) => state.cities.status);
  const [filterCities, setFilterCities] = useState([]);

  useEffect(() => {
    if (status === 'completed') {
      setFilterCities(cities);
    }
  }, [cities, status]);

  const list = useSelector((state) => state.cities.cityCapitals);
  const sortlist = [...list].sort();

  const handleClick = (event) => {
    const char = event.target.innerText;
    if (char === 'All') {
      setFilterCities(cities);
    } else {
      const newArr = cities.filter(
        (cityObj) => cityObj.city.charAt(0) === char,
      );
      setFilterCities(newArr);
    }
  };

  return (
    <>
      <header>
        <h2 className="logo">Cycle Share</h2>
      </header>
      <LanguageButtons />
      <div className="total-stats">
        <h3>Germany</h3>
        <p>
          Cities:
          <span>{cities.length}</span>
        </p>
      </div>
      <div className="button-pane">
        <button type="button" className="alphabet-btns" onClick={handleClick}>
          All
        </button>
        {sortlist.map((char) => (
          <button
            type="button"
            className="alphabet-btns"
            key={char}
            onClick={handleClick}
          >
            {char}
          </button>
        ))}
      </div>
      {status === 'loading' && <h4>Loading...</h4>}
      <div className="cities-wrapper">
        {filterCities.map((cityObj) => (
          <div className="city-tile" key={cityObj.id}>
            <h3>{cityObj.city}</h3>
            <p>
              Provider:
              <br />
              <span>{cityObj.name}</span>
            </p>
            <input
              value={`${cityObj.latitude} , ${cityObj.longitude}`}
              readOnly
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
