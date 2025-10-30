---
sidebar_position: 4
---

# Admin API Endpoints

This page provides a comprehensive list of available admin API endpoints for the Cakrahub Booking Engine. These endpoints are used for hotel management operations and require administrator-level API keys.

## Base URL

```
https://chsres.com/api/plugin/v1
```

## Authentication

All admin API requests require authentication using an admin token in the header:

```
headers: {
  'token': 'your-admin-api-token-here'
}
```

**Note:** Admin API keys have `is_admin=1` flag and provide access to management operations.

## Room Management Endpoints

### 1. Create Room

Create a new room type in the hotel inventory.

**Endpoint:** `POST /createroom`

**Request Body:**

```json
{
  "room_code": "ROOM001",
  "room_name": "Deluxe Room",
  "number_of_room": 5,
  "room_bed": 1,
  "room_size": 25.5,
  "room_max_adult": 2,
  "room_max_children": 2,
  "room_description": "Spacious deluxe room with city view",
  "is_publish": 1
}
```

**Example Request:**

```javascript
const axios = require('axios');

let data = JSON.stringify({
  "room_code": "ROOM001",
  "room_name": "Deluxe Room",
  "number_of_room": 5,
  "room_bed": 1,
  "room_size": 25.5,
  "room_max_adult": 2,
  "room_max_children": 2,
  "room_description": "Spacious deluxe room with city view",
  "is_publish": 1
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://chsres.com/api/plugin/v1/createroom',
  headers: {
    'Content-Type': 'application/json',
    'token': 'your-admin-token'
  },
  data: data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

### 2. Get All Rooms

Retrieve all room types for the authenticated hotel.

**Endpoint:** `GET /getallrooms`

**Example Request:**

```javascript
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://chsres.com/api/plugin/v1/getallrooms',
  headers: {
    'token': 'your-admin-token'
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

### 3. Get Room by Code

Retrieve details of a specific room by its code.

**Endpoint:** `GET /getroom/{room_code}`

**Parameters:**
- `room_code`: Room code to retrieve

**Example Request:**

```javascript
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://chsres.com/api/plugin/v1/getroom/ROOM001',
  headers: {
    'token': 'your-admin-token'
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

### 4. Update Room

Update details of an existing room.

**Endpoint:** `PUT /updateroom/{room_code}`

**Parameters:**
- `room_code`: Room code to update

**Request Body:**

```json
{
  "room_code": "ROOM001",
  "room_name": "Updated Deluxe Room",
  "number_of_room": 6,
  "room_bed": 1,
  "room_size": 26.0,
  "room_max_adult": 2,
  "room_max_children": 2,
  "room_description": "Updated spacious deluxe room with city view",
  "is_publish": 1
}
```

### 5. Delete Room

Delete a room from the hotel inventory.

**Endpoint:** `DELETE /deleteroom/{room_code}`

**Parameters:**
- `room_code`: Room code to delete

## Room Availability Management Endpoints

### 6. Modify Room Availability

Create or update room availability with pricing and rate details.

**Endpoint:** `POST /modifyroomavailability`

**Request Body:**

```json
{
  "data": [
    {
      "hotel_code": "MED-c98df6",
      "room_code": "DLX",
      "rate_code": "TST",
      "room_availability_date": "2025-11-05T00:00:00Z",
      "price": 555555,
      "rate_detail": [
        {
          "rate_code": "TST",
          "rate_price": 150000,
          "cta": 2,
          "ctd": 1,
          "min_night": 1,
          "max_night": 30,
          "created_by": "api_user"
        },
        {
          "rate_code": "SPRRO",
          "rate_price": 200000,
          "cta": 3,
          "ctd": 2,
          "min_night": 2,
          "max_night": 14,
          "created_by": "api_user"
        }
      ],
      "number_of_rooms": 10,
      "created_by": "api_user"
    }
  ]
}
```

### 7. Get All Room Availability

Retrieve all room availability data for specified date range.

**Endpoint:** `GET /getallroomavailability?HotelCode={code}&StartDate={date}&EndDate={date}`

**Parameters:**
- `HotelCode`: Hotel code
- `StartDate`: Start date (YYYY-MM-DD)
- `EndDate`: End date (YYYY-MM-DD)

### 8. Update Stop Sell Room Availability

Update stop sell status for room availability.

**Endpoint:** `PUT /updatestopsellroomavailability`

**Request Body:**

```json
{
  "room_code": "SPR",
  "rate_code": "TST",
  "start_date": "2025-10-30",
  "end_date": "2025-10-30",
  "is_close": 1
}
```

### 9. Update Stop Sell Room Rate Availability

Update stop sell status for room rate availability.

**Endpoint:** `PUT /updatestopsellroomrateavailability`

**Request Body:**

```json
{
  "room_code": "SPR",
  "rate_code": "TST",
  "start_date": "2025-10-28",
  "end_date": "2025-10-29",
  "is_close": 1
}
```

## Rate Management Endpoints

### 10. Create Room Rate

Create a new room rate plan.

**Endpoint:** `POST /createrate`

**Request Body:**

```json
{
  "rate_code": "RATE001",
  "rate_name": "Standard Rate",
  "rate_description": "Standard room rate",
  "start_date_rate": "2025-01-01T00:00:00Z",
  "end_date_rate": "2025-12-31T23:59:59Z",
  "price": 100,
  "is_closed": 0
}
```

### 11. Get All Rates

Retrieve all rate plans for the authenticated hotel.

**Endpoint:** `GET /getallrates`

### 12. Get Rate by Code

Retrieve details of a specific rate by its code.

**Endpoint:** `GET /getrate/{rate_code}`

**Parameters:**
- `rate_code`: Rate code to retrieve

### 13. Update Rate

Update details of an existing rate plan.

**Endpoint:** `PUT /updaterate/{rate_code}`

**Parameters:**
- `rate_code`: Rate code to update

### 14. Delete Rate

Delete a rate plan.

**Endpoint:** `DELETE /deleterate/{rate_code}`

**Parameters:**
- `rate_code`: Rate code to delete

## Additional Admin Endpoints

### Ping

Test API connectivity and authentication for admin access.

**Endpoint:** `GET /ping`

### Test Authorization

Test API authorization for admin access.

**Endpoint:** `GET /test`

### Check Room Availability (Admin)

Check room availability for admin purposes.

**Endpoint:** `GET /checkroomavailability?start_date={date}&end_date={date}&room_code={code}`

**Parameters:**
- `start_date`: Start date (YYYY-MM-DD)
- `end_date`: End date (YYYY-MM-DD)
- `room_code`: Room code to check

### Get Availability URL

Get availability URL for booking widget (admin access).

**Endpoint:** `GET /getavailability?start_date={date}&end_date={date}`

**Parameters:**
- `start_date`: Start date (YYYY-MM-DD)
- `end_date`: End date (YYYY-MM-DD)