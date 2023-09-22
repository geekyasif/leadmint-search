import axios from "axios";
import React, { useEffect, useState } from "react";

function useSearch(searchText) {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (searchText) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "http://139.59.6.16/api/v1/publisher/appsearch",
        { name: searchText },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", 
          },
        }
      );
      const _data = res.data.data;
      setResponse(_data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchText) {
        fetchData(searchText);
      } else {
        setResponse([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

  return { loading, response, fetchData };
}

export default useSearch;
