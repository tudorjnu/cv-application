import SectionWrapper from "../layout/section-wrapper"

const ex = {
  name: "Publication",
  publisher: "Company",
  releaseDate: "2014-10-01",
  url: "https://publication.com",
  summary: "Description…"
}

export default function PublicationsSection() {
  return (
    <SectionWrapper sectionTitle="Publications" >
      <div>
        <div>
          <h4>{ex.name}</h4>
          <h5>{ex.publisher}</h5>
          <span>{ex.releaseDate}</span>
        </div>
        <a href={ex.url}>{ex.url}</a>
        <p>{ex.summary}</p>
      </div>
    </SectionWrapper>
  )
}
