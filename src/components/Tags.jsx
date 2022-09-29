/** React Listen/Lists */

const Tags = (props) => {
  const tagListe = props.tags.map((tag, index) => <p key={index}>{tag}</p>);
  return (
    <div>
      <span className="label">Tags:</span>
      <span className="entry">{tagListe}</span>
    </div>
  );
};

export default Tags;
