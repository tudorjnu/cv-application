import resume from '../../resume.json'

import HeaderSection from '../sections/summary'
import EducationSection from '../sections/education/education';
import SectionWrapper from '../layout/section-wrapper'
import WorkSection from '../sections/work/work';


export default function Main() {
  const style = {
    width: "210mm",
    height: "297mm",
    display: 'grid',
    gap: '$unit-4',
    gridTemplateRows: 'auto 1fr',
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
        <WorkSection />
      </div>
      <div style={{ gridArea: "right" }}>
        <SectionWrapper sectionTitle="Skills" >
          <div></div>
        </SectionWrapper>
      </div>
    </main >
  )
}
