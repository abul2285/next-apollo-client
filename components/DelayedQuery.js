import React from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_DOG_PHOTO } from "./DogPhotos";

function DelayedQuery() {
  const [getDog, { loading, data }] = useLazyQuery(GET_DOG_PHOTO);

  if (loading) return <p>Loading ...</p>;

  return (
    <div>
      {data && data.dog && <img src={data.dog.displayImage} />}
      <button onClick={() => getDog({ variables: { breed: "bulldog" } })}>
        Click me!
      </button>
    </div>
  );
}

export default DelayedQuery;
