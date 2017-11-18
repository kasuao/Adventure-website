import axios from "axios";

export default {
  // Gets all adventures
  getAdventures: function() {
    return axios.get("/api/adventures");
  },
  // Gets the adventure with the given id
  getAdventure: function(id) {
    return axios.get("/api/adventures/" + id);
  },
  // Deletes the adventure with the given id
  deleteAdventure: function(id) {
    return axios.delete("/api/adventures/" + id);
  },
  // Saves a adventure to the database
  saveAdventure: function(adventureData) {
    return axios.post("/api/adventures", adventureData);
  },

    // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the User with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a User to the database
  saveUser: function(userData) {
    console.log(userData);
    return axios.post("/api/users/", userData);
  }
};
