---
title: Attendance
sidebar_position: 1
---

# Attendance

Attendance is the centralized system for recording and managing employee daily work hours, clock in/out times, and attendance status - the foundation for accurate payroll processing.

## Overview

On this page you can:

- View daily attendance records for all employees
- Import attendance data from external devices or files
- Update and correct attendance records
- Track late arrivals, early departures, and overtime
- Filter by attendance status for quick analysis
- Export attendance reports in multiple formats

**Key Capabilities:**

- Automatic attendance record generation from work schedules
- Real-time status calculation (Present, Late, Overtime, Leave, Absent)
- Bulk import from fingerprint devices or Excel files
- Advanced filtering by status, department, and date range
- Comprehensive export options (Daily, Weekly, Monthly, Per Employee)
- Complete audit trail for all attendance modifications
- Role-based access control for data security

:::info
Attendance records are automatically created when work schedules are assigned. Use Import or Update features to record actual clock in/out times.
:::

---

## Key Features

### ⏰ Automatic Record Generation

Attendance records auto-created from work schedules - no manual setup needed.

**Business Value:**

- Eliminate manual attendance record creation
- Reduce HR workload by 80% on attendance setup
- Ensure all scheduled employees have attendance tracking
- Prevent missing attendance records
- Save 2-3 hours daily on administrative tasks

**Perfect for:** Companies with fixed work schedules and predictable staffing

---

### 📊 Real-Time Status Tracking

Automatic attendance status calculation based on clock times and company policies.

**Business Value:**

- Instant visibility into who's present, late, or absent
- Color-coded status badges for quick scanning
- Live attendance dashboard for real-time monitoring
- Identify attendance issues as they happen
- Support immediate management intervention

**Perfect for:** Operations managers needing live workforce visibility

---

### 📥 Bulk Import from Devices

Import attendance data from fingerprint devices, card readers, or Excel files in seconds.

**Business Value:**

- Process 500+ attendance records in under 1 minute
- Eliminate manual data entry errors by 100%
- Support various data sources (biometric devices, CSV, Excel)
- Automatic data validation before import
- Reduce daily attendance processing from hours to minutes

**Perfect for:** Companies using biometric attendance devices or multiple location data sources

---

### 🔍 Smart Filtering and Search

Find specific attendance records instantly with powerful filtering options.

**Business Value:**

- Filter by status: Present, Late, Overtime, Absent, Leave
- See attendance counts per status at a glance
- Export filtered results for targeted follow-ups
- Identify attendance patterns quickly
- Support efficient workforce management

**Perfect for:** HR teams managing 100+ employees across multiple departments

---

### 📤 Flexible Export Options

Generate attendance reports in multiple formats for various business needs.

**Business Value:**

- Daily attendance for operations tracking
- Weekly reports for supervisor reviews
- Monthly summaries for payroll processing
- Per-employee records for performance reviews
- Export to Excel, CSV, or PDF formats
- Reduce report preparation time by 90%

**Perfect for:** Multi-level reporting requirements from operations to executive management

---

### ✏️ Correction and Update

Easy attendance correction with complete audit trail for compliance.

**Business Value:**

- Fix missed clock ins/outs quickly
- Document all changes with timestamps and reasons
- Maintain data integrity and audit compliance
- Support dispute resolution with clear history
- Meet labor law documentation requirements

**Perfect for:** Companies with strict labor compliance and audit requirements

---

### 🎯 Overtime Detection

Automatic identification of overtime hours for accurate compensation.

**Business Value:**

- Calculate overtime hours automatically
- Identify overtime patterns and costs
- Prevent unauthorized overtime with alerts
- Ensure accurate overtime pay calculation
- Support overtime budget management

**Perfect for:** Companies with overtime policies and budget controls

---

### 📈 Attendance Analytics

Built-in summary showing attendance distribution and trends.

**Business Value:**

- See present, late, absent, overtime counts instantly
- Track attendance rate trends over time
- Identify chronic attendance issues
- Support data-driven HR decisions
- Measure workforce reliability metrics

**Perfect for:** HR teams focused on workforce analytics and improvement

---

## Key Concepts

### Attendance Record Fields

Each attendance record contains comprehensive time tracking information:

