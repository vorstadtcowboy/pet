const AnimalImage = ({ name }) => {
  //String Literal
  //const ImageUrl = `https://vorstadtcowboy.github.io/images/${name.toLowerCase()}.webp`;
  const src = 'https://vorstadtcowboy.github.io/images/' + name.toLowerCase() + '.webp';

  return (
    <div className="animal_image">
      <img className="entry" src={src} alt={name} title={name} />
    </div>
  );
};

export default AnimalImage;
