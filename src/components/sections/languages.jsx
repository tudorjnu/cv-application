import SectionWrapper from "../layout/section-wrapper"

const ex = {
  language: "English",
  fluency: "Native speaker"
}

function LanguagesItem({ language, fluency }) {
  return (

    <div>
      <h4>{language}</h4>
      <span>{fluency}</span>
    </div>
  )

}
export default function LanguagesSection({ list }) {
  return (
    <SectionWrapper sectionTitle="Languages" sectionList={list} SectionItem={LanguagesItem} />
  )
}
