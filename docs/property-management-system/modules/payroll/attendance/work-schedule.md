---
title: Work Schedule
sidebar_position: 4
---

# Work Schedule

Work Schedule is the centralized system for managing employee shift assignments, rotations, and schedule exchanges, serving as the foundation for accurate attendance tracking and workforce planning.

## Overview

On this page you can:

- View employee schedules in list and calendar format
- Bulk generate schedules using customizable templates
- Assign and reassign individual shifts
- Process schedule switch requests with approval workflow
- Monitor working hours and shift coverage
- Export schedule reports for analysis

**Key Capabilities:**

- Visual weekly and monthly calendar views with color-coded shifts
- Automated bulk schedule generation from templates
- Flexible schedule switching with emergency auto-approval
- Individual schedule assignment for targeted adjustments
- Real-time attendance status integration
- Template looping for recurring shift patterns
- Multi-level permission controls for secure access

:::info
Work schedules are the **foundation for attendance tracking**. Assigning a schedule automatically generates attendance records for employees to clock in/out against.
:::

---

## Key Features

### 📅 Visual Calendar Management

Interactive calendar views for intuitive schedule planning and monitoring.

**Business Value:**

- Weekly and monthly calendar views for different planning horizons
- Color-coded shift identification for instant recognition
- Real-time attendance status display (Present, Late, Overtime, Leave, Absent)
- Quick actions via double-click and right-click menus
- Filter by placement, department, or individual employee
- Navigate time periods with prev/next controls
- 70% faster schedule review vs traditional list views

**Perfect for:** Operations managers needing quick visibility into team schedules and coverage gaps

---

### ⚡ Bulk Schedule Generation

Automated schedule creation for multiple employees using configurable templates.

**Business Value:**

- Generate month schedules in seconds vs hours of manual work
- Custom selection: individual, multiple employees, position, or department
- Template-based patterns (fixed shifts, rotations, custom sequences)
- Automatic looping for periods longer than template
- Reduces scheduling time by 90%
- Eliminates manual data entry errors
- Supports both regular and rotating shift operations

**Perfect for:** HR teams managing large workforces with recurring shift patterns

---

### 🔄 Smart Schedule Switching

Employee schedule exchange system with flexible approval workflows.

**Business Value:**

- Three switch types: Emergency (auto-approved), Mutual (swap with colleague), Personal (own dates)
- Emergency switches process instantly without delays
- Mutual and Personal switches route to manager approval
- Complete audit trail for all exchanges
- Reduce manager scheduling workload by 60%
- Improve employee flexibility and satisfaction
- Maintain operational coverage while allowing changes

**Perfect for:** Organizations balancing employee flexibility with operational requirements

---

### 🎯 Individual Schedule Assignment

Precise schedule control for single-employee adjustments.

**Business Value:**

- Assign schedules to specific dates for individual employees
- Fill gaps without regenerating entire schedules
- Quick assign via double-click on calendar
- Reassign to modify existing schedules
- Maintain schedule accuracy without bulk operations
- Perfect for covering absences or one-time needs
- Prevents unnecessary bulk schedule overwrites

**Perfect for:** Supervisors making daily schedule adjustments for coverage

---

### 📊 Comprehensive Schedule Overview

Table view displaying complete monthly schedule data for all employees.

**Business Value:**

- Monthly overview of working days, hours, and overtime
- Compare workload distribution across team
- Identify employees with excessive or insufficient hours
- Track total hours for budget and resource planning
- Export data for payroll and analysis
- Support fair workload distribution
- Enable workforce optimization

**Perfect for:** HR and operations tracking labor hours and ensuring equitable scheduling

---

### 🔐 Permission-Based Access Control

Granular access levels ensuring schedule security and appropriate authority.

**Business Value:**

- Role-based permissions (Employee, Supervisor, Manager, HR, Admin)
- Employees view only own schedules
- Managers control department schedules
- HR has organization-wide visibility
- Prevent unauthorized schedule changes
- Maintain data integrity and compliance
- Clear accountability for schedule modifications

**Perfect for:** Multi-level organizations requiring secure schedule management

---

### 📤 Flexible Schedule Reporting

Export schedules in multiple formats for various business needs.

**Business Value:**

- Export monthly or custom period schedules
- Multiple formats (Excel, CSV, PDF)
- Include working hours, overtime, and status
- Share with payroll, finance, or external systems
- Support budget planning and forecasting
- Meet audit and compliance requirements
- Enable advanced analysis in external tools

**Perfect for:** Finance and HR teams needing schedule data for payroll processing and planning

---

## Key Concepts

### Schedule Calendar Views

Two calendar modes for different use cases:

| View             | Display                  | Best For                                   | Features                                         |
| ---------------- | ------------------------ | ------------------------------------------ | ------------------------------------------------ |
| **Weekly View**  | 7-day horizontal layout  | Daily operations, current week planning    | Quick assign/switch, detailed daily view         |
| **Monthly View** | Full month calendar grid | Long-term planning, pattern identification | Coverage overview, trend spotting, gap detection |

**Calendar Cell Information:**

- Day name and date
- Shift code (color-coded badge)
- Work hours (start time - end time)
- Total working hours
- Schedule status (Scheduled, Present, Late, Overtime, Leave, Absent)

**Quick Actions:**

- **Double-click empty cell**: Quick assign schedule
- **Double-click filled cell**: Quick switch schedule
- **Right-click any cell**: Context menu (Assign, Reassign, Switch, Delete)

### Schedule List Fields

Monthly overview table displaying key metrics:

