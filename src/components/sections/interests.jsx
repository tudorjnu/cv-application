import SectionWrapper from "../layout/section-wrapper"

const ex = {
  name: "Wildlife",
  keywords: [
    "Ferrets",
    "Unicorns"
  ]
}

export default function InterestsSection() {
  return (
    <SectionWrapper sectionTitle="Interests" >
      <div>
        <h4>{ex.name}</h4>
        <ul>
          <li>{ex.keywords[0]}</li>
          <li>{ex.keywords[1]}</li>
        </ul>
      </div>
    </SectionWrapper>
  )
}
