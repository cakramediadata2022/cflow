---
title: Tax Incentive
sidebar_position: 20
---

# Tax Incentive

Define tax incentive programs with eligibility criteria and publish them for company activation.

**Purpose:**

- Create tax incentive templates based on government programs
- Define which employee categories are eligible
- Standardize incentive application across organization
- Support multiple tax incentive types simultaneously

**Fields:**

| Field              | Type         | Required | Description                                            |
| ------------------ | ------------ | -------- | ------------------------------------------------------ |
| **Code**           | Text         | Yes      | Unique incentive identifier (e.g., "INCNTV_PPH21_DTP") |
| **Name**           | Text         | Yes      | Incentive program name                                 |
| **Eligible Codes** | Multi-Select | Yes      | Employee categories eligible for this incentive        |
| **Effective Date** | Date         | Yes      | Program start date                                     |
| **End Date**       | Date         | Yes      | Program end date                                       |
| **Active**         | Toggle       | Yes      | Enable/disable incentive                               |
| **Remark**         | Text         | No       | Program details, regulation reference                  |

**Eligible Codes:**

Dropdown options defining which employee categories qualify:

- **Employee Type**: Regular, Contract, Outsource
- **Salary Range**: Below certain threshold
- **Industry**: Specific sectors (labor-intensive, export-oriented)
- **Location**: Specific regions or industrial zones
- **Others**: As defined by tax incentive regulation

**Common Tax Incentive Programs:**

| Program               | Description                                       | Eligible                      | Regulation   |
| --------------------- | ------------------------------------------------- | ----------------------------- | ------------ |
| PPh 21 DTP            | Government-borne income tax                       | Employees earning < threshold | PMK specific |
| Super Deduction       | Additional deduction for R&D, vocational training | Participating employees       | PMK specific |
| Export Industry       | Tax reduction for export-oriented companies       | Export industry employees     | PMK specific |
| Special Economic Zone | Tax facilities for SEZ companies                  | SEZ-based employees           | PMK specific |

**How to Configure:**

1. Navigate to **Tax Adjustment > Configuration > Tax Incentive**
2. Click **Insert** button
3. Fill **Code** and **Name**
4. Select **Eligible Codes** (can select multiple)
5. Set **Effective Date** and **End Date** (program period)
6. Toggle **Active** = Yes
7. Add **Remark** (regulation reference, program details)
8. Click **Save**
9. Right-click saved record → **Publish** (makes available for company activation)

**Workflow:**

```
Create Incentive → Set Eligible Codes → Activate → Publish → Company Activates
```

**Best Practices:**

- Reference exact regulation (e.g., "PMK 168/2023")
- Define eligible codes precisely per regulation
- Publish only after thorough verification
- Update end dates when program is extended
- Review active incentives quarterly

**Important Notes:**

- Only **published** incentives appear in Tax Incentive Activation
- Eligible codes determine automatic application to employees
- System validates employee eligibility during payroll
- Can have multiple active incentives simultaneously
