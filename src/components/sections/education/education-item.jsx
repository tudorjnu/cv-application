export default function EducationItem({
  institution,
  url,
  area,
  studyType,
  startDate,
  endDate,
  score,
  courses,
  highlights = [],
}) {

  const hasHighlights = highlights.length !== 0


  return (
    <div>
      <h4>{studyType} in {area}</h4>
      <h5>{institution}</h5>
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
