---
title: Placement
sidebar_position: 2
---

# Placement

Placement (Branch/Location) defines physical work locations for employees.

**Purpose:**

- Track employee work locations
- Support multi-branch organizations
- Enable location-based reporting
- Manage location-specific allowances

**Fields:**

| Field              | Type   | Required | Description                                      |
| ------------------ | ------ | -------- | ------------------------------------------------ |
| **Placement Code** | Text   | Yes      | Unique identifier (e.g., "HQ-JKT", "BR-BDG")     |
| **Placement Name** | Text   | Yes      | Full location name (e.g., "Head Office Jakarta") |
| **Address**        | Text   | No       | Complete address of location                     |
| **City**           | Text   | No       | City where branch located                        |
| **Description**    | Text   | No       | Additional location details                      |
| **Active**         | Toggle | Yes      | Enable/disable placement                         |

**How to Configure:**

1. Navigate to **Employee > Configuration > Placement**
2. Click **Insert** button
3. Fill **Placement Code** (location identifier)
4. Fill **Placement Name** (full location name)
5. Add **Address** and **City** (optional but recommended)
6. Add **Description** if needed (optional)
7. Set **Active** = Yes
8. Click **Save**

**Best Practices:**

- Use location-based code format (HQ, BR, REG + city code)
- Include full address for branches
- Keep active only current locations
- Update when locations close or relocate

**Examples:**

- Code: HQ-JKT | Name: Head Office Jakarta | City: Jakarta
- Code: BR-BDG | Name: Bandung Branch | City: Bandung
- Code: BR-SBY | Name: Surabaya Branch | City: Surabaya
- Code: REG-BAL | Name: Bali Regional Office | City: Denpasar
- Code: WFH | Name: Work From Home | City: Remote
