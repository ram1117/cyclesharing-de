import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../../redux/detailspage/detailSlice';
import HeaderPanel from '../homepage/HeaderPanel';

const DetailPage = () => {
  const { nwId } = useParams();
  const detail = useSelector((state) => state.detail.detail);
  const status = useSelector((state) => state.detail.status);
  const lang = useSelector((state) => state.language.langPack);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'loading') {
      dispatch(fetchDetails(nwId));
    }
  }, [nwId, status, dispatch]);

  return (
    <>
      <header>
        <HeaderPanel />
      </header>
      <div className="provider-details">
        <h2>{detail.city}</h2>
        <h4>{detail.name}</h4>
        <h4>{detail.company}</h4>
      </div>

      <div className="location-details">
        {detail.stations.length === 0 && <h5>{lang.nostation}</h5>}
        {detail.stations.map((station) => (
          <div
            className="station-detail"
            key={station.id}
            data-testid="stations"
          >
            {lang.station}
            {station.name}
            <p>
              {lang.freebikes}
              <span className="free-qty">{` ${station.free_bikes}`}</span>
            </p>
            <p>
              {lang.emptyslots}
              <span className="empty-qty">
                {station.empty_slots === null ? ' N/A' : station.empty_slots}
              </span>
            </p>
            <input
              className="coordinates"
              readOnly
              value={`${station.latitude} , ${station.longitude}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailPage;
