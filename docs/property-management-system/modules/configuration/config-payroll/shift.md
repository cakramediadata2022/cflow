---
title: Shift
sidebar_position: 9
---

# Shift

Define shift details used in schedule assignments.

**Purpose:** Create and manage shift types with specific time ranges and attributes.

**Key Fields:**

| Field                   | Type    | Description            | Example            |
| ----------------------- | ------- | ---------------------- | ------------------ |
| **Shift Code**          | Text    | Short identifier       | MS (Morning Shift) |
| **Shift Name**          | Text    | Full shift name        | Morning Shift      |
| **Start Time**          | Time    | Shift start time       | 08:00              |
| **End Time**            | Time    | Shift end time         | 17:00              |
| **Working Hours**       | Decimal | Total work hours       | 8.0 hours          |
| **Break Duration**      | Decimal | Break time (minutes)   | 60 minutes         |
| **Color Code**          | Color   | Calendar display color | Blue               |
| **Shift Category**      | Select  | Shift classification   | Regular Shift      |
| **Department**          | Select  | Applicable department  | All or specific    |
| **Overtime Multiplier** | Decimal | Default OT rate        | 1.5x               |
| **Status**              | Toggle  | Active or Inactive     | Active             |

**How to Use:**

1. Navigate to **Work Schedule** → **Configurations** → **Shift**
2. Click **Add Shift**
3. Enter shift code and name
4. Set start and end times
5. System calculates working hours (or enter manually)
6. Set break duration
7. Choose color code for calendar display
8. Select shift category
9. Assign to department (or leave for all)
10. Set overtime multiplier if applicable
11. Activate shift
12. Shift now available for schedule assignment
