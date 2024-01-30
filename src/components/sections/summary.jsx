
const style = {
  display: "flex",
  gap: "1rem",
  listStyleType: "none",
  paddingLeft: "0",
}

export default function HeaderSection({
  name = "John Doe",
  label = " Programmer",
  email = "john@gmail.com",
  phone = "(912) 555-4321",
  url = "https://johndoe.com",
  location = {
    city: "San Francisco",
    countryCode: "US",
  },
  profiles = [
    {
      network: "Twitter",
      username: "john",
      url: "https://twitter.com/john"
    }
  ],
}) {

  return (
    <section style={{ gridArea: "header" }}>
      <h1>{name}</h1>
      <h2>{label}</h2>
      <ul style={style}>
        <li>{phone}</li>
        <li>{email}</li>
        <li>{url}</li>
        {profiles.map((profile, index) => (
          <li key={index}>
            {profile.network}: <a href={profile.url}>{profile.username}</a>
          </li>
        ))}
        <li>{location.city}, {location.countryCode}</li>
      </ul>
    </section>
  )

}
