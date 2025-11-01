const addMoney = async (username, amount) => {
  try {
    // Get all users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Find and update the user's wallet
    const userIndex = users.findIndex(u => u.username === username);
    if (userIndex === -1) {
      throw new Error("User not found");
    }

    users[userIndex].wallet += amount;
    localStorage.setItem("users", JSON.stringify(users));

    // Also update currentUser if it's the logged-in user
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
    if (currentUser && currentUser.username === username) {
      currentUser.wallet += amount;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      localStorage.setItem("userWallet", currentUser.wallet.toString());
    }

    return users[userIndex];
  } catch (error) {
    console.error('Add money error:', error);
    throw error;
  }
};

export default addMoney;
