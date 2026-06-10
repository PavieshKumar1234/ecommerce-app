# ShopEasy - Full Stack E-Commerce Web Application

ShopEasy is a modern full-stack e-commerce web application built using React.js, Node.js, Express.js, MongoDB Atlas, and JWT authentication. The project provides a clean and professional shopping experience with product categories, search, cart management, user registration, login, and a responsive dark-themed user interface.

---


## Project Overview

ShopEasy is designed as a complete e-commerce platform where users can browse products, filter products by category, search for items, add products to cart, register, login, and continue shopping with a smooth user experience.

This project demonstrates practical full-stack development concepts including frontend design, backend API creation, database integration, authentication, routing, state management, and deployment.

---

## Features

### User Features

* User registration
* User login
* JWT-based authentication
* Product listing
* Product search
* Category filtering
* Sort products by price
* Add products to cart
* Increase and decrease product quantity
* Remove products from cart
* Cart total calculation
* Login required before placing order
* Responsive user interface
* Professional dark theme design
* Animated entry screen

### Product Categories

* Electronics
* Fashion
* Mobiles
* Grocery
* Makeup
* Shoes
* Accessories
* Home Appliances

### Backend Features

* REST API using Express.js
* MongoDB Atlas database connection
* Mongoose models
* Product API routes
* Authentication API routes
* Password hashing using bcryptjs
* JWT token generation
* Environment variable configuration
* Product seeding script

---

## Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* CSS
* Framer Motion
* Local Storage

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs
* CORS
* dotenv

### Deployment

* Frontend: Netlify
* Backend: Render
* Database: MongoDB Atlas
* Version Control: GitHub

---

## Project Structure

```txt
ecommerce-app/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── productRoutes.js
│   ├── package.json
│   ├── package-lock.json
│   ├── seedProducts.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone your-github-repository-link
cd ecommerce-app
```

---

## Backend Setup

### 2. Go to Backend Folder

```bash
cd backend
```

### 3. Install Backend Dependencies

```bash
npm install
```

### 4. Create `.env` File

Create a `.env` file inside the `backend` folder and add:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 5. Add Products to Database

```bash
node seedProducts.js
```

### 6. Run Backend Server

```bash
npm run dev
```

Backend will run on:

```txt
http://localhost:5000
```

---

## Frontend Setup

### 7. Go to Frontend Folder

```bash
cd frontend
```

### 8. Install Frontend Dependencies

```bash
npm install
```

### 9. Run Frontend

```bash
npm run dev
```

Frontend will run on:

```txt
http://localhost:5173
```

---

## API Endpoints

### Product Routes

```txt
GET /api/products
```

Fetch all products.

### Authentication Routes

```txt
POST /api/auth/register
```

Register a new user.

```txt
POST /api/auth/login
```

Login existing user.

---

## Sample Register Request

```json
{
  "name": "Paviesh",
  "email": "paviesh@gmail.com",
  "password": "123456"
}
```

---

## Sample Login Request

```json
{
  "email": "paviesh@gmail.com",
  "password": "123456"
}
```

---

## Deployment Guide

### Backend Deployment on Render

Use these settings on Render:

```txt
Root Directory: backend
Build Command: npm install
Start Command: npm start
```

Add environment variables in Render:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
```

After deployment, backend API will look like:

```txt
https://your-backend-name.onrender.com
```

---

### Frontend Deployment on Netlify

Use these settings on Netlify:

```txt
Base Directory: frontend
Build Command: npm run build
Publish Directory: frontend/dist
```

Add this environment variable in Netlify:

```env
VITE_API_URL=https://your-backend-name.onrender.com/api
```

---

## Environment Variables

The real `.env` file should not be uploaded to GitHub.

Use `.env.example` for reference:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

## Screenshots

Add your project screenshots here after deployment.

```txt
Home Page Screenshot
Products Page Screenshot
Cart Page Screenshot
Login Page Screenshot
```

---

## Learning Outcomes

Through this project, I learned:

* Building a full-stack MERN application
* Creating REST APIs using Express.js
* Connecting MongoDB Atlas with Node.js
* Creating product and user models using Mongoose
* Implementing register and login functionality
* Hashing passwords using bcryptjs
* Generating JWT authentication tokens
* Fetching backend data in React
* Managing cart using React state and localStorage
* Creating a responsive professional UI
* Deploying backend on Render
* Deploying frontend on Netlify

---

## Future Improvements

* Payment gateway integration
* Admin dashboard
* Product add/edit/delete from admin panel
* Order history
* Order status tracking
* Wishlist feature
* Product reviews and ratings
* User profile page
* Search suggestions
* Coupon system

---

## Author

**PavieshKumar K**

Full Stack Development | React.js | Node.js | Express.js | MongoDB | JWT Authentication

---

## License

This project is created for learning and portfolio purposes.
