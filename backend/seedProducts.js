const mongoose = require("mongoose");
require("dotenv").config();

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    stock: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

const products = [
  // ELECTRONICS
  {
    name: "Royal Smart Watch",
    description:
      "Premium smart watch with AMOLED display, fitness tracking, heart rate monitor, and long battery life.",
    price: 2499,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    stock: 20
  },
  {
    name: "Noise Wireless Headphones",
    description:
      "Wireless headphones with deep bass, soft ear cushions, long battery life, and clear audio quality.",
    price: 1999,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    stock: 25
  },
  {
    name: "Bluetooth Speaker Pro",
    description:
      "Portable Bluetooth speaker with powerful sound, compact body, and long playback time.",
    price: 1799,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80",
    stock: 18
  },
  {
    name: "RGB Gaming Mouse",
    description:
      "High precision gaming mouse with RGB lighting, ergonomic design, and smooth tracking.",
    price: 899,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80",
    stock: 30
  },
  {
    name: "Wireless Keyboard",
    description:
      "Slim wireless keyboard with silent keys, long battery life, and modern compact layout.",
    price: 1299,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",
    stock: 22
  },

  // FASHION
  {
    name: "Classic Denim Jacket",
    description:
      "Stylish denim jacket with premium stitching, modern fit, and durable fabric.",
    price: 2199,
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?auto=format&fit=crop&w=900&q=80",
    stock: 15
  },
  {
    name: "Cotton Casual Hoodie",
    description:
      "Soft cotton hoodie with relaxed fit, premium comfort, and clean streetwear style.",
    price: 1499,
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80",
    stock: 28
  },
  {
    name: "Premium Black T-Shirt",
    description:
      "Comfortable black t-shirt made with soft cotton fabric and modern regular fit.",
    price: 699,
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    stock: 40
  },
  {
    name: "Formal White Shirt",
    description:
      "Elegant formal shirt suitable for office, college events, interviews, and professional wear.",
    price: 1199,
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=900&q=80",
    stock: 26
  },
  {
    name: "Men's Casual Sneakers",
    description:
      "Trendy casual sneakers with comfortable sole, stylish design, and strong grip.",
    price: 1899,
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    stock: 24
  },

  // MOBILES
  {
    name: "Galaxy M Series Smartphone",
    description:
      "Powerful Android smartphone with large display, strong battery, and smooth performance.",
    price: 14999,
    category: "Mobiles",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    stock: 12
  },
  {
    name: "iPhone Style Premium Phone",
    description:
      "Premium smartphone with elegant design, bright display, and advanced camera features.",
    price: 59999,
    category: "Mobiles",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80",
    stock: 8
  },
  {
    name: "5G Performance Smartphone",
    description:
      "Fast 5G smartphone with high refresh display, gaming processor, and long battery backup.",
    price: 21999,
    category: "Mobiles",
    image:
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80",
    stock: 16
  },
  {
    name: "Budget Android Phone",
    description:
      "Affordable smartphone with good battery life, clear display, and everyday performance.",
    price: 8999,
    category: "Mobiles",
    image:
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80",
    stock: 20
  },
  {
    name: "Mobile Power Bank",
    description:
      "Fast charging power bank with compact body, high capacity, and dual USB output.",
    price: 1299,
    category: "Mobiles",
    image:
      "https://images.unsplash.com/photo-1609592806596-b43bada2f5a5?auto=format&fit=crop&w=900&q=80",
    stock: 35
  },

  // GROCERY
  {
    name: "Premium Basmati Rice",
    description:
      "Long grain basmati rice with rich aroma, perfect for biryani, fried rice, and daily meals.",
    price: 799,
    category: "Grocery",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80",
    stock: 50
  },
  {
    name: "Organic Brown Eggs",
    description:
      "Fresh organic brown eggs rich in protein, suitable for breakfast and healthy cooking.",
    price: 159,
    category: "Grocery",
    image:
      "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=900&q=80",
    stock: 60
  },
  {
    name: "Fresh Red Apples",
    description:
      "Crisp and juicy red apples packed with natural sweetness, freshness, and nutrition.",
    price: 249,
    category: "Grocery",
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=900&q=80",
    stock: 45
  },
  {
    name: "Whole Wheat Bread",
    description:
      "Soft whole wheat bread made for healthy breakfast, sandwiches, and daily snacks.",
    price: 55,
    category: "Grocery",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    stock: 70
  },
  {
    name: "Cold Pressed Cooking Oil",
    description:
      "Healthy cold pressed cooking oil suitable for traditional cooking and daily food preparation.",
    price: 349,
    category: "Grocery",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=80",
    stock: 32
  },

  // MAKEUP
  {
    name: "Matte Lipstick Set",
    description:
      "Long lasting matte lipstick set with smooth texture, rich colors, and comfortable finish.",
    price: 599,
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=80",
    stock: 35
  },
  {
    name: "Liquid Foundation",
    description:
      "Lightweight liquid foundation with smooth coverage, natural finish, and long wear formula.",
    price: 899,
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
    stock: 28
  },
  {
    name: "Makeup Brush Kit",
    description:
      "Professional makeup brush kit for blending, contouring, foundation, and daily makeup use.",
    price: 749,
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    stock: 40
  },
  {
    name: "Eyeliner Pen",
    description:
      "Waterproof eyeliner pen with fine tip, dark finish, and smudge resistant formula.",
    price: 299,
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1631214540242-3cd8c746cd6e?auto=format&fit=crop&w=900&q=80",
    stock: 45
  },
  {
    name: "Compact Face Powder",
    description:
      "Smooth compact face powder with oil control, natural coverage, and soft matte finish.",
    price: 499,
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=900&q=80",
    stock: 30
  },

  // SHOES
  {
    name: "Nike Style Running Shoes",
    description:
      "Lightweight running shoes with soft cushioning, breathable upper material, and strong road grip.",
    price: 2499,
    category: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    stock: 25
  },
  {
    name: "White Casual Sneakers",
    description:
      "Clean white sneakers with comfortable sole, stylish look, and daily wear support.",
    price: 1799,
    category: "Shoes",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
    stock: 30
  },
  {
    name: "Black Sports Shoes",
    description:
      "Durable black sports shoes made for workouts, walking, running, and casual fitness.",
    price: 1999,
    category: "Shoes",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80",
    stock: 22
  },
  {
    name: "Formal Leather Shoes",
    description:
      "Premium formal leather shoes suitable for office, interviews, meetings, and special occasions.",
    price: 2999,
    category: "Shoes",
    image:
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=900&q=80",
    stock: 18
  },
  {
    name: "Comfort Sandals",
    description:
      "Soft and lightweight sandals designed for daily comfort, casual use, and easy walking.",
    price: 899,
    category: "Shoes",
    image:
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=900&q=80",
    stock: 35
  },

  // ACCESSORIES
  {
    name: "Premium Laptop Backpack",
    description:
      "Water-resistant laptop backpack with multiple compartments, soft padding, and modern design.",
    price: 1299,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    stock: 30
  },
  {
    name: "Leather Wallet",
    description:
      "Premium leather wallet with slim design, card slots, smooth finish, and daily use durability.",
    price: 699,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80",
    stock: 40
  },
  {
    name: "Stylish Sunglasses",
    description:
      "Modern sunglasses with UV protection, lightweight frame, and fashionable premium look.",
    price: 999,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
    stock: 28
  },
  {
    name: "Classic Wrist Watch",
    description:
      "Elegant analog wrist watch with premium strap, stylish dial, and professional finish.",
    price: 1899,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80",
    stock: 20
  },
  {
    name: "Travel Duffel Bag",
    description:
      "Spacious travel duffel bag with strong handle, premium zipper, and weekend travel design.",
    price: 1599,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    stock: 24
  },

  // HOME APPLIANCES
  {
    name: "Modern Desk Lamp",
    description:
      "Elegant desk lamp with warm lighting, minimal design, and adjustable angle support.",
    price: 999,
    category: "Home Appliances",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
    stock: 18
  },
  {
    name: "Electric Kettle",
    description:
      "Fast boiling electric kettle with stainless steel body, auto cut-off, and safe heating system.",
    price: 1199,
    category: "Home Appliances",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80",
    stock: 25
  },
  {
    name: "Mixer Grinder",
    description:
      "Powerful mixer grinder for daily kitchen use with strong motor, sharp blades, and durable jars.",
    price: 2499,
    category: "Home Appliances",
    image:
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=900&q=80",
    stock: 15
  },
  {
    name: "Steam Iron Box",
    description:
      "Efficient steam iron with non-stick soleplate, quick heating, and smooth fabric pressing.",
    price: 1399,
    category: "Home Appliances",
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=900&q=80",
    stock: 22
  },
  {
    name: "Air Fryer",
    description:
      "Healthy air fryer for oil-free cooking, crispy snacks, fast heating, and easy cleaning.",
    price: 4999,
    category: "Home Appliances",
    image:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=900&q=80",
    stock: 12
  }
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("40 products added successfully");
    process.exit();
  } catch (error) {
    console.log("Error adding products:", error.message);
    process.exit(1);
  }
};

seedProducts();