---
sidebar_position: 2
---

# API Endpoints

This page provides a comprehensive list of available API endpoints for the Cakrahub Booking Engine.

## Base URL

```
https://chsres.com/api/plugin/v1
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
  url: 'https://chsres.com/api/plugin/v1/hotelinformation',
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
            "header_picture": "https://chsres.com/api/plugin/v1/hotels/GUSftR3d-CHAIN/MED-c98df6/image_1751353715783688308_opt.webp",
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
                "image_name": "https://chsres.com/api/plugin/v1/hotels/GUSftR3d-CHAIN/MED-c98df6/image_1751353742376646997_opt.webp",
                "order": 0
            }
        ],
        "hotel_policy": []
    }
}
```

#### Response Field Details

- **Result**: Contains the main response data, including hotel information, features, images, and policies.
  - **hotel_information**: Object with detailed information about the hotel:
    - `id`: Unique identifier for the hotel.
    - `chain_code`: Code representing the hotel chain.
    - `hotel_code`: Unique code for the hotel property.
    - `hotel_name`: Name of the hotel.
    - `hotel_address`: Full address of the hotel.
    - `hotel_phone_number`: Contact phone number for the hotel.
    - `hotel_email`: Contact email address for the hotel.
    - `hotel_star`: Star rating of the hotel (integer).
    - `company_code`: Name or code of the company operating the hotel.
    - `header_picture`: URL to the main image/banner for the hotel.
    - `property_type_code`: Type of property (e.g., "Hotels").
    - `hotel_description`: Description of the hotel.
    - `hotel_sub_domain`: Subdomain or URL for the hotel's web presence.
    - `default_color`: Default color code (hex) for branding/UI.
  - **hotel_features**: List of hotel features (null if not available).
  - **hotel_image**: Array of image objects for the hotel:
    - `id`: Unique identifier for the image.
    - `chain_code`: Code representing the hotel chain.
    - `hotel_code`: Code for the hotel property.
    - `image_name`: URL to the hotel image.
    - `order`: Display order for the image.
  - **hotel_policy**: Array of hotel policy objects (empty if not available).

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
  url: 'https://chsres.com/api/plugin/v1/roomavailability?StartDate=2025-08-20&EndDate=2025-08-20',
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
                    "image_name": "https://chsres.com/api/plugin/v1/rooms/GUSftR3d-CHAIN/MED-c98df6/DLX/image_1753840435541046027_opt.webp",
                    "order": 0
                }
            ],
            "feature_details": null
        }
    ]
}
```

#### Response Field Details

- **Result**: Array of room availability objects, each representing a room type and its availability for the requested date range.
  - `id`: Unique identifier for the room availability record.
  - `chain_code`: Code representing the hotel chain.
  - `room_code`: Code for the room type.
  - `rate_code`: Comma-separated list of rate codes available for this room.
  - `hotel_code`: Code for the hotel property.
  - `room_availability_date`: Date and time for which the room availability applies (ISO format).
  - `room_price`: Price for the room (may be 0 if not set).
  - `number_of_rooms`: Number of rooms available for this type on the given date.
  - `is_close`: Indicates if the room is closed for booking (0 = open, 1 = closed).
  - `room_name`: Name of the room type.
  - `room_description`: Description of the room type.
  - `room_bed`: Number of beds in the room.
  - `room_size`: Size of the room (unit may vary).
  - `room_max_adult`: Maximum number of adults allowed in the room.
  - `room_max_children`: Maximum number of children allowed in the room.
  - `is_publish`: Indicates if the room is published/visible (1 = published, 0 = not published).
  - `rate_details`: Array of rate detail objects for this room:
    - `rate_code`: Code for the rate plan.
    - `rate_name`: Name of the rate plan.
    - `rate_price`: Price for this rate plan.
    - `normal_price`: Normal (non-discounted) price for this rate plan.
    - `is_close`: Indicates if this rate is closed (0 = open, 1 = closed).
    - `cta`: Close to arrival (0 = not closed, 1 = closed).
    - `ctd`: Close to departure (0 = not closed, 1 = closed).
    - `rate_description`: Description of the rate plan.
  - `image_details`: Array of image objects for the room:
    - `id`: Unique identifier for the image.
    - `chain_code`: Code representing the hotel chain.
    - `hotel_code`: Code for the hotel property.
    - `room_code`: Code for the room type.
    - `image_name`: URL to the room image.
    - `order`: Display order for the image.
  - `feature_details`: List of room features (null if not available).

### 3. Create Booking

Create a new booking with guest details and payment processing.

**Endpoint:** `POST /createbooking`


**Request Body:**

```json
{
    "booking_form": {
        "room_code": "DLX",
        "rate_code": "STDRRO",
        "room_price": 100000,
        "arrival_date": "2025-08-29",
        "arrival_time": "14:00",
        "departure_date": "2025-08-30",
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
    },
    "payment_info": {
        "redirect_url" : "https://example.com",
        "send_url_to_email": true
    }
}
```


#### Request Body Field Details

- `booking_form`: Object containing booking details:
  - `room_code`: Code for the room type being booked.
  - `rate_code`: Code for the rate plan selected.
  - `room_price`: Price for the room (per night or total, depending on API design).
  - `arrival_date`: Check-in date (YYYY-MM-DD).
  - `arrival_time`: Check-in time (HH:mm).
  - `departure_date`: Check-out date (YYYY-MM-DD).
  - `guest_detail`: Object containing guest information:
    - `name`: Full name of the primary guest.
    - `phone`: Contact phone number of the guest.
    - `email`: Email address of the guest.
    - `address`: Object with guest address details:
      - `area`: Area or district.
      - `country`: Country code (e.g., "ID").
      - `city`: City name.
      - `state`: State or province.
      - `postCode`: Postal code.
  - `guests`: Total number of guests.
  - `rooms`: Number of rooms to book.
- `payment_info`: Object containing payment preferences:
  - `redirect_url` (**required**): URL to redirect the user after booking or payment. This field must be provided in every request.
  - `send_url_to_email`: Boolean indicating if the payment/booking URL should be sent to the guest's email.

---

**Example Request:**

```javascript
const axios = require('axios');