| Field                | Type    | Description                 | Auto-Calculated | Source                                    |
| -------------------- | ------- | --------------------------- | --------------- | ----------------------------------------- |
| **Date**             | Date    | Attendance date             | No              | From work schedule                        |
| **Employee Name**    | Text    | Full name of employee       | No              | Employee master data                      |
| **Employee ID**      | Text    | Unique employee identifier  | No              | Employee master data                      |
| **Department**       | Text    | Employee's department       | No              | Employee assignment                       |
| **Shift**            | Text    | Assigned work shift         | No              | Work schedule                             |
| **Scheduled In**     | Time    | Expected clock in time      | No              | Shift configuration                       |
| **Scheduled Out**    | Time    | Expected clock out time     | No              | Shift configuration                       |
| **Clock In**         | Time    | Actual clock in time        | No              | Import or manual entry                    |
| **Clock Out**        | Time    | Actual clock out time       | No              | Import or manual entry                    |
| **Work Hours**       | Decimal | Total hours worked          | Yes             | Clock Out - Clock In - Break Time         |
| **Late (Minutes)**   | Number  | Minutes late for clock in   | Yes             | Clock In - Scheduled In (if positive)     |
| **Overtime (Hours)** | Decimal | Overtime hours worked       | Yes             | Work Hours - Standard Hours (if positive) |
| **Status**           | Badge   | Attendance status indicator | Yes             | Based on rules (see below)                |
| **Remarks**          | Text    | Additional notes or reasons | No              | Manual entry                              |

### Attendance Status Rules

Status automatically determined by system logic:

| Status       | Condition                                                     | Color Badge | Payroll Impact             | Action Required              |
| ------------ | ------------------------------------------------------------- | ----------- | -------------------------- | ---------------------------- |
| **Present**  | Clock In ≤ Scheduled In + Grace Period<br/>Clock Out recorded | Green       | Full day pay               | None                         |
| **Late**     | Clock In > Scheduled In + Grace Period<br/>Clock Out recorded | Yellow      | May deduct based on policy | Follow up with employee      |
| **Overtime** | Work Hours > Standard Hours<br/>OR worked on day off/holiday  | Orange      | Overtime pay eligible      | Verify authorization         |
| **Leave**    | Approved leave request exists<br/>No clock in/out             | Blue        | Paid/Unpaid per leave type | None (approved)              |
| **Absent**   | No clock in by cutoff time<br/>No approved leave              | Red         | No pay                     | Immediate follow-up required |

**Status Priority (when multiple conditions met):**

1. Leave (if approved request exists)
2. Absent (if no clock in and no leave)
3. Overtime (if worked extra hours)
4. Late (if late but completed work)
5. Present (normal attendance)

### Work Hours Calculation

System automatically calculates work hours using configured break times:

```
Work Hours = Clock Out Time - Clock In Time - Break Time
```

**Break Time Handling:**

**Fixed Break (Most Common):**

- Set in shift configuration (e.g., 1 hour)
- Automatically deducted from work hours
- Employees don't clock out/in for break

**Tracked Break:**

- Employees clock out/in for breaks
- Break time calculated from clock records
- More precise but requires employee action

**Example Calculation:**

- Clock In: 08:00
- Clock Out: 17:00
- Break Time: 1 hour (fixed)
- Work Hours = 9 hours - 1 hour = **8 hours**

### Overtime Calculation

Overtime triggered when work hours exceed standard limits:

**Daily Overtime:**

```
If Work Hours > Standard Daily Hours (e.g., 8 hours)
Overtime Hours = Work Hours - Standard Daily Hours
```

**Weekly Overtime:**

```
If Total Weekly Hours > Standard Weekly Hours (e.g., 40 hours)
Overtime Hours = Total Weekly Hours - Standard Weekly Hours
```

**Holiday/Weekend Overtime:**

- Any work on designated days off
- Often higher overtime rate
- Full hours count as overtime

**Example:**

- Standard: 8 hours/day
- Worked: 10 hours
- Overtime: 2 hours

### Grace Period

Tolerance window for clock in without late status:

**How It Works:**

- Scheduled In: 08:00
- Grace Period: 10 minutes
- Effective Cutoff: 08:10
- Clock In at 08:05 → **Present** (within grace)
- Clock In at 08:15 → **Late** (beyond grace)

**Configuration:**

- Set per shift or company-wide
- Typical range: 5-15 minutes
- Balances flexibility with punctuality

### Import Data Format

Required columns for attendance import:

| Column          | Format            | Required | Example                       | Notes                         |
| --------------- | ----------------- | -------- | ----------------------------- | ----------------------------- |
| **Employee ID** | Text/Number       | Yes      | "EMP001" or 12345             | Must match system employee ID |
| **Date**        | YYYY-MM-DD        | Yes      | 2026-01-03                    | ISO date format               |
| **Clock In**    | HH:MM:SS or HH:MM | Yes      | 08:30:00 or 08:30             | 24-hour format                |
| **Clock Out**   | HH:MM:SS or HH:MM | Yes      | 17:00:00 or 17:00             | 24-hour format                |
| **Remarks**     | Text              | No       | "Device error - manual entry" | Optional notes                |

**Import Validation:**

