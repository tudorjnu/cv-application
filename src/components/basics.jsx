import { Input } from "./form";

export function BasicsForm({ resume, setResume }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setResume({
      ...resume,
      basics: {
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
      },
    });
    alert("Basics Submitted");
  };

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <Input id="name" label="Name" type="text" />
      <Input id="email" label="Email" type="email" />
      <Input id="tel" label="Phone" type="tel" />
      <button type="submit">Submit</button>
    </form>
  );
}

function Name({ children }) {
  return <h1>{children}</h1>;
}
function PhoneNumber({ children }) {
  return <span>{children}</span>;
}
function Email({ children }) {
  return <span>{children}</span>;
}

export function BasicsSection({ name, phone, email }) {
  return (
    <section>
      <Name>{name}</Name>
      <Email>{email}</Email>
      <PhoneNumber>{phone}</PhoneNumber>
    </section>
  );
}
