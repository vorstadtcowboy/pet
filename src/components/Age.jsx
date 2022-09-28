import ageConverter from '../ageConverter';

const Age = (props) => {
  //Objekt Destrukturierung
  const { birthday } = props;

  //const birthday = props.birthday;
  //const name = props.name;

  //Funktion Alter berechnet aus einem Geburtsdatum (prop birthday)
  const age = ageConverter(birthday);

  return (
    <div>
      <span className="label">Alter:</span>
      <span className="entry">{age}</span>
    </div>
  );
};

export default Age;
