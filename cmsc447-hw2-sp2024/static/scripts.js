// Function to update user points
function updateUser(Id) {
    console.log(`Update for user ${Id}`);
    const points = prompt('Enter new points:');
    if (points !== null) {
        fetch('/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Id: Id, points: points })
        })
        .then(response => {
            if (response.ok) {
                getUsers();
            } else {
                alert('Failed to update user');
            }
        });
    }
}

// Function to delete user
function deleteUser(Id) {
    console.log(`Delete for user ${Id}`);
    if (confirm('Are you sure you want to delete this user?')) {
        fetch(`/users?Id=${Id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                getUsers();
            } else {
                alert('Failed to delete user');
            }
        });
    }
}

// Function to fetch users from backend and display them
function getUsers() {
    fetch('/users')
    .then(response => response.json())
    .then(users => {
        const usersList = document.getElementById('users-list');
        usersList.innerHTML = '';
        users.forEach(user => {
            const userItem = document.createElement('div');
            userItem.innerHTML = `
                <p>Name: ${user.name}</p>
                <p>ID: ${user.Id}</p>
                <p>Points: ${user.points}</p>
                <button onclick="updateUser(${user.Id})">Update Points</button>
                <button onclick="deleteUser(${user.Id})">Delete User</button>
            `;
            usersList.appendChild(userItem);
        });
    });
}

// Ensure getUsers is called when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', getUsers);
