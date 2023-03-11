import LanguageButtons from './LanguageButtons';
import ButtonsPanel from './ButtonsPanel';

const HomePage = () => (
  <>
    <header>
      <h2 className="logo">Cycle Share</h2>
    </header>
    <LanguageButtons />
    <div className="total-stats">
      <h3>Germany</h3>
      <p>
        Cities:
        <span>53</span>
      </p>
      <p>
        Networks:
        <span>50</span>
      </p>
    </div>
    <ButtonsPanel />
    <div className="cities-wrapper">
      cities
    </div>
  </>
);

export default HomePage;
