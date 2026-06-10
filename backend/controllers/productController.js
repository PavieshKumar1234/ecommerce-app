const Product = require("../models/Product");

// ADD PRODUCT - ADMIN ONLY
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, image, stock } = req.body;

    if (!name || !description || !price || !category || !image) {
      return res.status(400).json({
        message: "Please enter all product details"
      });
    }

    const product = await Product.create({
      name,
      description,
      price,
      category,
      image,
      stock
    });

    res.status(201).json({
      message: "Product added successfully",
      product
    });
  } catch (error) {
    res.status(500).json({
      message: "Add product error",
      error: error.message
    });
  }
};

// GET ALL PRODUCTS - PUBLIC
const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Get products error",
      error: error.message
    });
  }
};

// GET SINGLE PRODUCT - PUBLIC
const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Get single product error",
      error: error.message
    });
  }
};

// UPDATE PRODUCT - ADMIN ONLY
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct
    });
  } catch (error) {
    res.status(500).json({
      message: "Update product error",
      error: error.message
    });
  }
};

// DELETE PRODUCT - ADMIN ONLY
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Product deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Delete product error",
      error: error.message
    });
  }
};

module.exports = {
  addProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct
};