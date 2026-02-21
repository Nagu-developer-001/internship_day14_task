# internship_day14_task
Login UI Using LocalStorage Frontend Only

Project Overview

This project is a frontend only authentication system developed using HTML CSS and JavaScript. It demonstrates how basic authentication works on the client side without using any backend server or database.

The application allows users to register login access a protected dashboard and logout using browser LocalStorage for storing user credentials.

Features

Clean login and registration user interface
Form handling using JavaScript
Storing user credentials in LocalStorage
Login validation by comparing stored values
Redirecting user after successful login
Protected dashboard page
Logout functionality
Access restriction without login

Technologies Used

HTML
CSS
JavaScript
Browser LocalStorage API

Project Structure

index.html contains the login page
register.html contains the registration page
dashboard.html is the protected page
style.css contains the styling
script.js contains the authentication logic

Authentication Flow

During registration the user enters email and password which are stored in LocalStorage as a JSON object.

During login the entered credentials are compared with the stored values. If they match a login flag is set and the user is redirected to the dashboard.

The dashboard checks whether the login flag exists. If the user is not logged in the system redirects them back to the login page.

When the user clicks logout the login flag is removed from LocalStorage and the user is redirected to the login page.