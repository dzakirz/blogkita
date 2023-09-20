# AUTH API SPECIFICATIONS

## Register User API

Endpoint : POST /auth/register

Request Body :

```json
{
  "name": "John Doe", // required
  "email": "john@gmail.com", // required
  "password": "12345678" // required
}
```

Response Body Success:

```json
{
  "message": "User registered successfully"
}
```

Response Body Error :

```json
{
  "message": "User already exists",
  "statusCode": 409
}
```

## Login User API

Endpoint : POST /auth/login

Request Body :

```json
{
  "email": "john@gmail.com", // required
  "password": "12345678" // required
}
```

Response Body Success :

```json
{
  "data": {
    "access_token": "access_token"
  }
}
```

Response Body Error :

```json
{
  "message": "Invalid credentials",
  "statusCode": 400
}
```

## Get User Profile API

Endpoint : GET /auth/profile

Headers :

- Authorization : Bearer access_token

Request Body : -

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@gmail.com"
  }
}
```

Response Body Error :

```json
{
  "message": "Not authorized",
  "statusCode": 401
}
```

## Logout User API

Endpoint : POST /auth/logout

Headers :

- Authorization : Bearer access_token

Request Body : -

Response Body Success :

```json
{
  "message": "User logged out successfully"
}
```

Response Body Error :

```json
{
  "message": "User not logged in",
  "statusCode": 403
}
```
