import SectionWrapper from "../layout/section-wrapper"

function VolunteerItem({ organization, position, url, startDate, endDate, summary, highlights }) {
  return (
    < div >
      <h4>{position}</h4>
      <div>
        <h5>{organization}</h5>
        <span>{startDate} - {endDate}</span>
      </div>
      <a href={url}>{url}</a>
      <p>{summary}</p>
      <ul>
        <li>{highlights[0]}</li>
      </ul>
    </div >
  )
}

export default function VolunteerSection({ list }) {
  return (
    <SectionWrapper sectionTitle="Volunteering" sectionList={list} SectionItem={VolunteerItem} />
  )

}
