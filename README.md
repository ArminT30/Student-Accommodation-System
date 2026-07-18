# Student Accommodation System

A responsive web application that helps students find suitable PG (Paying Guest) accommodations. Users can browse properties, filter accommodations, view detailed information, and shortlist their preferred properties. The project is built using PHP, MySQL, AJAX, and React.

---

## Project Overview

The Student Accommodation System provides an easy and interactive platform for students to search for PG accommodations based on their requirements.

The application includes:

- Property listing
- Property details
- User authentication
- Interested (Shortlist) feature
- AJAX-based interactions
- React-based frontend components

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
- Ratings
- Student reviews
- Interested/Shortlist functionality

### User Authentication

- User Registration
- User Login
- Session Management
- Logout

### AJAX Functionality

- Mark or unmark properties as Interested
- Dynamic updates without page refresh

### React Integration

- Component-based frontend
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

---

## Database

Database Name:

```
pglife
```

Main Tables

- users
- properties
- amenities
- property_amenities
- interested_users
- reviews

---

## Project Structure

```
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
├── Database/
├── Screenshots/
│
├── index.php
├── property_list.php
├── property_detail.php
├── dashboard.php
├── logout.php
├── README.md
└── .gitignore
```

---

## How to Run the Project

### PHP Backend

1. Install XAMPP.
2. Start Apache and MySQL.
3. Copy the project folder into:

```
C:\xampp\htdocs\
```

4. Import:

```
Database/student_accommodation.sql
```

into phpMyAdmin.

5. Open your browser and visit:

```
http://localhost/Student-Accommodation-System/
```

---

### React Frontend

Open terminal inside the React-Frontend folder.

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

## Screenshots

Project screenshots are available inside the **Screenshots** folder.

They include:

- Home Page
- Property Listing
- Property Details
- Interested (Shortlist) Feature
- Login & Signup
- React Frontend

---

## Future Enhancements

- Online booking system
- Payment gateway integration
- Advanced property recommendations
- Admin dashboard
- Email notifications
- Mobile application

---

## Developer

**Armin Taranum**

B.Tech – Computer Science and Engineering

---

## License

This project is developed for educational and learning purposes.
