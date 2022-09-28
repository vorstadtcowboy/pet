const Race = (props) => {
  return (
    <div>
      <span className="label">Rasse:</span>
      <span className="entry">{props.race}</span>
    </div>
  );
};

export default Race;
