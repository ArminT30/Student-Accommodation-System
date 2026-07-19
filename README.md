# Student Accommodation System

A responsive full-stack web application that helps students find suitable PG (Paying Guest) accommodations. Users can browse available properties, apply filters, view detailed information, and mark properties as interested. The project is developed using PHP, MySQL, AJAX, React, Bootstrap, and Vite, and is deployed on a live hosting platform.

---

## Live Demo

**Live Website:**  
https://studentaccommodation.rf.gd

**GitHub Repository:**  
https://github.com/ArminT30/Student-Accommodation-System

---

## Project Overview

The **Student Accommodation System** provides a user-friendly platform for students to search for suitable PG accommodations based on their preferences.

The application includes:

- Property Listing
- Property Details
- User Registration & Login
- Interested (Shortlist) Feature
- AJAX-based Interactions
- React-based Frontend Components
- Live Deployment

---

## Features

### Property Listing

- View available PG properties
- Display property images
- View rent, location, ratings, and gender type
- Responsive user interface
- Filter properties by:
  - City
  - Budget
  - Gender

### Property Details

- Complete property information
- Image gallery
- Amenities
- Property description
- Ratings
- Student testimonials
- Interested/Shortlist functionality

### User Authentication

- User Registration
- User Login
- Session Management
- Logout

### AJAX Functionality

- Mark or unmark properties as Interested
- Dynamic updates without page refresh
- Improved user interaction

### React Integration

- Component-based frontend development
- Dynamic property rendering
- Integration with PHP backend APIs

---

## Technology Stack

### Frontend

- HTML5
- CSS3
- Bootstrap
- JavaScript
- React.js
- Vite

### Backend

- PHP

### Database

- MySQL

### Additional Technologies

- AJAX
- XAMPP
- InfinityFree Hosting
- GitHub

---

## Database

### Database Schema

The project database is included in:

```
Database/student_accommodation.sql
```

### Main Tables

- users
- cities
- properties
- amenities
- properties_amenities
- interested_users_properties
- testimonials

---

## Project Structure

```text
Student-Accommodation-System
│
├── React-Frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── api/
├── css/
├── includes/
├── js/
├── amenities/
├── img/
├── Database/
├── Screenshots/
│
├── dashboard.php
├── index.php
├── logout.php
├── property_detail.php
├── property_list.php
├── README.md
└── .gitignore
```

---

## How to Run the Project

### PHP Backend

1. Install XAMPP.
2. Start:
   - Apache
   - MySQL
3. Copy the project folder to:

```
C:\xampp\htdocs\
```

4. Open phpMyAdmin.
5. Import:

```
Database/student_accommodation.sql
```

6. Open your browser and visit:

```
http://localhost/Student-Accommodation-System/
```

---

### React Frontend

Open a terminal inside the **React-Frontend** folder.

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The React application will run at:

```
http://localhost:5173
```

---

## Deployment

The application has been successfully deployed using **InfinityFree Hosting**.

**Live Website:**

https://studentaccommodation.rf.gd

The deployed application includes:

- PHP Backend
- MySQL Database
- User Authentication
- Property Listing
- Property Details
- AJAX Functionality
- React Components

---

## Screenshots

Project screenshots are available inside the **Screenshots** folder.

Included screenshots:

- Home Page
- Property Listing Page
- Property Detail Page
- Interested (Shortlist) Feature
- Login Page
- Signup Page
- React Frontend

---

## Future Enhancements

- Online booking system
- Payment gateway integration
- Admin dashboard
- Email notifications
- Property recommendation system
- Mobile application

---

## Developer

**Armin Taranum**

B.Tech – Computer Science and Engineering

---

## License

This project is developed for educational and learning purposes.