| Field             | Type    | Description                        | Calculation                 |
| ----------------- | ------- | ---------------------------------- | --------------------------- |
| **Employee ID**   | Text    | Employee identifier                | From employee data          |
| **Employee Name** | Text    | Employee full name                 | From employee data          |
| **Position**      | Text    | Job position/title                 | From employee data          |
| **Department**    | Text    | Department name                    | From employee data          |
| **Placement**     | Text    | Work location/branch               | From employee data          |
| **Working Days**  | Number  | Total scheduled work days in month | Count of assigned schedules |
| **Working Hours** | Decimal | Total scheduled work hours         | Sum of shift hours          |
| **Overtime**      | Decimal | Total overtime hours               | From attendance overtime    |
| **Total Hours**   | Decimal | Working hours + Overtime           | Auto-calculated sum         |

### Schedule Status Types

Status lifecycle and meanings:

| Status        | Description                 | Trigger                | Color/Badge | Can Modify |
| ------------- | --------------------------- | ---------------------- | ----------- | ---------- |
| **Scheduled** | Assigned, no attendance yet | Schedule created       | Blue        | ✅ Yes     |
| **Present**   | Employee clocked in on time | Attendance recorded    | Green       | ⚠️ Limited |
| **Late**      | Employee arrived late       | Late attendance        | Orange      | ⚠️ Limited |
| **Overtime**  | Employee worked extra hours | Overtime attendance    | Purple      | ⚠️ Limited |
| **Leave**     | Employee on approved leave  | Approved leave request | Yellow      | ❌ No      |
| **Absent**    | Employee did not show up    | No attendance          | Red         | ⚠️ Limited |

**Status Sources:**

- **Scheduled**: System sets when schedule created
- **Present/Late/Overtime/Absent**: Updated from Attendance Module
- **Leave**: Applied when approved leave overlaps schedule date

### Schedule Switch Types

Three switch types with different workflows:

| Switch Type   | Description                    | Approval         | Common Use Case                          | Swap Partner                |
| ------------- | ------------------------------ | ---------------- | ---------------------------------------- | --------------------------- |
| **Emergency** | Urgent immediate changes       | Auto-approved    | Sudden illness, family emergency         | Self or any employee        |
| **Mutual**    | Exchange shifts with colleague | Manager approval | Planned swap, coverage arrangement       | Another employee (required) |
| **Personal**  | Rearrange own schedule dates   | Manager approval | Preference adjustment, personal planning | Self (different dates)      |

**Switch Type Workflow:**

**Emergency:**

```
Request → Auto-Approved → Schedules Swapped Immediately
```

**Mutual:**

```
Request → Manager Review → Approved/Rejected → Schedules Swapped or Unchanged
```

**Personal:**

```
Request → Manager Review → Approved/Rejected → Schedules Swapped or Unchanged
```

**When to Use Each:**

- **Emergency**: Genuine urgent situations requiring instant changes (use responsibly)
- **Mutual**: Planned exchanges between employees for mutual benefit
- **Personal**: Individual schedule preference changes within own assignments

### Template-Based Schedule Generation

Bulk scheduling using pre-configured patterns:

**Template Components:**

- Shift sequence (e.g., Morning → Evening → Night → Rest)
- Pattern length (e.g., 7 days, 14 days, custom)
- Shift assignments per day
- Rest days configuration

**Template Looping:**

When generation period exceeds template length, system automatically loops:

**Example: 7-Day Template for 31-Day Month**

```
Template: [M] [E] [N] [R] [M] [E] [N] (7 days)
Period: December 1-31 (31 days)

Loop 1: Dec 1-7 → M, E, N, R, M, E, N
Loop 2: Dec 8-14 → M, E, N, R, M, E, N
Loop 3: Dec 15-21 → M, E, N, R, M, E, N
Loop 4: Dec 22-28 → M, E, N, R, M, E, N
Loop 5: Dec 29-31 → M, E, N (partial loop, first 3 days)
```

**Custom Selection Options:**

- **Single Employee**: Generate for one specific employee
- **Multiple Employees**: Select specific employees via checkboxes
- **By Position**: Generate for all in a job position
- **By Department**: Generate for entire department

**Custom Period:**

- Start Date: Schedule generation begins from this date
- End Date: Generation stops on this date
- Flexible date range (days, weeks, months)

### Assign vs Reassign vs Switch

Three distinct schedule modification methods:

| Method       | Purpose                   | Precondition                    | Result                | Attendance Records |
| ------------ | ------------------------- | ------------------------------- | --------------------- | ------------------ |
| **Assign**   | Create new schedule       | No schedule exists (empty slot) | New schedule added    | None (new)         |
| **Reassign** | Replace existing schedule | Schedule exists                 | Old replaced with new | ⚠️ Deleted         |
| **Switch**   | Exchange schedules        | Schedule exists                 | Schedules swapped     | Preserved          |

**Assign Schedule:**

- **Use when**: Employee has no schedule on target date
- **Effect**: Creates new schedule entry
- **Attendance**: Generates new attendance record
- **Cannot**: Overwrite existing schedule (ignored if exists)

**Reassign Schedule:**

- **Use when**: Need to change existing schedule's shift
- **Effect**: Completely replaces old schedule
- **Attendance**: ⚠️ Deletes all old attendance records (Present, Late, etc.)
- **Cannot**: Assign to empty slots (requires existing schedule)

**Switch Schedule:**

- **Use when**: Need to exchange schedules (employee-to-employee or date-to-date)
- **Effect**: Swaps schedule assignments
- **Attendance**: Moves with schedule (preserved)
- **Requires**: Approval for Mutual and Personal types

**Decision Guide:**

| Scenario                                           | Use Method             | Reason                         |
| -------------------------------------------------- | ---------------------- | ------------------------------ |
| Employee has no schedule for Friday                | **Assign**             | Adding new schedule            |
| Employee assigned wrong shift                      | **Reassign**           | Changing existing shift        |
| Two employees want to exchange shifts              | **Switch (Mutual)**    | Swapping between employees     |
| Employee wants to move own shift to different date | **Switch (Personal)**  | Rearranging own dates          |
| Urgent last-minute change needed                   | **Switch (Emergency)** | Auto-approved immediate change |

