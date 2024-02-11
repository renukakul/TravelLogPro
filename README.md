# React_Tourist_destination-

https://github.com/renukakul/React_Tourist_destination/assets/135245268/2f4a4ba1-9c98-40e9-8148-fc5513a63999

# Project Overview
The project is a web application named "PlacePicker" that allows users to create and manage their personal collection of places they would like to visit or have visited. It consists of a server-side Express API for handling data storage and retrieval, and a client-side React application for the user interface.

*Features*

- *User Places Management:*
  Retrieve a list of places from the server.
  View and manage user-specific places, including adding and removing them.

- *User Interface:*
  Display user places using the Places component.
  Show available places using the AvailablePlaces component.
  Modal dialogs for error messages and place deletion confirmation.

- *Error Handling:*
  Display error messages in modal dialogs for a better user experience.
  Handle errors during the update of user places gracefully.

# Project Structure
The project is structured into server-side (Express API) and client-side (React Application).

## Server-side (Express API)
- *Dependencies:*
    - express for creating the web server.
    - body-parser for handling JSON request bodies.
    - node:fs/promises for asynchronous file system operations.
- *Endpoints:*
    - GET /places: Retrieve places.
    - GET /user-places: Retrieve user-specific places.
    - PUT /user-places: Update user-specific places.
- *CORS Configuration:*
    - Allow all domains to access the API for flexibility.
## Client-Side (React Application)
*Components*:
- Places-
    - The Places component is a React component designed to display a list of places.
    - It handles various scenarios such as loading state, empty places, and rendering a list of places with interactive buttons for selecting each place.

- AvailablePlaces 
  - The AvailablePlaces component is a React component designed to display a list of available places based on the user's current location.
  - It utilizes the useFetch custom hook to asynchronously fetch and sort places by distance, and then renders the Places component to display the sorted list.

- ProgressBar
    - The ProgressBar component is a React component designed to display a countdown timer as a progress bar. It utilizes the useState and useEffect hooks to manage the remaining time and update it at regular intervals.

- DeleteConfirmation
    - The DeleteConfirmation component is a React component designed to provide a confirmation dialog for deleting a place. It includes a timer-based automatic confirmation feature, and a progress bar visualizes the remaining time until automatic confirmation. Users can either confirm or cancel the deletion.

- Modal -
  - The Modal component is a React component designed to render a modal dialog. It uses the useRef and useEffect hooks to manage the modal's visibility based on the open prop. The createPortal function is utilized to render the modal as a child of a different DOM element.
 

*Custom Hook*-
- useFetch-
  - The useFetch custom React hook is designed to handle data fetching in a component.
  - It uses the useEffect and useState hooks to manage the fetching status, handle errors, and store the fetched data. The hook returns an object containing the current state and a function to update the fetched data.
 

# Installation and Usage
Prerequisites - NodeJS and npm should be installed on the machine

1. To Start Backend NodeJs Server:
   ```bash
   cd backend
   npm install
   npm start
   ```
2. To Start Frontend React Website
    ```bash
    npm install
    npm run dev
    ```

# License
React:
Released under the MIT License, which is a permissive open-source license

Node.js and Express:
Node.js is released under the MIT License 

  

