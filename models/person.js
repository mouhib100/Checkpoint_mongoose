const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "Foulen",
  },
  age: {
    type: Number,
    default: 20,
  },
  favoriteFoods: {
    type: Array,
    default: ["Choclate", "Pizza"],
  },
});

module.exports = person = mongoose.model("persons", personSchema);