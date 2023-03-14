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
    if (char === 'All' || char === 'Alle') {
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
        <h3>{lang.mainSubHeader}</h3>
        <h4 data-testid="total">
          {lang.cities}
          <span>{` ${cities.length}`}</span>
        </h4>
      </div>
      <div className="button-pane">
        <button
          type="button"
          className="alphabet-btns buttons"
          onClick={handleClick}
        >
          {lang.all}
        </button>
        {sortlist.map((char) => (
          <button
            type="button"
            className="alphabet-btns buttons"
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
              <p>
                Lat:
                {` ${cityObj.latitude}`}
              </p>
              <p>
                Long:
                {` ${cityObj.longitude}`}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomePage;
