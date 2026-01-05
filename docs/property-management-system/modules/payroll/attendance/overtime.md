---
title: Overtime
sidebar_position: 3
---

# Overtime

Overtime is the automated system for tracking and managing employee extra work hours, streamlining approval workflow and ensuring accurate overtime compensation aligned with company policy and labor regulations.

## Overview

On this page you can:

- View auto-generated overtime records from attendance data
- Submit overtime for approval with proper justification
- Approve or reject overtime requests with budget visibility
- Track overtime hours and costs by employee and department
- Export overtime reports for payroll and analysis

**Key Capabilities:**

- Automatic overtime detection from attendance records
- Draft overtime created instantly when overtime hours detected
- Configurable overtime multipliers (1.5x, 2x, 3x)
- Multi-level approval workflow with complete audit trail
- Integration with payroll for seamless compensation
- Real-time overtime hours and cost tracking
- Comprehensive reporting for budget management

:::info
**Automatic Generation:** Overtime records are **auto-created** when attendance shows overtime status with hours > 0. System generates draft records that HR reviews and submits for approval.
:::

---

## Key Features

### 🤖 Automatic Overtime Detection

System automatically identifies and creates overtime records from attendance data.

**Business Value:**

- Zero manual overtime record creation
- 100% coverage - no overtime missed
- Records generated within seconds of attendance update
- Reduce HR workload by 90% on overtime data entry
- Eliminate human error in overtime tracking
- Save 10+ hours weekly on administrative tasks

**Perfect for:** Companies with frequent overtime needing automated tracking

---

### ✍️ Smart Draft Management

Auto-generated drafts ready for HR review with pre-filled data from attendance.

**Business Value:**

- All overtime details pre-populated (employee, date, hours)
- HR only adds reason and verifies multiplier
- Batch review and submit multiple overtime records
- Average 30 seconds per overtime review
- Clear separation between data capture and approval
- Support efficient overtime processing workflow

**Perfect for:** HR teams managing high-volume overtime requests

---

### 📊 Configurable Multipliers

Flexible overtime rate configuration based on shift, day type, or special circumstances.

**Business Value:**

- 1.5x for weekday overtime (time and half)
- 2x for weekend overtime (double time)
- 3x for holiday overtime (triple time)
- Custom rates for special situations
- Automatic multiplier from shift configuration
- Manual override for exceptional cases
- Ensure compliance with labor law rates

**Perfect for:** Companies with complex overtime policies and varied compensation rates

---

### ✅ Streamlined Approval Workflow

Clear approval process with complete context for informed decisions.

**Business Value:**

- Managers see full overtime details before approval
- Verify necessity, hours, and multiplier in one view
- One-click approve or reject with reason tracking
- Reduce approval time from days to hours
- Complete audit trail for compliance
- Support budget-conscious decision making

**Perfect for:** Operations managers balancing workload needs with budget control

---

### 💰 Accurate Cost Calculation

Automatic overtime pay calculation with configurable rates and multipliers.

**Business Value:**

- Formula: Hourly Rate × Hours × Multiplier
- Real-time compensation preview
- Accurate payroll integration
- Prevent underpayment or overpayment
- Support budget tracking and forecasting
- Generate cost reports by employee/department

**Perfect for:** Finance teams needing precise overtime cost control

---

### 📈 Comprehensive Analytics

Real-time visibility into overtime patterns, trends, and costs.

**Business Value:**

- Track total overtime hours by employee/department
- Monitor overtime costs against budget
- Identify excessive overtime patterns
- Spot understaffing or inefficiency indicators
- Support workforce planning decisions
- Generate executive dashboards

**Perfect for:** Management teams focused on operational efficiency and cost optimization

---

### 🔄 Payroll Integration

Approved overtime flows seamlessly to payroll for compensation.

**Business Value:**

- Approved overtime auto-included in next payroll
- No manual data transfer needed
- Eliminate payroll errors from manual entry
- Ensure timely overtime payment
- Complete compensation audit trail
- Support compliance with wage laws

**Perfect for:** Payroll teams processing compensation for large workforces

---

### 📤 Flexible Reporting

Export overtime data in multiple formats for various business needs.

**Business Value:**

- Daily, weekly, monthly overtime reports
- Department or employee-specific reports
- Cost analysis and budget variance reports
- Export to Excel, CSV, PDF
- Support management review and decision-making
- Meet audit and compliance requirements

**Perfect for:** HR and finance teams needing overtime analytics for strategic planning

---

## Key Concepts

### Overtime Record Fields

Each overtime record contains complete information:

| Field              | Type      | Description                | Auto-Filled | Source                 |
| ------------------ | --------- | -------------------------- | ----------- | ---------------------- |
| **Overtime ID**    | Text      | Unique identifier          | Yes         | Auto-generated         |
| **Employee Name**  | Text      | Name of employee           | Yes         | From attendance        |
| **Employee ID**    | Text      | Employee identifier        | Yes         | From attendance        |
| **Department**     | Text      | Employee's department      | Yes         | Employee data          |
| **Date**           | Date      | Date overtime worked       | Yes         | From attendance        |
| **Start Time**     | Time      | Overtime start time        | Yes         | From attendance        |
| **End Time**       | Time      | Overtime end time          | Yes         | From attendance        |
| **Total Hours**    | Decimal   | Overtime hours worked      | Yes         | Calculated             |
| **Multiplier**     | Decimal   | Pay rate multiplier        | Partial     | Shift config or manual |
| **Reason**         | Text Area | Justification for overtime | No          | HR manual entry        |
| **Task/Project**   | Text      | Related task or project    | No          | Optional               |
| **Remarks**        | Text Area | Additional notes           | No          | Optional               |
| **Status**         | Badge     | Record status              | Yes         | Workflow               |
| **Requested Date** | Date/Time | Submission timestamp       | Yes         | Auto                   |
| **Approver**       | Text      | Approving manager          | No          | On approval            |
| **Approval Date**  | Date/Time | Approval timestamp         | Yes         | On approval            |

### Overtime Status Workflow

Status progression through lifecycle:

