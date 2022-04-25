import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GPAPHCMS_ENDPOINT;
export const getFoodImages = async () => {
  const query = gql`
    query MyQuery {
      foodsConnection {
        edges {
          node {
            alt
            image {
              url
            }
            title
            id
          }
        }
      }
    }
  `;
  const results = await request(graphqlAPI, query);
  return results.foodsConnection.edges;
};
