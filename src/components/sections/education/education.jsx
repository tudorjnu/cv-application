import SectionWrapper from "../../layout/section-wrapper"
import EducationItem from "./education-item"
import { v4 as uuidv4 } from 'uuid';

const educationList = [
  {
    uuid: uuidv4(),
    institution: "University",
    url: "https://institution.com/",
    area: "Software Development",
    studyType: "Bachelor",
    startDate: "2011-01-01",
    endDate: "2013-01-01",
    score: "4.0",
    courses: [
      { courseName: "DB1101", courseTitle: "Basic SQL" }
    ],
    highlights: [
      "did this amazing stuff",
      "and also this cool shit",
    ]
  },
  {
    uuid: uuidv4(),
    institution: "University",
    url: "https://institution.com/",
    area: "Software Development",
    studyType: "Bachelor",
    startDate: "2011-01-01",
    endDate: "2013-01-01",
    score: "4.0",
    courses: [
      { courseName: "DB1101", courseTitle: "Basic SQL" }
    ]
  },
]


export default function EducationSection() {

  return (
    <SectionWrapper sectionTite="Education" >
      {educationList.map(item => (
        <EducationItem
          key={item.uuid}
          institution={item.institution}
          url={item.url}
          area={item.area}
          studyType={item.studyType}
          startDate={item.startDate}
          endDate={item.endDate}
          score={item.score}
          courses={item.courses}
          highlights={item.highlights}
        />
      ))}
    </SectionWrapper>
  )
}