| Status       | Description                   | Action Required        | Who Acts       | Next Status       |
| ------------ | ----------------------------- | ---------------------- | -------------- | ----------------- |
| **Draft**    | Auto-generated, not submitted | Review and submit      | HR Admin       | Pending           |
| **Pending**  | Submitted, awaiting approval  | Approve or reject      | Manager        | Approved/Rejected |
| **Approved** | Approved for compensation     | None (paid in payroll) | System         | -                 |
| **Rejected** | Not approved for payment      | Review reason          | HR (note only) | -                 |

**Status Flow:**

```
Attendance (Overtime) → Draft (auto-created)
↓
HR Review & Submit
↓
Pending
↙ ↘
Approved Rejected
↓
Paid in Payroll
```

### Overtime Multipliers

Compensation rate multipliers based on circumstances:

| Multiplier | Name          | Common Usage                          | Example Scenario               | Labor Law                  |
| ---------- | ------------- | ------------------------------------- | ------------------------------ | -------------------------- |
| **1.5x**   | Time and half | Weekday overtime beyond regular hours | Worked until 9 PM on Tuesday   | Standard in most countries |
| **2x**     | Double time   | Weekend work, extended hours          | Worked Saturday shift          | Common for weekends        |
| **2.5x**   | Two and half  | Extended overtime (>3 hours)          | Worked 5 hours overtime        | Policy-dependent           |
| **3x**     | Triple time   | Public holiday work                   | Worked on national holiday     | Often legally mandated     |
| **Custom** | Variable      | Special circumstances                 | Emergency project, night shift | Company policy             |

**Multiplier Configuration:**

**Method 1: Shift Configuration (Default)**

- Set default multipliers in Shift Configuration
- Different shifts have different defaults
- Automatically applied when overtime generated
- Example: Night Shift default = 2x

**Method 2: Manual Override**

- HR adjusts multiplier when editing draft
- Used for special circumstances
- Example: Change to 3x for holiday overtime
- Subject to approval

### Overtime Hour Calculation

System calculates overtime hours automatically:

**From Attendance:**

```
Overtime Hours = Actual Work Hours - Standard Work Hours
```

**Example 1: Extended Workday**

- Standard Hours: 8 hours (08:00 - 17:00)
- Actual Work: 11 hours (08:00 - 20:00 with 1hr break)
- Overtime: 11 - 8 = **3 hours**

**Example 2: Weekend Work**

- Scheduled: Day off
- Actual Work: 8 hours on Saturday
- Overtime: 8 hours (entire shift)

**Break Time Handling:**

- Break time deducted from total work time
- Same calculation as regular attendance
- Example: 9 hours with 1hr break = 8 hours work

### Overtime Pay Calculation

Compensation formula with multiplier:

**Formula:**

```
Overtime Pay = Hourly Rate × Overtime Hours × Multiplier
```

**Hourly Rate Calculation:**

```
Hourly Rate = Monthly Salary ÷ (Working Days per Month × Working Hours per Day)
```

**Complete Example:**

**Employee Details:**

- Monthly Salary: Rp 6,000,000
- Working Days: 22 days
- Hours per Day: 8 hours

**Calculation:**

1. Hourly Rate = 6,000,000 ÷ (22 × 8) = Rp 34,091
2. Overtime: 4 hours at 1.5x multiplier
3. Overtime Pay = 34,091 × 4 × 1.5 = **Rp 204,546**

**Multiple Overtime Rates Example:**

- 2 hours weekday (1.5x): 34,091 × 2 × 1.5 = Rp 102,273
- 3 hours weekend (2x): 34,091 × 3 × 2 = Rp 204,546
- **Total Overtime Pay: Rp 306,819**

### Automatic Record Creation

How overtime records are generated:

**Trigger Conditions:**

1. Attendance record updated with Status = "Overtime"
2. Overtime hours > 0 in attendance
3. Attendance imported with overtime detected

**Creation Process:**

1. System detects overtime in attendance
2. Creates overtime record with **Draft** status
3. Auto-fills: Employee, Date, Times, Hours
4. Applies default multiplier (if configured in shift)
5. Awaits HR review and submission

**Data Flow:**

```
Clock In/Out → Attendance Update → Overtime Detection → Draft Overtime Created
```

**Import Flow:**

```
Import File → Attendance Records → Overtime Detection → Multiple Drafts Created
```

### Permission Levels

Access control by role:

| Role                   | View | Edit Draft | Submit | Approve | Delete | Export | Scope           |
| ---------------------- | ---- | ---------- | ------ | ------- | ------ | ------ | --------------- |
| **Employee**           | ✅   | ❌         | ❌     | ❌      | ❌     | ❌     | Own records     |
| **Supervisor**         | ✅   | ❌         | ❌     | ✅      | ❌     | ✅     | Direct reports  |
| **Department Manager** | ✅   | ❌         | ❌     | ✅      | ❌     | ✅     | Department      |
| **HR Admin**           | ✅   | ✅         | ✅     | ❌      | ✅     | ✅     | All employees   |
| **HR Manager**         | ✅   | ✅         | ✅     | ✅      | ✅     | ✅     | All employees   |
| **Finance**            | ✅   | ❌         | ❌     | ❌      | ❌     | ✅     | All (read-only) |

---

## Best Practices

### For HR Administrators

- **Daily Review**: Check draft overtime records daily for timely processing
- **Batch Submit**: Group similar overtime by department or period for efficiency
- **Verify Details**: Always verify multiplier matches circumstance before submitting
- **Clear Reasons**: Provide specific, detailed reasons (e.g., "Emergency server maintenance" not just "Overtime")
- **Attendance Accuracy**: Ensure attendance records accurate as source of overtime data
- **Prompt Processing**: Submit within 24-48 hours of overtime occurrence

### For Managers/Approvers

- **Quick Review**: Approve or reject within 1-2 business days
- **Verify Necessity**: Confirm overtime was actually needed and authorized
- **Check Multiplier**: Ensure multiplier aligns with company policy
- **Budget Awareness**: Monitor overtime costs against department budget
- **Pattern Analysis**: Track excessive overtime as potential understaffing indicator
- **Fair Distribution**: Ensure overtime opportunities distributed fairly

### For Policy Management

- **Clear Guidelines**: Document when overtime is authorized
- **Multiplier Rules**: Define multipliers for different scenarios clearly
- **Approval Authority**: Specify who can approve overtime in each situation
- **Maximum Limits**: Set daily, weekly, monthly overtime caps per labor law
- **Pre-Authorization**: Encourage pre-approval before working overtime
- **Regular Audits**: Review overtime patterns quarterly for optimization

