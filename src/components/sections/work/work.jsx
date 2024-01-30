import SectionWrapper from "../../layout/section-wrapper"
import WorkItem from "./work-item"
import { v4 as uuidv4 } from 'uuid';

const workList = [
  {
    uuid: uuidv4(),
    name: "Company",
    position: "President",
    url: "https://company.com",
    startDate: "2013-01-01",
    endDate: "2014-01-01",
    summary: "Description…",
    highlights: [
      "Started the company"
    ]
  }
]

export default function WorkSection() {
  return (
    <SectionWrapper sectionTitle="Experience" >
      {workList.map(item => (
        <WorkItem
          key={item.uuid}
          name={item.name}
          url={item.url}
          position={item.position}
          startDate={item.startDate}
          endDate={item.endDate}
          summary={item.summary}
          highlights={item.highlights}
        />
      ))}

    </SectionWrapper>
  )

}
