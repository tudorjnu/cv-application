/* eslint-disable react/prop-types */
import SectionWrapper from "../layout/section-wrapper"


function EducationItem({ institution, url, area, studyType, startDate, endDate, score, courses }) {
  return (
    <div>
      <h4>{studyType} in {area}</h4>
      <div>
        <h5>{institution}</h5>
        <span>{score}</span>
        <span>{startDate} - {endDate}</span>
      </div>
      <a href={url}>{url}</a>
      <ul>
        {courses.map((course, index) => <li key={index}>{course}</li>)}
      </ul>
    </div>
  )
}

export default function EducationSection({ list }) {

  return (
    <SectionWrapper sectionTitle="Education" sectionList={list} SectionItem={EducationItem} />
  )
}
