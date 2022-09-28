import Title from './components/Title';
import Animal from './components/Animal';
import animalData from './animalData';
//Import des React Hooks useState
import { useState } from 'react';

const App = () => {
  //console.log(animalData[0]);

  //Use State benutzen
  const [counter, setCounter] = useState(0);
  const [disabledNext, setDisabledNext] = useState(false);
  const [disabledBack, setDisabledBack] = useState(true);

  //EventHandler-function
  function handleNext() {
    if (counter < animalData.length - 1) {
      setCounter(counter + 1);
      setDisabledBack(counter + 1 > 0 ? false : true);
      //ternary operator
      setDisabledNext(counter + 1 === animalData.length - 1 ? true : false);
    }
  }

  //handleBack
  const handleBack = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
      //ternary operator
      setDisabledBack(counter - 1 > 0 ? false : true);
      setDisabledNext(counter - 1 === animalData.length - 1 ? true : false);
    }
  };

  return (
    <div className="wrapper">
      {/** Komponente extrahieren Name Title  */}
      <Title content="Hunde & Katzen" />

      {/**Animal */}
      <Animal tier={animalData[counter]} />
      {/** Animal Komponente Endet hier */}
      <div className="controls">
        <button id="pre" onClick={handleBack} disabled={disabledBack}>
          zurück {counter}
        </button>
        <button id="next" onClick={handleNext} disabled={disabledNext}>
          vor {counter}
        </button>
      </div>
    </div>
  );
};

export default App;
