import { Input } from "./form";
import PropTypes from "prop-types";
import { useState } from "react";

export function BasicsForm({ resume, setResume }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newBasics = {};

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
      if (value !== "") {
        newBasics[key] = formData.get(key);
      }
    }

    setResume((prevState) => {
      return { ...prevState, basics: { ...prevState.basics, ...newBasics } };
    });
  };

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <Input id="name" label="Name" type="text" />
      <Input id="label" label="Label" type="text" />
      <Input id="email" label="Email" type="email" />
      <Input id="tel" label="Phone" type="tel" />
      <Input id="url" label="URL" type="text" />
      <Input id="summary" label="Summary" type="text" />
      <Input id="location" label="Location" type="text" />
      <Input id="region" label="Region" type="text" />
      <Input id="postalCode" label="Postal Code" type="text" />
      <Input id="city" label="City" type="text" />
      <Input id="countryCode" label="Code" type="text" />
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

function Label({ children }) {
  return <span>{children}</span>;
}

function Image({ src, alt }) {
  return <img src={src} alt={alt} />;
}

function Summary({ children }) {
  return <p>{children}</p>;
}

function Location({ address, postalCode, city, countryCode, region }) {
  return (
    <address>
      <span>{address}</span>
      <span>{postalCode}</span>
      <span>{city}</span>
      <span>{countryCode}</span>
      <span>{region}</span>
    </address>
  );
}

function Profile({ network, username, url }) {
  return (
    <div>
      <span>{network}</span>
      <span>{username}</span>
      <span>{url}</span>
    </div>
  );
}

function Profiles({ profiles }) {
  return profiles.map((profile, i) => <Profile key={i} {...profile} />);
}

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal-container">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
}

function BasicsSection({
  name,
  label,
  image,
  email,
  phone,
  url,
  summary,
  location,
  profiles,
  setResume,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="basics-wrapper">
        <button className="edit-button" onClick={() => setIsModalOpen(true)}>
          Edit
        </button>
        <Name>{name}</Name>
        <Summary>{summary}</Summary>
        <Email>{email}</Email>
        <PhoneNumber>{phone}</PhoneNumber>
        <Label>{label}</Label>
        <Image src={image} alt={name} />
        <Location {...location} />
        <Profiles profiles={profiles} />
        <a href={url}>{url}</a>
      </section>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <BasicsForm setResume={setResume} />
      </Modal>
    </>
  );
}

BasicsSection.defaultProps = {
  basics: {
    name: "John Doe",
    label: "Programmer",
    image: "",
    email: "john@gmail.com",
    phone: "(912) 555-4321",
    url: "https://johndoe.com",
    summary: "A summary of John Doe…",
    location: {
      address: "2712 Broadway St",
      postalCode: "CA 94115",
      city: "San Francisco",
      countryCode: "US",
      region: "California",
    },
    profiles: [
      {
        network: "Twitter",
        username: "john",
        url: "https://twitter.com/john",
      },
    ],
  },
};

BasicsSection.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  image: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  url: PropTypes.string,
  summary: PropTypes.string,
  location: PropTypes.shape({
    address: PropTypes.string,
    postalCode: PropTypes.string,
    city: PropTypes.string,
    countryCode: PropTypes.string,
    region: PropTypes.string,
  }),
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      network: PropTypes.string,
      username: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

export { BasicsSection };
