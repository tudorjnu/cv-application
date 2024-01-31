import SectionWrapper from "../layout/section-wrapper"

const ex = {
  name: "Wildlife",
  keywords: [
    "Ferrets",
    "Unicorns"
  ]
}

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
