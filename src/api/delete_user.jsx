const deleteUser = async (username) => {
  try {
    // Get all users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Find and remove the user
    const userIndex = users.findIndex(u => u.username === username);
    if (userIndex === -1) {
      throw new Error("User not found");
    }

    const deletedUser = users[userIndex];
    users.splice(userIndex, 1);
    localStorage.setItem("users", JSON.stringify(users));

    // Clear currentUser if it's the deleted user
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
    if (currentUser && currentUser.username === username) {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("userWallet");
    }

    return deletedUser;
  } catch (error) {
    console.error('Delete user error:', error);
    throw error;
  }
};

export default deleteUser;
