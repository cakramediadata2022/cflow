---
title: Department
sidebar_position: 3
---

# Department

Departments organize employees into functional groups for reporting and management.

**Purpose:**

- Group employees by business function
- Enable department-based reporting
- Assign department managers
- Control access by department

**Fields:**

| Field                  | Type     | Required | Description                                    |
| ---------------------- | -------- | -------- | ---------------------------------------------- |
| **Department Code**    | Text     | Yes      | Unique identifier (e.g., "HR", "FIN", "IT")    |
| **Department Name**    | Text     | Yes      | Full department name (e.g., "Human Resources") |
| **Description**        | Text     | No       | Additional details about department            |
| **Department Manager** | Dropdown | No       | Select employee as department head             |
| **Active**             | Toggle   | Yes      | Enable/disable department                      |

**How to Configure:**

1. Navigate to **Employee > Configuration > Department**
2. Click **Insert** button
3. Fill **Department Code** (short, unique identifier)
4. Fill **Department Name** (full descriptive name)
5. Add **Description** if needed (optional)
6. Select **Department Manager** from employee list (optional)
7. Set **Active** = Yes
8. Click **Save**

**Best Practices:**

- Use consistent code format (2-3 uppercase letters)
- Keep names clear and descriptive
- Assign department managers for approval workflows
- Review and consolidate unused departments annually

**Examples:**

- Code: HR | Name: Human Resources
- Code: FIN | Name: Finance & Accounting
- Code: IT | Name: Information Technology
- Code: OPS | Name: Operations
- Code: MKT | Name: Marketing & Sales
