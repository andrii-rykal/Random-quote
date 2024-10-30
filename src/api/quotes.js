import { client } from "./httpClient";

export const getQuote = () => {
  return client.get("/v1/quotes", {
    headers: {
      "X-Api-Key": "YLKC63wkYrJ3GzNvzRgBmg==S3hcWkiGsDvBxwNl",
    },
  });
};
