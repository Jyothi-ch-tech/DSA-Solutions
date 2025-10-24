Our Blogs Website

A modern, responsive blog platform built with React and Bootstrap, showcasing different blog categories, trending blogs, and dedicated blog pages. This project focuses on frontend UI/UX design while demonstrating routing, reusable components, and responsive layouts.

🛠️ Technologies Used

Frontend: React, React Router DOM, Bootstrap 5

Styling: CSS, Flexbox, Responsive Design

Routing: React Router for category and dedicated blog pages

Assets: Local images for blog categories and banners

⚡ Project Features

Home Page

Hero Banner with welcome message

Category Cards (Programming, Cooking, Workouts) linking to filtered blogs

Trending Blogs section with reusable card components

Category Blogs Page

Displays blogs filtered by selected category

Reusable TrendingBlog component used

Dedicated Blog Page

Displays full blog content based on blog ID

Dynamic routing using React Router

Authentication Pages

Login form

Registration form

Both forms are styled with modern, clean UI

Navigation & Footer

Navbar shows relevant links

Footer with author name

Responsive Design

Mobile, tablet, and desktop friendly

🖼️ Project Structure
/src
 ├── Components
 │    ├── Banner
 │    ├── Footer
 │    ├── Navbar
 │    └── TrendingBlog
 ├── Pages
 │    ├── Home
 │    ├── Login
 │    ├── Registration
 │    ├── CategoryBlogs
 │    └── DedicatedBlog
 ├── Utils
 │    └── MockData.js
 ├── App.jsx
 └── App.css

🚀 Getting Started

Clone the repository

git clone <repository_url>
cd your-project-folder


Install dependencies

npm install


Run the development server

npm run dev


Open http://localhost:5173
 in your browser

🔗 Routing Overview
Route	Component	Description
/	Home	Homepage with banner, categories, trending blogs
/Login	Login	Login page
/Registration	Registration	Registration page
/Blogs/:category	CategoryBlogs	Shows blogs filtered by category
/Blog/:id	DedicatedBlog	Displays full blog content
🎨 Styling & UI

Modern, minimalistic design

Responsive cards and forms

Reusable components for blogs, banner, navbar, and footer

Smooth hover effects and animations

📂 Assets

Local images for banners and categories are in /public/media/

✨ Future Improvements

Connect to a backend for authentication and dynamic blogs

Add user comments for blogs

Add search functionality

Add category badges and sorting