import resume from '../../resume.json'

import HeaderSection from '../sections/summary'
import EducationSection from '../sections/education/education';
import SectionWrapper from '../layout/section-wrapper'


export default function Main() {
  const style = {
    display: 'grid',
    gap: '$unit-4',
    gridTemplateRows: '1fr 1fr',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateAreas: `
    "header header"
    "left right"
  `,

  };
  return (
    <main className={`container-1`} style={style}>
      <HeaderSection />
      <div style={{ gridArea: "left" }}>
        <EducationSection />
        <SectionWrapper sectionTitle="Work" >
          <span>Work</span>
        </SectionWrapper>
      </div>
      <div style={{ gridArea: "right" }}>
        <SectionWrapper sectionTitle="Skills" >
          <div></div>
        </SectionWrapper>
      </div>
    </main >
  )
}
