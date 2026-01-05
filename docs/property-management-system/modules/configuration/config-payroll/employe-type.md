---
title: Employee Type
sidebar_position: 1
---

# Employee Type

Employee types categorize workers by employment arrangement and working hours.

**Purpose:**

- Differentiate full-time, part-time, contractors, interns
- Control benefits eligibility
- Generate employment type reports
- Support different payroll rules per type

**Fields:**

| Field           | Type   | Required | Description                                  |
| --------------- | ------ | -------- | -------------------------------------------- |
| **Type Code**   | Text   | Yes      | Unique identifier (e.g., "FT", "PT", "CONT") |
| **Type Name**   | Text   | Yes      | Full type name (e.g., "Full-Time Employee")  |
| **Description** | Text   | No       | Additional details about employment type     |
| **Active**      | Toggle | Yes      | Enable/disable employee type                 |

**How to Configure:**

1. Navigate to **Employee > Configuration > Employee Type**
2. Click **Insert** button
3. Fill **Type Code** (short abbreviation)
4. Fill **Type Name** (full descriptive name)
5. Add **Description** explaining type characteristics (optional)
6. Set **Active** = Yes
7. Click **Save**

**Best Practices:**

- Use standard employment type categories
- Define clear criteria for each type
- Document benefits eligibility per type
- Align with labor law classifications

**Common Types:**

- Code: FT | Name: Full-Time Employee (40 hours/week, full benefits)
- Code: PT | Name: Part-Time Employee (< 40 hours/week, prorated benefits)
- Code: CONT | Name: Contractor (project-based, no benefits)
- Code: INTERN | Name: Intern (temporary, limited benefits)
- Code: TEMP | Name: Temporary Staff (seasonal, limited benefits)
