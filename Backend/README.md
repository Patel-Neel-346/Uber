# API Documentation

## POST /api/users/register

### Description
This endpoint is used to register a new user.

### Request Body
The request body must be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the user. Must be at least 3 characters long.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user account. Must be at least 6 characters long.

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: 201 Created
- **Response Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

### Example Error Response
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

## POST /api/users/login

### Description
This endpoint is used to log in an existing user.

### Request Body
The request body must be a JSON object containing the following fields:
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user account. Must be at least 6 characters long.

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

#### Authentication Errors
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Invalid credentials"
  }
  ```

## GET /api/users/profile

### Description
This endpoint is used to get the profile of the authenticated user.

### Headers
- `Authorization` (string, required): The JWT token of the authenticated user.

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

#### Authentication Errors
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

## GET /api/users/logout

### Description
This endpoint is used to log out the authenticated user.

### Headers
- `Authorization` (string, required): The JWT token of the authenticated user.

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Authentication Errors
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

## POST /api/captains/register

### Description
This endpoint is used to register a new captain.

### Request Body
The request body must be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the captain. Must be at least 3 characters long.
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain account. Must be at least 6 characters long.
- `vehicle`: An object containing:
  - `color` (string, required): The color of the vehicle. Must be at least 3 characters long.
  - `plate` (string, required): The plate number of the vehicle. Must be at least 3 characters long.
  - `capacity` (number, required): The capacity of the vehicle. Must be a number.
  - `vehicleType` (string, required): The type of the vehicle. Must be one of `car`, `motorcycle`, or `auto`.

### Example Request
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Responses

#### Success
- **Status Code**: 201 Created
- **Response Body**:
  ```json
  {
    "token": "jwt_token_here",
    "captain": {
      "_id": "captain_id_here",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      },
      "socketId": null,
      "status": "inactive"
    }
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

### Example Error Response
```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

## POST /api/rides/create

### Description
This endpoint is used to create a new ride.

### Request Body
The request body must be a JSON object containing the following fields:
- `pickup` (string, required): The pickup location. Must be at least 3 characters long.
- `destination` (string, required): The destination location. Must be at least 3 characters long.
- `vehicleType` (string, required): The type of vehicle. Must be one of `auto`, `car`, or `moto`.

### Example Request
```json
{
  "pickup": "123 Main St",
  "destination": "456 Elm St",
  "vehicleType": "car"
}
```

### Responses

#### Success
- **Status Code**: 201 Created
- **Response Body**:
  ```json
  {
    "ride": {
      "_id": "ride_id_here",
      "user": "user_id_here",
      "pickup": "123 Main St",
      "destination": "456 Elm St",
      "fare": 100,
      "status": "pending",
      "otp": "123456"
    }
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

### Example Error Response
```json
{
  "errors": [
    {
      "msg": "pickup is required",
      "param": "pickup",
      "location": "body"
    }
  ]
}
```

## GET /api/maps/get-coordinates

### Description
This endpoint is used to get the coordinates of a given address.

### Query Parameters
- `address` (string, required): The address to get coordinates for. Must be at least 3 characters long.

### Example Request
```
GET /api/maps/get-coordinates?address=123%20Main%20St
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "ltd": 37.7749,
    "lng": -122.4194
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "address is required",
        "param": "address",
        "location": "query"
      }
    ]
  }
  ```

### Example Error Response
```json
{
  "errors": [
    {
      "msg": "address is required",
      "param": "address",
      "location": "query"
    }
  ]
}
```

## GET /api/maps/get-distance

### Description
This endpoint is used to get the distance and time between two locations.

### Query Parameters
- `origin` (string, required): The origin location. Must be at least 3 characters long.
- `destination` (string, required): The destination location. Must be at least 3 characters long.

### Example Request
```
GET /api/maps/get-distance?origin=123%20Main%20St&destination=456%20Elm%20St
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "distance": {
      "text": "5.6 km",
      "value": 5600
    },
    "duration": {
      "text": "15 mins",
      "value": 900
    }
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "origin is required",
        "param": "origin",
        "location": "query"
      },
      {
        "msg": "destination is required",
        "param": "destination",
        "location": "query"
      }
    ]
  }
  ```

### Example Error Response
```json
{
  "errors": [
    {
      "msg": "origin is required",
      "param": "origin",
      "location": "query"
    },
    {
      "msg": "destination is required",
      "param": "destination",
      "location": "query"
    }
  ]
}
```

## GET /api/maps/get-suggestion

### Description
This endpoint is used to get location suggestions based on a query.

### Query Parameters
- `suggestion` (string, required): The query for location suggestions. Must be at least 3 characters long.

### Example Request
```
GET /api/maps/get-suggestion?suggestion=Main
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  [
    {
      "description": "Main St, San Francisco, CA, USA",
      "place_id": "ChIJd_Y0eVIvkIARuQyDN0F1LBA"
    },
    {
      "description": "Main St, Los Angeles, CA, USA",
      "place_id": "ChIJd_Y0eVIvkIARuQyDN0F1LBB"
    }
  ]
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "suggestion is required",
        "param": "suggestion",
        "location": "query"
      }
    ]
  }
  ```

### Example Error Response
```json
{
  "errors": [
    {
      "msg": "suggestion is required",
      "param": "suggestion",
      "location": "query"
    }
  ]
}
```
