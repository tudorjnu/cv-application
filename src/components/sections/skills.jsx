import SectionWrapper from "../layout/section-wrapper"

function SkillsItem({ name, level, keywords }) {
  return (

    <div>
      <h4>{name}</h4>
      <span>{level}</span>
      <ul>
        {keywords.map((keyword, index) => <li key={index}>{keyword}</li>)}
      </ul>
    </div>
  )

}

export default function SkillsSection({ list }) {
  return (
    <SectionWrapper sectionTitle="Experience" sectionList={list} SectionItem={SkillsItem} />
  )

}
