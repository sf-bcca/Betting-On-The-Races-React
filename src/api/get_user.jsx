const getUser = async (username, password) => {
  try {
    // Get user from localStorage
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Fallback: Initialize admin user if no users exist
    if (users.length === 0) {
      const adminUser = {
        id: "admin_001",
        name: "Admin",
        username: "admin123",
        password: "password",
        wallet: 10000,
        email: "admin@example.com",
        phone: "(123) 456-7890",
        isAdmin: true,
        createdAt: new Date().toISOString()
      };
      users.push(adminUser);
      localStorage.setItem("users", JSON.stringify(users));
      console.log("✅ Admin user initialized in getUser");
    }
    
    const user = users.find(u => u.username === username);
    
    console.log(`Attempting login with username: ${username}`);
    console.log(`Users in storage: ${users.map(u => u.username).join(", ")}`);
    console.log(`User found: ${user ? user.username : "NOT FOUND"}`);

    if (user && user.password === password) {
      // Save current user to localStorage
      localStorage.setItem("currentUser", JSON.stringify(user));
      localStorage.setItem("userWallet", user.wallet.toString());
      console.log(`✅ Login successful for ${username}`);
      return user;
    } else if (!user) {
      console.error(`User "${username}" not found`);
      return null;
    } else {
      console.error(`Password mismatch for ${username}`);
      return null;
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export default getUser;
