import axios from "axios";

const API_URL = "http://3.80.85.23:8081/auth";

<<<<<<< HEAD
// Permanent username & password (hardcoded account)
const PERMANENT_USER = {
  username: "admin",
  password: "admin123",
  token: "hardcoded-token-123" // can be anything, just a placeholder
};

export const login = async (username, password) => {
  // Check against hardcoded user first
  if (username === PERMANENT_USER.username && password === PERMANENT_USER.password) {
    localStorage.setItem("token", PERMANENT_USER.token);
    return PERMANENT_USER.token;
  }

  // Otherwise, call backend
=======
export const login = async (username, password) => {
>>>>>>> 350b0b7057fe48fc409858b2657d643fb34b2e13
  const response = await axios.post(`${API_URL}/login`, { username, password });
  localStorage.setItem("token", response.data);
  return response.data;
};

export const signup = async (username, email, password) => {
  return axios.post(`${API_URL}/signup`, { username, email, password });
};

export const logout = () => {
  localStorage.removeItem("token");
};
<<<<<<< HEAD
=======



>>>>>>> 350b0b7057fe48fc409858b2657d643fb34b2e13
