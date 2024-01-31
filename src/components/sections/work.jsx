import SectionWrapper from "../layout/section-wrapper"

const ex = {
  name: "Company",
  position: "President",
  url: "https://company.com",
  startDate: "2013-01-01",
  endDate: "hhl",
  summary: "Description…",
  highlights: [
    "Started the company"
  ]
}

export default function WorkSection() {
  return (
    <SectionWrapper sectionTitle="Experience" >
      <div>
        <h4>{ex.position}</h4>
        <div>
          <h5>{ex.name}</h5>
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
