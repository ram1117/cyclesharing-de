import { useDispatch } from 'react-redux';
import { setLangPack } from '../../redux/language/languageSlice';

const HeaderPanel = () => {
  const dispatch = useDispatch();
  return (
    <div className="header-bar">
      <h1 className="logo">Cycle Share</h1>
      <div className="lang-buttons">
        <button
          type="button"
          onClick={() => {
            dispatch(setLangPack('EN'));
          }}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(setLangPack('DE'));
          }}
        >
          DE
        </button>
      </div>
    </div>
  );
};

export default HeaderPanel;
