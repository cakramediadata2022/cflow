---
title: Component Category
sidebar_position: 17
---

# Component Category

Organize earnings and deductions into logical groups for easier management and reporting.

**Purpose:**

- Group similar components together
- Simplify component selection during payroll
- Enable category-based reporting
- Support better audit and compliance review

**Applies to:** Earnings and Deductions ONLY (not Statutory)

**Fields:**

| Field             | Type   | Required | Description                                            |
| ----------------- | ------ | -------- | ------------------------------------------------------ |
| **Category Code** | Text   | Yes      | Unique identifier (e.g., "FIXED_ALLOW", "KASBON")      |
| **Category Name** | Text   | Yes      | Display name (e.g., "Fixed Allowance", "Loan/Advance") |
| **Description**   | Text   | No       | Additional details about category                      |
| **Active**        | Toggle | Yes      | Enable/disable category                                |

**Common Earnings Categories:**

| Code        | Name               | Usage                                                 |
| ----------- | ------------------ | ----------------------------------------------------- |
| FIXED_ALLOW | Fixed Allowance    | Regular monthly allowances (transport, meal, housing) |
| VAR_ALLOW   | Variable Allowance | Shift, attendance, performance-based                  |
| BONUS       | Bonus              | Annual, quarterly, project completion                 |
| INCENTIVE   | Incentive          | Sales commission, performance rewards                 |
| OVERTIME    | Overtime           | Overtime compensation                                 |
| OTHER_EARN  | Other Earnings     | Reimbursements, special payments                      |

**Common Deductions Categories:**

| Code         | Name               | Usage                                            |
| ------------ | ------------------ | ------------------------------------------------ |
| FIXED_DED    | Fixed Deduction    | Regular deductions (cooperative dues, insurance) |
| VAR_DED      | Variable Deduction | Late penalties, absence fines                    |
| KASBON       | Kasbon             | Loan/advance repayments                          |
| UNPAID_LEAVE | Unpaid Leave       | Deduction for unpaid leave days                  |
| OTHER_DED    | Other Deductions   | Special or uncommon deductions                   |

**How to Configure:**

1. Navigate to **Payroll Component > Configuration > Component Category**
2. Click **Insert** button
3. Fill **Category Code** (short, unique identifier)
4. Fill **Category Name** (descriptive name)
5. Add **Description** (optional)
6. Set **Active** = Yes
7. Click **Save**

**Best Practices:**

- Use clear, descriptive category names
- Keep categories consistent across organization
- Don't create too many categories (6-8 per type is ideal)
- Review and consolidate unused categories annually
