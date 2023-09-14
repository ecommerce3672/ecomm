const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect('mongodb+srv://medineshgupta:jony3672@ecommerce.2qwbcla.mongodb.net/Ecommerce?retryWrites=true&w=majority')
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    // .catch((err) => {
    //   console.log(err);
    // });
};

module.exports = connectDatabase;
