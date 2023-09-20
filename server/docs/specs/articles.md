# ARTICLE API SPECIFICATION

## Get All Articles

Endpoint : GET /articles

Headers:

- Authorization: Bearer access_token

Request Body: -

Response Body Success:

```json
{
  "data": [
    {
      "id": "cuid",
      "title": "Article 1",
      "content": "Content 1",
      "user_id": 1,
      "created_at": "2021-01-01T00:00:00.000Z",
      "updated_at": "2021-01-01T00:00:00.000Z"
    }
  ]
}
```

Response Body Error:

```json
{
  "message": "Unauthorized",
  "statusCode": 401
}
```

## Get Article By Id

Endpoint : GET /articles/:id

Headers:

- Authorization: Bearer access_token

Request Body: -

Response Body Success:

```json
{
  "data": {
    "id": "cuid",
    "title": "Article 1",
    "content": "Content 1",
    "user_id": 1,
    "created_at": "2021-01-01T00:00:00.000Z",
    "updated_at": "2021-01-01T00:00:00.000Z"
  }
}
```

Response Body Error:

```json
{
  "message": "Unauthorized",
  "statusCode": 401
}
```

## Create Article

Endpoint : POST /articles

Headers:

- Authorization: Bearer access_token

Request Body:

```json
{
  "user_id": "cuid", // optional
  "title": "Article 1", // required
  "content": "Content 1" // required
}
```

Response Body Success:

```json
{
  "data": {
    "id": "cuid",
    "title": "Article 1",
    "content": "Content 1",
    "user_id": 1,
    "created_at": "2021-01-01T00:00:00.000Z",
    "updated_at": "2021-01-01T00:00:00.000Z"
  }
}
```

Response Body Error:

```json
{
  "message": ["Title is required", "Content is required"],
  "statusCode": 400
}
```

## Update Article

Endpoint : PUT /articles/:id

Headers:

- Authorization: Bearer access_token

Request Body:

```json
{
  "user_id": "cuid", // optional
  "title": "Article 1", // required
  "content": "Content 1" // required
}
```

Response Body Success:

```json
{
  "data": {
    "id": "cuid",
    "title": "Article 1",
    "content": "Content 1",
    "user_id": 1,
    "created_at": "2021-01-01T00:00:00.000Z",
    "updated_at": "2021-01-01T00:00:00.000Z"
  }
}
```

Response Body Error:

```json
{
  "message": ["Title is required", "Content is required"],
  "statusCode": 400
}
```

## Delete Article

Endpoint : DELETE /articles/:id

Headers:

- Authorization: Bearer access_token

Request Body: -

Response Body Success:

```json
{
  "data": {
    "id": "cuid",
    "title": "Article 1",
    "content": "Content 1",
    "user_id": 1,
    "created_at": "2021-01-01T00:00:00.000Z",
    "updated_at": "2021-01-01T00:00:00.000Z"
  }
}
```

Response Body Error:

```json
{
  "message": "Unauthorized",
  "statusCode": 401
}
```
