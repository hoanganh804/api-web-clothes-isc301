import { ProductModel } from "../models/product.model.js";

export const getProducts = async (req, res) => {
  // const perPage = 4;
  // const numberPage = parseInt(req.query.page) || 1;
  // const begin = (numberPage - 1) * perPage;
  // const end = numberPage * perPage;
  try {
    const products = await ProductModel.find({});
    res.status(200).json(products); //products.slice(begin, end)
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = new ProductModel(req.body);
    await product.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProductsByCategory = async (req, res) => {
  const category = req.params.category;
  try {
    const products = await ProductModel.find({ category: category });
    res.status(200).json(products.slice(products));
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getProductsById = async (req, res) => {
  const _id = req.params._id;
  // console.log(_id);
  try {
    const products = await ProductModel.find({ _id: _id });
    res.status(200).json(products.slice(products));
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// export const deleteProduct = async (req, res) => {
//   try {
//     const product = new ProductModel(req.body);
//     await product.save();
//     // console.log(data);
//     console.log(req.body);
//     res.status(200).json(product);
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// };
