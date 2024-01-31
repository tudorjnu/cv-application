/* eslint-disable react/prop-types */
import { Link } from "../buttons/buttons"

const style = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  listStyleType: "none",
  paddingLeft: "0",
}


export default function BasicsSection({ name, label, image, email, phone, url, summary, location, profiles }) {

  return (
    <>
      <h1>{name}</h1>
      <h2>{label}</h2>
      <ul style={style}>
        <li><Link icon="phone" href={`tel:${phone}`} content={phone} /></li>
        <li><Link icon="envelope" href={`mailto:${email}`} content={email} /></li>
        <li><Link icon="link" href={url} content={url} /></li>
        {profiles.map((profile, index) => (
          <li key={index}>
            <Link icon={['fab', profile.network.toLowerCase()]} href={profile.url} content={profile.username} />
          </li>
        ))}
        <li>{location.city}, {location.countryCode}</li>
      </ul>
    </>
  )

}