### General Guidelines

- **Legal Compliance**: Ensure multipliers meet minimum labor law requirements
- **Documentation**: Keep supporting documents for audit purposes
- **Communication**: Inform employees of overtime policies clearly
- **Planning**: Use overtime data to identify hiring needs
- **Alternatives**: Consider hiring before relying on excessive overtime
- **Employee Wellbeing**: Monitor excessive overtime for burnout prevention

---

## How to Use

<details>
<summary><strong>How Overtime Records Are Created</strong></summary>

**Automatic Creation Process:**

Overtime records are **never manually created** - they're automatically generated by the system.

**Creation Triggers:**

**1. Attendance Update:**

- When attendance updated with Status = "Overtime"
- AND Overtime hours > 0

**2. Attendance Import:**

- When importing attendance file with overtime detected
- System processes multiple records at once

**Automatic Process:**

1. **Detection:**

   - System identifies overtime in attendance
   - Checks: Status = Overtime AND Hours > 0

2. **Record Creation:**

   - Creates overtime record with **Draft** status
   - Auto-fills from attendance:
     - Employee name and ID
     - Date
     - Start/end time
     - Total hours

3. **Multiplier Assignment:**

   - Applies default multiplier from shift configuration (if set)
   - Or leaves for HR to specify manually

4. **Draft Queue:**
   - Record appears in Draft list
   - Awaits HR review and submission

**What You Do:**

- Update attendance correctly (overtime is captured there)
- System handles overtime record creation
- HR reviews drafts and submits for approval

:::info
You don't create overtime records manually. Focus on accurate attendance tracking - overtime generation is automatic.
:::

</details>

<details>
<summary><strong>How to Review and Submit Overtime (HR)</strong></summary>

**For HR Admin:**

**Steps:**

1. **View Draft Overtime:**

   - Go to Overtime module
   - Filter by **Status: Draft**
   - See all auto-generated overtime records

2. **Click on a draft record** to review details

3. **Verify Auto-Filled Information:**

   - ✅ Employee name and ID correct
   - ✅ Date matches when overtime worked
   - ✅ Start/End time accurate
   - ✅ Total hours calculated correctly

4. **Check/Adjust Multiplier:**

   - Review pre-filled multiplier (from shift config)
   - Adjust if needed based on circumstances:
     - Weekday extended hours → 1.5x
     - Weekend work → 2x
     - Public holiday → 3x
   - Ensure multiplier aligns with company policy

5. **Add Reason** (Required):

   - Provide clear justification
   - Good examples:
     - "Emergency server maintenance for critical bug fix"
     - "Month-end closing deadline - Finance department"
     - "Project deadline acceleration per client request"
   - Bad examples:
     - "Overtime" (too vague)
     - "Extra work" (not specific)

6. **Add Optional Details:**

   - **Task/Project**: Related project or task name
   - **Remarks**: Any additional context

7. **Click "Save Changes"** to update draft

8. **Click "Submit"** to send for approval

9. **Verify Status:**
   - Status changes from Draft to **Pending**
   - Notification sent to approver
   - Record moves to Pending queue

**Batch Processing:**

For multiple overtime records:

1. Review all drafts for a date range or department
2. Add reasons to each
3. Submit all at once
4. More efficient than individual submission

:::tip
**Processing Timeline:**

- Review drafts within 24 hours of creation
- Submit before payroll cutoff to ensure payment
- Group submissions by department for approver efficiency
  :::

</details>

<details>
<summary><strong>How to Edit Draft Overtime</strong></summary>

**For HR Admin (before submission):**

**Steps:**

1. **Find Draft Record:**

   - Filter by Status: Draft
   - Locate the overtime record to edit

2. **Click "Edit" button**

3. **Editable Fields:**

   **Multiplier:**

   - Adjust based on actual circumstance
   - Example: Change from 1.5x to 2x for weekend work

   **Reason:**

   - Add or update justification
   - Be specific and clear

   **Task/Project:**

   - Add project code or name
   - Helps with cost allocation

   **Remarks:**

   - Any additional information
   - Supporting details for approver

4. **Fields You CANNOT Edit:**

   - Employee (fixed from attendance)
   - Date (fixed from attendance)
   - Start/End Time (fixed from attendance)
   - Total Hours (fixed from attendance)

5. **Click "Save Changes"**

**Result:** Draft updated and ready for submission.

**If You Need to Edit Time/Hours:**

- Cannot edit in overtime module
- Must correct source attendance record first
- System will update related overtime record

:::warning
Once submitted (Status = Pending), you typically cannot edit without special permission. Ensure all details correct before submitting.
:::

</details>

<details>
<summary><strong>How to Approve or Reject Overtime</strong></summary>

**For Managers/Approvers:**

**Steps:**

1. **Access Pending Overtime:**

   - Navigate to Overtime module
   - Filter by **Status: Pending**
   - Or use "Pending Approval" tab

2. **Click on overtime request** to view full details

3. **Review Complete Information:**

   **Employee Details:**

   - Who worked overtime
   - Department and role

   **Overtime Details:**

   - Date and hours worked
   - Start/end time verification
   - Total overtime hours

   **Compensation:**

   - Multiplier applied
   - Calculated overtime pay
   - Budget impact

   **Justification:**

   - Reason provided by HR
   - Task/project reference
   - Remarks and context

4. **Verify Approval Criteria:**

   - ☑ Overtime was authorized or necessary
   - ☑ Hours appear accurate and reasonable
   - ☑ Multiplier matches company policy
   - ☑ Reason is clear and justified
   - ☑ Budget available for payment
   - ☑ No excessive overtime pattern

5. **Make Decision:**

   **To Approve:**

   - Click **"Approve"** button
   - Add approval remarks if needed (optional)
   - Click **"Confirm"**
   - Status → Approved
   - Employee notified
   - Overtime included in next payroll

   **To Reject:**

   - Click **"Reject"** button
   - Enter rejection reason (required):
     - "Overtime not pre-authorized per policy"
     - "Insufficient budget for additional overtime"
     - "Hours do not match actual work performed"
     - "Multiplier incorrect for weekday overtime"
   - Click **"Confirm Rejection"**
   - Status → Rejected
   - Employee and HR notified
   - Overtime NOT paid

6. **Confirm Action Complete:**
   - Record removed from your pending queue
   - Status updated in system
   - Audit log created

