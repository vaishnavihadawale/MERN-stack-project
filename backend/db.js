const mongoose = require("mongoose");

const mongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://gofood:gofoodmern@cluster0.vz4bol2.mongodb.net/gofood?retryWrites=true&w=majority&appName=Cluster0"
    );
    mongoose.connection.on('connected', () => console.log('connected'));
    const fetchdata = await mongoose.connection.db.collection("food-items");
    console.log('fetchdata: ', fetchdata);

    //   fetchdata.find({},function (error, data) {
    //     // console.log('');
    //     if (error) console.log("error: ", error);
    //     else console.log(data);
    //   });
  } catch (error) {
    console.log("error: ", error);
  }
};

module.exports = mongoDB;
