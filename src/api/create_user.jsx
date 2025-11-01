const createUser = async (name, username, password, wallet, email, phone) => {
  try {
    // Use localStorage instead of backend API
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Check if username already exists
    if (users.some(u => u.username === username)) {
      throw new Error("Username already exists");
    }

    const newUser = { 
      id: Date.now().toString(),
      name, 
      username, 
      password, 
      wallet: wallet || 1000,
      email,
      phone,
      isAdmin: false,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    
    console.log("✅ User created successfully:", newUser);

    return newUser;
  } catch (error) {
    console.error("❌ createUser error:", error);
    throw error;
  }
};

export default createUser;
