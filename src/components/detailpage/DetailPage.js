import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../../redux/detailspage/detailSlice';

const DetailPage = () => {
  const { nwId } = useParams();
  const detail = useSelector((state) => state.detail.detail);
  const status = useSelector((state) => state.detail.status);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'loading') {
      dispatch(fetchDetails(nwId));
    }
  }, [nwId, status, dispatch]);

  return (
    <>
      <header>
        <div className="proider-details">
          <h2>{detail.city}</h2>
          <h4>{detail.name}</h4>
          <h5>{detail.company}</h5>
        </div>
      </header>
      <div className="location-details">
        {detail.stations.length === 0 && <h5>No stations found...</h5>}
        {detail.stations.map((station) => (
          <div key={station.id}>
            Station:
            {station.name}
            <p>
              free bikes:
              {station.free_bikes}
            </p>
            <p>
              Empty Slots:
              {station.empty_slots}
            </p>
            <input
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
