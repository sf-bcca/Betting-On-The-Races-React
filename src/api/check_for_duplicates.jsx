const checkForDuplicates = async (username) => {
  try {
    // Check localStorage for duplicate usernames
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    return users.some(u => u.username.toLowerCase() === username.toLowerCase());
    
  } catch (error) {
    console.error("❌ checkForDuplicates error:", error);
    throw error;
  }
};

export default checkForDuplicates;
