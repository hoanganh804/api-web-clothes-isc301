import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import productsRouters from "./src/routers/product.routers.js";

const app = express();
const PORT = process.env.PORT || 5000;

const URI = `mongodb+srv://hoanganh:1IWk6vMzxtNrkZiE@cluster0.eujyv.mongodb.net/mern-first?retryWrites=true&w=majority`;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conected to mongodb");
  })
  .catch((err) => {
    console.log(`Error connect mongodb with err code: ${err}`);
  });

app.use("/products", productsRouters);

app.listen(PORT, () => {
  console.log(`Server runinng on PORT ${PORT}`);
});
