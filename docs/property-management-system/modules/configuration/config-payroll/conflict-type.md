---
title: Conflict Type
sidebar_position: 12
---

# Conflict Type

Define and manage schedule conflict rules and validations.

**Purpose:** Prevent scheduling conflicts and enforce scheduling rules.

**Key Fields:**

| Field             | Type     | Description              | Example                            |
| ----------------- | -------- | ------------------------ | ---------------------------------- |
| **Conflict Name** | Text     | Conflict type identifier | Double Booking                     |
| **Description**   | Text     | Conflict explanation     | Employee scheduled twice same date |
| **Severity**      | Select   | Error/Warning            | Error                              |
| **Auto-Prevent**  | Checkbox | Block or warn            | Checked (Block)                    |
| **Status**        | Toggle   | Active or Inactive       | Active                             |

**Common Conflict Types:**

- Double Booking (same employee, same date, multiple shifts)
- Consecutive Shifts (not enough rest between shifts)
- Overtime Limit Exceeded (max hours per period)
- Minimum Rest Violation (required hours between shifts)
- Maximum Work Days (consecutive days without rest)

**How to Use:**

1. Navigate to **Work Schedule** → **Configurations** → **Conflict Type**
2. Click **Add Conflict Type**
3. Enter conflict name
4. Provide detailed description
5. Set severity level
6. Enable auto-prevent to block (or leave unchecked to warn only)
7. Activate conflict rule
8. System checks during schedule assignment and generation
