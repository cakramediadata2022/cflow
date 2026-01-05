---
title: Fingerprint Device
sidebar_position: 14
---

# Fingerprint Device

Manage physical fingerprint scanner hardware.

**Overview:**

Registry of all fingerprint scanners with network settings and operational status.

**Access:** Configuration → Fingerprint Devices

**Fields:**

| Field            | Required | Description        | Example                       |
| ---------------- | -------- | ------------------ | ----------------------------- |
| **Device ID**    | ✅       | Unique identifier  | MAIN_ENTRANCE                 |
| **Device Name**  | ✅       | Descriptive name   | Main Scanner - Entrance       |
| **IP Address**   | ✅       | Network IP         | 192.168.1.100                 |
| **Port**         | ✅       | Communication port | 4370                          |
| **Device Model** | ✅       | Manufacturer model | ZKTeco F18                    |
| **Device Type**  | ✅       | Category           | Fingerprint, Face Recognition |
| **Location**     | ❌       | Physical location  | Building A - Floor 1          |
| **Max Users**    | ❌       | Device capacity    | 3000                          |
| **Status**       | Auto     | Connection status  | Online, Offline, Error        |
| **Remark**       | ❌       | Notes              | -                             |

**How to Use:**

**Add Device:**

1. Click **Insert**
2. Fill: Device ID, Name, IP, Port, Model, Type
3. Click **Save**

**Test Connection:**

1. Select device → **Test Connection**
2. Result: Online (green) or Offline (red)

**Export Device Data:**

1. Select device → **Export**
2. Download enrolled users file
3. Use for enrollment import

**Edit/Delete:**

- Edit: Update IP, Port, or Location
- Delete: Removes device record (not enrollments)
