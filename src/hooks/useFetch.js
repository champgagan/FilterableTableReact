import { useState } from "react";

export default function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        setError("Something went wrong!!");
      } else {
        const result = await res.json();
        setData(result);
      }
    } catch (err) {
      setError("Something went wrong!!");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, fetchData };
}
