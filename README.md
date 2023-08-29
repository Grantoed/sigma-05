# Sigma Software Final Project

This E-commerce web application was initialized with Create React App and built with TypeScript.

Backend built with Node.js, TypeScript, and MongoDB is [here](https://github.com/Grantoed/sigma-hw-05-api).

## Set Up

To set up and run the application:

```bash
npm start
```

This starts the application in development mode.
**Switch the BASE_URL from GCP url to localhost at src/api/default.ts** to access it in your browser at http://localhost:3000. Any edits you make will automatically reload the page. Lint errors, if any, will appear in the console.

## Features

- **Product Search**: Paginated search functionality to efficiently find products.
- **Newsletter Subscription**: Users can subscribe to newsletters, upon which they receive confirmation emails, powered by Nodemailer.
- **Product Search Bar**: A fully functioning search bar in the header allows users to quickly find their desired products.
- **Admin Page**: Admins can view placed orders from the header's pages dropdown menu. _For showcase purposes admin route is publicly available._
- **Testimonials**: An interactive testimonials section built using the Swiper library to showcase customer reviews.
- **Optimized Performance**: Lazy page loading is incorporated to improve initial load time, and images are optimized using the webp format.
- **State Management**: The application uses Redux for robust global state management.
- **Other Tools**: Other essential tools integrated into the app include styled-components, Axios for API calls, and Yup for form validation.
