const db = require("./db");

async function getUsers() {
  const conn = await db.connect();
  const query =
    "SELECT * FROM users JOIN addresses ON users.id = addresses.user_id;";

  return await conn
    .query(query)
    .then((data) => {
      console.log("Showing all registered users.");
      return data[0];
    })
    .catch((err) => {
      return err;
    });
}

async function insertUser(user) {
  const conn = await db.connect();
  const USER_ID_GENERATED = generateId();

  const query = {
    user: {
      sql: "INSERT INTO users(id, first_name, last_name) VALUES (?, ?, ?);",
      values: [
        USER_ID_GENERATED,
        user.personalInfo.firstName,
        user.personalInfo.lastName,
      ],
    },

    address: {
      sql: "INSERT INTO addresses(user_id, zip, street, number, neighborhood, city, state, complement) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      values: [
        USER_ID_GENERATED,
        user.address.zip,
        user.address.street,
        user.address.number,
        user.address.neighborhood,
        user.address.city,
        user.address.state,
        user.address.complement,
      ],
    },
  };

  return await conn
    .query(query.user.sql, query.user.values)
    .then(async () => {
      return await conn.query(query.address.sql, query.address.values);
    })
    .then(() => {
      console.log("User registered succesfully.");
      return { status: "SUCCESS" };
    })
    .catch(() => {
      return { status: "ERROR" };
    });
}

function generateId() {
  const date = new Date();

  return date.getTime();
}

module.exports = {
  getUsers,
  insertUser,
};