### Schedule Generation Overwrite Behavior

**Critical Understanding:**

When generating schedules for employees with existing schedules in the period:

**What Gets Overwritten:**

- ✅ All previous schedule assignments
- ✅ All attendance records (Present, Late, Overtime, Leave, Absent)
- ✅ Related attendance timestamps and data
- ✅ Any manual schedule adjustments

**Result:**

- Old data **permanently deleted**
- New schedules created from template
- Attendance tracking starts fresh
- Cannot be undone

**Prevention:**

1. Always verify existing schedules before generating
2. Use date range filters to check period
3. Consider Assign or Reassign for individual changes
4. Export existing schedules as backup before bulk generation

**Best Practice:**

- Generate schedules for new periods only (e.g., next month)
- Use Assign/Reassign for modifications within active periods
- Coordinate with managers before bulk regeneration
- Document reason if overwriting is necessary

### Permission Matrix

Detailed access control by role:

| Role                   | Scope      | Generate | Assign | Reassign | Switch (Request) | Switch (Approve) | Delete  | Export |
| ---------------------- | ---------- | -------- | ------ | -------- | ---------------- | ---------------- | ------- | ------ |
| **Employee**           | Own        | ❌       | ❌     | ❌       | ✅ Own           | ❌               | ❌      | ❌     |
| **Supervisor**         | Team       | ❌       | ✅     | ✅       | ✅               | ✅ Team          | ❌      | ✅     |
| **Department Manager** | Department | ✅ Dept  | ✅     | ✅       | ✅               | ✅ Dept          | ✅ Dept | ✅     |
| **HR Manager**         | All        | ✅ All   | ✅     | ✅       | ✅               | ✅ All           | ✅ All  | ✅     |
| **Super Admin**        | All        | ✅ All   | ✅     | ✅       | ✅               | ✅ All           | ✅ All  | ✅     |

**Access Scope Definitions:**

- **Own**: Only personal schedules
- **Team**: Direct reports under supervision
- **Department**: All employees in department
- **All**: Organization-wide access

---

## Configuration

Work Schedule has multiple configuration modules supporting schedule management:

1. **[Shift Category](../../configuration/config-payroll/shift-category.md)**
2. **[Shift](../../configuration/config-payroll/shift.md)**
3. **[Schedule Template](../../configuration/config-payroll/schedule-template.md)**
4. **[Shift Coverage](../../configuration/config-payroll/shift-coverage.md)**
5. **[Conflict Type](../../configuration/config-payroll/conflict-type.md)**

---

## Best Practices

### Schedule Planning

- **Advance Planning**: Generate schedules at least 1 week in advance for employee preparation
- **Template Consistency**: Use standardized templates for predictable patterns
- **Coverage Verification**: Review calendar weekly to ensure adequate staff coverage
- **Backup Plans**: Maintain list of employees available for emergency coverage

### Template Management

- **Clear Naming**: Use descriptive template names (e.g., "Warehouse 2-2-3 Rotation")
- **Test First**: Apply new templates to small groups before full department
- **7-Day Patterns**: Prefer 7-day templates for easier weekly rotation
- **Regular Review**: Update templates quarterly to reflect operational changes

### Schedule Modifications

- **Choose Right Method**:
  - Empty slots → Assign
  - Wrong shift → Reassign
  - Swap needs → Switch
- **Check Before Generate**: Verify existing schedules to avoid overwriting attendance
- **Document Changes**: Always fill Remarks field for audit trail
- **Double-Check Dates**: Confirm date accuracy before submission

### Communication

- **Notify Immediately**: Inform employees of schedule changes within 1 hour
- **Reason Required**: Always provide clear justification for switches
- **Manager Coordination**: Align with managers before bulk changes
- **Schedule Visibility**: Ensure employees can view schedules easily

### Approval Management

- **Prompt Processing**: Review switch requests within 24 hours
- **Fair Evaluation**: Assess switches on merit, not favoritism
- **Emergency Reserve**: Use Emergency switch type only for genuine urgencies
- **Pattern Monitoring**: Track frequent switches to identify scheduling issues

### Data Integrity

- **Backup Before Bulk**: Export current schedules before major regeneration
- **Verify Filters**: Double-check placement/department before bulk operations
- **Test Assignments**: Try single assign before bulk when uncertain
- **Preserve Attendance**: Use Switch instead of Reassign to keep attendance records

---

## How to Use

<details>
<summary><strong>How to Generate Schedule (Bulk)</strong></summary>

**For creating schedules for multiple employees at once:**

**Steps:**

1. **Navigate to Work Schedule:**

   - Go to **Attendance** → **Work Schedule**
   - Click **"Generate Schedule"** button

2. **Select Placement:**

   - Choose location/branch from dropdown
   - Filters subsequent department and employee lists

3. **Choose Custom Selection:**

   Select one option:

   - **Single Employee**: Pick one specific employee
   - **Multiple Employees**: Check multiple employee boxes
   - **By Position**: Select job position (all employees in that position)
   - **By Department**: Select department (all employees in department)

4. **Select Template:**

   - Choose pre-configured schedule template from dropdown
   - Preview template pattern (shift sequence)
   - Verify template matches intended rotation

5. **Set Period:**

   - **Start Date**: Choose effective start date (schedules begin here)
   - **End Date**: Choose last date of period
   - Example: Jan 1 - Jan 31 for monthly schedule

6. **Review Summary:**

   - Employees selected: (count)
   - Template: (name and pattern)
   - Period: (date range)
   - Estimated schedules: (calculation)

7. **Generate:**
   - Click **"Generate"** button
   - System creates all schedules
   - Wait for confirmation message

**Result:**

- Schedules created for all selected employees
- Template pattern loops to fill entire period
- Attendance records auto-generated
- Schedules appear in calendar view

