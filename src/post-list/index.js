import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const POST_QUERY = gql`
  query {
    postsList {
      items {
        id
        createdAt
        url
        description
        votes
      }
    }
  }
`;
export default graphql(POST_QUERY, {
  props(result) {
    const { data } = result;
    const { loading, refetch } = data;
    let posts = [];
    if (data && data.postsList) posts = data.postsLists.items;
    return {
      loading,
      posts,
      refetch
    };
  }
})(PostList);
