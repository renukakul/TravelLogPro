// Function to fetch available places from a remote server
export async function fetchAvailablePlaces() {
    const response = await fetch("http://localhost:3000/places");
    const resData = await response.json();
  
    // Check if the response was successful
    if (!response.ok) {
      throw new Error("Failed to Fetch Places");
    }
  
    // Return the array of available places
    return resData.places;
  }
  
  // Function to update user places on the server
  export async function updateUserPlaces(places) {
    const response = await fetch('http://localhost:3000/user-places', {
      method: 'PUT',
      body: JSON.stringify({ places: places }), // Send places data as JSON in the request body
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const resData = await response.json();
  
    // Check if the update was successful
    if (!response.ok) {
      throw new Error('Failed to update user Data.');
    }
  
    // Return a success message
    return resData.message;
  }
  
  // Function to fetch user places from the server
  export async function fetchUserPlaces() {
    const response = await fetch('http://localhost:3000/user-places');
    const resData = await response.json();
  
    // Check if the response was successful
    if (!response.ok) {
      throw new Error('Failed to fetch user places');
    }
  
    // Return the array of user places
    return resData.places;
  }
  