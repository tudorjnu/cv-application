import { Input } from "./form";

export function WorkForm({ resume, setResume }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setResume({
      ...resume,
      work: {
        position: formData.get("position"),
        name: formData.get("name"),
        endDate: formData.get("endDate"),
      },
    });
  };

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <Input id="position" label="Position" />
      <Input id="name" label="Company Name" />
      <Input id="endDate" type="date" label="End Date" />
      <button type="submit">Submit</button>
    </form>
  );
}

export function WorkSection({ position, name, endDate }) {
  return (
    <section>
      <h2>Work</h2>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>
          {position} at {name}
        </span>
        <span>{endDate}</span>
      </div>
    </section>
  );
}
