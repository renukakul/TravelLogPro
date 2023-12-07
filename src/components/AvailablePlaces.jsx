
import { useFetch } from "../hooks/useFetch.js";

import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

async function fetchSortedPlaces(){
  const places = await fetchAvailablePlaces();

  return new Promise((resolve)  => {
    navigator.geolocation.getCurrentPosition((position) => {
      
        const sortedPlaces = sortPlacesByDistance(
          places,
          position.coords.latitude,
          position.coords.longitude
        );
        
        resolve(sortedPlaces)
    
      });
  })
}


// AvailablePlaces component for displaying a list of available places
export default function AvailablePlaces({ onSelectPlace }) {
  const {isFetching, error, fetchedData : availablePlaces} = useFetch(fetchSortedPlaces, []);


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
