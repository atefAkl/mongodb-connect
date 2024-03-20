const mongodb = require("mongodb");

const client = mongodb.MongoClient;

const Url = "mongodb://127.0.0.1:27017";

const dbname = "Project01";

client.connect(Url, (err, res) => {
  if (err) {
    return console.log(err);
  }

  console.log("success");

  const db = res.db(dbname);

  db.collection("users").insertMany(
    [
      {
        name: "Atef M. Aql",
        age: 40,
        city: "Qassim",
      },
      {
        name: "Mona Atef Aql",
        age: 8,
        city: "Helwan",
      },
      {
        name: "Rinad Atef Aql",
        age: 10,
        city: "Helwan",
      },
      {
        name: "Omar Atef Aql",
        age: 2,
        city: "Helwan",
      },
    ],
    (insErr, insRes) => {
      if (insErr) {
        return console.log("unable to save user due to: " + insErr);
      }

      console.log(insRes.insertedCount);
    }
  );
  //   db.collection("users").insertOne(
  //     {
  //       name: "ali atef aql",
  //       age: 7,
  //       city: "Helwan",
  //     },
  //     (insErr, insRes) => {
  //       if (insErr) {
  //         return console.log("unable to save user due to: " + insErr);
  //       }

  //       console.log(insRes.insertedId);
  //     }
  //   );
});
