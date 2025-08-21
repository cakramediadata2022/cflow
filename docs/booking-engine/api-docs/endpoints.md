---
sidebar_position: 2
---

# API Endpoints

This page provides a comprehensive list of available API endpoints for the Cakrahub Booking Engine.

## Base URL

```
http://localhost:9003/plugin/v1
```

## Authentication

All API requests require authentication using a token in the header:

```
headers: {
  'token': 'your-api-token-here'
}
```

## Available Endpoints

### 1. Get Hotel Information

Retrieve detailed hotel information including features, images, and policies.

**Endpoint:** `GET /hotelinformation`

**Example Request:**

```javascript
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:9003/plugin/v1/hotelinformation',
  headers: { 
    'token': 'lpAbo-H60aY-CV68Z-oomZ2-Oulzv-9pWyQ'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

**Example Response:**

```json
{
    "StatusCode": 0,
    "Message": "Success",
    "Result": {
        "hotel_information": {
            "id": 1,
            "chain_code": "GUSftR3d-CHAIN",
            "hotel_code": "MED-c98df6",
            "hotel_name": "Medival Voyage",
            "hotel_address": "123 Main Street, Cityville, Countryland",
            "hotel_phone_number": "1234567890",
            "hotel_email": "crnald117@gmail.com",
            "hotel_star": 4,
            "company_code": "Medival Voyage",
            "header_picture": "http://25.58.106.28:9003/plugin/v1/hotels/GUSftR3d-CHAIN/MED-c98df6/image_1751353715783688308_opt.webp",
            "property_type_code": "Hotels",
            "hotel_description": "awdwadaw",
            "hotel_sub_domain": "localhost:3020",
            "default_color": "#0157ba"
        },
        "hotel_features": null,
        "hotel_image": [
            {
                "id": 1,
                "chain_code": "GUSftR3d-CHAIN",
                "hotel_code": "MED-c98df6",
                "image_name": "http://25.58.106.28:9003/plugin/v1/hotels/GUSftR3d-CHAIN/MED-c98df6/image_1751353742376646997_opt.webp",
                "order": 0
            }
        ],
        "hotel_policy": []
    }
}
```

### 2. Get Room Availability

Check room availability and pricing for specific dates.

**Endpoint:** `GET /roomavailability?StartDate={date}&EndDate={date}`

**Parameters:**
- `StartDate` (required): Check-in date in YYYY-MM-DD format
- `EndDate` (required): Check-out date in YYYY-MM-DD format

**Example Request:**

```javascript
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:9003/plugin/v1/roomavailability?StartDate=2025-08-20&EndDate=2025-08-20',
  headers: { 
    'token': 'lpAbo-H60aY-CV68Z-oomZ2-Oulzv-9pWyQ'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

**Example Response:**

```json
{
    "StatusCode": 0,
    "Message": "Success",
    "Result": [
        {
            "id": 1,
            "chain_code": "GUSftR3d-CHAIN",
            "room_code": "DLX",
            "rate_code": "DLXBR,DLXRO",
            "hotel_code": "MED-c98df6",
            "room_availability_date": "2025-08-20T10:00:00Z",
            "room_price": 0,
            "number_of_rooms": 10,
            "is_close": 0,
            "room_name": "Deluxe",
            "room_description": "Deluxe Queen Bed with large room space",
            "room_bed": 1,
            "room_size": 1,
            "room_max_adult": 2,
            "room_max_children": 1,
            "is_publish": 1,
            "rate_details": [
                {
                    "rate_code": "DLXBR",
                    "rate_name": "",
                    "rate_price": 0,
                    "normal_price": 0,
                    "is_close": 0,
                    "cta": 0,
                    "ctd": 0,
                    "rate_description": ""
                }
            ],
            "image_details": [
                {
                    "id": 1,
                    "chain_code": "GUSftR3d-CHAIN",
                    "hotel_code": "MED-c98df6",
                    "room_code": "DLX",
                    "image_name": "http://25.58.106.28:9003/plugin/v1/rooms/GUSftR3d-CHAIN/MED-c98df6/DLX/image_1753840435541046027_opt.webp",
                    "order": 0
                }
            ],
            "feature_details": null
        }
    ]
}
```

### 3. Create Booking

Create a new booking with guest details and payment processing.

**Endpoint:** `POST /createbooking`

**Request Body:**

```json
{
  "room_code": "DLX",
  "rate_code": "STDRRO",
  "room_price": 100000,
  "arrival_date": "2025-08-21",
  "arrival_time": "14:00",
  "departure_date": "2025-08-22",
  "guest_detail": {
    "name": "John Doe",
    "phone": "08123456789",
    "email": "john.doe@example.com",
    "address": {
      "area": "Kuta",
      "country": "ID",
      "city": "Denpasar",
      "state": "Bali",
      "postCode": "80361"
    }
  },
  "guests": 2,
  "rooms": 1
}
```

**Example Request:**

```javascript
const axios = require('axios');

let data = JSON.stringify({
  "room_code": "DLX",
  "rate_code": "STDRRO",
  "room_price": 100000,
  "arrival_date": "2025-08-21",
  "arrival_time": "14:00",
  "departure_date": "2025-08-22",
  "guest_detail": {
    "name": "John Doe",
    "phone": "08123456789",
    "email": "john.doe@example.com",
    "address": {
      "area": "Kuta",
      "country": "ID",
      "city": "Denpasar",
      "state": "Bali",
      "postCode": "80361"
    }
  },
  "guests": 2,
  "rooms": 1
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:9003/plugin/v1/createbooking',
  headers: { 
    'Content-Type': 'application/json', 
    'token': 'lpAbo-H60aY-CV68Z-oomZ2-Oulzv-9pWyQ'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

**Example Response:**

```json
{
    "StatusCode": 0,
    "Message": "Success",
    "Result": {
        "Payment": {
            "token": "f935ca30-810b-48a3-9979-71d9a30338d1",
            "redirect_url": "https://app.sandbox.midtrans.com/snap/v4/redirection/f935ca30-810b-48a3-9979-71d9a30338d1"
        }
    }
}
```

## Response Format

All API responses follow a consistent format:

```json
{
    "StatusCode": 0,
    "Message": "Success",
    "Result": {
        // Response data here
    }
}
```

- `StatusCode`: 0 for success, other values indicate errors
- `Message`: Human-readable status message
- `Result`: The actual response data

## Error Handling

When an error occurs, the API will return an appropriate HTTP status code along with an error message in the response body.
```
