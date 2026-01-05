---
title: Holiday Type
sidebar_position: 13
---

# Holiday Type

Holiday Type configuration defines the categories and visual styling for holidays.

**Overview:**

Holiday Types are the classification system for holidays. Each type has:

- Unique code and name
- Color for calendar display
- Active status (show/hide from dropdown)

**Accessing Holiday Type:**

1. Navigate to **Attendance** → **Holiday Calendar**
2. Click **Holiday Type** button at top
3. Opens Holiday Type configuration page

**Fields:**

| Field      | Type         | Required | Description                                   |
| ---------- | ------------ | -------- | --------------------------------------------- |
| **Code**   | Text         | ✅ Yes   | Unique identifier (e.g., NATIONAL, RELIGIOUS) |
| **Name**   | Text         | ✅ Yes   | Display name (e.g., "National Holiday")       |
| **Color**  | Color Picker | ✅ Yes   | Display color for holidays of this type       |
| **Active** | Boolean      | ✅ Yes   | Whether type appears in dropdown (true/false) |
| **Remark** | Text         | ❌ No    | Description or notes                          |

**How to Use:**

**Create New Holiday Type:**

1. In Holiday Type page, click **Insert**
2. Fill fields:
   - Code: REGIONAL
   - Name: Regional Holiday
   - Color: #ffc107 (Yellow)
   - Active: Checked
   - Remark: "Provincial and local holidays"
3. Click **Save**
4. Type immediately available in Holiday Calendar

**Edit Holiday Type:**

1. Select type from grid
2. Click **Edit**
3. Modify fields (commonly: Name, Color)
4. Click **Save**
5. **Effect**: All holidays of this type update color immediately

**Deactivate Holiday Type:**

1. Select type → Click **Edit**
2. Uncheck **Active**
3. Click **Save**
4. **Effect**:
   - Type no longer appears in holiday creation dropdown
   - Existing holidays remain visible
   - Can be reactivated anytime

**Color Recommendations:**

| Type          | Suggested Color | Hex Code | Rationale                           |
| ------------- | --------------- | -------- | ----------------------------------- |
| National      | Red             | #dc3545  | High importance, attention-grabbing |
| Religious     | Green           | #28a745  | Calm, respectful                    |
| Company       | Blue            | #007bff  | Professional, corporate             |
| Special       | Yellow          | #ffc107  | Caution, noteworthy                 |
| Regional      | Cyan            | #17a2b8  | Distinct from primary types         |
| International | Purple          | #6f42c1  | Global, inclusive                   |

**Best Practices:**

- Use high-contrast colors for visibility
- Limit to 6-8 types for clarity
- Consistent color scheme across organization
- Test on both light and dark backgrounds
