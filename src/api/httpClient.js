import axios from "axios";

export const client = axios.create({
  baseURL: "https://api.api-ninjas.com",
  headers: {
    "X-Api-Key": "YLKC63wkYrJ3GzNvzRgBmg==S3hcWkiGsDvBxwNl",
  },
});
