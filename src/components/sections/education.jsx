import SectionWrapper from "../layout/section-wrapper"

const ex = {
  institution: "University",
  url: "https://institution.com/",
  area: "Software Development",
  studyType: "Bachelor",
  startDate: "2011-01-01",
  endDate: "2013-01-01",
  score: "4.0",
  courses: [
    "DB1101 - Basic SQL"
  ]
}


export default function EducationSection() {

  return (
    <SectionWrapper sectionTite="Education" >
      <div>
        <h4>{ex.studyType} in {ex.area}</h4>
        <div>
          <h5>{ex.organization}</h5>
          <span>{ex.score}</span>
          <span>{ex.startDate} - {ex.endDate}</span>
        </div>
        <a href={ex.url}>{ex.url}</a>
        <ul>
          <li>{ex.courses[0]}</li>
          <li>{ex.courses[0]}</li>
        </ul>


      </div>
    </SectionWrapper>
  )
}
