import AnimalImage from './AnimalImage';
import AnimalTitle from './AnimalTitle';
import Species from './Species';
import Sex from './Sex';
import Race from './Race';
import Age from './Age';

const Animal = (props) => {
  //https://vorstadtcowboy.github.io/images/<name des in Kleinbuchstaben>.webp
  //console.log(props);
  const { name, species, sex, race, birthday } = props.tier;

  return (
    <div className="animal">
      {/**AnimalImage */}
      <AnimalImage name={name} />

      {/** AnimalTitle */}
      <AnimalTitle name={name} />

      <div className="animal_body">
        {/** Species */}
        <Species species={species} />
        {/** Sex */}
        <Sex sex={sex} />
        {/** Race */}
        <Race race={race} />
        {/** Age */}
        <Age birthday={birthday} />
      </div>
    </div>
  );
};

export default Animal;
