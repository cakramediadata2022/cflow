---
title: Leave Type
sidebar_position: 7
---

# Leave Type

Leave types define available leave categories with specific policies and rules.

**Purpose:**

- Standardize leave categorization across organization
- Define paid vs unpaid leave types
- Set documentation requirements per type
- Support compliance with local labor laws
- Enable customization per company policy

#### Leave Type Fields

| Field                      | Type      | Description                                | Required | Default   |
| -------------------------- | --------- | ------------------------------------------ | -------- | --------- |
| **Leave Code**             | Text      | Unique identifier (e.g., "ANNUAL", "SICK") | Yes      | -         |
| **Leave Name**             | Text      | Display name (e.g., "Annual Leave")        | Yes      | -         |
| **Description**            | Text Area | Detailed explanation of leave type         | No       | -         |
| **Paid/Unpaid**            | Dropdown  | Whether leave is paid or unpaid            | Yes      | Paid      |
| **Requires Documentation** | Toggle    | If supporting documents required           | Yes      | No        |
| **Default Quota**          | Number    | Default yearly quota (days)                | No       | 0         |
| **Max Days Per Request**   | Number    | Maximum days per single request            | No       | Unlimited |
| **Min Notice Period**      | Number    | Days in advance to submit                  | No       | 0         |
| **Active**                 | Toggle    | Enable/disable for selection               | Yes      | Yes       |
| **Display Order**          | Number    | Order in dropdown lists                    | No       | Auto      |

#### Common Leave Type Configurations

**Annual Leave:**

- Code: ANNUAL
- Name: Annual Leave
- Paid: Yes
- Requires Documentation: No
- Default Quota: 12 days
- Max Days Per Request: 10 days
- Min Notice Period: 3 days
- Description: "Yearly vacation entitlement for rest and personal time"

**Sick Leave:**

- Code: SICK
- Name: Sick Leave
- Paid: Yes
- Requires Documentation: Yes (if >2 days)
- Default Quota: 12 days
- Max Days Per Request: 5 days
- Min Notice Period: 0 days (emergency)
- Description: "Leave for illness or medical treatment. Medical certificate required for absences exceeding 2 days."

**Unpaid Leave:**

- Code: UNPAID
- Name: Unpaid Leave
- Paid: No
- Requires Documentation: No
- Default Quota: 0 (unlimited with approval)
- Max Days Per Request: 30 days
- Min Notice Period: 7 days
- Description: "Leave without pay for personal reasons after exhausting paid leave balance"

### How to Use Leave Type Configuration

<details>
<summary><strong>How to Add New Leave Type</strong></summary>

**Prerequisites:** HR Admin or HR Manager role.

**Steps:**

1. **Navigate to Configuration:**

   - Go to Leave module
   - Click "Configuration" or settings icon
   - Select "Leave Type"

2. **Click "Insert" or "Add New Leave Type"**

3. **Fill in basic information:**

   - **Leave Code**: Unique code (e.g., "STUDY")
   - **Leave Name**: Display name (e.g., "Study Leave")
   - **Description**: "Leave for educational purposes and professional development"

4. **Configure leave properties:**

   - **Paid/Unpaid**: Select "Paid" or "Unpaid"
   - **Requires Documentation**: Toggle Yes if documents needed
   - **Default Quota**: Enter default days (e.g., 5 days)
   - **Max Days Per Request**: Enter limit (e.g., 10 days)
   - **Min Notice Period**: Enter days (e.g., 7 days)

5. **Set status:**

   - **Active**: Toggle Yes to enable
   - **Display Order**: Set position in dropdown (optional)

6. **Click "Save"**

**Result:** New leave type available immediately in leave request dropdown for all users.

:::tip
Use clear, self-explanatory names and codes. Document requirements clearly in Description field.
:::

</details>

<details>
<summary><strong>How to Edit Existing Leave Type</strong></summary>

**Steps:**

1. **Navigate to Leave Type Configuration**

2. **Find leave type** in the list

3. **Click "Edit" button**

4. **Update fields** as needed:

   - Can change Name, Description
   - Can update Paid/Unpaid status
   - Can modify Documentation requirements
   - Can adjust quota and limits
   - Cannot change Code (database reference)

5. **Click "Save Changes"**

**Impact:**

- Changes apply immediately to new requests
- Existing pending/approved requests unaffected
- Updated requirements apply to future submissions

:::warning
Changing from Paid to Unpaid affects payroll calculations. Coordinate with payroll team before making this change.
:::

</details>

<details>
<summary><strong>How to Deactivate Leave Type</strong></summary>

**When to Deactivate:**

- Leave type no longer used
- Policy changed
- Replaced by new type
- Temporary suspension

**Steps:**

1. **Open Leave Type Configuration**

2. **Find the leave type**

3. **Click "Edit"**

4. **Toggle Active to "No"**

5. **Click "Save"**

**Effect:**

- Type no longer appears in leave request dropdown
- Existing requests with this type remain intact
- Historical data preserved
- Can reactivate anytime

:::info
Deactivate instead of delete to preserve data integrity and historical records.
:::

</details>

<details>
<summary><strong>How to Set Documentation Requirements</strong></summary>

**Steps:**

1. **Edit leave type**

2. **Toggle "Requires Documentation" to Yes**

3. **Add in Description:**

   - When documents are required
   - What documents are acceptable
   - Example: "Medical certificate required for sick leave exceeding 2 consecutive days"

4. **Save changes**

**Result:**

- System may prompt employees to attach documents
- Approvers can verify documentation before approval
- Audit trail maintained for compliance

**Common Documentation Rules:**

- Sick Leave >2 days: Medical certificate
- Maternity Leave: Birth certificate
- Compassionate Leave: Death certificate
- Study Leave: Acceptance letter or course details

</details>
