import React, { useEffect, useState } from 'react'

const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData(url);
    }, [url]);

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Something went wrong during fetch please check your useFetchData.jsx hook");
            };
            const data = await response.json();
            setLoading(false);
            setData(data);
            setError(null);

        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    }
  return {data, loading, error};
}

export default useFetchData