import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData } from '../../redux/homepage/cititesSlice';
import HeaderPanel from './HeaderPanel';

const HomePage = () => {
  const { cities, status } = useSelector((state) => state.cities);
  const [filterCities, setFilterCities] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'loading') {
      dispatch(fetchData());
    }
    if (status === 'completed') {
      setFilterCities(cities);
    }
  }, [cities, status, dispatch]);

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
        <HeaderPanel />
      </header>
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
          <Link
            className="city-link"
            to={`details/${cityObj.id}`}
            key={cityObj.id}
          >
            <div id="city-tile" className="city-tile" data-href={cityObj.href}>
              <h3>{cityObj.city}</h3>
              <p>
                Provider:
                <br />
                <span>{cityObj.name}</span>
              </p>
              <p>{cityObj.latitude}</p>
              <p>{cityObj.longitude}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomePage;
