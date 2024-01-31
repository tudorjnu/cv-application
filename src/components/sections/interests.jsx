import SectionWrapper from "../layout/section-wrapper"

function InterestsItem({ name, keywords }) {
  return (
    <div>
      <h4>{name}</h4>
      <ul>
        {keywords.map((keyword, index) => <li key={index}>{keyword}</li>)}
      </ul>
    </div>

  )
}

export default function InterestsSection({ list }) {
  return (
    <SectionWrapper sectionTitle="Interests" sectionList={list} SectionItem={InterestsItem} />
  )
}
