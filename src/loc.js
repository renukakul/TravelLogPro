// Function to convert degrees to radians
function toRad(value) {
  return (value * Math.PI) / 180;
}

// Function to calculate the distance between two geographical points using Haversine formula
function calculateDistance(lat1, lng1, lat2, lng2) {
  // Earth's radius in kilometers
  const R = 6371;

  // Convert latitude and longitude differences to radians
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lng2 - lng1);

  // Convert latitudes to radians
  const l1 = toRad(lat1);
  const l2 = toRad(lat2);

  // Haversine formula for distance calculation
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(l1) * Math.cos(l2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Distance in kilometers
  const distance = R * c;

  return distance;
}

// Function to sort an array of places by their distance from a given point
export function sortPlacesByDistance(places, lat, lon) {
  // Create a copy of the places array to avoid modifying the original array
  const sortedPlaces = [...places];

  // Sort places based on their distance from the given latitude and longitude
  sortedPlaces.sort((a, b) => {
    const distanceA = calculateDistance(lat, lon, a.lat, a.lon);
    const distanceB = calculateDistance(lat, lon, b.lat, b.lon);
    return distanceA - distanceB;
  });

  // Return the sorted array of places
  return sortedPlaces;
}