**Considerations Before Approving:**

- **Authorization**: Was overtime pre-approved by you or designee?
- **Necessity**: Was overtime truly needed or could work wait?
- **Accuracy**: Do hours match attendance and actual work?
- **Policy**: Does multiplier comply with company policy?
- **Budget**: Is budget available for this overtime expense?
- **Pattern**: Is this excessive or concerning pattern?

:::warning
**Important:**

- Approved overtime creates financial obligation
- Cannot easily reverse after approval
- Impacts payroll and budget
- Be certain before approving
  :::

</details>

<details>
<summary><strong>How to Delete Draft Overtime</strong></summary>

**For HR Admin:**

**When to Delete:**

- Overtime was incorrectly detected from attendance
- Duplicate record created by error
- Attendance error that created false overtime
- Overtime should not be compensated

**Steps:**

1. **Find Draft Record:**

   - Filter by Status: Draft
   - Locate incorrect overtime record

2. **Click "Delete" button**

3. **Confirm deletion:**

   - System may ask for confirmation
   - Provide reason if required
   - Click "Confirm Delete"

4. **Record Removed:**
   - Permanently deleted from system
   - No audit trail (unlike rejection)
   - Cannot be recovered

**Better Alternatives:**

**Option 1: Fix Source Attendance**

- Correct the attendance record first
- System may auto-update overtime record
- Maintains data integrity

**Option 2: Submit and Let Approver Reject**

- Submit with note about error
- Approver rejects with reason
- Creates audit trail for why overtime not paid
- Better for compliance

**When Deletion is Appropriate:**

- Clear system error or duplicate
- Attendance already corrected
- Record has no business value

:::warning
**Use deletion sparingly:**

- No audit trail created
- Cannot be undone
- Better to reject via workflow when possible
- Only delete obvious errors or duplicates
  :::

</details>

<details>
<summary><strong>How to Update Attendance to Generate Overtime</strong></summary>

**For HR updating attendance:**

Overtime records are created FROM attendance, so correct attendance is crucial.

**Steps:**

1. **Navigate to Attendance Module**

2. **Find the attendance record:**

   - Select date
   - Find employee

3. **Click "Update" or "Edit"** on attendance

4. **Update fields to reflect overtime:**

   - **Clock In**: Actual start time
   - **Clock Out**: Actual end time (beyond scheduled end)
   - Ensure work hours exceed standard hours
   - System calculates overtime hours automatically

5. **Set Status:**

   - Change status to **"Overtime"**
   - Or system may auto-set based on hours

6. **Verify Overtime Hours:**

   - Check that overtime hours > 0
   - Example: Worked 10 hours, standard 8 → 2 hours overtime

7. **Add Remarks** in attendance:

   - "Worked late for project deadline"
   - "Weekend shift for maintenance"

8. **Click "Save"** in Attendance module

**Automatic Overtime Generation:**

1. System detects: Status = Overtime AND Hours > 0
2. Creates overtime record with **Draft** status
3. Auto-fills all details from attendance
4. Appears in Overtime module Draft list

**Next Steps:**

1. Go to **Overtime Module**
2. Find the newly created draft
3. Add reason and review details
4. Submit for approval

:::info
**Key Points:**

- Overtime generated instantly upon attendance save
- One attendance update can create one overtime record
- Ensure attendance accuracy - it's the source of truth
- Corrections should be made in attendance first
  :::

</details>

<details>
<summary><strong>How to Import Attendance with Overtime</strong></summary>

**For bulk overtime record creation:**

**Steps:**

1. **Prepare Attendance Import File:**

   - Include employees who worked overtime
   - Columns required:
     - Employee ID
     - Date
     - Clock In time
     - Clock Out time
     - Overtime hours (or system calculates)
   - Ensure hours exceed standard work hours

2. **Go to Attendance Module**

3. **Click "Import Attendance"**

4. **Upload File:**

   - Select file (Excel or CSV)
   - System validates data

5. **Review Validation:**

   - Check for errors
   - Verify overtime detected correctly

6. **Confirm Import:**
   - Click "Import" or "Confirm"
   - System processes all records

**Automatic Overtime Generation:**

**For EACH attendance record where:**

- Work hours > Standard hours
- OR Status = Overtime
- AND Overtime hours > 0

**System creates:**

- Overtime record with Draft status
- Auto-fills from attendance data
- All drafts appear in Overtime module

**After Import:**

1. **Go to Overtime Module**
2. **Filter by Draft status**
3. **See all auto-generated overtime records**
4. **Review each record:**
   - Verify details
   - Add reasons
   - Adjust multipliers if needed
5. **Submit for approval** (individually or batch)

**Example Scenario:**

Import 100 attendance records:

- 20 have overtime hours
- System auto-creates 20 draft overtime records
- HR reviews and submits these 20
- Approver reviews and approves
- 20 employees get overtime pay

:::tip
**Bulk Processing:**

- Import attendance once (e.g., weekly)
- System generates all overtime drafts automatically
- Review and submit overtime in batches
- More efficient than daily individual updates
  :::

</details>

<details>
<summary><strong>How to Export Overtime Report</strong></summary>

**Steps:**

1. **Apply Filters** (optional but recommended):

   - **Date Range**: Select start and end date
   - **Department**: Choose specific department
   - **Employee**: Select individual employee
   - **Status**: Draft, Pending, Approved, Rejected, or All

2. **Click "Export" button**

3. **Choose Export Format:**

   - **Excel (.xlsx)**: Best for analysis with pivot tables
   - **CSV (.csv)**: Import to other systems
   - **PDF (.pdf)**: Formal reports, printing

4. **Select Report Type:**

   **Overtime Summary:**

   - Total hours by employee
   - Total compensation
   - Status breakdown

   **Detailed Overtime Log:**

   - Every overtime record
   - All fields included
   - Complete audit trail

   **Overtime by Department:**

   - Aggregated by department
   - Cost comparison
   - Useful for budget analysis

   **Overtime by Status:**

   - Grouped by Draft, Pending, Approved
   - Processing pipeline view

   **Overtime Compensation Report:**

   - Focus on pay calculations
   - Multiplier breakdown
   - Payroll reconciliation

5. **Click "Generate" or "Export"**

6. **Download File:**
   - File downloads automatically
   - Or click download link

