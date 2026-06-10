const Order = require("../models/Order");
const Product = require("../models/Product");

// CREATE ORDER - USER
const createOrder = async (req, res) => {
  try {
    const { orderItems, shippingAddress, paymentMethod } = req.body;

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({
        message: "No order items found"
      });
    }

    if (
      !shippingAddress ||
      !shippingAddress.fullName ||
      !shippingAddress.phone ||
      !shippingAddress.address ||
      !shippingAddress.city ||
      !shippingAddress.pincode
    ) {
      return res.status(400).json({
        message: "Please enter complete shipping address"
      });
    }

    let finalOrderItems = [];
    let totalAmount = 0;

    for (const item of orderItems) {
      const product = await Product.findById(item.product);

      if (!product) {
        return res.status(404).json({
          message: "Product not found"
        });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({
          message: `${product.name} is out of stock`
        });
      }

      finalOrderItems.push({
        product: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: item.quantity
      });

      totalAmount += product.price * item.quantity;

      product.stock = product.stock - item.quantity;
      await product.save();
    }

    const order = await Order.create({
      user: req.user._id,
      orderItems: finalOrderItems,
      shippingAddress,
      paymentMethod: paymentMethod || "Cash on Delivery",
      totalAmount
    });

    res.status(201).json({
      message: "Order placed successfully",
      order
    });
  } catch (error) {
    res.status(500).json({
      message: "Create order error",
      error: error.message
    });
  }
};

// GET LOGGED-IN USER ORDERS
const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({
      createdAt: -1
    });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: "Get my orders error",
      error: error.message
    });
  }
};

// GET ALL ORDERS - ADMIN
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: "Get all orders error",
      error: error.message
    });
  }
};

// UPDATE ORDER STATUS - ADMIN
const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found"
      });
    }

    order.status = status || order.status;

    const updatedOrder = await order.save();

    res.status(200).json({
      message: "Order status updated successfully",
      order: updatedOrder
    });
  } catch (error) {
    res.status(500).json({
      message: "Update order status error",
      error: error.message
    });
  }
};

module.exports = {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus
};