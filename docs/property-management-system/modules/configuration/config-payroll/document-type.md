---
title: Document Type
sidebar_position: 6
---

# Document Type

Document Types are predefined categories used to organize employee documents. System administrators can manage document types to match organizational needs.

### Accessing Document Type Configuration

**Navigation:** Employee Document → Configuration → Document Type

### Default Document Types

System comes with 15 predefined document types (see Key Concepts section for full list). These cover common HR documentation needs for Indonesian companies.

### Document Type Fields

When creating or editing document types:

| Field                     | Description                                      | Required | Format                                    |
| ------------------------- | ------------------------------------------------ | -------- | ----------------------------------------- |
| **Type Code**             | Unique identifier for the document type          | Yes      | Alphanumeric, no spaces (e.g., "ID_CARD") |
| **Type Name**             | Display name for the document type               | Yes      | Text (e.g., "ID Card (KTP)")              |
| **Description**           | Explanation of what this document type is for    | No       | Text area                                 |
| **Requires Expiry**       | Whether documents of this type need expiry dates | Yes      | Checkbox (Yes/No)                         |
| **Default Expiry Period** | Default validity period if applicable            | No       | Number (months or years)                  |
| **Status**                | Whether this type is active and selectable       | Yes      | Active/Inactive                           |
| **Display Order**         | Order in dropdown lists                          | No       | Number                                    |

### How to Use Document Type Configuration

<details>
<summary><strong>How to Add New Document Type</strong></summary>

**Steps:**

1. **Navigate to Configuration**

   - Go to Employee Document page
   - Click "Configuration" or settings icon
   - Select "Document Type"

2. **Click "Add New Type"**

3. **Fill in type details:**

   - **Type Code:** Unique identifier (e.g., "VISA_WORK")
   - **Type Name:** Display name (e.g., "Work Visa")
   - **Description:** "Work permit visa for foreign employees"
   - **Requires Expiry:** ✅ Check (Work visas expire)
   - **Default Expiry Period:** 12 months (if applicable)
   - **Status:** Active
   - **Display Order:** 16 (after existing types)

4. **Click "Save"**

**Result:** New document type appears in document upload dropdown for all users.

:::tip
Use clear naming conventions:

- CAPITAL_SNAKE_CASE for Type Code
- Title Case for Type Name
- Brief but descriptive descriptions
  :::

</details>

<details>
<summary><strong>How to Edit Existing Document Type</strong></summary>

**Steps:**

1. **Navigate to Document Type Configuration**

2. **Find the type** you want to edit in the list

3. **Click "Edit" button**

4. **Update fields** as needed:

   - Can change Type Name, Description
   - Cannot change Type Code (used in database references)
   - Can toggle Requires Expiry setting
   - Can change Display Order

5. **Click "Save Changes"**

**What can be changed:**

- Type Name (display only)
- Description
- Requires Expiry setting
- Default Expiry Period
- Display Order
- Status (Active/Inactive)

**What cannot be changed:**

- Type Code (database constraint)

:::warning
Changing "Requires Expiry" affects existing documents:

- If changing from No → Yes: Existing documents won't require expiry retroactively
- If changing from Yes → No: Existing expiry dates remain but not enforced
  :::

</details>

<details>
<summary><strong>How to Deactivate Document Type</strong></summary>

**Steps:**

1. **Open Document Type Configuration**

2. **Find the document type**

3. **Click "Edit"**

4. **Change Status** to "Inactive"

5. **Click "Save"**

**Effect:**

- Type no longer appears in upload dropdown for new documents
- Existing documents with this type remain unchanged
- Type can be reactivated anytime
- Cannot delete types that have existing documents

:::info
Deactivate instead of delete to preserve historical data integrity.
:::

</details>

<details>
<summary><strong>How to Reorder Document Types</strong></summary>

**Steps:**

1. **Open Document Type Configuration**

2. **Edit each document type** you want to reorder

3. **Update Display Order field:**

   - 1 = First in dropdown
   - 2 = Second
   - 3 = Third, etc.

4. **Save changes**

**Result:** Document types appear in new order in all dropdowns.

**Best Practice:** Order by frequency of use - most common types first.

</details>
