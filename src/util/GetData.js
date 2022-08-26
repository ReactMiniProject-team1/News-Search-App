import axios from "axios";
import { useEffect } from "react";

// "YOUR_API_KEY"
let API_KEY = "YOUR_API_KEY";

export default function GetData() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&api-key=${API_KEY}`);
        let data = res.data.response.docs;
        console.log(data);
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])
}