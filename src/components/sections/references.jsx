import SectionWrapper from "../layout/section-wrapper"

const ex = {
  name: "Jane Doe",
  reference: "Reference…"
}

function ReferencesItem({ name, reference }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>{reference}</p>
    </div>
  )

}
export default function ReferencesSection({ list }) {
  return (
    <SectionWrapper sectionTitle="References" sectionList={list} SectionItem={ReferencesItem} />
  )
}
