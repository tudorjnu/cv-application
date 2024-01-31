import SectionWrapper from "../layout/section-wrapper"

function AwardsItem({ title, date, awarder, summary }) {
  return (
    <div>
      <h4>{title}</h4>
      <h5>{awarder}</h5>
      <span>{date}</span>
      <p>{summary}</p>
    </div>
  )

}

export default function AwardsSection({ list }) {
  return (
    <SectionWrapper sectionTitle="Awards" sectionList={list} SectionItem={AwardsItem} />
  )
}
