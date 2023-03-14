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
  const lang = useSelector((state) => state.language.langPack);
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
        <h2>{lang.countryHeader}</h2>
        <h4>{lang.mainSubHeader}</h4>
        <p data-testid="total">
          {lang.cities}
          <span>{` ${cities.length}`}</span>
        </p>
      </div>
      <div className="button-pane">
        <button type="button" className="alphabet-btns" onClick={handleClick}>
          {lang.all}
        </button>
        {sortlist.map((char) => (
          <button
            type="button"
            className="alphabet-btns"
            key={char}
            onClick={handleClick}
            data-testid="alphabets"
          >
            {char}
          </button>
        ))}
      </div>
      {status === 'loading' && <h4>{lang.loading}</h4>}
      <div className="cities-wrapper">
        {filterCities.map((cityObj) => (
          <Link
            className="city-link"
            to={`details/${cityObj.id}`}
            key={cityObj.id}
          >
            <div
              id="city-tile"
              className="city-tile"
              data-href={cityObj.href}
              data-testid="cities"
            >
              <h3>{cityObj.city}</h3>
              <p>
                {lang.provider}
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
