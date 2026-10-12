# Task 31 – Node.js Web Server

## Project Overview
This project is a basic web server built using Node.js and its built-in `http` module. It handles different routes and serves the corresponding HTML pages.

## Features
- Serves the Home page at `/` and `/home`
- Serves the About page at `/about`
- Serves the Contact page at `/contact`
- Serves CSS styling from `/style.css`
- Displays a custom 404 page for invalid routes
- Uses asynchronous file reading with the Node.js `fs` module
- Includes HTTP status codes for responses

## Technologies Used
- Node.js
- JavaScript
- HTML
- CSS

## Project Structure
```text
ankita_task-31/
├── server.js
├── package.json
├── README.md
└── public/
    ├── home.html
    ├── about.html
    ├── contact.html
    ├── 404.html
    └── style.css
```

## How to Run
1. Install Node.js.
2. Open the project folder in VS Code.
3. Open the terminal.
4. Run the following command:

```bash
node server.js
```

5. Open `http://localhost:3000` in your browser.

## Testing Routes
- Home: `http://localhost:3000/home`
- About: `http://localhost:3000/about`
- Contact: `http://localhost:3000/contact`
- Invalid route: `http://localhost:3000/invalid`

