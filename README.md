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

express for creating the web server.
body-parser for handling JSON request bodies.
node:fs/promises for asynchronous file system operations.

- *Endpoints:*
  GET /places: Retrieve places.
  GET /user-places: Retrieve user-specific places.
  PUT /user-places: Update user-specific places.
- *CORS Configuration:*
  Allow all domains to access the API for flexibility.
