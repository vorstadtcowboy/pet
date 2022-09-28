import Title from './components/Title';
import Animal from './components/Animal';

const App = () => {
  return (
    <div className="wrapper">
      {/** Komponente extrahieren Name Title  */}
      <Title content="Hunde & Katzen" />

      {/**Animal */}
      <Animal />
      {/** Animal Komponente Endet hier */}
      <div className="controls">
        <button id="pre" disabled>
          zurück
        </button>
        <button id="next">vor</button>
      </div>
    </div>
  );
};

export default App;
