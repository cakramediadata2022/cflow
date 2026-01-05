---
title: Reimbursement Category
sidebar_position: 16
---

# Reimbursement Category

Reimbursement categories define expense types with specific rules, limits, and documentation requirements. Each category represents a type of business expense that employees can claim.

**Purpose:**

- Standardize expense classification across organization
- Enforce spending limits per expense type
- Control documentation requirements (receipt mandatory or optional)
- Enable/disable categories based on company policy

**Category Configuration Fields:**

| Field               | Description                              | Example                                                   |
| ------------------- | ---------------------------------------- | --------------------------------------------------------- |
| **Code**            | Unique identifier (uppercase, no spaces) | TRANSPORT, MEDICAL                                        |
| **Name**            | Display name shown to users              | Transportasi, Medis                                       |
| **Description**     | Detailed explanation of coverage         | "Reimbursement untuk biaya transportasi perjalanan dinas" |
| **Max Amount**      | Maximum claimable per request            | Rp 2,000,000                                              |
| **Require Receipt** | Whether receipt upload is mandatory      | Yes/No                                                    |
| **Active Status**   | Enable or disable category               | Active/Inactive                                           |

**Common Category Examples:**

- **Transport**: Travel, taxi, fuel, parking (max Rp 2,000,000)
- **Medical**: Healthcare, medication, check-ups (max Rp 5,000,000)
- **Meal**: Business meals, client meetings (max Rp 500,000)
- **Accommodation**: Hotels, lodging for business travel (max Rp 3,000,000)
- **Training**: Courses, certifications, seminars (max Rp 10,000,000)
- **Communication**: Phone bills, internet for work (max Rp 200,000)
- **Fuel**: Gasoline for company vehicles (max Rp 1,000,000)
- **Stationery**: Office supplies purchase (max Rp 300,000)
- **Parking**: Parking fees for business purposes (max Rp 100,000)
- **Maintenance**: Equipment maintenance costs (max Rp 2,000,000)

**System Behavior:**

- Categories with **Require Receipt = Yes**: System blocks submission without uploaded receipt
- Categories with **Require Receipt = No**: Receipts optional but recommended
- **Max Amount**: System validates and prevents submission exceeding limit
- **Inactive categories**: Hidden from employee selection but existing claims remain visible

---

<details>
<summary><strong>How to Create Reimbursement Category (Admin/HR)</strong></summary>

**Purpose:** Set up new expense type for employee reimbursement claims.

**Steps:**

1. **Navigate to Reimbursement module**

2. **Click "Reimbursement Category" button** (top right, yellow/warning button)

3. **Click "Add" or "Create New" button**

**Category Form Opens:**

4. **Fill category details:**

   - **Code**: Enter unique code (e.g., "INTERNET")

     - Use uppercase letters
     - No spaces (use underscore if needed)
     - Keep concise (max 20 characters)

   - **Name**: Enter display name (e.g., "Internet & Connectivity")

     - User-friendly name employees will see
     - Can use spaces and proper capitalization

   - **Description**: Enter detailed explanation

     - What expenses are covered
     - Any special conditions
     - Examples of valid claims
     - e.g., "Reimbursement for monthly internet subscription and mobile data used for work purposes"

   - **Max Amount**: Enter maximum limit per request

     - Amount in Rupiah
     - e.g., 500000 for Rp 500,000
     - Employees cannot submit claims exceeding this

   - **Require Receipt**: Check or select Yes/No

     - Yes: Receipt upload mandatory (recommended for most categories)
     - No: Receipt optional (for small amounts or difficult-to-document expenses)

   - **Active**: Check or set to Active
     - Active: Category visible to employees
     - Inactive: Hidden from selection

5. **Click "Save" button**

**Result:**

- New category created
- Available in employee reimbursement form
- Validation rules automatically applied

**Best Practices:**

- Set realistic max amounts based on typical expenses
- Require receipts for amounts > Rp 100,000
- Write clear descriptions with examples
- Use consistent naming conventions
- Review and update limits annually

</details>

<details>
<summary><strong>How to Update Reimbursement Category (Admin/HR)</strong></summary>

**Purpose:** Modify existing category settings, limits, or status.

**Steps:**

1. **Navigate to Reimbursement Category module**

   - Click "Reimbursement Category" button from main Reimbursement page

2. **Find category to update:**

   - Use search/filter if many categories
   - Click category row to select

3. **Right-click and select "Edit"** or **Click edit icon**

**Edit Form Opens:**

4. **Modify fields as needed:**

   - **Name**: Update display name
   - **Description**: Revise coverage details
   - **Max Amount**: Increase/decrease limit
     - Note: Does not affect existing submitted claims
     - Only applies to new submissions
   - **Require Receipt**: Change documentation requirement
     - Changing to Yes: Future claims require receipt
     - Changing to No: Future claims optional receipt
   - **Active Status**: Enable/disable category

5. **Click "Update" or "Save" button**

**Result:**

- Category updated
- Changes apply immediately to new claims
- Existing claims not affected

**Important Notes:**

- **Cannot change Code** after creation (data integrity)
- Increasing max amount: Applies to new claims immediately
- Decreasing max amount: May need communication to employees
- Disabling category: Existing claims still visible, but employees cannot select for new claims

**When to Update:**

- Annual policy review (adjust limits for inflation)
- Company policy changes
- Abuse patterns detected (tighten requirements)
- New regulations (e.g., tax law changes)

</details>

<details>
<summary><strong>How to Deactivate Reimbursement Category (Admin/HR)</strong></summary>

**Purpose:** Disable category no longer used or temporarily suspend.

**Steps:**

1. **Navigate to Reimbursement Category module**

2. **Find category to deactivate**

3. **Right-click and select "Edit"**

4. **Change Active Status to "Inactive"** or **Uncheck "Active"**

5. **Click "Save"**

**Result:**

- Category hidden from employee selection
- Cannot be used for new reimbursement claims
- Existing claims with this category remain visible
- Historical data preserved

**What Happens:**

- Employees: Cannot see category in dropdown
- Existing claims: Still visible and processable
- Reports: Category still appears in historical data
- Reactivation: Can set back to Active anytime

**Use Cases:**

- Temporary suspension (e.g., budget freeze on training)
- Replaced by new category (e.g., split TRANSPORT into TAXI and FUEL)
- Policy discontinued (e.g., communication allowance now in salary)
- Seasonal categories (e.g., year-end gifts)

**Best Practice:**

- Communicate to employees before deactivating
- Add note in description explaining why inactive
- Review inactive categories quarterly
- Consider deletion only if never used

:::warning
**Do Not Delete Categories**

If any reimbursement claims exist using the category, deletion may cause data integrity issues. Always use Inactive status instead.
:::

</details>
