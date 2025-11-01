const getUser = async (username, password) => {
  try {
    // Get user from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.username === username);

    if (user && user.password === password) {
      // Save current user to localStorage
      localStorage.setItem("currentUser", JSON.stringify(user));
      localStorage.setItem("userWallet", user.wallet.toString());
      return user;
    } else if (!user) {
      console.error("User not found");
      return null;
    } else {
      console.error("Password mismatch");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export default getUser;