**Export Contains:**

- All filtered overtime records
- Employee details
- Hours, multipliers, compensation
- Status and approval details
- Timestamps and audit trail

**Common Use Cases:**

**For Payroll:**

- Export approved overtime for pay period
- Include in payroll processing
- Reconcile overtime payments

**For Management:**

- Monthly overtime summary by department
- Cost analysis and trends
- Budget planning and forecasting

**For Audits:**

- Complete overtime history
- Approval trail
- Compliance documentation

**For HR Analysis:**

- Identify excessive overtime patterns
- Staffing need analysis
- Employee workload assessment

:::tip
**Export Best Practices:**

- Export weekly for tracking
- Archive monthly for records
- Use Excel for deeper analysis
- Keep exports for audit (3-7 years)
  :::

</details>

<details>
<summary><strong>How to Track Total Overtime by Employee</strong></summary>

**View Individual Overtime:**

**Method 1: Filter by Employee**

1. Go to Overtime module
2. Use employee filter or search
3. Select specific employee
4. View all their overtime records
5. See total hours and status breakdown

**Method 2: Export Employee Report**

1. Click Export
2. Select "Per Employee" report
3. Choose employee
4. Select date range (month, quarter, year)
5. Generate report showing:
   - Total overtime hours
   - Total compensation
   - Status breakdown (approved, pending, rejected)
   - Overtime by date
   - Multiplier breakdown

**Method 3: Employee Dashboard** (if available)

1. Access employee detail page
2. View overtime summary widget
3. See current month/year totals
4. Quick status overview

**What You Can Track:**

**Hours:**

- Total overtime hours worked
- Breakdown by month
- Average overtime per week
- Trending up or down

**Compensation:**

- Total overtime pay approved
- Pending compensation
- Rejected overtime (unpaid)

**Patterns:**

- Frequency of overtime
- Typical multipliers
- Overtime by day of week
- Peak overtime periods

**Status:**

- How much approved vs pending
- Rejection rate
- Processing speed

**Use Cases:**

**Performance Review:**

- Assess employee dedication
- Identify workload issues
- Determine if overtime sustainable

**Workload Management:**

- Excessive overtime may indicate understaffing
- Redistribute work if needed
- Consider hiring additional staff

**Budget Planning:**

- Forecast future overtime costs
- Plan department budgets
- Identify cost-saving opportunities

:::info
For detailed employee overtime analysis, export reports and use Excel pivot tables for custom views and charts.
:::

</details>

---

## FAQ

<details>
<summary><strong>How are overtime records created?</strong></summary>

Overtime records are **automatically created** by the system - never manually entered.

**Creation Process:**

**Trigger:** Attendance updated or imported with:

- Status = "Overtime"
- AND Overtime hours > 0

**System Action:**

1. Detects overtime in attendance
2. Auto-creates overtime record with **Draft** status
3. Fills in: Employee, Date, Times, Hours
4. Applies default multiplier (if set in shift config)
5. Awaits HR review and submission

**Your Role:**

- Ensure attendance accurate
- System handles overtime record creation
- HR reviews drafts and submits
- Manager approves

**You don't create overtime records manually** - they come automatically from attendance data.

</details>

<details>
<summary><strong>Can employees submit their own overtime?</strong></summary>

**No**, employees cannot create or submit overtime records directly.

**Overtime Workflow:**

1. **Employee**: Works overtime hours
2. **System**: Captures in attendance (clock in/out or import)
3. **System**: Auto-generates overtime record (Draft)
4. **HR Admin**: Reviews draft, adds reason, submits
5. **Manager**: Approves or rejects
6. **Payroll**: Pays approved overtime

**Employee's Role:**

- Work overtime as authorized
- Clock in/out accurately
- Ensure attendance reflects actual hours
- View their overtime status and history

**Why This Process:**

- Maintains data integrity
- Requires proper authorization
- Ensures payroll accuracy
- Creates audit trail
- Prevents fraudulent overtime claims

</details>

<details>
<summary><strong>What is Draft status?</strong></summary>

**Draft** is the initial status of auto-generated overtime records.

**What Draft Means:**

- ✅ Overtime detected and recorded by system
- ✅ Details pre-filled from attendance
- ⏳ Awaiting HR review and submission
- ⏳ Not yet in approval workflow
- ❌ Not submitted to manager
- ❌ Will not be paid yet

**HR Actions Needed:**

1. Review auto-filled details
2. Verify multiplier appropriate
3. Add reason for overtime (required)
4. Add task/project if relevant
5. Submit for approval

**Draft Record Contents:**

- Employee, date, times, hours (from attendance)
- Multiplier (default or needs manual entry)
- Reason (empty - HR must add)
- Status: Draft

**After Submission:**

- Status changes from Draft → Pending
- Moves to manager's approval queue
- Can no longer be edited (typically)

**Timeline:**

- Drafts created instantly when overtime detected
- HR should review within 24-48 hours
- Submit before payroll cutoff

:::info
Draft overtime is like a "to-do" for HR - auto-created records waiting for review and submission.
:::

</details>

<details>
<summary><strong>How is overtime pay calculated?</strong></summary>

**Formula:**

```
Overtime Pay = Hourly Rate × Overtime Hours × Multiplier
```

**Step-by-Step:**

**1. Calculate Hourly Rate:**

```
Hourly Rate = Monthly Salary ÷ (Working Days × Hours per Day)
```

**2. Identify Overtime Hours:**

- From attendance record
- Hours worked beyond standard hours

**3. Apply Multiplier:**

- Based on circumstance (weekday, weekend, holiday)
- Configured in shift or set manually

**4. Calculate Pay:**

- Multiply all three values

**Complete Example:**

**Employee Info:**

- Monthly Salary: Rp 5,000,000
- Working Days: 20 days/month
- Hours per Day: 8 hours

**Calculation:**

1. Hourly Rate = 5,000,000 ÷ (20 × 8) = **Rp 31,250**
2. Overtime Worked: **3 hours**
3. Multiplier: **1.5x** (weekday overtime)
4. Overtime Pay = 31,250 × 3 × 1.5 = **Rp 140,625**

**Multiple Rates Example:**

- 2 hours weekday (1.5x): 31,250 × 2 × 1.5 = Rp 93,750
- 4 hours weekend (2x): 31,250 × 4 × 2 = Rp 250,000
- **Total Overtime Pay: Rp 343,750**

