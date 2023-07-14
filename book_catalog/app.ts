import express from 'express';
const app = express();
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