- Employee ID must exist in system
- Date must have corresponding work schedule
- Clock In must be before Clock Out
- Time format must be valid
- Duplicate records prevented

### Permission Levels

Access control by role:

| Role                   | View | Import | Update | Export | Delete | Scope               |
| ---------------------- | ---- | ------ | ------ | ------ | ------ | ------------------- |
| **HR Admin**           | ✅   | ✅     | ✅     | ✅     | ✅     | All employees       |
| **HR Manager**         | ✅   | ✅     | ✅     | ✅     | ✅     | All employees       |
| **Department Manager** | ✅   | ❌     | ✅     | ✅     | ❌     | Own department only |
| **Supervisor**         | ✅   | ❌     | ✅     | ✅     | ❌     | Direct reports only |
| **Employee**           | ✅   | ❌     | ❌     | ❌     | ❌     | Own records only    |

---

## Best Practices

### Daily Operations

- **Review Daily**: Check attendance each morning to catch issues early
- **Import Early**: Import device data first thing in the morning
- **Verify Absences**: Cross-check with leave requests before marking absent
- **Document Changes**: Always add remarks when updating attendance manually
- **Follow Up**: Address late arrivals and absences within same day

### Data Management

- **Use Templates**: Always download and use official import template
- **Validate Before Import**: Review data in Excel before importing to system
- **Backup Regularly**: Export weekly backups of attendance data
- **Clean Data**: Remove test records and duplicates regularly
- **Archive Old Data**: Export and archive data older than required retention period

### Accuracy and Compliance

- **Timely Updates**: Make corrections within 24 hours when possible
- **Clear Documentation**: Provide specific reasons in remarks field
- **Verify Changes**: Have supervisor approve manual attendance updates
- **Audit Trail**: Review audit logs monthly for compliance
- **Policy Adherence**: Follow company attendance policy consistently

### Reporting

- **Weekly Reviews**: Generate weekly reports for department managers
- **Monthly Summaries**: Create monthly attendance summaries for payroll
- **Trend Analysis**: Export monthly data to identify patterns
- **Exception Reports**: Run late/absent reports for follow-up
- **Share Appropriately**: Respect confidentiality when sharing attendance data

## How to Use

<details>
<summary><strong>How to View Daily Attendance</strong></summary>

**Steps:**

1. **Navigate to Attendance** page

2. **Select date** using date navigation:

   - Click **Today** button for current date
   - Click **←** (left arrow) for previous day
   - Click **→** (right arrow) for next day
   - Or use date picker to jump to specific date

3. **View attendance list** showing:

   - All employees scheduled for that date
   - Their clock in/out times
   - Work hours and overtime
   - Attendance status with color badges

4. **Interpret color badges:**
   - 🟢 Green = Present
   - 🟡 Yellow = Late
   - 🟠 Orange = Overtime
   - 🔵 Blue = Leave
   - 🔴 Red = Absent

**Quick Actions:**

- Click employee row for detailed view
- Right-click for context menu options
- Use filters to show specific status only

</details>

<details>
<summary><strong>How to Import Attendance Data</strong></summary>

**Prerequisites:** Have attendance data from biometric device or prepared Excel file.

**Steps:**

1. **Prepare data file:**

   - Click **Download Template** (if available) to get correct format
   - Or export data from your biometric device
   - Ensure data includes: Employee ID, Date, Clock In, Clock Out

2. **Format data correctly:**

   - Employee ID must match system IDs
   - Date format: YYYY-MM-DD (e.g., 2026-01-03)
   - Time format: HH:MM or HH:MM:SS (24-hour)
   - Remove any duplicate entries

3. **Click Import Attendance button**

4. **Upload file:**

   - Click "Choose File" or drag-drop file
   - Supported formats: Excel (.xlsx, .xls) or CSV (.csv)
   - Click "Upload" or "Next"

5. **Review validation results:**

   - System checks for errors (invalid IDs, wrong formats, etc.)
   - Review any error messages displayed
   - Fix errors in file if needed and re-upload

6. **Confirm import:**

   - Review summary (X records to import)
   - Click **Confirm Import** or **Import**
   - Wait for success message

7. **Verify imported data:**
   - Check that records appear in attendance list
   - Verify status calculated correctly
   - Spot-check a few records for accuracy

**Result:** Attendance records updated with imported clock in/out times, status automatically calculated.

:::tip
**Import Best Practices:**

- Import daily to keep data current
- Run validation check before confirming
- Keep backup of imported files
- Import during low-usage hours for better performance
  :::

</details>

<details>
<summary><strong>How to Update Attendance Record</strong></summary>

**When to Update:**

- Employee forgot to clock in/out
- Device malfunction
- Clock time incorrect
- Manual attendance entry needed

