/* eslint-disable react/prop-types */
import SectionWrapper from "../layout/section-wrapper"


function WorkItem({ name, position, url, startDate, endDate, summary, highlights }) {

  return (
    <div>
      <h4>{position}</h4>
      <div>
        <h5>{name}</h5>
        <span>{startDate} - {endDate}</span>
      </div>
      <a href={url}>{url}</a>
      <p>{summary}</p>
      <ul>
        {highlights.map((highlight, index) => <li key={index}>{highlight}</li>)}
      </ul>
    </div>

  )
}

export default function WorkSection({ list }) {
  return (
    <SectionWrapper sectionTitle="Experience" sectionList={list} SectionItem={WorkItem} />
  )

}
