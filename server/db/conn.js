const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const DB = `mongodb+srv://anumayagrawal:Ufp8zMVzPj1jwc4J@cluster0.8gk2bhg.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log(error.message));