**Steps:**

1. **Find the record:**

   - Navigate to the attendance date
   - Locate employee in the list
   - Or use search to find employee

2. **Click Edit or Update button** on the record

   - May need to right-click on row for context menu
   - Or double-click row to open edit form

3. **Update time fields:**

   - **Clock In**: Enter actual start time (HH:MM format)
   - **Clock Out**: Enter actual end time (HH:MM format)
   - Status will update automatically based on times

4. **Add remarks** (Required):

   - Enter reason for update
   - Examples:
     - "Employee forgot to clock in - verified with supervisor"
     - "Fingerprint device malfunction - manual entry"
     - "Correction: Clock in time incorrect"

5. **Review calculated fields:**

   - Check Work Hours calculated correctly
   - Verify Late minutes (if any)
   - Confirm Overtime hours (if any)
   - Ensure Status badge correct

6. **Click Save** or **Update**

7. **Verify update:**
   - Record updated in list
   - Status badge reflects changes
   - Audit log created (visible to admins)

**Result:** Attendance record corrected, all calculations updated, change logged for audit trail.

:::warning
All attendance updates are logged with your username and timestamp. Only update with valid reason and proper authorization.
:::

</details>

<details>
<summary><strong>How to Filter Attendance by Status</strong></summary>

**Steps:**

1. **Locate filter section** above attendance table

2. **Select status filter:**

   - **All**: Show all attendance records (default)
   - **Present**: Show only employees who clocked in on time
   - **Late**: Show only late arrivals
   - **Overtime**: Show only employees with overtime
   - **Absent**: Show only employees who didn't clock in
   - **Leave**: Show only employees on approved leave

3. **View filtered results:**

   - Table updates automatically
   - Count shown in parentheses (e.g., "Late (15)")
   - Only selected status displayed

4. **Clear filter:**
   - Click **All** to see all records again

**Use Cases:**

**Morning Check (9 AM):**

- Filter by "Late" to see who arrived after scheduled time
- Follow up with employees or supervisors

**End of Day Check (5 PM):**

- Filter by "Absent" to identify no-shows
- Verify against leave requests
- Contact missing employees

**Payroll Preparation:**

- Filter by "Overtime" to review overtime claims
- Export overtime records for payroll processing

**Weekly Review:**

- Filter by "Late" for pattern analysis
- Identify employees with frequent tardiness

</details>

<details>
<summary><strong>How to Export Attendance Reports</strong></summary>

**Export Options Available:**

1. **Daily Attendance**: Single day snapshot
2. **Weekly Attendance**: 7-day summary
3. **Monthly Attendance**: Full month data
4. **Per Employee**: Individual employee attendance history

**Steps:**

1. **Click Export button** (dropdown)

2. **Select export type:**

   - Click "Daily Attendance" for single day
   - Click "Weekly Attendance" for week range
   - Click "Monthly Attendance" for full month
   - Click "Per Employee" for individual report

3. **Configure export parameters:**

   **For Daily:**

   - Select specific date
   - Choose department (optional)
   - Select format (Excel/CSV/PDF)

   **For Weekly:**

   - Select start date
   - Week automatically calculated (7 days)
   - Choose department (optional)
   - Select format

   **For Monthly:**

   - Select month and year
   - Choose department (optional)
   - Select all employees or specific department
   - Select format

   **For Per Employee:**

   - Select employee from dropdown
   - Choose date range (start and end date)
   - Select format

4. **Click Generate or Export**

5. **Wait for file generation:**

   - Progress indicator shown
   - Large reports may take 30-60 seconds

6. **Download file:**
   - File downloads automatically
   - Or click download link when ready

**Export Contains:**

- All attendance fields (Date, Name, Times, Status)
- Calculated values (Work Hours, Late, Overtime)
- Summary statistics (depending on report type)
- Formatted for readability

**Use Cases:**

- **Daily**: Operations team morning meeting
- **Weekly**: Supervisor review of team attendance
- **Monthly**: Payroll preparation and processing
- **Per Employee**: Performance review, dispute resolution

:::tip
Export to Excel for further analysis with pivot tables and charts.
:::

</details>

<details>
<summary><strong>How to Handle Missing Clock In/Out</strong></summary>

**Scenario:** Employee worked but forgot to clock in or clock out.

**Steps:**

1. **Verify employee actually worked:**

   - Check with supervisor
   - Review security footage (if available)
   - Check work output or logs
   - Get written confirmation

2. **Locate attendance record:**

   - Navigate to work date
   - Find employee in list
   - Record will show scheduled time but no clock time

3. **Click Update/Edit** on record

