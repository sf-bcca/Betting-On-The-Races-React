const getAllUsersAdmin = async (teamId = 2) => {
  try {
    // Get all users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Filter out admin users
    const nonAdminUsers = users.filter(user => !user.isAdmin);

    return nonAdminUsers;
  } catch (error) {
    console.error("Error fetching non-admin users:", error);
    throw error;
  }
};

export default getAllUsersAdmin;
