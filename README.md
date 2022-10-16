# Project Name: Guardian App

## Url: https://jsig-guardian-app.herokuapp.com/

## Background and Purpose

This project is designed as a CRM for a daycare provider. It allows the user to track not only Guardians (parents) and kids but also their activities with the children throughout the day. It also has a feature that allows the user to send a quick text message to the guardian if needed. The users are connected to the kids via a many to many relationship through the activities themselves.

## Deliverables

### Include a many to many relationship.

This is achieved between the Kids and Users through Activities.

### Implement a minimum of 4 models.

The project contains 5 models. Activity, Guardian, Kid, Message, and User.

### Implement a minimum of 5 client side routes using React router.

The project has 6 client side routes and several pop-up Modals in lieu of additional routes. Landing Page, Guardians, Guardian Profile, Kids, Kids Profile and a User Dashboard.

### Implement password protection and authentication.

The project uses JWT tokens and Bcrypt Gem for a secure experience. If a user is not logged in and they attempt to interact with a protected resource they receive a message and are redirected to the home / sign in page.

### Include full CRUD on at least 1 model, following REST conventions.

The project features full CRUD on both the Guardians and Kids models.

### Implement validations and error handling.

There are validations on several of the models including the User model which checks for uniqueness and password min and max length. Errors are handled by custom messages and errors.full_messages via rescue blocks and are sent to user to be displayed in Toast notifications.

### Implement something new not taught in the curriculum.

The following technologies not reviewed at Flatiron were used to produce Guardian App:

- React Styled Components (No CSS libraries were used in this project!)
- React Hook Forms
- React Modals
- RTK Query
- Toastify
- CSS loading Spinner
- Twilio (Used to send a SMS message to Guardian, Credentials stored secured in Ruby yml)

### Implement useContext or Redux.

Redux Tool Kit with Query was used to handle all state in the application.

### Fully deploy and host your project.

Host is currently deployed as a mono-repo on Heroku. https://jsig-guardian-app.herokuapp.com/
