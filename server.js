require("dotenv").config();
const express = require("express");
const connectDB = require("./config/ConnectDB");
const Person = require("./models/Person");

const app = express();

const PORT = process.env.PORT || 4000
app.use(express.json());

connectDB();

app.listen(PORT, (err) => {
if (err) throw console.error(err);
console.log('listen to port '+PORT)
});

//Create and Save a Record of a Model

// const newPerson = new Person({
//   name: "belhsan",
//   age: "25",
//   favoriteFoods: ["pancakes", "pizza", "3ejja"],
// });

// newPerson.save(function (err, data) {
//   err ? console.log(err) : console.log(data);
// });

//**********************************
//Create Many Records with model.create()

// const arrayOfPeople = [
//   { name: "belhsan", age: 22, favoriteFoods: ["kafteji", "mloukheya", "Sauce"] },
//   { name: "ahmed", age: 25, favoriteFoods: ["Pasta", "Sauce", "burritos"] },
//   {
//     name: "maram",
//     age: 18,
//     favoriteFoods: ["Couscous", "mongo", "mloukheya", "burritos"],
//   },
// ];

// Person.create(arrayOfPeople);

// const arrayOfMarys = [
//   { name: "maram", age: 18, favoriteFoods: ["kafteji", "mloukheya", "Sauce"] },
//   { name: "maram", age: 18, favoriteFoods: ["Pasta", "Sauce"] },
//   {
//     name: "maram",
//     age: 18,
//     favoriteFoods: ["Couscous", "mongo", "mloukheya"],
//   },
// ];

// Person.create(arrayOfMarys)

//**********************************
//Use model.find() to Search Your Database

// Person.find(
//   { $or: [{ name: "maram" }, { name: "maram" }] },
//   function (err, data) {
//     err ? console.log(err) : console.log(data);
//   }
// );

//**********************************
//Use model.findOne() to Return a Single Matching Document from Your Database

// Person.findOne({ favoriteFoods: "Sauce" }, function (err, data) {
//   err ? console.log(err) : console.log(data);
// });

//**********************************
//Use model.findById() to Search Your Database By _id

// Person.findById("6212201069f8e438d98ab304", function (err, data) {
//   err ? console.log(err) : console.log(data);
// });

//**********************************
//Perform Classic Updates by Running Find, Edit, then Save

// Person.findById("62121f3b3181d421417e7546", function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     data.favoriteFoods.push("Humberguer");
//     data.save();
//     console.log(data);
//   }
// });

//**********************************
//Perform New Updates on a Document Using model.findOneAndUpdate()

// Person.findOneAndUpdate(
//   { name: "ahmed" },
//   { age: 20 },
//   { new: true },
//   function (err, data) {
//     err ? console.log(err) : console.log(data);
//   }
// );

//**********************************
//Delete One Document Using model.findByIdAndRemove

// Person.findByIdAndRemove("62121f3b3181d421417e7546", function (err, data) {
//   err ? console.log(err) : console.log(data);
// });

//**********************************
//MongoDB and Mongoose - Delete Many Documents with model.remove()

// Person.remove(
//   {
//     name: "maram",
//   },
//   function (err, data) {
//     err ? console.log(err) : console.log(data);
//   }
// );

//**********************************
//Chain Search Query Helpers to Narrow Search Results

// Person.find({ favoriteFoods: "burritos" })
//   .sort({ name: 1 })
//   .limit(2)
//   .select({ age: false })
//   .exec(function (err, data) {
//     err ? console.log(err) : console.log(data);
//   });