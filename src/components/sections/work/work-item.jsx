export default function WorkItem({
  name,
  url,
  position,
  startDate,
  endDate,
  summary,
  highlights,
}) {

  const hasHighlights = highlights.length !== 0 || highlights !== null

  return (
    <div>
      <h4>{position}</h4>
      <h5>{name}</h5>
      {
        (() => {
          if (hasHighlights) {
            return <ul>{highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>;
          }
        })()
      }
    </div>
  );
}