:::warning
**Overwrite Alert:** Generating schedules for employees with existing schedules in the period will **delete all old schedules and attendance records**. Always verify before generating.
:::

:::tip
**Template Looping Example:**

7-day template for 30-day month:

- Loops 1-4: Days 1-28 (complete pattern 4 times)
- Loop 5: Days 29-30 (partial, first 2 days of pattern)
  :::

</details>

<details>
<summary><strong>How to Assign Schedule (Individual)</strong></summary>

**For creating schedule for one employee on empty date:**

**Steps:**

1. **Open Assign Dialog:**

   **Method 1 - Button:**

   - Navigate to **Work Schedule**
   - Click **"Assign Schedule"** button

   **Method 2 - Calendar Quick Assign:**

   - Open Calendar View
   - Double-click **empty schedule cell**

2. **Select Placement:**

   - Choose location from dropdown

3. **Select Department:**

   - Choose department (filtered by placement)

4. **Select Employee:**

   - Pick employee from dropdown (filtered by placement + department)
   - Search by name if needed

5. **Select Date:**

   - Choose date using date picker
   - **Important**: Ensure date has no existing schedule

6. **Select Shift:**

   - Choose shift from dropdown (filtered by department)
   - Preview shift details: start time, end time, hours
   - Shift codes are color-coded

7. **Add Remark (Optional):**

   - Add notes if needed
   - Examples: "Temporary coverage", "Training day"

8. **Submit:**
   - Click **"Assign"** button
   - Wait for confirmation
   - Schedule appears in calendar

**Result:**

- New schedule created
- Attendance record generated for employee to clock in/out
- Visible in calendar and list views

:::info
**Only for Empty Slots:** Assign Schedule only works when no schedule exists on the date. If schedule already exists, the assignment is ignored. Use **Reassign** instead.
:::

</details>

<details>
<summary><strong>How to Reassign Schedule</strong></summary>

**For changing existing schedule's shift:**

**Steps:**

1. **Locate Existing Schedule:**

   - Open Calendar View (Weekly or Monthly)
   - Find the schedule cell to modify
   - **Important**: Cell must have existing schedule (not empty)

2. **Open Reassign Dialog:**

   - **Right-click** on the schedule cell
   - Select **"Reassign"** from context menu

3. **Review Pre-filled Info (Read-Only):**

   - Placement: (current)
   - Department: (current)
   - Employee: (name)
   - Date: (schedule date)
   - Current Shift: (current assignment)

4. **Select Different Shift:**

   - Choose **new shift** from dropdown
   - Must be different from current shift
   - Preview new shift details
   - Only shifts for the department appear

5. **Add Remark (Optional):**

   - Explain reassignment reason
   - Examples: "Coverage needed", "Shift swap per request"

6. **Submit:**
   - Click **"Assign"** button
   - Old schedule immediately replaced
   - Wait for confirmation

**Result:**

- Old schedule and attendance records **permanently deleted**
- New schedule created with new shift
- New attendance record generated
- Visible in calendar immediately

:::warning
**Data Loss:** Reassigning **deletes all old attendance records** (Present, Late, Overtime, etc.). This action cannot be undone. Verify before submitting.
:::

:::tip
If you need to preserve attendance records, use **Switch Schedule** instead of Reassign.
:::

</details>

<details>
<summary><strong>How to Switch Schedule</strong></summary>

**For exchanging schedules between employees or dates:**

**Steps:**

1. **Open Switch Dialog:**

   **Method 1 - Button:**

   - Navigate to **Work Schedule**
   - Click **"Switch Schedule"** button

   **Method 2 - Calendar Quick Switch:**

   - Open Calendar View
   - Double-click **filled schedule cell**

2. **Select Employee:**

   - Choose employee whose schedule will be switched
   - Can be yourself or another employee (if permitted)

3. **Select Switch Type:**

   Choose appropriate type:

   - **Emergency**: Urgent, auto-approved
   - **Mutual**: Swap with colleague, requires approval
   - **Personal**: Switch own dates, requires approval

4. **Choose From Schedule:**

   - **From Date**: Select current schedule date
   - **From Schedule**: Select schedule to switch from

5. **Choose To Schedule:**

   - **To Date**: Select target date
   - **To Schedule**: Select target schedule

6. **Select Target Swap (Mutual Only):**

   - If Mutual type: Choose employee to swap with
   - Can select before or after choosing To Schedule

7. **Provide Reason:**

   - Enter clear justification (required)
   - Examples: "Family emergency", "Coverage arrangement", "Medical appointment"

8. **Add Remark (Optional):**

   - Additional context for approver

9. **Submit Request:**
   - Click **"Submit"** button
   - **Emergency**: Schedules swapped immediately
   - **Mutual/Personal**: Sent to manager for approval

**Result:**

**Emergency:**

- Schedules swapped instantly
- No approval needed
- Both employees notified

**Mutual/Personal:**

- Request sent to manager
- Awaiting approval
- Schedules swap upon approval
- Rejected requests leave schedules unchanged

:::info
**Switch Type Guide:**

- **Emergency**: Use only for genuine urgent situations (auto-approved)
- **Mutual**: When swapping with colleague (both schedules exchange)
- **Personal**: When rearranging your own schedule dates
  :::

</details>

<details>
<summary><strong>How to View and Filter Schedules</strong></summary>

**Using Calendar View effectively:**

**Steps:**

1. **Select View Type:**

   Choose calendar layout:

   - **Weekly View**: 7-day horizontal layout for daily planning
   - **Monthly View**: Full month grid for long-term overview

2. **Apply Filters:**

   Narrow down display:

   - **Placement**: Filter by location/branch
   - **Department**: Filter by department within placement
   - **Employee**: Filter by specific employee

