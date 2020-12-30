import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { COMMENTS_QUERY } from "../apollo/queries";

function CommentsPage() {
  const { data, loading } = useQuery(COMMENTS_QUERY);
  console.log({ data, loading });
  if (loading) return <p>...loading</p>;
  return (
    <div>
      {data?.comments &&
        data.comments.map((comment) => (
          <p key={comment.id}>{comment.content}</p>
        ))}
    </div>
  );
}

export default CommentsPage;
