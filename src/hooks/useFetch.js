import { useEffect, useState } from 'react';

// Custom React hook for handling data fetching
export function useFetch(fetchFn, initialValue) {
  // State for tracking the fetching status
  const [isFetching, setIsFetching] = useState();
  // State for handling errors during data fetching
  const [error, setError] = useState();
  // State for storing the fetched data
  const [fetchedData, setFetchedData] = useState(initialValue);

  // useEffect hook to execute the data fetching logic when the component mounts or fetchFn changes
  useEffect(() => {
    // Async function to fetch data
    async function fetchData() {
      // Set isFetching to true to indicate that data fetching is in progress
      setIsFetching(true);

      try {
        // Call the provided fetch function
        const data = await fetchFn();
        // Set the fetched data in the state
        setFetchedData(data);
      } catch (error) {
        // If an error occurs during fetching, set the error state
        setError({ message: error.message || 'Failed to fetch data.' });
      }

      // Set isFetching to false to indicate that data fetching is complete
      setIsFetching(false);
    }

    // Call the fetchData function
    fetchData();
  }, [fetchFn]); // Depend on fetchFn so that the effect is re-run when fetchFn changes

  // Return an object with the current state and a function to update the fetched data
  return {
    isFetching,
    fetchedData,
    setFetchedData,
    error
  };
}
