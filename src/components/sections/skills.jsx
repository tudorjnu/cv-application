import SectionWrapper from "../layout/section-wrapper"

const ex = {

  name: "Web Development",
  level: "Master",
  keywords: [
    "HTML",
    "CSS",
    "JavaScript"
  ]

}

export default function SkillsSection() {
  return (
    <SectionWrapper sectionTitle="Experience" >
      <div>
        <h4>{ex.name}</h4>
        <span>{ex.level}</span>
        <ul>
          <li>{ex.keywords[0]}</li>
          <li>{ex.keywords[1]}</li>
          <li>{ex.keywords[2]}</li>
        </ul>
      </div>
    </SectionWrapper>
  )

}
