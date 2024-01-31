import SectionWrapper from "../layout/section-wrapper"

const ex = {
  title: "Award",
  date: "2014-11-01",
  awarder: "Company",
  summary: "There is no spoon."
}

export default function AwardsSection() {
  return (
    <SectionWrapper sectionTitle="Awards" >
      <div>
        <h4>{ex.title}</h4>
        <h5>{ex.awarder}</h5>
        <span>{ex.date}</span>
        <p>{ex.summary}</p>
      </div>
    </SectionWrapper>
  )

}
