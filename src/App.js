import Title from './components/Title';
import Animal from './components/Animal';
import animalData from './animalData';
//Import des React Hooks useState
import { useState, useEffect } from 'react';

const App = () => {
  //console.log(animalData[0]);

  //Use State benutzen (wenn sich eine Wert ändert)
  const [counter, setCounter] = useState(0);
  const [disabledNext, setDisabledNext] = useState(false);
  const [disabledBack, setDisabledBack] = useState(true);

  //UseEffect benutzen (bei Side Effects wie title ändern und fetchen)
  useEffect(() => {
    //title ändern
    document.title = `Hilf ${animalData[counter].species} ${animalData[counter].name}`; //Hilf <tierart> <tiername>
  });

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

  const alleTiere = animalData.map((tier) => <Animal tier={tier} />);

  //Alle Katzen
  const alleKatzen = animalData
    .filter((tier) => tier.species === 'Katze')
    .map((katze) => <Animal tier={katze} />);

  return (
    <div>
      <div className="wrapper">
        {/** Komponente extrahieren Name Title  */}
        <Title content="Hunde & Katzen" />
        {/** Conditional Rendering */}

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
      {/** Hier eine Sektion mit allen Tieren */}
      <section>
        <h2>Alle Tiere</h2>
        <div className="row">{alleTiere}</div>
      </section>

      <section>
        <h2>Alle Katzen</h2>
        <div className="row">{alleKatzen}</div>
      </section>
    </div>
  );
};

export default App;