3. **Navigate Time Periods:**

   Move through dates:

   - **Weekly View**: Use Prev/Next Week buttons
   - **Monthly View**: Use Prev/Next Month buttons
   - **Date Picker**: Jump to specific date

4. **Understand Schedule Display:**

   Each schedule cell shows:

   - **Day/Date**: Column header
   - **Shift Code**: Color-coded badge
   - **Work Hours**: Start - End (total hours)
   - **Status**: Scheduled, Present, Late, Overtime, Leave, Absent

5. **Use Quick Actions:**

   **Right-click any cell:**

   - Delete Schedule (if schedule exists)
   - Switch Schedule (if schedule exists)
   - Assign Schedule (if empty)
   - Reassign (if schedule exists)

   **Double-click:**

   - Empty cell → Quick Assign
   - Filled cell → Quick Switch

6. **Export Data:**

   - Click **"Export"** button
   - Choose format: Excel, CSV, PDF
   - Select date range
   - Download file

**Result:**

- Clear visual overview of all schedules
- Easy identification of patterns and gaps
- Quick access to schedule actions
- Exportable data for external use

:::tip
**Calendar Navigation Shortcuts:**

- **Double-click empty cell**: Quick assign
- **Double-click filled cell**: Quick switch
- **Right-click**: All actions menu
- **Hover**: Preview full schedule details
  :::

</details>

<details>
<summary><strong>How to Delete Schedule</strong></summary>

**For removing schedule assignments:**

**Steps:**

1. **Locate Schedule:**

   - Open Calendar View
   - Find schedule cell to delete

2. **Open Context Menu:**

   - **Right-click** on schedule cell
   - Select **"Delete Schedule"**

3. **Confirm Deletion:**
   - System may ask for confirmation
   - Click **"Confirm"** or **"Delete"**

**Result:**

- Schedule permanently removed
- Associated attendance records deleted
- Cannot be undone

:::warning
**Permission Required:** Only HR Managers and Admins can delete schedules. This prevents accidental data loss.

**Data Loss:** Deleting removes:

- Schedule assignment
- All attendance records (Present, Late, etc.)
- Cannot be recovered

Consider using **Reassign** or **Switch** instead of Delete when possible.
:::

</details>

<details>
<summary><strong>How to Approve/Reject Switch Request</strong></summary>

**For managers reviewing schedule switch requests:**

**Steps:**

1. **Access Pending Requests:**

   - Navigate to **Work Schedule** → **Switch Request**
   - Or check notifications/pending approval dashboard
   - Filter by **Status: Pending**

2. **Review Request Details:**

   Examine complete information:

   - **Employee**: Who requested
   - **Switch Type**: Emergency, Mutual, or Personal
   - **From Schedule**: Current schedule details
   - **To Schedule**: Target schedule details
   - **Target Swap**: Other employee (if Mutual)
   - **Reason**: Justification provided
   - **Remarks**: Additional context

3. **Evaluate Request:**

   Check criteria:

   - ☑ Reason is valid and clear
   - ☑ Switch makes operational sense
   - ☑ Coverage maintained after swap
   - ☑ No conflict with other schedules
   - ☑ Fair and reasonable request

4. **Make Decision:**

   **To Approve:**

   - Click **"Approve"** button
   - Add approval notes (optional)
   - Click **"Confirm"**
   - Schedules swap immediately
   - Employees notified

   **To Reject:**

   - Click **"Reject"** button
   - Enter rejection reason (required)
   - Click **"Confirm Rejection"**
   - Schedules remain unchanged
   - Employees notified with reason

**Result:**

**Approved:**

- Schedules swapped successfully
- Both employees receive new assignments
- Attendance records move with schedules
- Audit log updated

**Rejected:**

- Schedules remain as originally assigned
- Employee receives rejection notification
- Reason communicated for transparency
- Employee can resubmit if appropriate

:::info
**Emergency Switch:** Emergency switches are **auto-approved** and do not appear in pending queue. Only Mutual and Personal switches require manual approval.
:::

</details>

---

## FAQ

<details>
<summary><strong>What's the difference between Assign, Reassign, and Switch Schedule?</strong></summary>

Three distinct methods for different scenarios:

**Assign Schedule:**

- **Purpose**: Create new schedule for empty date
- **Precondition**: No existing schedule on date
- **Effect**: Adds new schedule entry
- **Attendance**: Creates new attendance record
- **Use when**: Filling gaps, covering absences, adding shifts

**Reassign Schedule:**

- **Purpose**: Change existing schedule's shift
- **Precondition**: Schedule already exists
- **Effect**: Replaces old schedule completely
- **Attendance**: ⚠️ Deletes all old attendance records
- **Use when**: Wrong shift assigned, operational needs change

**Switch Schedule:**

- **Purpose**: Exchange schedules between employees/dates
- **Precondition**: Schedule exists
- **Effect**: Swaps schedule assignments
- **Attendance**: Preserved (moves with schedule)
- **Use when**: Employee requests swap, mutual exchange needed

**Quick Guide:**

- Empty slot → **Assign**
- Wrong shift → **Reassign**
- Need to swap → **Switch**

</details>

<details>
<summary><strong>Will I lose attendance data when I reassign a schedule?</strong></summary>

**Yes**, reassigning permanently deletes:

- Previous shift assignment
- All attendance records (Present, Late, Overtime, Leave, Absent)
- Clock in/out timestamps
- Attendance-related data

**This action cannot be undone.**

**Alternative:** Use **Switch Schedule** instead to preserve attendance records. Switch moves schedules rather than overwriting them.

**When Reassign is OK:**

- Schedule is still "Scheduled" status (no attendance yet)
- Wrong shift assigned before employee worked
- Attendance data is not critical

**When to Avoid Reassign:**

- Employee already clocked in/out (attendance recorded)
- Need to preserve attendance history
- Audit trail required

</details>

