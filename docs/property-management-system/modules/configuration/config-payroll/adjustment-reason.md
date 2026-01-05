---
title: Adjustment Reason
sidebar_position: 5
---

# Adjustment Reason

Adjustment reasons provide structured categories for documenting why salary changes occur.

**Purpose:**

- Standardize adjustment categorization across organization
- Enable reporting and analysis by adjustment type
- Ensure consistent documentation
- Support policy compliance (e.g., track promotion-related increases)

**Fields:**

| Field           | Type   | Required | Description                                       |
| --------------- | ------ | -------- | ------------------------------------------------- |
| **Reason Code** | Text   | Yes      | Unique identifier (e.g., "PROMO", "PERF", "INIT") |
| **Reason Name** | Text   | Yes      | Full reason name (e.g., "Promotion")              |
| **Description** | Text   | No       | Detailed explanation of when to use this reason   |
| **Active**      | Toggle | Yes      | Enable/disable reason for selection               |

**How to Configure:**

1. Navigate to **Salary Adjustment > Configuration > Adjustment Reason**
2. Click **Insert** button
3. Fill **Reason Code** (short identifier, uppercase recommended)
4. Fill **Reason Name** (clear, descriptive name)
5. Add **Description** explaining when to use (optional but recommended)
6. Set **Active** = Yes
7. Click **Save**

**Best Practices:**

- Create reasons that align with HR policies
- Use clear, self-explanatory names
- Keep list manageable (5-10 reasons typically sufficient)
- Review annually and deactivate unused reasons
- Document in Description field when each reason should be used

**Common Adjustment Reasons:**

**Reason: Initial Salary**

- Code: INIT
- Name: Initial Salary
- Description: First salary assignment for new employee during onboarding
- Use Case: New hire salary setup

**Reason: Promotion**

- Code: PROMO
- Name: Promotion
- Description: Salary increase due to promotion to higher position or level
- Use Case: Employee promoted from Staff to Senior, or Senior to Manager

**Reason: Performance**

- Code: PERF
- Name: Performance Increase
- Description: Merit-based salary increase following performance review
- Use Case: Annual or bi-annual performance-based raises

**Reason: Cost of Living**

- Code: COLA
- Name: Cost of Living Adjustment
- Description: Annual adjustment to maintain purchasing power due to inflation
- Use Case: Organization-wide annual COLA increase

**Reason: Market Adjustment**

- Code: MARKET
- Name: Market Adjustment
- Description: Adjustment to align salary with current market rates for position
- Use Case: Retention adjustment when employee salary below market

**Reason: Correction**

- Code: CORR
- Name: Salary Correction
- Description: Fix error in previously set salary amount
- Use Case: Correcting data entry mistake or calculation error

**Reason: Demotion**

- Code: DEMO
- Name: Demotion
- Description: Salary decrease due to demotion to lower position or level
- Use Case: Position change to lower level

**Reason: Policy Change**

- Code: POLICY
- Name: Policy Change
- Description: Adjustment due to organizational salary policy or structure change
- Use Case: Company-wide salary structure revision

**Reason: Other**

- Code: OTHER
- Name: Other Reason
- Description: Salary adjustment for reasons not covered by standard categories
- Use Case: Unique situations requiring detailed explanation in Reason field
