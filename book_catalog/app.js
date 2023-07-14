const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const book = require("./src/routes/bookRoute");

app.use(express.json());
app.use(cors());
app.use("/book", book);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