<details>
<summary><strong>Can I generate schedules for employees who already have schedules?</strong></summary>

**Yes, but be extremely careful.**

**What Happens:**

- Old schedules completely replaced
- All attendance records deleted (Present, Late, Overtime, etc.)
- Previous schedule adjustments lost
- Cannot be undone

**Best Practices:**

1. **Check First**: Always verify existing schedules before generating
2. **Export Backup**: Export current schedules before bulk generation
3. **New Periods Only**: Generate for future periods without existing schedules
4. **Use Alternatives**: For modifications, use Assign or Reassign instead

**Safe Generation:**

- New employees starting (no prior schedules)
- Next month planning (current month untouched)
- Future periods with no assigned schedules

**Risky Generation:**

- Mid-month regeneration
- Employees with attendance already recorded
- Periods with approved leave overlapping

:::warning
Always coordinate with managers and employees before regenerating active periods.
:::

</details>

<details>
<summary><strong>How does template looping work?</strong></summary>

When generation period exceeds template length, system automatically repeats the pattern.

**Example 1: 7-Day Template for 31-Day Month**

Template: [Morning, Evening, Night, Rest, Morning, Evening, Night]

December 1-31 (31 days):

- **Loop 1**: Dec 1-7 → Full template
- **Loop 2**: Dec 8-14 → Full template repeat
- **Loop 3**: Dec 15-21 → Full template repeat
- **Loop 4**: Dec 22-28 → Full template repeat
- **Loop 5**: Dec 29-31 → First 3 days of template (partial)

**Example 2: 14-Day Template for 60-Day Period**

Template: [14-day rotation pattern]

60 days total:

- **Loop 1**: Days 1-14
- **Loop 2**: Days 15-28
- **Loop 3**: Days 29-42
- **Loop 4**: Days 43-56
- **Loop 5**: Days 57-60 (4 days of pattern)

**Key Points:**

- Looping starts from effective start date
- Template repeats exactly as configured
- Partial loops fill remaining days
- No gaps created in schedule

</details>

<details>
<summary><strong>What's the difference between Emergency, Mutual, and Personal switch?</strong></summary>

Three switch types with different workflows:

| Aspect           | Emergency                 | Mutual                    | Personal               |
| ---------------- | ------------------------- | ------------------------- | ---------------------- |
| **Purpose**      | Urgent immediate changes  | Swap with colleague       | Rearrange own dates    |
| **Approval**     | Auto-approved             | Manager approval          | Manager approval       |
| **Speed**        | Instant                   | 1-2 days                  | 1-2 days               |
| **Swap Partner** | Self or any employee      | Another employee required | Self (different dates) |
| **Use Case**     | Sudden illness, emergency | Planned exchange          | Preference adjustment  |

**Emergency:**

- Use only for genuine urgent situations
- No approval delay
- Both schedules swap immediately
- Don't abuse (creates audit trail)

**Mutual:**

- Both employees agree to swap
- Manager verifies operational impact
- Fair exchange of shifts
- Requires approval before swap

**Personal:**

- Rearranging your own schedule
- Moving shift to different date
- Manager ensures coverage maintained
- Requires approval before change

**Which to Choose:**

- **Time-sensitive and urgent** → Emergency
- **Swapping with colleague** → Mutual
- **Moving your own shift date** → Personal

</details>

<details>
<summary><strong>When should I use Emergency switch?</strong></summary>

Use Emergency switch **only** for genuine urgent situations:

**Appropriate Uses:**

- Sudden serious illness requiring immediate replacement
- Family emergency needing instant schedule change
- Unexpected critical personal situation
- Last-minute operational crisis
- Medical emergency

**Inappropriate Uses:**

- Routine preference changes (use Personal)
- Planned swaps with colleagues (use Mutual)
- Non-urgent schedule adjustments
- Convenience without urgency

**Why It Matters:**

- Emergency bypasses approval workflow
- No manager review before swap
- Creates audit trail
- Intended for critical situations only

**Best Practice:**

- Use sparingly and only when truly urgent
- Provide detailed reason even though auto-approved
- Inform manager immediately after using Emergency
- Consider if situation can wait for normal Mutual/Personal approval

:::warning
Frequent Emergency switch usage may trigger review by management. Use responsibly.
:::

</details>

<details>
<summary><strong>Why was my Assign Schedule request ignored?</strong></summary>

Assign Schedule only works for dates with **no existing schedule**.

**Common Reasons:**

1. **Schedule Already Exists:**

   - Employee already has schedule on selected date
   - System ignores assignment to prevent duplication
   - **Solution**: Use **Reassign** to change existing schedule

2. **Wrong Date Selected:**

   - Accidentally selected date with existing schedule
   - **Solution**: Double-check calendar view before assigning

3. **Previous Schedule Not Visible:**

   - Schedule exists but not shown due to filters
   - **Solution**: Clear filters and verify

4. **Permission Issues:**
   - Insufficient rights to assign for that placement/department
   - **Solution**: Check permissions with admin

**How to Verify:**

1. Open Calendar View
2. Filter by placement, department, employee
3. Check target date
4. If cell is filled → use Reassign
5. If cell is empty → use Assign

**Remember:**

- Assign = Empty slots only
- Reassign = Existing schedules only

</details>

<details>
<summary><strong>Can employees see other employees' schedules?</strong></summary>

**No**, visibility is controlled by role and scope:

**Employees:**

- ✅ View own schedules
- ❌ Cannot see colleagues' schedules
- ❌ Cannot view other departments

**Supervisors:**

- ✅ View own team's schedules
- ❌ Cannot see other teams

**Department Managers:**

- ✅ View entire department schedules
- ❌ Cannot see other departments

**HR Managers:**

- ✅ View all departments
- ✅ Organization-wide visibility

**Super Admins:**

- ✅ Unrestricted access
- ✅ All placements and departments

