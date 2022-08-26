import axios from "axios";

const DEFAULT_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

export default function getData() {
  return (
    axios.get(`${DEFAULT_URL}?api-key=${process.env.REACT_APP_KEY}&q=${q}&page=${page}`)
    .then((result) => {
      let dataBase = result.data.response.docs
      /** 데이터 출력 **/
      console.log(dataBase)
    }) 
  )
};