**System Automation:**

- Hourly rate calculated automatically
- Overtime hours from attendance
- Multiplier applied per policy
- Total compensation calculated instantly

</details>

<details>
<summary><strong>How is the multiplier determined?</strong></summary>

Overtime multiplier set through two methods:

**Method 1: Shift Configuration (Default)**

- HR Admin configures default multipliers in Shift settings
- Each shift can have different default
- Examples:
  - Day Shift: 1.5x default
  - Night Shift: 2x default
  - Weekend Shift: 2x default
- Applied automatically when overtime generated
- Consistent and policy-compliant

**Method 2: Manual Override**

- HR manually adjusts when editing draft overtime
- Used for special circumstances:
  - Regular weekday overtime → 1.5x
  - Weekend overtime → 2x
  - Public holiday → 3x
  - Emergency or critical work → Higher rate
- Subject to manager approval
- Requires justification in reason

**Common Multiplier Standards:**

| Situation              | Typical Multiplier | Labor Law        |
| ---------------------- | ------------------ | ---------------- |
| Weekday extended hours | 1.5x               | Standard minimum |
| Weekend work           | 2x                 | Often required   |
| Public holiday         | 2x - 3x            | Legally mandated |
| Night shift additional | +0.5x              | Policy-dependent |

**Approval Consideration:**

- Manager reviews multiplier during approval
- Can reject if multiplier inappropriate
- Ensure compliance with company policy

:::tip
Check your company overtime policy and local labor laws for correct multiplier rules.
:::

</details>

<details>
<summary><strong>Can I change the multiplier?</strong></summary>

**Yes**, but only HR Admin can change it, and only in Draft status.

**Who Can Change:**

- ✅ HR Admin (before submission)
- ❌ Employees (cannot access)
- ❌ Managers (can only approve/reject)
- ❌ After submission (locked)

**How to Change:**

1. Open draft overtime record
2. Click "Edit"
3. Change multiplier value
4. Provide justification in remarks
5. Save changes
6. Submit for approval

**When to Change:**

**Increase Multiplier:**

- Weekend work (change 1.5x → 2x)
- Public holiday (change 1.5x → 3x)
- Emergency critical work
- Per special company policy

**Decrease Multiplier:**

- Incorrect default applied
- Does not qualify for higher rate
- Per policy correction

**Manager Review:**

- Approver sees the multiplier
- Can reject if inappropriate
- Should align with company policy

**After Submission:**

- Multiplier locked (status = Pending)
- Cannot change without rejecting first
- Ensures approval based on correct information

:::warning
Always ensure multiplier complies with:

- Company overtime policy
- Labor law minimum requirements
- Budget approval authority
- Fair and consistent application
  :::

</details>

<details>
<summary><strong>Can I delete overtime after submission?</strong></summary>

**Depends on status and permissions:**

**Draft Status (Before Submission):**

- ✅ HR Admin can delete
- Used for errors or duplicates
- No approval process started yet
- Deletion is permanent

**Pending Status (Submitted):**

- ⚠️ Limited deletion rights
- Usually requires special authorization
- Better to have manager reject instead
- Creates better audit trail

**Approved Status:**

- ❌ Cannot delete (already committed)
- Creates financial obligation
- Included in payroll
- Contact finance for reversal if error

**Rejected Status:**

- ⚠️ May be able to delete (policy-dependent)
- Usually kept for audit trail
- Archived rather than deleted

**Best Practices:**

**Instead of Deleting Pending:**

1. Contact approver
2. Request rejection with reason
3. Creates proper audit trail
4. Can resubmit corrected version if needed

**Instead of Deleting Approved:**

1. Contact payroll/finance
2. Process reversal or adjustment
3. Document reason thoroughly
4. May require manager and HR manager approval

:::info
**Audit Trail Importance:**

- Rejection creates history of why overtime not paid
- Deletion removes record entirely
- For compliance, rejection is better than deletion
- Only delete obvious errors or duplicates in draft
  :::

</details>

<details>
<summary><strong>What if attendance doesn't match actual overtime?</strong></summary>

Overtime is generated FROM attendance, so attendance accuracy is critical.

**If Discrepancy Found:**

**Step 1: Fix Source Attendance First**

1. Go to **Attendance Module**
2. Find the attendance record
3. Click "Update" or "Edit"
4. Correct the clock in/out times
5. Ensure overtime hours calculated correctly
6. Add remarks explaining correction
7. Save attendance

**Step 2: Check Overtime Record**

**Option A: System Auto-Updates**

- Some systems auto-update overtime when attendance changes
- Check if overtime record now correct
- If correct, proceed to submit

**Option B: Manual Update Needed**

- If system doesn't auto-update
- HR edits draft overtime manually
- Adjust hours to match corrected attendance
- Add remarks: "Corrected per attendance update"

**Step 3: Document Changes**

- Note correction in remarks
- Reference attendance correction
- Provide supporting evidence if needed

**Prevention:**

- Ensure attendance accurate from the start
- Verify attendance before it generates overtime
- Regular attendance audits
- Employee confirmation of hours

**If Already Submitted/Approved:**

- May require rejection and resubmission
- Or adjustment in next pay period
- Contact HR and payroll for procedure

:::warning
Always correct attendance first - it's the source of truth. Overtime records should reflect accurate attendance data.
:::

</details>

<details>
<summary><strong>Why isn't my overtime showing up?</strong></summary>

Overtime only appears if specific conditions met:

**Required Conditions:**

1. ✅ Attendance exists for the date
2. ✅ Attendance status = "Overtime"
3. ✅ Overtime hours > 0
4. ✅ Attendance saved/imported successfully

**Troubleshooting Steps:**

**Check 1: Verify Attendance**

- Go to Attendance module
- Find the date and employee
- Check if attendance record exists
- Verify Status shows "Overtime"
- Confirm overtime hours > 0

**Check 2: Attendance Status**

- If status is "Present" or "Late" (not "Overtime")
- System won't generate overtime record
- Update attendance status to "Overtime"
- Save changes

**Check 3: Hours Calculation**

- If work hours ≤ standard hours
- No overtime detected
- Example: Worked 8 hours, standard 8 hours = 0 overtime
- Overtime only when work hours > standard

**Check 4: System Processing**

