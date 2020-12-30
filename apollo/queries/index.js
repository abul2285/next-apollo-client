import gql from "graphql-tag";
import { commentsFragment } from "../fragments";

export const COMMENTS_QUERY = gql`
  query {
    comments {
      ...CommentsPageComment
    }
  }
  ${commentsFragment}
`;
