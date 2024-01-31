import SectionWrapper from "../layout/section-wrapper"

function ProjectItem({ name, startDate, endDate, description, highlights, url }) {
  return (
    <div>
      <div>
        <h4>{name}</h4>
        <span>{startDate} - {endDate}</span>
      </div>
      <a href={url}>{url}</a>
      <p>{description}</p>
      <ul>
        <li>{highlights[0]}</li>
      </ul>
    </div>
  )

}

export default function ProjectsSection({ list }) {
  return (
    <SectionWrapper sectionTitle="Projects" sectionList={list} SectionItem={ProjectItem} />
  )
}
