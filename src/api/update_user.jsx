const updateUser = async (username, updates) => {
  try {
    // Get all users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Find and update the user
    const userIndex = users.findIndex(u => u.username === username);
    if (userIndex === -1) {
      throw new Error("User not found");
    }

    // Update user data
    users[userIndex] = { ...users[userIndex], ...updates };
    localStorage.setItem("users", JSON.stringify(users));

    // Also update currentUser if it's the logged-in user
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
    if (currentUser && currentUser.username === username) {
      const updatedUser = { ...currentUser, ...updates };
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    }

    return users[userIndex];
  } catch (error) {
    console.error('Update user error:', error);
    throw error;
  }
};

export default updateUser;
