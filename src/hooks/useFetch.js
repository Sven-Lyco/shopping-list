import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await fetch(url);
    const newData = await response.json();
    if (response.status === 200) {
      setData(newData);
    } else {
      console.error("Opps, something went wrong!");
    }
  }

  useEffect(() => fetchData(), []);

  return [data, fetchData];
}

export default useFetch;