**Why This Matters:**

- Privacy protection
- Need-to-know access
- Role-appropriate visibility
- Security and compliance

**Requesting Access:**
If you need to see other schedules:

1. Contact your supervisor or HR
2. Explain business need
3. Request temporary or permanent access elevation
4. Follow company approval process

</details>

<details>
<summary><strong>What happens if my switch request is rejected?</strong></summary>

**When Rejected:**

**Immediate Effects:**

- Both schedules remain unchanged
- No swap occurs
- Request marked as rejected
- Notification sent to requester

**What You See:**

- Rejection status in switch request list
- Rejection reason (if manager provided)
- Original schedules still assigned

**What You Can Do:**

1. **Review Rejection Reason:**

   - Understand manager's concern
   - Identify what needs improvement

2. **Options:**

   - **Accept**: Leave schedules as is
   - **Discuss**: Talk with manager for clarification
   - **Resubmit**: Submit new request with different dates or better justification
   - **Alternative**: Find different solution (e.g., different swap partner)

3. **Resubmit Guidelines:**
   - Address rejection reason
   - Provide clearer justification
   - Consider manager's concerns
   - Choose better timing/dates if relevant

**Common Rejection Reasons:**

- "Insufficient coverage after swap"
- "Shift incompatibility with employee skills"
- "Too many recent switches"
- "Operational needs require original schedule"
- "Request lacks sufficient justification"

**Prevention:**

- Pre-coordinate with manager informally
- Provide detailed, clear reasons
- Ensure swap maintains coverage
- Consider operational impact

</details>

<details>
<summary><strong>Who can approve switch requests?</strong></summary>

Approval authority by role:

**Department Managers:**

- ✅ Approve switches within their department
- ✅ Approve for direct reports
- ❌ Cannot approve other departments

**HR Managers:**

- ✅ Approve all switches across all departments
- ✅ Organization-wide approval authority
- ✅ Override department manager decisions if needed

**Super Admins:**

- ✅ Unrestricted approval rights
- ✅ All placements and departments

**Emergency Switches:**

- 🤖 Auto-approved by system
- No manual approval needed
- Instant swap

**Supervisors:**

- ✅ May have approval rights for direct team (company-dependent)
- Typically limited to team level

**Employees:**

- ❌ Cannot approve switches
- Can only request own switches

**Approval Process:**

1. Employee submits switch request
2. Request routes to appropriate approver based on:
   - Employee's department
   - Switch type (Emergency auto-approved)
   - Organizational hierarchy
3. Approver receives notification
4. Approver reviews and decides
5. Decision communicated to employee

</details>

<details>
<summary><strong>Why can't I delete a schedule?</strong></summary>

**Common Reasons:**

1. **Insufficient Permissions:**

   - Only HR Managers and Super Admins can delete
   - Regular employees and supervisors cannot
   - **Solution**: Request HR Manager to delete

2. **Schedule Protection:**

   - Schedule has attendance recorded
   - System may block deletion to preserve data
   - **Solution**: Use Reassign instead

3. **Wrong Action Selected:**

   - Trying to delete via wrong method
   - **Solution**: Right-click schedule cell → Delete Schedule

4. **Date Already Passed:**
   - Past schedules may be locked
   - **Solution**: Check company policy on historical data

**Alternatives to Deletion:**

**Reassign Schedule:**

- Change to a rest day or non-working shift
- Effectively removes work requirement
- Preserves audit trail

**Switch Schedule:**

- Swap with rest day
- Move schedule to different date

**Why Deletion is Restricted:**

- Prevents accidental data loss
- Maintains attendance history
- Ensures audit trail
- Protects payroll accuracy

**If You Need to Delete:**

1. Verify you have permission
2. Contact HR Manager if you don't
3. Explain reason for deletion
4. Follow approval process

</details>

<details>
<summary><strong>Schedule generation failed, what should I check?</strong></summary>

**Common Issues and Solutions:**

**1. Template Not Selected:**

- ❌ No template chosen
- ✅ Select valid template from dropdown

**2. Invalid Date Range:**

- ❌ End date before start date
- ❌ Dates in the past
- ✅ Ensure start date < end date
- ✅ Use future or current dates

**3. No Employees Selected:**

- ❌ Custom selection empty
- ✅ Verify employees checked/selected
- ✅ Confirm department has employees

**4. Permission Issues:**

- ❌ Insufficient rights for placement/department
- ✅ Check your permission level
- ✅ Contact admin if needed

**5. Template Configuration Error:**

- ❌ Template has missing shifts
- ❌ Template inactive
- ✅ Verify template is complete and active

**6. System Conflicts:**

- ❌ Ongoing maintenance
- ❌ Other bulk operations in progress
- ✅ Wait and retry later
- ✅ Contact IT if persistent

**7. Network/Connection Issues:**

- ❌ Timeout or connection lost
- ✅ Check internet connection
- ✅ Refresh page and retry

**Troubleshooting Steps:**

1. **Verify All Required Fields:**

   - Placement ✓
   - Custom selection with employees ✓
   - Template ✓
   - Start and end dates ✓

2. **Check Template:**

   - Template active?
   - All shifts configured?
   - Template for correct department?

3. **Validate Permissions:**

   - Can you generate for this placement?
   - Can you access this department?

4. **Review Filters:**

   - Are employees showing in selection?
   - Is department correct?

5. **Test with Small Group:**
   - Try single employee first
   - Verify before bulk generation

**If Still Failing:**

- Export error message/screenshot
- Contact HR or IT support
- Provide: placement, department, template name, date range
- Check system status page

</details>

<details>
<summary><strong>Can I undo a schedule generation?</strong></summary>

**No automatic undo feature exists.**

**If Accidentally Generated:**

**Option 1: Delete Schedules (HR Manager/Admin Only)**

