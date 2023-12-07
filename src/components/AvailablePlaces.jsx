import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

// AvailablePlaces component for displaying a list of available places
export default function AvailablePlaces({ onSelectPlace }) {
  // State to manage loading status
  const [isFetching, setIsFetching] = useState(false);
  // State to store the fetched places data
  const [availablePlaces, setAvailablePlaces] = useState([]);
  // State to handle errors during data fetching
  const [error, setError] = useState();

  // useEffect to fetch places data and handle sorting based on distance
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        // Fetch available places data
        const places = await fetchAvailablePlaces();

        // Get user's geolocation
        navigator.geolocation.getCurrentPosition((position) => {
          // Sort places by distance from the user's location
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );

          // Update the state with sorted places
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        // Handle errors during data fetching
        setError({
          message:
            error.message || "Could not fetch places, please try again later",
        });
      }

      setIsFetching(false);
    }

    // Fetch places when the component mounts
    fetchPlaces();
  }, []); // Depend on an empty array to run the effect only once when the component mounts

  // Callback function to handle confirmation after an error
  const handleConfirm = () => {
    setIsFetching(true);
    setError(null);
  };

  // If there is an error, render the Error component
  if (error) {
    return (
      <Error
        title="An error occurred!"
        message={error.message}
        onConfirm={handleConfirm}
      />
    );
  }

  // Render the Places component with the fetched data
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching Places Data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