- Recent attendance update may take moments to generate
- Refresh overtime list
- Check Draft status filter

**Check 5: Already Submitted**

- Overtime may exist but status = Pending or Approved
- Change filter from "Draft" to "All"
- Search by employee name or date

**If Still Not Appearing:**

1. Verify attendance imported/saved successfully
2. Check for system errors in attendance
3. Contact IT or system administrator
4. May need manual overtime record creation (rare)

:::info
**Key Point:** Overtime generation is automatic but dependent on correct attendance data. Fix attendance first if overtime missing.
:::

</details>

<details>
<summary><strong>Can I edit overtime after submission?</strong></summary>

**Generally NO** - once submitted (Pending status), editing is restricted.

**Status-Based Edit Rights:**

**Draft Status:**

- ✅ HR can edit freely
- Change multiplier, reason, remarks
- Cannot change employee, date, hours (from attendance)

**Pending Status:**

- ❌ Regular users cannot edit
- ⚠️ HR Admin may have special override permission
- Locked to prevent approval on changing information

**Approved Status:**

- ❌ Cannot edit (financially committed)
- In payroll processing
- Requires reversal process if error

**Rejected Status:**

- ❌ Cannot edit (closed)
- Kept for audit trail

**If Changes Needed After Submission:**

**Option 1: Request Rejection**

1. Contact approver
2. Explain error and needed changes
3. Approver rejects with reason
4. Status returns to Draft (in some systems)
5. HR edits and resubmits

**Option 2: HR Admin Override** (if available)

1. Requires special permission
2. Must document reason for edit
3. Creates audit trail
4. Use only for legitimate errors

**Option 3: Adjustment in Next Period**

1. If minor error
2. Process correction in next payroll
3. Document as adjustment
4. Less disruptive than reversal

**Best Practice:**

- **Verify all details before submitting**
- Double-check multiplier
- Ensure reason is clear
- Review hours match attendance
- Confirm employee correct

:::warning
Once submitted, changes are difficult. Take time to review thoroughly before submission to avoid issues.
:::

</details>

<details>
<summary><strong>What if overtime request is rejected?</strong></summary>

**When Rejected:**

**Immediate Effects:**

- Status changes to "Rejected"
- Overtime will NOT be paid
- Record kept for audit trail
- Employee and HR notified

**Common Rejection Reasons:**

1. **"Overtime not pre-authorized"**

   - Solution: Ensure pre-approval process followed next time
   - May resubmit with proper authorization

2. **"Insufficient budget"**

   - Solution: Check budget before working overtime
   - Discuss resource needs with management

3. **"Hours do not match attendance"**

   - Solution: Verify attendance accuracy
   - Correct attendance and resubmit

4. **"Multiplier incorrect"**

   - Solution: Adjust multiplier per policy
   - Resubmit with correct rate

5. **"Overtime not necessary"**
   - Solution: Better justify why overtime was needed
   - Discuss workload with manager

**What HR Should Do:**

1. **Review Rejection Reason:**

   - Read approver's explanation
   - Understand the concern

2. **Determine Action:**

   **If Rejection Valid:**

   - Accept decision
   - Overtime not paid (employee worked but not compensated)
   - Unfortunate but policy-driven
   - Use as learning for future

   **If Rejection Questionable:**

   - Discuss with approver
   - Provide additional evidence or justification
   - Escalate to HR Manager if needed

3. **Communicate to Employee:**
   - Explain rejection reason
   - Clarify policy for future
   - Discuss pre-authorization process

**Can You Resubmit?**

- Usually NO - rejected records stay rejected
- Some companies allow revision and resubmission
- Check your company's process
- May need to create adjustment request

**Prevention:**

- Always pre-authorize overtime when possible
- Ensure accurate attendance
- Apply correct multipliers
- Provide clear, specific reasons
- Verify budget availability

:::info
Rejected overtime is unfortunate but reinforces proper authorization processes. Learn from rejections to improve future submissions.
:::

</details>

<details>
<summary><strong>Do I need approval before working overtime?</strong></summary>

**Ideally YES** - pre-authorization is best practice.

**Best Process (Pre-Approval):**

1. **Before Working Overtime:**

   - Employee requests permission from manager
   - Manager considers necessity and budget
   - Manager approves verbally/via email

2. **Work Overtime:**

   - Employee works approved hours
   - Clocks in/out accurately

3. **System Processing:**

   - Attendance captures overtime
   - System generates overtime record (Draft)
   - HR submits for formal approval

4. **Formal Approval:**
   - Manager approves in system
   - Confirms pre-authorization
   - Overtime paid

**Common Reality (Post-Approval):**

1. **Unplanned Overtime:**

   - Emergency situations
   - Unexpected workload
   - Employee works overtime first

2. **Record and Submit:**

   - Attendance captures hours
   - HR submits with justification

3. **Manager Decision:**
   - Reviews retroactively
   - Approves if justified
   - Or rejects if unnecessary/unauthorized

**Why Pre-Approval Matters:**

**Benefits:**

- Ensures budget available
- Confirms work necessity
- Reduces rejection risk
- Clear authorization trail
- Better workforce planning

**Risks of Working Without Pre-Approval:**

- Manager may reject overtime
- Employee worked but not compensated
- Budget may not be available
- Creates conflicts and dissatisfaction

**Company Policies Vary:**

- Some require strict pre-approval
- Others allow retroactive approval
- Emergency overtime usually exception
- Check your company's specific policy

:::tip
**Best Practice:**

- Always seek manager permission before working overtime
- For emergencies, inform manager ASAP
- Document approval (email/chat)
- Follow company pre-authorization process
  :::

</details>

<details>
<summary><strong>Is there a maximum overtime limit?</strong></summary>

**Yes**, most countries have legal overtime limits.

**Common Legal Limits:**

**Daily Limits:**

- Maximum 3-4 hours overtime per day
- Above regular 8-hour workday
- Total workday often capped at 12 hours

**Weekly Limits:**

- Maximum 12-14 hours overtime per week
- Example: 40 regular + 14 overtime = 54 hours max

**Monthly Limits:**

- Maximum 40-54 hours overtime per month
- Varies by country and industry

**Annual Limits:**

- Some countries cap yearly overtime
- Average overtime per month across year

**Special Circumstances:**

- Higher limits may apply for:
  - Critical operations
  - Emergency situations
  - Seasonal peaks
