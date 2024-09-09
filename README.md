# Hackathon Challenge Creation Backend

This backend application is used to create and retrieve hackathon challenges. It handles the creation of new challenges with details such as name, date, description, difficulty, and image upload.

## API Endpoints

### 1. Create a Challenge

- **URL**: `http://localhost:8000/create-challenge`
- **Method**: `POST`
- **Content-Type**: `multipart/form-data`
- **Description**: This endpoint allows the creation of a new challenge with the following JSON payload:
  
  **Request Body** (example):
  ```json
  {
    "challengeName": "test",
    "startDate": "2024-09-05",
    "endDate": "2024-09-12",
    "description": "test.",
    "difficulty": "Hard",
    "image": "path/to/image.jpg"
  }


### 2. Get All Challenges

- **URL**: `http://localhost:8000/get-challenges`
- **Method**: `GET`
- **Description**: This endpoint retrieves a list of all created challenges.

  **Response Body** (example):
  ```json
  [
    {
      "_id": "66d9f54e154d7c93e2fc0d49",
      "challengeName": "Leetcode",
      "startDate": "2024-09-01T00:00:00.000Z",
      "endDate": "2024-09-03T00:00:00.000Z",
      "description": "Leetcode Test",
      "difficulty": "Easy",
      "image": "/uploads/50days leetcode.png",
      "__v": 0
    },
    {
      "_id": "66d9f590154d7c93e2fc0d4c",
      "challengeName": "Test",
      "startDate": "2024-09-04T00:00:00.000Z",
      "endDate": "2024-09-14T00:00:00.000Z",
      "description": "Test 1",
      "difficulty": "Medium",
      "image": "/uploads/vlcsnap-2023-05-08-13h57m20s929.png",
      "__v": 0
    }
  ]

## Setup Instructions

### 1. Clone the repository

```bash
git clone <repository_url>
cd <repository_directory>
```
### 2. npm install

### 3. Create a .env file
- In the root directory of your project, create a .env file and add the following environment variables:
```bash
PORT=8000
MONGO_URI="your-mongodb-connection-string"

```
## Technologies Used

- **Node.js**: JavaScript runtime for building the server-side of the application.
- **Express.js**: Web framework for building the RESTful API endpoints.
- **MongoDB**: NoSQL database used for storing challenge data.
- **Multer**: Middleware for handling `multipart/form-data`, used for image uploads.

