import SectionWrapper from "../layout/section-wrapper"

const ex = {
  organization: "Organization",
  position: "Volunteer",
  url: "https://organization.com/",
  startDate: "2012-01-01",
  endDate: "2013-01-01",
  summary: "Description…",
  highlights: [
    "Awarded 'Volunteer of the Month'"
  ]
}

export default function VolunteerSection() {
  return (
    <SectionWrapper sectionTitle="Experience" >
      <div>
        <h4>{ex.position}</h4>
        <div>
          <h5>{ex.organization}</h5>
          <span>{ex.startDate} - {ex.endDate}</span>
        </div>
        <a href={ex.url}>{ex.url}</a>
        <p>{ex.summary}</p>
        <ul>
          <li>{ex.highlights[0]}</li>
        </ul>
      </div>
    </SectionWrapper>
  )

}