1. Open Calendar View
2. Filter by affected employees and date range
3. Right-click each schedule
4. Select "Delete Schedule"
5. Confirm deletion
6. Repeat for all affected schedules

**Option 2: Regenerate with Correct Settings**

1. Prepare correct template and settings
2. Re-run Generate Schedule with correct configuration
3. Overwrites incorrect schedules
4. New correct schedules created

**Option 3: Restore from Backup (if you exported)**

1. Locate export file of previous schedules
2. Contact IT/Admin for assistance
3. Request manual restoration
4. May require import or manual recreation

**Option 4: Manual Reassignment**

1. Review what schedules should be
2. Reassign each schedule individually
3. Time-consuming but precise

**Prevention (Best Practice):**

**Always Before Generating:**

1. **Export Current Schedules**: Backup before bulk operations
2. **Verify Settings**: Double-check all selections
3. **Test First**: Generate for 1-2 employees to test
4. **Review Template**: Confirm correct template selected
5. **Check Date Range**: Ensure dates are correct
6. **Confirm Employees**: Verify employee selection

**If You See Error:**

- **Stop Immediately**: Cancel if generation still in progress
- **Don't Panic**: Schedule can be corrected
- **Contact HR**: Report issue immediately if attendance data lost

:::warning
**Critical Data Loss Risk:** Generating over existing schedules deletes attendance records. Always export as backup before bulk operations.
:::

</details>

<details>
<summary><strong>How do I view schedules for a specific employee?</strong></summary>

**Multiple Ways to View:**

**Method 1: Calendar View with Filter**

1. Navigate to **Work Schedule**
2. Select **Weekly View** or **Monthly View**
3. Apply filters:
   - **Placement**: Select employee's location
   - **Department**: Select employee's department
   - **Employee**: Select specific employee
4. Calendar shows only that employee's schedules

**Method 2: Schedule List View**

1. Navigate to **Work Schedule** → **Schedule List**
2. Use search box to find employee by name or ID
3. View monthly schedule in table row

**Method 3: Export for Employee**

1. Click **"Export"** button
2. Apply employee filter
3. Select date range
4. Download employee's schedule

**Method 4: Employee Self-View**

If you are the employee:

1. Log in with your credentials
2. Navigate to **My Schedule** or **Work Schedule**
3. System automatically filters to show only your schedules
4. No need to apply filters

**What You'll See:**

- All scheduled work days
- Shift codes and times
- Work hours per shift
- Schedule status (Scheduled, Present, Late, etc.)
- Total working hours for period

**For Managers/HR:**

- Can view any employee in your scope
- Apply filters to focus on specific employees
- Export for detailed analysis

</details>

<details>
<summary><strong>What do the shift color codes mean?</strong></summary>

Shift codes are **custom color-coded** for visual identification, not standardized across systems.

**How It Works:**

Each shift configured in system has:

- **Shift Code**: Short identifier (e.g., MS, ES, NS)
- **Shift Name**: Full name (e.g., Morning Shift, Evening Shift)
- **Color**: Unique color assigned during shift configuration

**Common Examples (varies by company):**

| Shift         | Code | Typical Color | Time        |
| ------------- | ---- | ------------- | ----------- |
| Morning Shift | MS   | Blue          | 08:00-17:00 |
| Evening Shift | ES   | Orange        | 14:00-23:00 |
| Night Shift   | NS   | Purple        | 22:00-07:00 |
| Day Shift     | DS   | Green         | 09:00-18:00 |
| Rest Day      | R    | Gray          | No work     |

**Your Company's Colors:**

- Check Shift Configuration in system
- View calendar legend (if available)
- Ask HR for shift color guide
- Hover over shift badge in calendar to see name

**Color Purpose:**

- Quick visual shift identification
- Easy pattern recognition
- Instant coverage assessment
- Reduce reading time

**Schedule Status vs Shift Color:**

- **Shift Color**: Badge color on shift code
- **Status**: Text/badge showing attendance (Present, Late, etc.)
- These are separate indicators

</details>

<details>
<summary><strong>How do I handle schedule conflicts?</strong></summary>

**When Conflicts Occur:**

System may detect conflicts during assignment or generation:

**Common Conflict Types:**

1. **Double Booking:**

   - Employee scheduled twice on same date
   - **Solution**: Delete one schedule or reassign

2. **Consecutive Shifts Without Rest:**

   - Employee scheduled without minimum rest hours between shifts
   - **Solution**: Adjust schedule timing or add rest day

3. **Overtime Limit Exceeded:**

   - Employee exceeds maximum hours per period
   - **Solution**: Redistribute hours or get approval for exception

4. **Minimum Rest Violation:**

   - Not enough hours between end of one shift and start of next
   - **Solution**: Adjust shift times or swap dates

5. **Maximum Consecutive Days:**
   - Employee scheduled too many days without rest
   - **Solution**: Insert rest day

**Conflict Resolution Process:**

1. **System Alert:**

   - System shows conflict warning or error
   - Details what conflict occurred

2. **Review Details:**

   - Identify conflicting schedules
   - Understand violation

3. **Choose Resolution:**

   - **Option A**: Modify schedule to eliminate conflict
   - **Option B**: Delete conflicting schedule
   - **Option C**: Request approval override (if permitted)

4. **Implement Fix:**

   - Reassign schedule
   - Delete extra schedule
   - Adjust shift times
   - Add rest day

5. **Verify Resolution:**
   - Confirm conflict no longer appears
   - Check calendar shows correct schedules

**Prevention:**

- Review calendar before bulk operations
- Use Conflict Type configuration rules
- Enable auto-prevent for critical conflicts
- Plan schedules with adequate rest
- Monitor overtime hours regularly

**If System Blocks Assignment:**

- Read conflict message carefully
- Resolve conflict before proceeding
- Contact HR if you believe error is incorrect
- Don't override safety/legal conflicts

</details>

---
