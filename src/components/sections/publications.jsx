import SectionWrapper from "../layout/section-wrapper"


function PublicationItem({ name, publisher, releaseDate, url, summary }) {
  return (
    <div>
      <div>
        <h4>{name}</h4>
        <h5>{publisher}</h5>
        <span>{releaseDate}</span>
      </div>
      <a href={url}>{url}</a>
      <p>{summary}</p>
    </div>
  )

}

export default function PublicationsSection({ list }) {
  return (
    <SectionWrapper sectionTitle="Publications" sectionList={list} SectionItem={PublicationItem} />
  )
}
