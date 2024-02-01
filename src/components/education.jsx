import { Input } from "./form";

export function EducationForm({ resume, setResume }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setResume({
      ...resume,
      education: {
        institution: formData.get("institution"),
        area: formData.get("area"),
        studyType: formData.get("studyType"),
        endDate: formData.get("endDate"),
      },
    });
  };

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <Input id="institution" label="Institution" />
      <Input id="area" label="Area" />
      <Input id="studyType" label="Study Type" />
      <Input id="endDate" type="date" label="End Date" />
      <button type="submit">Submit</button>
    </form>
  );
}

export function EducationSection({ institution, area, studyType, endDate }) {
  return (
    <section>
      <h2>Education</h2>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>
          {studyType} in {area} at {institution}
        </span>
        <span>{endDate}</span>
      </div>
    </section>
  );
}
