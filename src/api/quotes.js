import { client } from "./httpClient";

// export const getQuote = () => {
//   return client.get(`/v1/quotes`);
// };

// export const getQuoteCategory = (cat) => {
//   return client.get(`/v1/quotes?category=${cat}`);
// };

export const getQuotes = (cat) => {
  const url = cat ? `/v1/quotes?category=${cat}` : `/v1/quotes`;
  return client.get(url);
};

