import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const API_URL = "http://localhost:5000/api";

function EntryAnimation({ onFinish }) {
  const titleLetters = "SHOPEASY".split("");

  useEffect(() => {
    const timer = setTimeout(onFinish, 3800);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.section
      className="entry-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.65 } }}
    >
      <div className="entry-bg-glow glow-blue"></div>
      <div className="entry-bg-glow glow-teal"></div>

      <div className="entry-top-line">
        <span>PREMIUM E-COMMERCE EXPERIENCE</span>
        <span>ORDER • TRACK • DELIVER</span>
      </div>

      <div className="entry-title-wrap">
        <div className="entry-logo-mark">S</div>

        <h1 className="entry-letter-title">
          {titleLetters.map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              style={{ animationDelay: `${index * 0.16}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>

        <p className="entry-subtitle">Smart shopping starts here</p>

        <div className="entry-loader">
          <div></div>
        </div>
      </div>

      <div className="entry-bottom-text">Full Stack Shopping Platform</div>
    </motion.section>
  );
}

function Header({
  setPage,
  categories,
  selectedCategory,
  setSelectedCategory,
  searchText,
  setSearchText,
  cartCount,
  user,
  logoutUser
}) {
  const handleSearch = () => {
    setPage("products");
  };

  return (
    <>
      <header className="top-header">
        <div className="header-left">
          <button className="brand" onClick={() => setPage("home")}>
            <span className="brand-mark">S</span>
            <span className="brand-word">
              <span>Shop</span>
              <strong>Easy</strong>
            </span>
          </button>

          <div className="deliver-box">
            <small>Deliver to</small>
            <b>Coimbatore</b>
          </div>
        </div>

        <div className="search-area">
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search for products, brands and more"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") handleSearch();
            }}
          />

          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="header-actions">
          {user ? (
            <>
              <button onClick={() => setPage("orders")}>Hi, {user.name}</button>
              <button onClick={logoutUser}>Logout</button>
            </>
          ) : (
            <button onClick={() => setPage("login")}>Login</button>
          )}

          <button onClick={() => setPage("orders")}>Orders</button>

          <button className="cart-button" onClick={() => setPage("cart")}>
            Cart <span>{cartCount}</span>
          </button>
        </div>
      </header>

      <nav className="category-bar">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("products")}>All Products</button>

        {categories
          .filter((category) => category !== "All")
          .map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setPage("products");
              }}
            >
              {category}
            </button>
          ))}

        <button onClick={() => setPage("cart")}>Cart</button>
        <button onClick={() => setPage("login")}>Login / Register</button>
      </nav>
    </>
  );
}

function Home({ setPage, categories, products, addToCart }) {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <span className="offer-badge">New Marketplace</span>

          <h1>Premium shopping experience for modern products</h1>

          <p>
            Browse products, add them to cart, checkout easily, and track your
            orders in one clean full-stack e-commerce platform.
          </p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={() => setPage("products")}>
              Shop Now
            </button>

            <button className="secondary-btn" onClick={() => setPage("cart")}>
              View Cart
            </button>
          </div>
        </div>

        <div className="hero-deal-card">
          <p>Today's Collection</p>
          <h2>Premium Picks</h2>
          <span>Electronics • Fashion • Accessories</span>
        </div>
      </section>

      <section className="service-strip">
        <div>
          <b>Fast Delivery</b>
          <span>Clean shopping flow</span>
        </div>

        <div>
          <b>Secure Checkout</b>
          <span>Safe order process</span>
        </div>

        <div>
          <b>Order Tracking</b>
          <span>Track every order</span>
        </div>

        <div>
          <b>Admin Control</b>
          <span>Manage products</span>
        </div>
      </section>

      <section className="quick-categories">
        {categories
          .filter((category) => category !== "All")
          .slice(0, 8)
          .map((category) => (
            <div
              className="quick-card"
              key={category}
              onClick={() => {
                setPage("products");
              }}
            >
              <div>{category.charAt(0)}</div>
              <h3>{category}</h3>
              <p>Explore products</p>
            </div>
          ))}
      </section>

      <section className="product-section">
        <div className="section-title">
          <div>
            <h2>Recommended Products</h2>
            <p>Top picks from ShopEasy</p>
          </div>

          <button onClick={() => setPage("products")}>View All</button>
        </div>

        <ProductGrid products={products.slice(0, 8)} addToCart={addToCart} />
      </section>
    </main>
  );
}

function ProductGrid({ products, addToCart }) {
  if (products.length === 0) {
    return (
      <div className="empty-box">
        <h2>No products found</h2>
        <p>Start backend server and add products from API.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => {
        const price = Number(product.price);
        const oldPrice = Math.round(price * 1.2);

        return (
          <article className="product-card" key={product._id}>
            <div className="image-box">
              <img src={product.image} alt={product.name} />
              <span>Premium</span>
            </div>

            <div className="product-details">
              <p className="category-name">{product.category}</p>
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>

              <div className="rating-row">
                <b>4.6 ★</b>
                <small>1,245 ratings</small>
              </div>

              <div className="price-row">
                <strong>₹{price}</strong>
                <del>₹{oldPrice}</del>
              </div>

              <p className="delivery">Free delivery • Stock: {product.stock}</p>

              <button className="add-cart" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function ProductsPage({
  categories,
  selectedCategory,
  setSelectedCategory,
  sortType,
  setSortType,
  products,
  addToCart
}) {
  return (
    <main className="shop-layout">
      <aside className="filter-box">
        <h3>Filters</h3>

        <div className="filter-group">
          <label>Category</label>

          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "active-filter" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="filter-group">
          <label>Sort by Price</label>

          <select
            value={sortType}
            onChange={(event) => setSortType(event.target.value)}
          >
            <option value="default">Default</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
      </aside>

      <section className="products-area">
        <div className="products-heading">
          <h2>Products</h2>
          <p>{products.length} items found</p>
        </div>

        <ProductGrid products={products} addToCart={addToCart} />
      </section>
    </main>
  );
}

function CartPage({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  setPage,
  user
}) {
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const discount = Math.round(total * 0.08);
  const finalAmount = total - discount;
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <main className="center-page">
        <div className="empty-box">
          <h2>Your cart is empty</h2>
          <p>Add products to your cart and continue shopping.</p>
          <button onClick={() => setPage("products")}>Shop Products</button>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-layout">
      <section className="cart-items">
        <h2>Shopping Cart</h2>

        {cart.map((item) => (
          <div className="cart-item" key={item._id}>
            <img src={item.image} alt={item.name} />

            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>{item.category}</p>
              <strong>₹{Number(item.price)}</strong>

              <div className="quantity-row">
                <button onClick={() => decreaseQuantity(item._id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item._id)}>+</button>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>

            <div className="cart-price">
              ₹{Number(item.price) * item.quantity}
            </div>
          </div>
        ))}
      </section>

      <aside className="price-box">
        <h3>Price Details</h3>

        <p>
          Price ({cartCount} items) <span>₹{total}</span>
        </p>

        <p>
          Discount <span className="green">- ₹{discount}</span>
        </p>

        <p>
          Delivery Charges <span className="green">FREE</span>
        </p>

        <hr />

        <h2>
          Total Amount <span>₹{finalAmount}</span>
        </h2>

        <button
          onClick={() => {
            if (!user) {
              setPage("login");
            } else {
              alert("Order placed successfully!");
            }
          }}
        >
          {user ? "Place Order" : "Login to Place Order"}
        </button>
      </aside>
    </main>
  );
}

function OrdersPage({ user, setPage }) {
  if (!user) {
    return (
      <main className="center-page">
        <div className="simple-card">
          <h2>Please login first</h2>
          <p>Login to view and track your orders.</p>
          <button className="auth-main-btn" onClick={() => setPage("login")}>
            Login Now
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="center-page">
      <div className="simple-card">
        <h2>My Orders</h2>
        <p>Order tracking section for {user.name} will be connected next.</p>

        <div className="timeline">
          <div>
            <span></span>Order Placed
          </div>
          <div>
            <span></span>Processing
          </div>
          <div>
            <span></span>Shipped
          </div>
          <div>
            <span></span>Delivered
          </div>
        </div>
      </div>
    </main>
  );
}

function LoginPage({ setUser, setPage, showToast }) {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setMessage("");
  };

  const handleAuthSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setIsSubmitting(true);

    try {
      const endpoint = isRegister ? "/auth/register" : "/auth/login";

      const bodyData = isRegister
        ? { name, email, password }
        : { email, password };

      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyData)
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Something went wrong");
        setIsSubmitting(false);
        return;
      }

      localStorage.setItem("shopeasy_token", data.token);
      localStorage.setItem("shopeasy_user", JSON.stringify(data.user));

      setUser(data.user);
      showToast(data.message || "Login successful");

      setIsSubmitting(false);
      clearForm();
      setPage("home");
    } catch (error) {
      setMessage("Backend not running or API error");
      setIsSubmitting(false);
    }
  };

  return (
    <main className="center-page">
      <form className="login-card" onSubmit={handleAuthSubmit}>
        <div className="auth-tabs">
          <button
            type="button"
            className={!isRegister ? "active-auth" : ""}
            onClick={() => {
              setIsRegister(false);
              clearForm();
            }}
          >
            Login
          </button>

          <button
            type="button"
            className={isRegister ? "active-auth" : ""}
            onClick={() => {
              setIsRegister(true);
              clearForm();
            }}
          >
            Register
          </button>
        </div>

        <h2>{isRegister ? "Create Account" : "Login to ShopEasy"}</h2>

        <p>
          {isRegister
            ? "Create your account to start shopping."
            : "Access your orders, cart and profile."}
        </p>

        {isRegister && (
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type="password"
          placeholder="Password minimum 6 characters"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        {message && <p style={{ color: "#f87171" }}>{message}</p>}

        <button className="auth-main-btn" type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? "Please wait..."
            : isRegister
            ? "Create Account"
            : "Login"}
        </button>

        <small>
          {isRegister
            ? "Already have an account? Click Login above."
            : "New user? Click Register above."}
        </small>
      </form>
    </main>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("home");
  const [products, setProducts] = useState([]);

  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("shopeasy_user")) || null;
    } catch {
      return null;
    }
  });

  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("shopeasy_cart")) || [];
    } catch {
      return [];
    }
  });

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("default");
  const [toast, setToast] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`${API_URL}/products`);
        const data = await response.json();

        if (Array.isArray(data)) {
          setProducts(data);
        }
      } catch (error) {
        console.log("Backend server is not running");
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("shopeasy_cart", JSON.stringify(cart));
  }, [cart]);

  const categories = useMemo(() => {
    const dynamic = products.map((product) => product.category);

    const defaults = [
      "Electronics",
      "Fashion",
      "Mobiles",
      "Grocery",
      "Makeup",
      "Shoes",
      "Accessories",
      "Home Appliances"
    ];

    return ["All", ...new Set([...dynamic, ...defaults])];
  }, [products]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchText.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (sortType === "low") {
      filtered.sort((a, b) => Number(a.price) - Number(b.price));
    }

    if (sortType === "high") {
      filtered.sort((a, b) => Number(b.price) - Number(a.price));
    }

    return filtered;
  }, [products, selectedCategory, searchText, sortType]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast("");
    }, 2200);
  };

  const logoutUser = () => {
    localStorage.removeItem("shopeasy_token");
    localStorage.removeItem("shopeasy_user");
    setUser(null);
    showToast("Logged out successfully");
    setPage("home");
  };

  const addToCart = (product) => {
    setCart((oldCart) => {
      const existingItem = oldCart.find((item) => item._id === product._id);

      if (existingItem) {
        return oldCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...oldCart, { ...product, quantity: 1 }];
    });

    showToast(`${product.name} added to cart`);
  };

  const increaseQuantity = (productId) => {
    setCart((oldCart) =>
      oldCart.map((item) =>
        item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((oldCart) =>
      oldCart
        .map((item) =>
          item._id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((oldCart) => oldCart.filter((item) => item._id !== productId));
  };

  return (
    <>
      <AnimatePresence>
        {loading && <EntryAnimation onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="site">
          <Header
            setPage={setPage}
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchText={searchText}
            setSearchText={setSearchText}
            cartCount={cartCount}
            user={user}
            logoutUser={logoutUser}
          />

          {page === "home" && (
            <Home
              setPage={setPage}
              categories={categories}
              products={products}
              addToCart={addToCart}
            />
          )}

          {page === "products" && (
            <ProductsPage
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              sortType={sortType}
              setSortType={setSortType}
              products={filteredProducts}
              addToCart={addToCart}
            />
          )}

          {page === "cart" && (
            <CartPage
              cart={cart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
              setPage={setPage}
              user={user}
            />
          )}

          {page === "orders" && <OrdersPage user={user} setPage={setPage} />}

          {page === "login" && (
            <LoginPage
              setUser={setUser}
              setPage={setPage}
              showToast={showToast}
            />
          )}

          <div className={`toast ${toast ? "toast-show" : ""}`}>{toast}</div>
        </div>
      )}
    </>
  );
}