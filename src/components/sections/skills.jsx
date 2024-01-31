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


function SkillsItem({ name, level, keywords }) {
  return (

    <div>
      <h4>{name}</h4>
      <span>{level}</span>
      <ul>
        <li>{keywords[0]}</li>
        <li>{keywords[1]}</li>
        <li>{keywords[2]}</li>
      </ul>
    </div>
  )

}

export default function SkillsSection({ list }) {
  return (
    <SectionWrapper sectionTitle="Experience" sectionList={list} SectionItem={SkillsItem} />
  )

}
