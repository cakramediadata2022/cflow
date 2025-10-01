---
sidebar_position: 1
---

# Floor Plan

The Floor Plan feature in the Cakrasoft Front Desk module provides a detailed, interactive visual map of the hotel's room layout. It enables staff to monitor room status, manage assignments, and perform key operations directly from the floor plan interface. Color codes and icons indicate the real-time status of each room, making it easy to identify vacant, occupied, ready, dirty, out-of-order, and other room conditions at a glance.

## Overview

The Floor Plan is not just a visual tool—it is fully interactive and supports a range of operational tasks, including:
- Creating reservations and walk-in bookings
- Checking in guests
- Processing transactions
- Checking out guests
- Changing room status (ready, clean, dirty, out of order, etc.)
- Configuring room layout (admin only)

Room status and available actions are determined by both the current mode and user authorization level.

## Access Modes & Permissions

There are four access modes, each with specific permissions:

1. **View Only**: Can only view the floor plan and room statuses.
2. **Reception**: Can create reservations, walk-ins, check-ins, process transactions, and check-outs.
3. **Housekeeping**: Can change room status (e.g., ready, clean, dirty, out of order, office use, under construction).
4. **Admin**: Can configure the floor plan and adjust room layout (move/resize rooms).

Access to each mode is controlled via the User Setting submenu and is based on user authorization.

## Floor Plan Operations by Mode

### Reception Mode
- **Vacant Room**:
  - Walk-In: Double Click
  - New Reservation: Ctrl + Double Click
- **Reserved Room**:
  - Update Profile: Double Click
  - Deposit: Ctrl + Double Click
- **Occupied Room**:
  - Update Profile: Double Click
  - Transaction: Ctrl + Double Click
  - Check Out: Shift + Double Click

### Housekeeping Mode (All Rooms)
- Set as Ready: Ctrl + Double Click
- Set as Clean: Shift + Double Click
- Set as Dirty: Alt + Double Click
- Out of Order: Ctrl + Shift + Double Click
- Office Use: Ctrl + Alt + Double Click
- Under Construction: Shift + Alt + Double Click

### Admin Mode (All Rooms)
- Move Room: Ctrl + Drag & Drop
- Resize Room: Shift + Drag & Drop
- All admin actions open the relevant editor form for configuration

## How to Access Floor Plan

1. Click the **Front Desk** menu.
2. Select the **Floor Plan** submenu from the menu group on the left.

## Key Features

- Interactive, real-time visual map of all hotel rooms by floor
- Color and icon indicators for room status
- Direct access to reservation, check-in, check-out, and housekeeping functions
- Role-based access and operation modes
- Admin tools for configuring room layout

## Typical Use Cases

- Assigning rooms and managing walk-in guests
- Updating guest profiles and processing deposits
- Coordinating with housekeeping for room cleaning and maintenance
- Managing out-of-order, office use, or under-construction rooms
- Adjusting room layout as needed (admin)

---

The Floor Plan feature is a powerful operational hub, giving staff the ability to manage room inventory, guest flow, and housekeeping tasks efficiently—all from a single, intuitive interface tailored to their role and authorization level.