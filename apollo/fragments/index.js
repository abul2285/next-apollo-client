import gql from "graphql-tag";

export const authorFragment = gql`
  fragment AuthorPageComment on Comment {
    postedBy {
      name
    }
  }
`;

export const commentsFragment = gql`
  fragment CommentsPageComment on Comment {
    id
    ...AuthorPageComment
    createdAt
    content
  }
  ${authorFragment}
`;
