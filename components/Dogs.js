import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import DelayedQuery from "./DelayedQuery";
import DogPhoto from "./DogPhotos";

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;

function Dogs({}) {
  const { loading, error, data } = useQuery(GET_DOGS);
  const [dog, setDog] = useState("");

  const onDogSelected = (e) => {
    e.preventDefault();
    setDog(e.target.value);
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <select name="dog" onChange={onDogSelected}>
        {data.dogs.map((dog) => (
          <option key={dog.id} value={dog.breed}>
            {dog.breed}
          </option>
        ))}
      </select>
      <DogPhoto breed={dog} />
      <DelayedQuery />
    </>
  );
}

export default Dogs;
