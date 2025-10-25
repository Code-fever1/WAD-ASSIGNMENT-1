📚 Library API (Web-2 Project)

A simple RESTful API built with Node.js, Express, and Lodash to manage a collection of books in a library.

⚙️ Setup Instructions

Clone or Download the Project

Open your terminal and run:

git clone https://github.com/Code-fever1/WAD-ASSIGNMENT-1.git
cd WAD-ASSIGNMENT-1


Install Dependencies

Make sure Node.js is installed on your system.

Then run:

npm install


Start the Server

To start the server normally:

npm start


To start the server with nodemon (auto-restart on code changes):

npm run dev

🚀 API Endpoints
1. Get All Books

Endpoint: GET /api/books

Example Request:
http://localhost:3000/api/books

Example Response:

[
  {
    "id": 1,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "is_available": true
  },
  {
    "id": 2,
    "title": "1984",
    "author": "George Orwell",
    "is_available": false
  }
]

2. Get Available Books

Endpoint: GET /api/books/available

Example Request:
http://localhost:3000/api/books/available

Example Response:

[
  {
    "id": 1,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "is_available": true
  }
]

3. Get Issued Books

Endpoint: GET /api/books/issued

Example Request:
http://localhost:3000/api/books/issued

Example Response:

[
  {
    "id": 2,
    "title": "1984",
    "author": "George Orwell",
    "is_available": false
  }
]

4. Find Books by Author

Endpoint: GET /api/books?author=AuthorName

Example Request:
http://localhost:3000/api/books?author=Ali

Example Response:

[
  {
    "id": 6,
    "title": "2000",
    "author": "Ali",
    "is_available": false
  }
]

🧩 Project Structure
web-2/
│
├── data.js          # Book data file
├── index.js         # Main Express server file
├── package.json     # Project dependencies and scripts
└── README.md        # Documentation file

💡 Notes

The server runs on http://localhost:3000

You can modify or extend the data in data.js as needed.

All responses are returned in JSON format.

👨‍💻 Author

Syed Alijah Muhammad
