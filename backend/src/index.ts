import e from "express";
import dotenv from "dotenv"

dotenv.config();

const app: e.Express = e();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});