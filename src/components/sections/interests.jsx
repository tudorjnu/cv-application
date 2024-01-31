import SectionWrapper from "../layout/section-wrapper"

function InterestsItem({ name, keywords }) {
  return (
    <div>
      <h4>{name}</h4>
      <ul>
        <li>{keywords[0]}</li>
        <li>{keywords[1]}</li>
      </ul>
    </div>

  )
}

export default function InterestsSection({ list }) {
  return (
    <SectionWrapper sectionTitle="Interests" sectionList={list} SectionItem={InterestsItem} />
  )
}
