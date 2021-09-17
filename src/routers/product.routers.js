import {
  createProduct,
  getProducts,
  getProductsByCategory,
  getProductsById,
} from "../controllers/product.controllers.js";
import express from "express";

const router = express.Router();

router.get("/", getProducts);

router.get("/category/:category", getProductsByCategory);

router.get("/id/:_id", getProductsById);

router.post("/", createProduct);

export default router;
