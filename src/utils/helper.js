//get user from local storage
export const getUser = (key) => {
  const user = JSON.parse(localStorage.getItem("user"))?.message;
  if (key) return user[key];
  return user;
};

//edit user information in local storage usually when there is an update action
export const setUser = (obj) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (typeof obj === "object" && !Array.isArray(obj) && obj !== null) {
    user.message = { ...user.message, ...obj };
    const newVal = JSON.stringify(user);
    localStorage.setItem("user", newVal);
  }
};
