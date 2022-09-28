const Species = (props) => {
  return (
    <div>
      <span className="label">Tierart:</span>
      <span className="entry">{props.species}</span>
    </div>
  );
};

export default Species;
