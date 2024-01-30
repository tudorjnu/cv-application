import style from './section-wrapper.module.scss';

export default function SectionWrapper({
  sectionTitle = "My Section Title",
  children,
}) {

  return (
    <div className={style.sectionWrapper} >
      <h3>{sectionTitle}</h3>
      <hr />
      {children}
    </div>
  );
}
