import { useState, useEffect } from "react";

import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false); //loading state
  const [availablePlaces, setAvailablePlaces] = useState([]); //data state
  const [error, setError] = useState(); //error state

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        })
        

      } catch (error) {
        setError({message : error.message || "Could not fetch places, please try again later"});
        
      }

      setIsFetching(false);
    }
    fetchPlaces();
  }, []);

  const handleConfirm =() =>{
    setIsFetching(true);
    setError(null)

  }

  if(error){
    return <Error title="An error Occured!" message={error.message} onConfirm={handleConfirm}/>
  }

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
