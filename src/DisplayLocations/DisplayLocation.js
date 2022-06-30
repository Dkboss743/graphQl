import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;
const DisplayLocation = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error</p>;
  console.log(data.locations);

  return data.locations.map(({ id, name, description, photo }) => {
    return (
      <div key={id}>
        <h3>{name}</h3>
        <img
          width="400"
          height="250"
          alt="location-reference"
          src={`${photo}`}
        />
        <br />
        <b>About this location:</b>
        <p>{description}</p>
        <br />
      </div>
    );
  });
};
export default DisplayLocation;
