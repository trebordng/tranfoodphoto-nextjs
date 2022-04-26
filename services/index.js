import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GPAPHCMS_ENDPOINT;
export const getFoodImages = async () => {
  const query = gql`
    query MyQuery {
      foods {
        alt
        title
        image {
          url
        }
      }
    }
  `;
  const results = await request(graphqlAPI, query);
  return results.foods;
};
