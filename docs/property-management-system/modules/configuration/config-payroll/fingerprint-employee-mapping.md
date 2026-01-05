---
title: Fingerprint-Employee Mapping
sidebar_position: 15
---

# Fingerprint-Employee Mapping

Map system employee IDs to device user IDs.

**Overview:**

Critical link between HR system and devices. Without mapping, imports fail.

**Access:** Configuration → Fingerprint Employee Mapping

**Fields:**

| Field               | Required | Description             | Example              |
| ------------------- | -------- | ----------------------- | -------------------- |
| **Employee**        | ✅       | System employee         | EMP001 - John Doe    |
| **Device**          | ✅       | Fingerprint device      | MAIN_ENTRANCE        |
| **Device User ID**  | ✅       | Device-assigned ID      | 125                  |
| **Enrollment Date** | ❌       | Date enrolled on device | 2025-01-15           |
| **Active**          | ✅       | Mapping status          | true/false           |
| **Remark**          | ❌       | Notes                   | "Right + Left thumb" |

**How to Use:**

**Create Mapping:**

1. Click **Insert**
2. **Select Employee:** Choose from dropdown (e.g., EMP001 - John Doe)
3. **Select Device:** Choose from dropdown (e.g., Main Scanner)
4. **Enter Device User ID:** Number from device (e.g., 125)
   - Find from: Device LCD, export file, or enrollment notes
5. Optional: Add enrollment date and remark
6. Click **Save**

**Example:**

```
Employee: EMP001 - John Doe
Device: MAIN_ENTRANCE - Main Scanner
Device User ID: 125
Remark: "Enrolled 2025-01-15"
```

**Finding Device User ID:**

- **During Enrollment:** Device shows "User 125 Enrolled"
- **Device LCD:** Menu → User Management → User List
- **Export File:** First column shows User ID

**Edit/Delete:**

- Edit: Update Device User ID or Device
- Delete: Removes mapping (enrollment record stays)
- Deactivate: Uncheck Active (temporary disable)
