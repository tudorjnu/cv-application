import SectionWrapper from "../layout/section-wrapper"

const ex = {
  name: "Jane Doe",
  reference: "Reference…"
}

export default function ReferencesSection() {
  return (
    <SectionWrapper sectionTitle="References" >
      <div>
        <h4>{ex.name}</h4>
        <p>{ex.reference}</p>
      </div>
    </SectionWrapper>
  )
}
