# URL Shortener Service

This project is a simple URL shortener service built using Node.js, Express.js, and MongoDB. The service allows users to submit lengthy URLs, generates unique short URLs, and provides secure access through basic user registration and login functionalities.

## Table of Contents
- [Features](#features)
- [Technical Requirements](#technical-requirements)
- [Evaluation Criteria](#evaluation-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Security Considerations](#security-considerations)
- [Database Schema](#database-schema)
- [Code Quality](#code-quality)
- [Contributing](#contributing)
- [License](#license)

## Features

- Submit lengthy URLs through a POST request to `/shorten`.
- Generate unique short URLs for submitted original URLs and store them in the database.
- Provide responses including both original and shortened URLs.
- Users can access the original URL by visiting the generated short URL.
- Basic user registration and login functionalities for secure access.

## Technical Requirements

- Backend: Node.js (version LTS), Express.js, Mongoose
- Database: MongoDB
- Security: Simple authentication mechanism (e.g., username and password), basic data security practices

## Evaluation Criteria

### Functionality

- The API should correctly shorten URLs and redirect users to the original destination.
- User registration and login should function properly.

### Code Quality

- Clean and structured code.
- Basic comments and documentation.
- Follows beginner-friendly coding practices.

### Database Usage

- Proper schema design for storing URLs and user information.
- Efficient data access and manipulation.

### Security

- Secure user authentication and data storage.
- Basic prevention measures against common vulnerabilities.

### Documentation

- Simple guide for API usage.
- Explanation of key functionalities and implementation.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ashwani312/urlShortner.git
    ```
2. Install dependencies:

   ```bash
    npm install
    ```
3. Set up environment variables:

   Create a .env file in the project root and add the following:
   
  ```bash
   PORT=8000
   MONGO_URL=mongodb://localhost:27017/url_shortener
   JWT=your-secret-key
  ```
4. Run the application:

  ```bash
  npm start
  ```

## Usage

- Register a user account using /auth/register.
- Log in using /auth/login to obtain an authentication token.
- Use the obtained token in the headers for subsequent requests.

## API Endpoints

- POST /auth/register: Register a new user.
- POST /auth/login: Log in and obtain an authentication token.
- POST /url: Shorten a URL (requires authentication).
- GET /url/:shortId: Redirect to the original URL.
- GET /url/timestamps/:shortId: To Get the details of URL that how many clicked it.

## Security Considerations

- Use HTTPS for secure communication (consider using a reverse proxy like Nginx).
- Store sensitive information in environment variables.
- Implement token-based authentication for secure access.
- Hash and salt user passwords before storing them in the database.

## Database Schema

  ### Users

- name: String(required)
- email: String (required, unique)
- password: String (required)

 ### URLs

- shortId : String(required, unique)
- redirectURL : String
- visitHistory : Array

## Code Quality

 The code follows best practices, is well-structured, and includes basic comments for clarity

## Contributing

 Feel free to contribute by submitting issues or pull requests.

## License

 This project is licensed under the MIT License.