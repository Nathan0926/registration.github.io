# Event User Registration System

This is a Node.js application that allows users to register for events. User details are stored in MongoDB Atlas, and it uses Express with EJS for rendering HTML templates. This README provides an overview of the project and instructions for setting it up.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Prerequisites

Before running the application, make sure you have the following software installed:

- [Node.js](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account for database storage


## Usage

1. **Registration**: To register for an event, follow these steps:
   - Access the application in your web browser at `http://localhost:3000`.
   - Click on the "Register" link to access the registration form.
   - Fill out the required fields, such as name and email.
   - Click the "Register" button to submit your registration.

2. **View Registrations**: To view a list of registered users, simply visit the home page after registering. You will see a list of all registered users and their details.

3. **Edit Registration**: To edit your registration information, follow these steps:
   - Click the "Edit" link next to your name on the home page.
   - You will be directed to an edit form where you can update your details.
   - Click the "Save Changes" button to save your edits.

4. **Delete Registration**: To delete your registration, follow these steps:
   - Click the "Delete" button next to your name on the home page.
   - Your registration will be permanently removed from the system.

5. **Customization**: You can customize the registration form and user schema as needed. Explore the project structure and code to make any desired modifications.

Feel free to explore additional features and functionalities or customize the project according to your specific requirements.


## Project Structure

The project is organized with the following directory structure:

- `app.js`: This file contains the server-side code for the Express application, including route handling and database connectivity.

- `views/`: This directory holds the EJS templates used for rendering HTML pages. The templates define the structure and layout of the web pages.

- `public/`: The `public` directory contains static assets, such as CSS files, JavaScript files, images, or any other resources that are publicly accessible on the web.

- `models/`: In the `models` directory, you can find definitions for the MongoDB schema used to store user registration details. Modify these schema definitions to suit your project's data requirements.

- `node_modules/`: This directory contains the Node.js project dependencies installed via npm or yarn.

- `README.md`: The README file itself, providing an overview of the project and instructions for setting it up.

The project structure is designed to separate concerns and keep the code organized. You can further customize and expand the project by adding additional directories and files to suit your specific needs.




## License

This project is licensed under the **MIT License**. You can find the full text of the license in the [LICENSE](LICENSE) file.

### MIT License