- Require special approval or permits

**System Support:**

**Warnings:**

- System may flag excessive overtime
- Alert HR when limits approached
- Require additional approval above limits

**Reporting:**

- Track overtime hours per employee
- Identify those approaching limits
- Support compliance monitoring

**Violations:**

- Exceeding limits may be illegal
- Subject to labor inspection penalties
- Employee health and safety risk

**Your Responsibility:**

**HR:**

- Monitor employee overtime hours
- Warn managers of approaching limits
- Reject overtime that exceeds legal limits
- Report violations to management

**Managers:**

- Track team overtime
- Distribute overtime fairly
- Avoid excessive overtime per person
- Consider hiring if consistent overtime needed

**Employees:**

- Know your maximum limits
- Decline overtime if approaching limit
- Report excessive overtime requirements

:::warning
**Compliance Critical:**

- Check your country's labor laws
- Know industry-specific limits
- Monitor overtime closely
- Excessive overtime may indicate understaffing - consider hiring
  :::

</details>

<details>
<summary><strong>How do I track total overtime by employee?</strong></summary>

**Multiple Tracking Methods:**

**Method 1: Filter by Employee**

1. Open Overtime module
2. Use employee filter/search
3. Select employee
4. View all their overtime records
5. See totals by status (Draft, Approved, etc.)

**Method 2: Employee Overtime Report**

1. Click "Export" or "Reports"
2. Select "Per Employee" report type
3. Choose employee
4. Select date range (month, quarter, year)
5. Generate report showing:
   - Total overtime hours
   - Hours by status
   - Total compensation
   - Breakdown by date
   - Multiplier analysis

**Method 3: Overtime Dashboard** (if available)

1. Access overtime dashboard
2. View summary by employee
3. See metrics:
   - Total hours this month
   - YTD (year-to-date) hours
   - Average weekly overtime
   - Trending patterns

**What You Can Track:**

**Hours:**

- Total overtime hours (all time, YTD, monthly)
- Approved hours (paid)
- Pending hours (awaiting approval)
- Rejected hours (not paid)

**Compensation:**

- Total overtime pay approved
- Pending compensation
- Average overtime pay per hour

**Patterns:**

- Overtime frequency
- Peak overtime periods
- Typical multipliers used
- Day of week breakdown

**Trends:**

- Increasing or decreasing
- Seasonal patterns
- Compared to team average
- Compared to previous year

**Use Cases:**

**Performance Review:**

- Assess dedication and availability
- Identify workload challenges
- Determine sustainability

**Workload Management:**

- Excessive overtime = potential understaffing
- Redistribute work or hire additional staff
- Improve processes to reduce overtime need

**Budget Analysis:**

- Forecast overtime costs
- Plan department budgets
- Identify cost-saving opportunities

**Compliance:**

- Ensure within legal limits
- Track for labor law compliance
- Prevent excessive overtime

:::tip
For detailed analysis, export to Excel and create pivot tables for custom views, charts, and trend analysis.
:::

</details>

<details>
<summary><strong>Can part-time employees claim overtime?</strong></summary>

**Yes**, but rules may differ from full-time employees.

**Overtime Definition for Part-Time:**

**Hours Beyond Schedule:**

- If part-time scheduled 4 hours/day
- Works 6 hours
- 2 hours may qualify as overtime

**Hours Beyond Part-Time Limit:**

- If works beyond part-time hours threshold
- May not automatically qualify as overtime
- Depends on contract and local law

**Eligibility Factors:**

**Employment Contract:**

- Review contract terms
- May specify overtime eligibility
- May have different rates than full-time

**Local Labor Laws:**

- Some countries protect part-time overtime rights equally
- Others have different thresholds
- May require working beyond full-time hours (e.g., >8 hours/day)

**Company Policy:**

- Internal policy may differ from minimum law
- Check HR policy handbook
- May be more generous than legal minimum

**Calculation Differences:**

**Hourly Rate:**

- Based on part-time salary and hours
- Example: Rp 2,000,000/month ÷ (20 days × 4 hours) = Rp 25,000/hour

**Multipliers:**

- May be same as full-time (1.5x, 2x, 3x)
- Or company may set different policy

**Approval Process:**

- Same workflow as full-time
- Attendance → Draft → Submit → Approve
- Same authorization required

**Best Practice:**

- Clarify overtime eligibility in employment contract
- Understand part-time overtime policy
- Track hours carefully
- Get pre-authorization when possible

:::info
Overtime eligibility for part-time varies by contract and local law. Check your specific employment agreement and local labor regulations.
:::

</details>

<details>
<summary><strong>How does overtime affect my taxes?</strong></summary>

**Overtime is Taxable Income**

**Tax Treatment:**

**Regular Income:**

- Overtime pay = regular income
- Added to monthly gross income
- Subject to income tax withholding

**Combined Taxation:**

```
Total Gross = Base Salary + Overtime Pay + Other Allowances
Tax Calculated = Tax on Total Gross Income
```

**Progressive Tax:**

- Higher income = higher tax bracket
- Overtime may push you into higher bracket
- More tax withheld that month

**Example:**

**Without Overtime:**

- Monthly Salary: Rp 10,000,000
- Tax Bracket: 15%
- Tax: Rp 1,500,000

**With Overtime:**

- Monthly Salary: Rp 10,000,000
- Overtime Pay: Rp 2,000,000
- Total Gross: Rp 12,000,000
- Tax Bracket: May move to 25%
- Tax: Rp 3,000,000 (higher)

**Other Deductions:**

**Social Security (BPJS):**

- Calculated on total income including overtime
- Higher income = higher contribution

**Pension Fund:**

- Based on gross income
- Overtime increases contribution

**Other Statutory:**

- All deductions calculated on gross including overtime

**Annual Impact:**

**Year-End Tax:**

- Overtime included in annual income
- May affect annual tax bracket
- Reflected in annual tax filing

**Tax Withholding:**

- Monthly tax withheld by employer
- Based on expected annual income
- Overtime fluctuations may cause over/under withholding
- Reconciled in annual filing

**Consult Tax Advisor:**

- For specific tax situation
- Tax-efficient income planning
- Understanding full tax impact

:::info
Overtime increases your taxable income and may result in higher tax brackets. Review your payslip to see exact tax impact, and consult with tax professional for planning.
:::

</details>

---