4. **Enter actual work times:**

   - Clock In: Enter actual arrival time
   - Clock Out: Enter actual departure time
   - Based on verification evidence

5. **Add detailed remarks:**

   - "Employee forgot to clock in - verified with manager John Doe"
   - "Clock out not recorded - time confirmed via security log"
   - Include evidence source

6. **Get approval if required:**

   - Some systems require supervisor approval
   - Submit for approval or have supervisor make update

7. **Click Save**

**Result:** Attendance corrected, employee's pay not affected by honest error.

**Prevention Tips:**

- Remind employees to clock in/out daily
- Place reminders near clock devices
- Send daily attendance confirmations via email/SMS
- Use mobile app with location-based reminders

</details>

<details>
<summary><strong>How to Navigate Between Dates</strong></summary>

**Quick Navigation:**

**Method 1: Navigation Buttons**

1. Use **← Previous Day** button to go back one day
2. Use **→ Next Day** button to go forward one day
3. Click **Today** button to jump to current date

**Method 2: Date Picker** (if available)

1. Click on date field or calendar icon
2. Select month and year from dropdowns
3. Click specific date in calendar
4. View updates to selected date

**Keyboard Shortcuts** (if supported):

- `←` Left Arrow: Previous day
- `→` Right Arrow: Next day
- `Home`: Today
- `Page Up`: Previous week
- `Page Down`: Next week

**Use Cases:**

- Review yesterday's attendance
- Check upcoming schedules
- Compare attendance across multiple days
- Find specific historical date

</details>

<details>
<summary><strong>How to Identify and Handle Absences</strong></summary>

**Steps:**

1. **View daily attendance** for current date

2. **Filter by "Absent" status** to show only no-shows

3. **For each absent employee:**

   **Step A: Check leave requests**

   - Open Leave module
   - Search for employee's leave on that date
   - If approved leave exists:
     - Status should be "Leave" not "Absent"
     - If incorrect, may need to reimport/update

   **Step B: If no leave request**

   - Verify employee was scheduled to work
   - Check if emergency or notification received
   - Contact employee or emergency contact
   - Document communication

4. **Take appropriate action:**

   **If legitimate absence with late notification:**

   - Have employee submit leave request
   - Update status to "Leave" after approval
   - Add remarks about late notification

   **If unauthorized absence:**

   - Keep status as "Absent"
   - Document in remarks
   - Follow company disciplinary policy
   - Report to supervisor/HR manager

   **If employee actually worked:**

   - Device malfunction or forgot to clock
   - Update with actual times
   - Add verification remarks
   - Mark present with late flag if applicable

5. **Follow up:**
   - Send absence notification to supervisor
   - Update employee file if needed
   - Track repeated absences for patterns

**Result:** Accurate attendance records, appropriate follow-up actions taken.

</details>

<details>
<summary><strong>How to Handle Device Malfunction</strong></summary>

**When Fingerprint/Card Reader Fails:**

**Immediate Actions:**

1. **Implement backup method:**

   - Use manual attendance sheet
   - Set up alternate device (if available)
   - Use mobile app check-in (if supported)
   - Have supervisor record arrivals manually

2. **Notify IT/Maintenance:**

   - Report device issue immediately
   - Provide error details
   - Request urgent repair
   - Get estimated fix time

3. **Communicate to employees:**
   - Announce backup attendance method
   - Post notice at entrance
   - Send email/message to affected employees
   - Ensure everyone knows how to record attendance

**After Device Fixed:**

**If you have manual records:**

1. **Prepare import file:**

   - Transfer manual sheet to Excel
   - Use import template format
   - Include all employee IDs, date, times

2. **Import to system:**
   - Use Import Attendance feature
   - Upload prepared file
   - Validate and confirm import

**If you need to manually update:**

1. **Update each record individually:**
   - Find employee attendance record
   - Click Update
   - Enter actual clock in/out times
   - Add remarks: "Device malfunction - times verified by supervisor"
   - Save each record

**Prevention:**

- Test devices weekly
- Have backup device ready
- Train staff on manual backup procedures
- Maintain IT support contact for urgent issues

</details>

---

## FAQ

<details>
<summary><strong>How are attendance records created?</strong></summary>

Attendance records are **automatically generated** when work schedules are assigned.

**Process:**

1. HR assigns work schedule to employees in Work Schedule module
2. System creates attendance record for each scheduled work day
3. Records include date, shift, scheduled in/out times
4. Employees clock in/out against these pre-created records
5. Actual times populate when imported or entered manually

**You don't manually create attendance records** - they come from work schedules.

</details>

<details>
<summary><strong>What if an employee forgets to clock in/out?</strong></summary>

**Solution: Manual Update**

