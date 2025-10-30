---
sidebar_position: 2
---

# API Endpoints Overview

This page provides an overview of the available API endpoints for the Cakrahub Booking Engine. The API is divided into two main categories: **Client Endpoints** and **Admin Endpoints**.

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

## Endpoint Categories

### Client Endpoints

Client endpoints are designed for public-facing operations and booking management. These endpoints allow:

- **Hotel Information Access**: Retrieve hotel details, images, and policies
- **Room Availability Checking**: Check room availability and pricing for specific dates
- **Booking Operations**: Create new bookings and retrieve booking status
- **Image Assets**: Access hotel and room images (no authentication required)

Client endpoints are typically used by:
- Booking widgets and websites
- Third-party booking platforms
- Guest-facing applications

**Key Characteristics:**
- Require standard API tokens
- Focus on read operations and booking creation
- Include some public endpoints for images

### Admin Endpoints

Admin endpoints provide full management capabilities for hotel operations. These endpoints allow:

- **Room Management**: Create, update, delete, and query room types
- **Availability Management**: Set and modify room availability, pricing, and restrictions
- **Rate Management**: Create and manage room rate plans
- **Stop Sell Operations**: Control booking restrictions and availability closures

Admin endpoints are used by:
- Hotel management systems
- Property management software (PMS)
- Administrative dashboards
- Channel managers

**Key Characteristics:**
- Require admin-level API tokens (`is_admin=1`)
- Include full CRUD operations
- Focus on configuration and management tasks

## Available Endpoints

### Public Endpoints (No Authentication)
- `GET /hotels/{chain_code}/{hotel_code}/{image_name}` - Hotel images
- `GET /hotels/header/{chain_code}/{hotel_code}/{image_name}` - Hotel header images
- `GET /rooms/{chain_code}/{hotel_code}/{room_code}/{image_name}` - Room images

### Client Endpoints
- `GET /hotelinformation` - Get hotel information
- `GET /roomavailability` - Check room availability
- `POST /createbooking` - Create a new booking
- `GET /getallbooking` - Get booking status
- `GET /ping` - Test connectivity
- `GET /test` - Test authorization
- `GET /checkroomavailability` - Check room availability (admin context)
- `GET /getavailability` - Get availability URL

### Admin Endpoints
- `POST /createroom` - Create a room
- `GET /getallrooms` - Get all rooms
- `GET /getroom/{room_code}` - Get room details
- `PUT /updateroom/{room_code}` - Update room
- `DELETE /deleteroom/{room_code}` - Delete room
- `POST /modifyroomavailability` - Modify room availability
- `GET /getallroomavailability` - Get all room availability
- `PUT /updateroomavailability/{room_code}` - Update room availability
- `DELETE /deleteroomavailability/{room_code}` - Delete room availability
- `PUT /updatestopsellroomavailability` - Update stop sell status
- `PUT /updatestopsellroomrateavailability` - Update stop sell rate status
- `POST /createrate` - Create a rate plan
- `GET /getallrates` - Get all rates
- `GET /getrate/{rate_code}` - Get rate details
- `PUT /updaterate/{rate_code}` - Update rate
- `DELETE /deleterate/{rate_code}` - Delete rate

## Getting Started

1. **Generate API Keys**: Visit the [API Key Generation](./generate-api-key) page to create your API credentials
2. **Choose the Right Token**: Use client tokens for booking operations, admin tokens for management tasks
3. **Test Connectivity**: Use the `/ping` endpoint to verify your connection
4. **Review Status Codes**: Check the [API Response Status Codes](./status-code) for error handling

## Rate Limits and Best Practices

- Implement proper error handling for all API calls
- Cache hotel information and images when possible
- Use appropriate authentication levels for your use case
- Monitor API usage and implement retry logic for transient failures

For detailed documentation of each endpoint including request/response examples, see the individual endpoint documentation pages.