let data = JSON.stringify({
  "booking_form": {
    "room_code": "DLX",
    "rate_code": "STDRRO",
    "room_price": 100000,
    "arrival_date": "2025-08-29",
    "arrival_time": "14:00",
    "departure_date": "2025-08-30",
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
  },
  "payment_info": {
    "redirect_url": "https://example.com",
    "send_url_to_email": true
  }
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://chsres.com/api/plugin/v1/createbooking',
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

---


**Example Response:**

```json
{
  "StatusCode": 0,
  "Message": "Success",
  "Result": {
    "booking_code": "GUMEZX1C",
    "payment_id": "BE-MED-c98df6-GUMEZX1C",
    "payment_token": "23cca92f-24f8-4609-8c9f-248305520236",
    "payment_url": {
      "token": "23cca92f-24f8-4609-8c9f-248305520236",
      "redirect_url": "https://app.sandbox.midtrans.com/snap/v4/redirection/23cca92f-24f8-4609-8c9f-248305520236"
    }
  }
}
```

#### Response Field Details

- **Result**: Contains the booking result and payment information.
  - `booking_code`: Unique code for the created booking.
  - `payment_id`: Payment reference code for the booking.
  - `payment_token`: Token to be used for payment gateway redirection.
  - `payment_url`: Object with payment gateway details:
  - `token`: Payment token (same as `payment_token`).
  - `redirect_url`: URL to redirect the user for payment processing (e.g., Midtrans Snap payment page).

### 4. Get Booking Status

Retrieve booking status and details for one or more bookings.

**Endpoint:** `GET /getallbooking`

**Parameters:**
- `start_date` (required): Start date for filtering bookings (YYYY-MM-DD)
- `end_date` (required): End date for filtering bookings (YYYY-MM-DD)
- `by_arrival` (optional): Set to `1` to filter by arrival date, `0` for booking date
- `booking_code` (optional, repeatable): One or more booking codes to filter results

**Example Request:**

```javascript
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://chsres.com/api/plugin/v1/getallbooking?start_date=2025-08-29&end_date=2025-08-30&by_arrival=0&booking_code=ABC123&booking_code=DEF456',
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
            "arrival_date": "2025-08-29T00:00:00Z",
            "booking_code": "GUME2B3A",
            "booking_status": "new",
            "chain_code": "GUSftR3d-CHAIN",
            "created_at": "2025-08-29T07:14:35.351Z",
            "created_by": "ClientBE",
            "departure_date": "2025-08-30T00:00:00Z",
            "guest_code1": 52,
            "guest_code10": 0,
            "guest_code2": 0,
            "guest_code3": 0,
            "guest_code4": 0,
            "guest_code5": 0,
            "guest_code6": 0,
            "guest_code7": 0,
            "guest_code8": 0,
            "guest_code9": 0,
            "hotel_code": "MED-c98df6",
            "id": 52,
            "is_ack": null,
            "is_paid": 0,
            "member_code1": "",
            "member_code10": "",
            "member_code2": "",
            "member_code3": "",
            "member_code4": "",
            "member_code5": "",
            "member_code6": "",
            "member_code7": "",
            "member_code8": "",
            "member_code9": "",
            "number_of_guest": 2,
            "number_of_room_booking": 1,
            "payment_account": "PT. Cakra Media Data",
            "payment_code": "BE-MED-c98df6-GUME2B3A",
            "payment_price": 300000,
            "payment_vendor": "Midtrans",
            "room_code": "DLX",
            "room_rate_code": "STDRRO",
            "room_type_price": 300000,
            "updated_at": "2025-08-29T07:14:35.351Z",
            "updated_by": ""
        }
    ]
}
```

#### Response Field Details

- **Result**: Array of booking objects, each with the following fields:
  - `arrival_date`: Arrival/check-in date (ISO format)
  - `booking_code`: Unique code for the booking
  - `booking_status`: Status of the booking (e.g., "new", "confirmed", "cancelled")
  - `chain_code`: Code representing the hotel chain
  - `created_at`: Timestamp when the booking was created (ISO format)
  - `created_by`: Source or user who created the booking
  - `departure_date`: Departure/check-out date (ISO format)
  - `guest_code1` ... `guest_code10`: Guest codes associated with the booking
  - `hotel_code`: Code for the hotel property
  - `id`: Unique identifier for the booking
  - `is_ack`: Acknowledgement status (null or integer)
  - `is_paid`: Payment status (0 = not paid, 1 = paid)
  - `member_code1` ... `member_code10`: Member codes associated with the booking
  - `number_of_guest`: Total number of guests
  - `number_of_room_booking`: Number of rooms booked
  - `payment_account`: Name of the payment account
  - `payment_code`: Payment reference code
  - `payment_price`: Total payment amount
  - `payment_vendor`: Payment provider/vendor (e.g., "Midtrans")
  - `room_code`: Code for the room type
  - `room_rate_code`: Code for the room rate/plan
  - `room_type_price`: Price for the room type
  - `updated_at`: Timestamp when the booking was last updated (ISO format)
  - `updated_by`: User or system who last updated the booking