1. Verify employee actually worked (ask supervisor, check logs)
2. Open attendance record and click Update
3. Enter actual work times based on verification
4. Add remarks explaining: "Employee forgot to clock in - verified with Manager Jane"
5. Save changes

**All updates logged** in audit trail with your username and timestamp.

**Prevention:**

- Daily attendance reminders
- Mobile app notifications
- Manager spot checks
- End-of-day review process

</details>

<details>
<summary><strong>Can employees edit their own attendance?</strong></summary>

**No**, employees typically cannot edit their attendance to maintain data integrity.

**What employees CAN do:**

- View their own attendance records
- Request corrections through supervisor
- Submit attendance dispute forms
- Provide supporting documentation

**Who CAN edit:**

- HR Admin/Manager: All records
- Department Manager: Own department
- Supervisor: Direct reports (if permitted)

**All edits create audit trail** for compliance and accountability.

</details>

<details>
<summary><strong>How does the system calculate work hours?</strong></summary>

**Formula:**

```
Work Hours = Clock Out Time - Clock In Time - Break Time
```

**Break Time Handling:**

**Fixed Break (Most Common):**

- Set in shift configuration (e.g., 1 hour lunch)
- Automatically deducted
- Example: 09:00 - 18:00 with 1hr break = 8 hours worked

**Tracked Break:**

- Employees clock out/in for breaks
- System calculates break duration
- More precise but requires employee action

**Night Shift:**

- Clock spans midnight automatically handled
- Example: 22:00 - 06:00 = 8 hours (not -16 hours)

</details>

<details>
<summary><strong>Can I import attendance from fingerprint devices?</strong></summary>

**Yes**, through file import:

**Process:**

1. **Export from device:**

   - Use device software to export attendance data
   - Save as Excel or CSV file
   - Get raw clock in/out records

2. **Format data:**

   - Download system import template
   - Map device columns to template columns:
     - Employee ID → Employee ID
     - Date → Date
     - Time In → Clock In
     - Time Out → Clock Out

3. **Import to system:**
   - Click Import Attendance button
   - Upload formatted file
   - Validate and confirm

**Alternative: Direct Integration**

- Some systems support direct device connection
- Real-time sync without manual import
- Contact IT to check if available

</details>

<details>
<summary><strong>What file format is accepted for import?</strong></summary>

**Accepted Formats:**

- Excel: `.xlsx`, `.xls`
- CSV: `.csv`

**Required Columns:**

| Column Name | Format            | Example           |
| ----------- | ----------------- | ----------------- |
| Employee ID | Text/Number       | "EMP001" or 12345 |
| Date        | YYYY-MM-DD        | 2026-01-03        |
| Clock In    | HH:MM or HH:MM:SS | 08:30 or 08:30:00 |
| Clock Out   | HH:MM or HH:MM:SS | 17:00 or 17:00:00 |

**Tips:**

- Download official template to ensure correct format
- Use 24-hour time format (not AM/PM)
- Employee ID must exactly match system IDs
- Remove header rows except column names

</details>

<details>
<summary><strong>What happens if import data has errors?</strong></summary>

**System validates all imported data:**

**Common Errors Detected:**

- Invalid employee ID (not found in system)
- Wrong date format (not YYYY-MM-DD)
- Invalid time format (not HH:MM)
- Clock Out before Clock In
- Missing required fields
- Duplicate records for same employee/date

**Validation Process:**

1. Upload file
2. System validates each row
3. **If errors found:**
   - Displays error list with row numbers
   - Shows specific error for each row
   - No data imported
4. **Fix errors** in file and re-upload
5. **If validation passes:**
   - Shows summary (e.g., "50 records ready to import")
   - Click Confirm to import
   - All records imported at once

**Partial Import:** Some systems allow importing only valid rows and skipping errors.

</details>

<details>
<summary><strong>What is the difference between Absent and Leave?</strong></summary>

**Critical Difference:**

**Absent:**

- Employee didn't show up
- **No approved leave request**
- Unpaid (no compensation)
- May trigger disciplinary action
- Requires explanation/follow-up

**Leave:**

- Employee has **approved leave request**
- Planned absence with authorization
- Paid or unpaid based on leave type
- No disciplinary implications
- Status: Blue badge vs Red badge

**Before marking someone Absent:**

1. Check Leave module for approved requests
2. Verify no emergency notification received
3. Contact employee to confirm
4. Update to Leave status if request approved later

**Never mark employee with approved leave as Absent** - creates payroll errors.

</details>

<details>
<summary><strong>How is overtime status determined?</strong></summary>

**Overtime Triggered When:**

**Daily Overtime:**

- Work hours > standard daily hours
- Example: Worked 10 hours, standard 8 hours → 2 hours overtime

**Holiday/Weekend Work:**

