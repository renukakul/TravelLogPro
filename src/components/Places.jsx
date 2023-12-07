import React from 'react';

// Places component that displays a list of places
export default function Places({ title, places, fallbackText, onSelectPlace, isLoading, loadingText }) {
  console.log(places);

  return (
    <section className="places-category">
      {/* Display the title of the places category */}
      <h2>{title}</h2>

      {/* Display a loading message when data is being fetched */}
      {isLoading && <p className="fallback-text">{loadingText}</p>}

      {/* Display a fallback message when no places are available */}
      {!isLoading && places.length === 0 && <p className="fallback-text">{fallbackText}</p>}

      {/* Display the list of places when available */}
      {!isLoading && places.length > 0 && (
        <ul className="places">
          {/* Map through the places array and render each place as a list item */}
          {places.map((place) => (
            <li key={place.id} className="place-item">
              {/* Button with an onClick event to handle place selection */}
              <button onClick={() => onSelectPlace(place)}>
                {/* Display the image of the place */}
                <img src={`http://localhost:3000/${place.image.src}`} alt={place.image.alt} />
                {/* Display the title of the place */}
                <h3>{place.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
