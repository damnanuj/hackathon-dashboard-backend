# Hackathon Challenge Backend

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