- Any work on designated off days
- Entire shift counts as overtime
- Often higher pay rate

**Threshold Exceeded:**

- Company policy defines overtime threshold
- Example: Any work beyond 8 hours/day or 40 hours/week

**Overtime Calculation:**

```
Overtime Hours = Actual Work Hours - Standard Work Hours
```

**Example:**

- Scheduled: 08:00 - 17:00 (8 hours + 1hr break)
- Actual: 08:00 - 19:00 (10 hours + 1hr break)
- Overtime: 10 - 8 = 2 hours

**Requires Pre-Approval:**

- Most companies require manager approval before working overtime
- Unapproved overtime may not be compensated
- Check company policy

</details>

<details>
<summary><strong>What if employee is both late and works overtime?</strong></summary>

**System tracks both conditions:**

**Example Scenario:**

- Scheduled: 08:00 - 17:00 (8 hours + 1hr break)
- Actual: 08:30 - 19:00
- **Late**: 30 minutes (arrived at 08:30 instead of 08:00)
- **Overtime**: 2 hours (worked until 19:00 instead of 17:00)

**Status Display:**

- Primary status shown: Usually **Overtime** (if total hours exceed standard)
- Late minutes still calculated and visible in Late column
- Both conditions affect payroll:
  - Late may reduce pay (policy dependent)
  - Overtime increases pay

**Policy Variations:**

- Some companies deduct late time from overtime
- Some don't pay overtime if employee was late
- Some treat them independently
- Check your company policy

</details>

<details>
<summary><strong>Can I see attendance trends over time?</strong></summary>

**Yes, through export and analysis:**

**Method 1: Monthly Reports**

1. Export monthly attendance
2. Open in Excel
3. Create pivot tables to analyze:
   - Attendance rate per employee
   - Department-wide trends
   - Late arrival frequency
   - Absence patterns

**Method 2: Summary Dashboard** (if available)

- Some systems have built-in analytics
- View attendance rate graphs
- See trends over weeks/months
- Compare departments

**Key Metrics to Track:**

- Attendance rate: (Present + Late) / Total Scheduled × 100%
- Punctuality rate: Present / (Present + Late) × 100%
- Absence rate: Absent / Total Scheduled × 100%
- Average late minutes per employee
- Overtime hours per department

**Use Cases:**

- Identify employees with attendance issues
- Spot seasonal patterns
- Measure impact of policy changes
- Support performance reviews

</details>

<details>
<summary><strong>What if the fingerprint device is not working?</strong></summary>

**Immediate Actions:**

**Backup Attendance Method:**

1. Use manual attendance sheet
2. Have employees sign in/out with time
3. Or use alternate device if available
4. Or use mobile app (if system supports)

**Notify IT:**

- Report issue immediately
- Request urgent repair
- Get estimated fix time

**After Device Fixed:**

**Import Manual Records:**

1. Transfer manual sheet to Excel
2. Format according to import template
3. Import to system using Import Attendance

**OR Manual Updates:**

1. Update each record individually
2. Enter actual times from manual sheet
3. Add remarks: "Device malfunction - manual entry"

**Prevention:**

- Test devices weekly
- Have backup device ready
- Maintain IT support contact
- Train staff on backup procedures

**Mobile App Alternative:**

- Many modern systems support mobile clock in/out
- Can be permanent or temporary backup
- Verify with system administrator

</details>

<details>
<summary><strong>How do I handle employees working from home?</strong></summary>

**Remote Attendance Options:**

**Web-Based Clock In/Out:**

- Employees log into system via browser
- Click Clock In at start of work
- Click Clock Out at end of work
- System records time and IP address

**Mobile App:**

- Use mobile attendance app
- Location tracking (GPS) if required
- Photo verification if needed
- Push notifications for clock reminders

**Honor System:**

- Employees report own hours
- Manager approval required
- Trust-based with spot checks

**Project/Task Tracking:**

- Use work output as attendance proof
- Time logged in project management tools
- Manager reviews task completion times

**Configuration:**

- Set specific shift for remote workers
- Define different attendance rules if needed
- May not require exact clock times
- Focus on work completion vs time tracking

**Best Practice:**

- Clear policy for remote attendance
- Daily check-ins with team
- Use calendar for availability
- Weekly summary reports

</details>

<details>
<summary><strong>Can I set different rules for different departments?</strong></summary>

**Yes, through Shift Configuration:**

**How It Works:**

1. Create different shift types in Shift Configuration module
2. Assign different shifts to different departments in Work Schedule
3. Each shift has its own:
   - Work hours
   - Break time
   - Grace period
   - Overtime rules

**Example:**

