---
title: Tax Exemption
sidebar_position: 19
---

# Tax Exemption

Configure tax exemption amounts for specific employees or groups, allowing customized non-taxable income adjustments beyond standard PTKP.

**Purpose:**

- Define special tax exemptions for certain employees
- Support specific tax relief programs or policies
- Apply temporary or permanent tax exemptions
- Track exemption validity periods

**Fields:**

| Field              | Type   | Required | Description                                     |
| ------------------ | ------ | -------- | ----------------------------------------------- |
| **Code**           | Text   | Yes      | Unique exemption identifier (e.g., "EXMPT_001") |
| **Name**           | Text   | Yes      | Exemption name (e.g., "Disability Tax Relief")  |
| **Amount**         | Number | Yes      | Exemption amount (Rp)                           |
| **Effective Date** | Date   | Yes      | When exemption becomes active                   |
| **End Date**       | Date   | Yes      | When exemption expires                          |
| **Active**         | Toggle | Yes      | Enable/disable exemption                        |
| **Remark**         | Text   | No       | Additional notes or reference                   |

**Common Use Cases:**

| Exemption Type        | Example                                       | Amount                     |
| --------------------- | --------------------------------------------- | -------------------------- |
| Disability Relief     | Tax exemption for employees with disabilities | Varies per regulation      |
| Veteran Benefits      | Tax relief for veterans                       | Fixed by government policy |
| Special Circumstances | Court order, tax incentive programs           | Case-specific              |
| Temporary Relief      | Disaster relief, pandemic assistance          | Program-specific           |

**How to Configure:**

1. Navigate to **Tax Adjustment > Configuration > Tax Exemption**
2. Click **Insert** button
3. Fill **Code** and **Name** (descriptive identifier)
4. Enter **Amount** (exemption value in Rp)
5. Set **Effective Date** (start date)
6. Set **End Date** (expiration date)
7. Toggle **Active** = Yes
8. Add **Remark** (reference to policy/regulation)
9. Click **Save**

**Best Practices:**

- Reference supporting documentation (regulation number, policy memo)
- Set clear end dates for temporary exemptions
- Review and update exemptions annually
- Deactivate expired exemptions instead of deleting

**Important Notes:**

- Exemption reduces taxable income in tax calculation
- Must have valid legal/regulatory basis
- System applies exemption automatically when active and within date range
- Can combine with standard PTKP
