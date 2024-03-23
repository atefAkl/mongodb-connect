const mongodb = require("mongodb");

const client = mongodb.MongoClient;

const Url = "mongodb://127.0.0.1:27017";

const dbname = "Project02";

// the task parts are
// first... the data

const singleUsers = [
  {
    name: "Atef Mohamed Aql",
    age: 40,
    city: "Cairo",
  },
  {
    name: "Siham Abdullah Gad",
    age: 27,
    city: "Ismaelia",
  },
  {
    name: "Ahmed Mustafa Muharram",
    age: 32,
    city: "Asharqiya",
  },
];

const users = [
  {
    name: "Ali Atef Aql",
    age: 27,
  },
  {
    name: "Ashraf Mohamed Aql",
    age: 24,
  },
  {
    name: "Tawfiq Mohamed Aql",
    age: 60,
  },
  {
    name: "Salah Samir Ali",
    age: 27,
  },
  {
    name: "Mona Khalil Ahmed",
    age: 27,
  },
  {
    name: "Shaza Abdallah Mousa",
    age: 27,
  },
  {
    name: "Rinad Mohamed Ahmed",
    age: 27,
  },
  {
    name: "Hejazy Mohamed Aql",
    age: 18,
  },
  {
    name: "Ahmed Mohamed Aql",
    age: 15,
  },
  {
    name: "Sami Mohamed Aql",
    age: 13,
  },
];

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
// Establishing connction with db
client.connect(Url, (err, res) => {
  if (err) {
    return console.log(err);
  }

  console.log("success");

  const db = res.db(dbname);
  //=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
  //  insertOne  3 users
  //=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
  // const [user1, user2, usr3] = singleUsers;

  // singleUsers.forEach((user) => {
  //   db.collection("users").insertOne(user, (error, response) => {
  //     if (error) {
  //       return console.log(error);
  //     }
  //     console.log("User insertion success with id: " + response.insertedId);
  //   });
  // });

  //=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
  //  insertMany 10   5 of them have the same age 27 y
  //=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

  // db.collection("users").insertMany(users, (error, response) => {
  //   if (error) {
  //     return console.log(error);
  //   }
  //   console.log(
  //     "Users insertion success for: " + response.insertedCount,
  //     "documents"
  //   );
  // });

  //=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
  //  find   match  27 y
  //=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

  // db.collection("users").find({ age: 27 })
  // .toArray()
  // .then((matches)=>console.log(matches))
  // .catch(error=>console.log(error));

  //=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
  //  limit first 3    27y
  //=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

  // db.collection("users")
  //   .find({ age: 27 })
  //   .limit(3)
  //   .toArray()
  //   .then((matches) => console.log(matches))
  //   .catch((error) => console.log(error));

  //=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
  //  $set name for the first 4
  //=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

  // db.collection("users")
  //   .find()
  //   .sort({ _id: 1 })
  //   .limit(4)
  //   .toArray()
  //   .then((users) => {
  //     users.forEach((user) => {
  //       db.collection("users").updateOne(
  //         { _id: user._id },
  //         {
  //           $set: { name: "atef abdullatif akl", city: "Luxor" },
  //         }
  //       );
  //     });
  //     console.log("Updated 4 documents.");
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });

  //=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
  //  $inc age for the first 4
  //=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

  // db.collection("users")
  //   .find()
  //   .sort({ _id: 1 })
  //   .limit(4)
  //   .toArray()
  //   .then((users) => {
  //     users.forEach((user) => {
  //       db.collection("users").updateOne(
  //         { _id: user._id },
  //         {
  //           $inc: { age: 7 },
  //         }
  //       );
  //     });
  //     console.log("Updated 4 documents.");
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });

  //=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
  //  updateone for 1  inc age 5
  //=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

  // db.collection("users")
  //   .updateOne(
  //     { _id: mongodb.ObjectId("65fe1de02301a83b650b3554") },
  //     {
  //       $inc: { age: 5 },
  //     }
  //   )
  //   .then((res) => {
  //     console.error("User has been updated success");
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
  //=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
  //  updateMany  inc age 10
  //=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

  // db.collection("users")
  //   .updateMany(
  //     {},
  //     {
  //       $inc: { age: 10 },
  //     }
  //   )
  //   .then((result) => {
  //     console.log("You have updated", result.modifiedCount, "documents");
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
  //=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
  //  deleteMany  age = 41   ==>> deletedCount
  //=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

  // db.collection("users")
  //   .deleteMany({
  //     age: 41,
  //   })
  //   .then((result) => {
  //     console.log("You have deleted", result.deletedCount, "documents");
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });

  //=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
  //  deleteMany  age > 41   ==>> deletedCount
  //=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

  // db.collection("users")
  //   .deleteMany({
  //     age: { $gt: 50 },
  //   })
  //   .then((result) => {
  //     console.log("You have deleted", result.deletedCount, "documents");
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
});
