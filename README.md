# MyBook - Arabic E-Book Marketplace 📚

A modern online platform for buying and selling Arabic e-books and digital novels with a seamless reading experience.

Live Demo: [E-Book Web Application](https://kootpy.netlify.app/)

## ✨ Key Features

### 📖 Book Discovery
- **Thousands of Titles** across fiction, self-development, academic & more
- **Smart Search & Filtering** by genre, price, and ratings
- **Personalized Recommendations** based on reading history
- **New Releases** section updated weekly

### 🛒 Purchasing Experience
- **Secure Checkout** with multiple payment options
- **Instant Downloads** after purchase
- **Wishlist** functionality to save favorites
- **Customer Reviews** with star ratings

### 📱 Reading Experience
- **Responsive Design** works on all devices
- **Reading Progress** tracking
- **Dark/Light Mode** for comfortable reading
- **Bookmarking** functionality

## 🛠️ Technology Stack

### Frontend
- **React.js** - Frontend framework
- **Html**
- **CSS**
- **Javascript**


### Deployment
-**Neltify**

## 📂 Project Structure
```
├── pages/
│ ├── index.js # Homepage
│ ├── books/ # Book listings
│ │ ├── [id].js # Single book view
│ │ ├── fiction.js # Fiction category
│ │ └── non-fiction.js # Non-fiction category
│ ├── cart/ # Shopping cart
│ │ └── checkout.js # Checkout process
│ └── account/ # User area
│ ├── library.js # Purchased books
│ └── wishlist.js # Saved books
├── components/
│ ├── BookCard.js # Book listing component
│ ├── Navbar.js # Navigation
│ └── Search.js # Search component
├── public/
│ ├── images/ # Static images
│ └── books/ # Sample book covers
├── styles/
│ ├── globals.css # Global styles
│ └── Home.module.css # Page-specific styles
├── firebase.js # Firebase config
└── README.md # This documentation

```


## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm (v8+)
- Firebase account
- Stripe account
```
### Installation
1. Clone the repository:
```bash
git clone https://github.com/MahmoudElhefnawyy/E-Book-Store-Application.git
cd E-Book-Store-Application/
npm install
npm run dev
```
