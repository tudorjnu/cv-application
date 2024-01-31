import SectionWrapper from "../layout/section-wrapper"

const ex = {
  name: "Project",
  startDate: "2019-01-01",
  endDate: "2021-01-01",
  description: "Description...",
  highlights: [
    "Won award at AIHacks 2016"
  ],
  url: "https://project.com/"
}

export default function ProjectsSection() {
  return (
    <SectionWrapper sectionTitle="Projects" >
      <div>
        <div>
          <h4>{ex.name}</h4>
          <span>{ex.startDate} - {ex.endDate}</span>
        </div>
        <a href={ex.url}>{ex.url}</a>
        <p>{ex.description}</p>
        <ul>
          <li>{ex.highlights[0]}</li>
        </ul>
      </div>
    </SectionWrapper>
  )
}
