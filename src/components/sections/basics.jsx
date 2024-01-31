const style = {
  display: "flex",
  gap: "1rem",
  listStyleType: "none",
  paddingLeft: "0",
}

const ex = {
  name: "John Doe",
  label: "Programmer",
  image: "",
  email: "john@gmail.com",
  phone: "(912) 555-4321",
  url: "https://johndoe.com",
  summary: "A summary of John Doe…",
  location: {
    "address": "2712 Broadway St",
    "postalCode": "CA 94115",
    "city": "San Francisco",
    "countryCode": "US",
    "region": "California"
  },
  profiles: [
    {
      network: "Twitter",
      username: "john",
      url: "https://twitter.com/john"
    }
  ]
}

export default function BasicsSection() {

  return (
    <section style={{ gridArea: "header" }}>
      <h1>{ex.name}</h1>
      <h2>{ex.label}</h2>
      <ul style={style}>
        <li>{ex.phone}</li>
        <li>{ex.email}</li>
        <li>{ex.url}</li>
        {ex.profiles.map((profile, index) => (
          <li key={index}>
            {profile.network}: <a href={profile.url}>{profile.username}</a>
          </li>
        ))}
        <li>{ex.location.city}, {ex.location.countryCode}</li>
      </ul>
    </section>
  )

}
