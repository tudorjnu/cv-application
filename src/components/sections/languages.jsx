import SectionWrapper from "../layout/section-wrapper"

const ex = {
  language: "English",
  fluency: "Native speaker"
}

export default function LanguagesSection() {
  return (
    <SectionWrapper sectionTitle="Languages" >
      <div>
        <h4>{ex.language}</h4>
        <span>{ex.fluency}</span>
      </div>
    </SectionWrapper>
  )
}
