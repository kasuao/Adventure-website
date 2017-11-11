import axios from "axios";

export default {
  // Gets all adventures
  getAdventure: function() {
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
  getAdventure: function() {
    return axios.get("/api/adventures");
  }
};
