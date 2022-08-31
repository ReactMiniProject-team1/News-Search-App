import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

export default async function getNewsData(query, page) {

  const URL = (query, page) => 
    `${BASE_URL}?api-key=${API_KEY}&q=${query}&page=${page}&begin_date=19800101&sort=relevance`;

  let result = await axios.get(URL(query, page), {
    params: {
      source: "The New York Times",
      type_of_material: "News"
    },
    validateStatus: function (status) {
      return status < 500;
    }
  })
  .then(res => res.data.response.docs)
  .catch(e => console.log(e))
  
  return result;
};