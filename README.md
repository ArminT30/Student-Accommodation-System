# Student Accommodation System

## Project Overview

Student Accommodation System is a responsive web application developed to help students find suitable PG (Paying Guest) accommodations. The platform allows students to explore available properties, filter accommodations based on city, budget, and gender, view detailed property information, and shortlist properties of interest.

The project combines PHP, MySQL, AJAX, JavaScript, and React to create a dynamic and interactive accommodation platform with a user-friendly interface.

---

# Objectives

- Design responsive property listing and property detail pages
- Develop and integrate a structured MySQL database
- Build dynamic web pages using PHP and MySQL
- Implement AJAX-based interactions without page reload
- Introduce component-based frontend development using React
- Provide an easy platform for students to search for accommodation

---

# Features

## Property Listing

- Display PG properties with:
  - Property images
  - Property name
  - Location
  - Rent details
  - Gender type
  - Ratings

- Filtering options:
  - City-based filtering
  - Budget-based filtering
  - Gender-based filtering

- Responsive design for different screen sizes

---

## Property Details

Users can view complete details of each property:

- Property description
- Image gallery
- Available amenities
- Ratings
- Student reviews
- Accommodation information

Users can mark properties as **Interested/Shortlist**.

---

## User Authentication

The system provides:

- User registration
- User login
- Session management
- Logout functionality

Logged-in users can save properties to their interested list.

---

## AJAX Functionality

AJAX is implemented for dynamic user interactions:

- Mark/unmark properties as interested without page refresh
- Instant UI updates
- Smooth communication between frontend and backend

---

## React Integration

The property listing feature has been converted into React components.

React is used for:

- Component-based development
- Dynamic property rendering
- Improved user experience
- Communication with PHP backend APIs

---

# Technology Stack

## Frontend

- HTML
- CSS
- Bootstrap
- JavaScript
- React.js

## Backend

- PHP

## Database

- MySQL

## Additional Technologies

- AJAX
- Vite
- XAMPP

---

# Database Design

Database Name:

```
pglife
```

Main database tables:

- users
- properties
- amenities
- property_amenities
- interested_users
- reviews

The database stores user information, property details, amenities, reviews, and shortlisted properties.

---

# Project Structure

```
Student-Accommodation-System

│
├── React-Frontend
│   ├── public
│   ├── src
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── PHP-Backend Files
│   ├── api
│   ├── css
│   ├── img
│   ├── includes
│   ├── js
│   ├── index.php
│   ├── property_list.php
│   ├── property_detail.php
│   ├── dashboard.php
│   ├── login.php
│   ├── signup.php
│   └── logout.php
│
├── Database
│   └── student_accommodation.sql
│
├── Screenshots
│   ├── property_listing.png
│   ├── property_detail_1.png
│   ├── property_detail_2.png
│   └── ajax_interaction.png
│
└── README.md
```

---

# How to Run the Project Locally

## Backend Setup (PHP + MySQL)

1. Install XAMPP.

2. Start:
   - Apache
   - MySQL

3. Copy the PHP backend folder into:

```
C:\xampp\htdocs\student-accommodation
```

4. Import the database file:

```
Database/student_accommodation.sql
```

into phpMyAdmin.

5. Open the backend application:

```
http://localhost/student-accommodation/
```

---

## React Frontend Setup

Navigate to the React folder:

```
cd React-Frontend
```

Install dependencies:

```
npm install
```

Start the React development server:

```
npm run dev
```

React application will run on:

```
http://localhost:5173
```

---

# Screenshots

The project contains screenshots demonstrating:

## Property Listing Page

Displays available PG accommodations with property details and filtering options.

## Property Detail Page

Shows complete information about selected properties, including images, amenities, ratings, and reviews.

## AJAX Interaction

Demonstrates the Interested/Shortlist feature working dynamically without refreshing the page.

---

# Future Enhancements

- Deploy the application on a live hosting platform
- Add online booking functionality
- Add payment integration
- Add an advanced property recommendation system
- Improve dashboard functionality

---

# Developer

**Armin Taranum**

B.Tech Computer Science and Engineering
