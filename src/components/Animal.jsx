import AnimalImage from './AnimalImage';
import AnimalTitle from './AnimalTitle';
import Species from './Species';
import Sex from './Sex';
import Race from './Race';
import Age from './Age';

const Animal = () => {
  //https://vorstadtcowboy.github.io/images/<name des in Kleinbuchstaben>.webp
  return (
    <div className="animal">
      {/**AnimalImage */}
      <AnimalImage name="Enrico" />

      {/** AnimalTitle */}
      <AnimalTitle name="Enrico" />

      <div className="animal_body">
        {/** Species */}
        <Species species="Hund" />
        {/** Sex */}
        <Sex sex="männlich" />
        {/** Race */}
        <Race race="Laika" />
        {/** Age */}
        <Age birthday="2009-10-02" />
      </div>
    </div>
  );
};

export default Animal;
