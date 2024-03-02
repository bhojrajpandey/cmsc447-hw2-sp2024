# cmsc447-hw2-sp2024
scripts.js
Purpose: Manages client-side interactions for a CRUD application.
Main Functions:
getUsers(): Fetches user data from the server and dynamically populates the HTML with user details and action buttons.
updateUser(Id): Opens a prompt for the new points, sends a PUT request to update user points, and refreshes the user list.
deleteUser(Id): Confirms the user deletion, sends a DELETE request, and updates the user list.
app.py
Framework: Flask (Python-based web framework).
Functionality: Serves as the backend server, handling API requests for creating, reading, updating, and deleting (CRUD) user data.
Endpoints:
GET /users: Returns a list of all users.
PUT /users: Updates points for a specific user.
DELETE /users: Deletes a specified user from the database.