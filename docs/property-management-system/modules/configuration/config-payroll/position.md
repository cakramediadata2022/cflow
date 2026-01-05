---
title: Position
sidebar_position: 4
---

# Position

Positions define job roles and titles within the organization.

**Purpose:**

- Standardize job titles across organization
- Enable position-based reporting
- Support career progression tracking
- Link to salary grades/ranges

**Fields:**

| Field             | Type     | Required | Description                                     |
| ----------------- | -------- | -------- | ----------------------------------------------- |
| **Position Code** | Text     | Yes      | Unique identifier (e.g., "MGR-HR", "STAFF-FIN") |
| **Position Name** | Text     | Yes      | Full position title (e.g., "HR Manager")        |
| **Level**         | Dropdown | No       | Position level (Entry, Junior, Senior, Manager) |
| **Description**   | Text     | No       | Job description or responsibilities             |
| **Active**        | Toggle   | Yes      | Enable/disable position                         |

**How to Configure:**

1. Navigate to **Employee > Configuration > Position**
2. Click **Insert** button
3. Fill **Position Code** (role identifier)
4. Fill **Position Name** (official job title)
5. Select **Level** from dropdown (optional)
6. Add **Description** of responsibilities (optional)
7. Set **Active** = Yes
8. Click **Save**

**Best Practices:**

- Use consistent naming conventions
- Include level in position name for clarity
- Define clear position hierarchy
- Link positions to salary grades
- Review annually and update as organization evolves

**Examples:**

- Code: DIR | Name: Director | Level: Executive
- Code: MGR-HR | Name: HR Manager | Level: Manager
- Code: SPVR-OPS | Name: Operations Supervisor | Level: Supervisor
- Code: SR-ACCT | Name: Senior Accountant | Level: Senior
- Code: STAFF-IT | Name: IT Staff | Level: Entry