- **Production Dept**: 06:00-14:00, 5-min grace, 30-min break
- **Office Dept**: 08:00-17:00, 15-min grace, 1-hour break
- **Security Dept**: 12-hour rotating shifts

**Attendance Rules Apply Per Shift:**

- Late calculation uses shift's grace period
- Work hours use shift's standard hours
- Overtime calculated based on shift length

**Who Can Configure:**

- HR Admin or System Administrator
- Department Managers typically cannot change
- Contact HR if new shift rules needed

</details>

<details>
<summary><strong>How do I handle attendance for shift workers?</strong></summary>

**For Rotating Shifts:**

**Key Principle:** Assign correct shift in Work Schedule for each day.

**Steps:**

1. **In Work Schedule module:**

   - Assign appropriate shift for each work day
   - Example Week:
     - Monday-Wednesday: Morning Shift (06:00-14:00)
     - Thursday-Friday: Night Shift (22:00-06:00)
     - Saturday-Sunday: Off

2. **Attendance records created** with correct shift times

3. **Employee clocks in/out** against assigned shift

4. **Status calculated** based on that shift's rules:
   - Late = Clock In after that shift's scheduled start + grace
   - Overtime = Work hours exceed that shift's standard hours

**Night Shifts Spanning Midnight:**

- System handles automatically
- Clock In: 22:00 (Friday)
- Clock Out: 06:00 (Saturday)
- Calculates as 8 hours, not negative hours

**Key Success Factor:**

- **Accurate shift assignment** in Work Schedule is critical
- Update schedule before shift changes
- Use shift templates for repeating patterns

</details>

<details>
<summary><strong>Who can update attendance records?</strong></summary>

**Permission by Role:**

**Can Update All Records:**

- HR Admin
- HR Manager

**Can Update Department Records:**

- Department Manager (own department only)

**Can Update Team Records:**

- Supervisor (direct reports only, if granted)

**Cannot Update:**

- Regular employees (own or others)

**Update Process:**

1. Find record
2. Click Update/Edit
3. Modify clock times
4. Add reason in Remarks (required)
5. Save

**Audit Trail:**

- All updates logged
- Shows: Who, When, What Changed, Why (from Remarks)
- Visible to HR Admin for compliance
- Cannot be deleted or hidden

**Best Practice:**

- Only update with valid reason
- Get supervisor verification when possible
- Document source of correct time (CCTV, logs, witness)
- Update promptly within 24 hours

</details>

<details>
<summary><strong>Can I export attendance data for specific periods?</strong></summary>

**Yes, multiple export options:**

**Export Types:**

**1. Daily Attendance**

- Single day snapshot
- All employees scheduled that day
- Quick daily report

**2. Weekly Attendance**

- 7-day range
- Summary by week
- Good for supervisor reviews

**3. Monthly Attendance**

- Full month data
- All working days in month
- Used for payroll processing

**4. Per Employee**

- Custom date range
- Single employee focus
- Performance reviews, disputes

**Filter Options:**

- By department
- By employee
- By status (Present, Late, etc.)
- Custom date range

**Export Formats:**

- **Excel (.xlsx)**: Best for analysis
- **CSV (.csv)**: Import to other systems
- **PDF (.pdf)**: Printing, formal reports

**Use Cases:**

- Payroll team: Monthly export for pay calculation
- Managers: Weekly export for team review
- HR: Per-employee export for performance reviews
- Compliance: Monthly export for audit records

</details>

<details>
<summary><strong>What should I do if I find incorrect attendance data?</strong></summary>

**Correction Process:**

**If You Have Permission:**

1. **Identify incorrect record:**

   - Note: Date, Employee, Incorrect values

2. **Click Update/Edit** on the record

3. **Correct the data:**

   - Update Clock In time if wrong
   - Update Clock Out time if wrong
   - Status updates automatically

4. **Add detailed remarks** (Required):

   - Explain what was wrong
   - State source of correct information
   - Examples:
     - "Clock In incorrect - should be 08:00 per CCTV"
     - "Device recorded wrong time - employee verified actual time with supervisor"

5. **Save changes**

6. **Verify correction:**
   - Check updated record
   - Ensure status recalculated correctly
   - Confirm work hours accurate

**If You Don't Have Permission:**

1. **Document the error:**

   - Screenshot or note details
   - Include correct information if known

2. **Contact appropriate person:**

   - Your supervisor
   - HR department
   - Department manager

3. **Provide evidence:**

   - Emails, messages proving correct time
   - Supervisor verification
   - Any supporting documentation

4. **Follow up:**
   - Ensure correction made before payroll
   - Verify in system after update

**Prevention:**

- Review attendance daily
- Encourage employees to check own records
- Fix errors immediately when found
- Don't wait until payroll period

</details>

---
