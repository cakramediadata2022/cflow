---
title: Schedule Template
sidebar_position: 10
---

# Schedule Template

Pre-configured shift patterns for bulk schedule generation.

**Purpose:** Define reusable shift sequences for consistent scheduling.

**Key Fields:**

| Field              | Type   | Description                     | Example                                                  |
| ------------------ | ------ | ------------------------------- | -------------------------------------------------------- |
| **Template Name**  | Text   | Descriptive template identifier | "Nurse 3-Shift Rotation"                                 |
| **Template Type**  | Select | Fixed or Rotating               | Rotating                                                 |
| **Pattern Length** | Number | Days in template pattern        | 7 days                                                   |
| **Placement**      | Select | Applicable location             | Main Hospital                                            |
| **Department**     | Select | Target department               | Nursing Department                                       |
| **Shift Sequence** | Array  | Ordered shift assignments       | [Morning, Evening, Night, Rest, Morning, Evening, Night] |
| **Effective Date** | Date   | When template becomes active    | 2026-01-01                                               |
| **Status**         | Toggle | Active or Inactive              | Active                                                   |

**How to Use:**

1. Navigate to **Work Schedule** → **Configurations** → **Schedule**
2. Click **Add Template**
3. Enter template name and select type
4. Set pattern length (days in sequence)
5. Select placement and department
6. Define shift sequence:
   - Day 1: Assign shift (e.g., Morning Shift)
   - Day 2: Assign shift (e.g., Evening Shift)
   - Continue for all days in pattern
7. Set effective date
8. Activate template
9. Use in Generate Schedule feature
