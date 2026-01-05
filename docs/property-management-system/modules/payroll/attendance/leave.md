---
title: Leave
sidebar_position: 2
---

# Leave

Leave Request is the streamlined system for managing employee time-off requests and approvals, ensuring proper workforce planning and compliance with leave policies.

## Overview

On this page you can:

- Submit new leave requests with automatic balance checking
- View all leave requests (pending, approved, rejected, cancelled)
- Approve or reject team member leave requests
- Track leave request history and status
- Export leave reports for analysis and planning

**Key Capabilities:**

- Automatic leave day calculation excluding weekends and holidays
- Real-time leave balance validation before submission
- Multi-level approval workflow support
- Document attachment for medical certificates and supporting evidence
- Instant balance deduction upon approval
- Complete audit trail for all leave transactions
- Role-based access control (Employee, Manager, HR Admin)

:::info
**Note:** Leave balance management is done in **Employee Detail → Leave Balance** tab. This module focuses on leave request submission and approval workflow.
:::

<hr/>

## Key Features

### 📝 Smart Leave Request Submission

Intuitive leave request form with automatic validation and balance checking.

**Business Value:**

- Submit leave in under 2 minutes with guided form
- Automatic calculation of leave days excluding weekends/holidays
- Real-time balance check prevents over-requesting
- Upload supporting documents directly to request
- Reduce rejected requests by 70% with upfront validation
- Save 15+ minutes per request vs email-based process

**Perfect for:** Employees needing quick, hassle-free leave submission

---

### ✅ Streamlined Approval Workflow

One-click approval process with complete request details for informed decisions.

**Business Value:**

- Review and approve leave in 30 seconds
- See employee's remaining balance before deciding
- View team coverage and conflicting leave requests
- Bulk approve multiple requests efficiently
- Reduce approval bottlenecks by 80%
- Maintain clear audit trail for all decisions

**Perfect for:** Managers handling multiple team leave requests

---

### 💰 Automatic Balance Management

Leave balances update automatically without manual intervention.

**Business Value:**

- Zero manual balance calculations
- Immediate balance deduction upon approval
- Automatic restoration on cancellation
- Prevent over-allocation and negative balances
- Eliminate payroll errors from incorrect balance tracking
- Save 10+ hours monthly on balance reconciliation

**Perfect for:** HR teams managing leave balances across large organizations

---

### 📊 Real-Time Leave Visibility

Complete visibility into leave requests and team availability.

**Business Value:**

- See all pending requests at a glance
- Track team leave calendar for resource planning
- Identify leave patterns and potential coverage gaps
- Filter by status, department, or date range
- Support proactive workforce planning
- Reduce scheduling conflicts by 90%

**Perfect for:** Operations managers coordinating team schedules

---

### 📎 Document Management

Attach supporting documents directly to leave requests for compliance.

**Business Value:**

- Medical certificates attached to sick leave
- Centralized document storage per request
- Easy access during approval and audits
- Meet compliance documentation requirements
- Eliminate lost paperwork
- Support dispute resolution with evidence

**Perfect for:** Companies with strict sick leave documentation requirements

---

### 🔄 Flexible Request Management

Cancel or modify requests with proper approval and balance restoration.

**Business Value:**

- Employees can cancel before leave starts
- Balance automatically restored on cancellation
- Modification creates clear audit trail
- Support emergency plan changes
- Reduce no-show surprises
- Maintain accurate workforce forecasts

**Perfect for:** Dynamic work environments with changing schedules

---

### 📈 Comprehensive Reporting

Export leave data for analysis, planning, and compliance reporting.

**Business Value:**

- Generate leave utilization reports
- Department-wise leave pattern analysis
- Identify trends for resource planning
- Support budget forecasting
- Meet audit and compliance requirements
- Export in Excel, CSV, or PDF formats

**Perfect for:** HR teams needing leave analytics for strategic planning

---

### 🔔 Status Notifications

Automated status updates keep everyone informed throughout the process.

**Business Value:**

- Employees notified of approval/rejection instantly
- Managers alerted to new pending requests
- HR receives escalation notifications
- Reduce follow-up emails by 95%
- Faster decision-making cycles
- Improved employee satisfaction

**Perfect for:** Organizations prioritizing transparent communication

---

## Key Concepts

### Leave Request Fields

Each leave request contains comprehensive information:

| Field                 | Type      | Description                        | Auto-Calculated | Required    |
| --------------------- | --------- | ---------------------------------- | --------------- | ----------- |
| **Request ID**        | Text      | Unique identifier for request      | Yes             | Auto        |
| **Employee Name**     | Text      | Name of requester                  | No              | Auto-filled |
| **Employee ID**       | Text      | Employee identifier                | No              | Auto-filled |
| **Department**        | Text      | Employee's department              | No              | Auto-filled |
| **Leave Type**        | Dropdown  | Type of leave (Annual, Sick, etc.) | No              | Yes         |
| **Start Date**        | Date      | First day of leave                 | No              | Yes         |
| **End Date**          | Date      | Last day of leave                  | No              | Yes         |
| **Total Days**        | Number    | Business days on leave             | Yes             | Auto        |
| **Reason**            | Text Area | Explanation for leave              | No              | Yes         |
| **Attachment**        | File      | Supporting documents               | No              | Optional    |
| **Emergency Contact** | Text      | Contact number during leave        | No              | Optional    |
| **Remarks**           | Text Area | Additional notes                   | No              | Optional    |
| **Status**            | Badge     | Request status                     | Yes             | Auto        |
| **Applied Date**      | Date      | Submission date/time               | Yes             | Auto        |
| **Approver**          | Text      | Approving manager/HR               | No              | Auto        |
| **Approval Date**     | Date/Time | When approved/rejected             | Yes             | Auto        |

### Leave Request Status Workflow

Status progression through approval lifecycle:

| Status        | Description           | Employee Action                   | Manager Action            | System Action       |
| ------------- | --------------------- | --------------------------------- | ------------------------- | ------------------- |
| **Pending**   | Awaiting approval     | Wait for decision                 | Review and Approve/Reject | Notify approver     |
| **Approved**  | Leave authorized      | Proceed with leave                | None                      | Deduct from balance |
| **Rejected**  | Leave not approved    | Review reason, resubmit if needed | None                      | Notify employee     |
| **Cancelled** | Cancelled by employee | None                              | None                      | Restore balance     |

**Status Flow:**

```
Submit → Pending → Approved (balance deducted)
↘ Rejected (balance unchanged)

Pending or Approved → Cancel (balance restored)
```

### Leave Types

Standard leave categories with different policies:

| Leave Type              | Description                     | Paid/Unpaid | Typical Quota | Documentation Required |
| ----------------------- | ------------------------------- | ----------- | ------------- | ---------------------- |
| **Annual Leave**        | Yearly vacation entitlement     | Paid        | 12 days/year  | No                     |
| **Sick Leave**          | Medical-related absence         | Paid        | 12 days/year  | Yes (>2 days)          |
| **Emergency Leave**     | Urgent personal matters         | Paid/Unpaid | 3 days/year   | Situational            |
| **Maternity Leave**     | Childbirth and postnatal care   | Paid        | 90 days       | Birth certificate      |
| **Paternity Leave**     | For new fathers                 | Paid        | 2-5 days      | Birth certificate      |
| **Compassionate Leave** | Bereavement or family emergency | Paid        | 3-5 days      | Death certificate      |
| **Unpaid Leave**        | Leave without pay               | Unpaid      | As needed     | No                     |
| **Study Leave**         | Educational purposes            | Paid/Unpaid | Policy-based  | Acceptance letter      |
| **Sabbatical**          | Extended personal leave         | Unpaid      | Policy-based  | Application            |

**Configuration:** Leave types are customizable per company policy in Leave Type Configuration.

### Leave Day Calculation

System automatically calculates business days excluding scheduled off days:

**Formula:**

```
Total Leave Days = Count of Scheduled Work Days between Start Date and End Date (inclusive)
```

**Calculation Rules:**

**Weekends and Holidays:**

- Only counts days employee is scheduled to work
- Excludes weekends (Saturday, Sunday) if scheduled off
- Excludes public holidays if scheduled off
- Based on employee's assigned work schedule

**Example 1: Leave Friday to Monday**

- Friday (scheduled work day) = 1 day
- Saturday (weekend - scheduled off) = 0 days
- Sunday (weekend - scheduled off) = 0 days
- Monday (scheduled work day) = 1 day
- **Total: 2 leave days**

**Example 2: Leave Thursday to Tuesday with Monday holiday**

- Thursday (work day) = 1 day
- Friday (work day) = 1 day
- Saturday (weekend off) = 0 days
- Sunday (weekend off) = 0 days
- Monday (public holiday off) = 0 days
- Tuesday (work day) = 1 day
- **Total: 3 leave days**

### Leave Balance Management

Leave balances managed separately in Employee Detail module:

**Balance Formula:**

```
Available Balance = Total Quota - Used Days - Pending Request Days

```

**Balance Components:**

| Component             | Description                     | Updated When                 |
| --------------------- | ------------------------------- | ---------------------------- |
| **Total Quota**       | Annual leave entitlement        | Set by HR in Employee Detail |
| **Used Days**         | Leave already taken             | After leave date passes      |
| **Pending Days**      | Leave awaiting approval         | When request submitted       |
| **Available Balance** | Days still available to request | Calculated real-time         |

**Example:**

- Annual Leave Quota: 12 days
- Used: 5 days (already taken)
- Pending: 2 days (awaiting approval)
- Available: 12 - 5 - 2 = **5 days**

**Balance Updates:**

- **Submission:** Pending days increase, available decreases
- **Approval:** Pending becomes used (on leave date)
- **Rejection:** Pending restored to available
- **Cancellation:** Pending/used restored to available

### Permission Levels

Access control by role:

| Role                   | Submit Own | View Own | View Team | View All | Approve           | Adjust Balance |
| ---------------------- | ---------- | -------- | --------- | -------- | ----------------- | -------------- |
| **Employee**           | ✅         | ✅       | ❌        | ❌       | ❌                | ❌             |
| **Supervisor**         | ✅         | ✅       | ✅        | ❌       | ✅ Direct Reports | ❌             |
| **Department Manager** | ✅         | ✅       | ✅        | ❌       | ✅ Department     | ❌             |
| **HR Admin**           | ✅         | ✅       | ✅        | ✅       | ✅ All            | ✅             |
| **HR Manager**         | ✅         | ✅       | ✅        | ✅       | ✅ All            | ✅             |

---

## Configuration

Before adding leave request, configure these master data settings that define leave.

1. **[Leave Type](../../configuration/config-payroll/leave-type.md)**

---

## Best Practices

### For Employees

- **Plan Ahead**: Submit leave requests 3-7 days in advance (except emergencies)
- **Check Balance**: Verify available balance before submitting
- **Provide Details**: Write clear, specific reasons in request
- **Attach Documents**: Include medical certificates or supporting evidence
- **Coordinate Team**: Inform team members before submitting leave
- **Monitor Status**: Check request status regularly for approval updates

### For Managers/Approvers

- **Review Promptly**: Approve or reject within 1-2 business days
- **Check Coverage**: Ensure adequate team coverage before approving
- **Verify Balance**: Confirm employee has sufficient balance
- **Review Documents**: Check attached medical certificates or evidence
- **Communicate**: Provide clear rejection reasons if denying
- **Track Patterns**: Monitor team leave patterns for planning

### For HR Administrators

- **Set Clear Policies**: Define leave types and quotas clearly
- **Regular Audits**: Review leave utilization monthly
- **Balance Management**: Ensure all employees have correct balances
- **Update Types**: Review and update leave types annually
- **Compliance**: Ensure configurations meet labor law requirements
- **Documentation**: Maintain records for audit purposes

### General Guidelines

- **Respect Policy**: Follow company minimum notice periods
- **Emergency Protocol**: Establish clear process for urgent leave
- **Backup Planning**: Ensure knowledge transfer before extended leave
- **Calendar Sync**: Maintain leave calendar for team visibility
- **Fair Distribution**: Approve fairly across team members
- **Peak Periods**: Limit approvals during busy seasons

---

## How to Use

<details>
<summary><strong>How to Submit Leave Request</strong></summary>

**Steps:**

1. **Click "Insert" or "+ New Leave Request"** button

2. **Select Leave Type:**

   - Choose from dropdown (Annual, Sick, Emergency, etc.)
   - System shows your available balance for selected type

3. **Set Leave Dates:**

   - **Start Date**: Click calendar, select first day of leave
   - **End Date**: Click calendar, select last day of leave
   - **Total Days**: Automatically calculated (excludes weekends/holidays)

4. **Enter Reason:**

   - Provide clear, specific explanation
   - Examples:
     - "Family vacation to Bali"
     - "Medical check-up at hospital"
     - "Attending wedding ceremony"

5. **Attach Documents** (if required):

   - Click "Choose File" or drag-drop
   - Attach medical certificate for sick leave
   - Attach supporting documents as needed
   - Formats: PDF, JPG, PNG

6. **Add Emergency Contact** (optional but recommended):

   - Enter phone number reachable during leave
   - For urgent work matters

7. **Add Remarks** (optional):

   - Any additional information for approver

8. **Review Summary:**

   - Verify dates correct
   - Check total days matches expectation
   - Confirm sufficient balance available

9. **Click "Submit"**

**Result:**

- Status: Pending Approval
- Notification sent to approver
- Balance temporarily reserved (shows in "Pending")
- You'll receive notification when approved/rejected

:::tip
**Best Practices:**

- Submit 3+ days in advance (except emergencies)
- Verify team calendar for conflicts
- Inform team before submitting
- Attach documents upfront to avoid delays
  :::

</details>

<details>
<summary><strong>How to Approve Leave Request</strong></summary>

**For Managers/Approvers:**

**Steps:**

1. **Navigate to Pending Requests:**

   - Filter by "Status: Pending"
   - Or use "Pending Approval" tab
   - See notification badge for new requests

2. **Click on request** to view details

3. **Review Request Information:**

   - Employee name and department
   - Leave type and dates
   - Total days requested
   - Reason provided
   - Current leave balance
   - Attached documents (if any)

4. **Check Considerations:**

   - ✅ Employee has sufficient balance
   - ✅ Dates don't conflict with critical deadlines
   - ✅ Team coverage adequate
   - ✅ No overlapping leave in same team
   - ✅ Required documents attached (sick leave >2 days)

5. **Make Decision:**

   **To Approve:**

   - Click **"Approve"** button
   - Add approval remarks if needed (optional)
   - Click **"Confirm"**

   **To Reject:**

   - Click **"Reject"** button
   - Enter rejection reason (required):
     - "Insufficient team coverage during this period"
     - "Critical project deadline on requested dates"
     - "Please submit with medical certificate"
   - Click **"Confirm Rejection"**

6. **Verify Status Update:**
   - Status changes to Approved or Rejected
   - Employee receives notification
   - Balance updated accordingly

**Result:**

**If Approved:**

- Employee balance immediately deducted
- Leave marked on team calendar
- Attendance system updated
- Employee can proceed with leave

**If Rejected:**

- Balance restored to available
- Employee notified with reason
- Employee can resubmit with adjustments

:::warning
**Important Considerations:**

- Approved leave deducts balance immediately
- Ensure critical tasks covered before approving
- Be consistent with team policies
- Respond within 1-2 business days
  :::

</details>

<details>
<summary><strong>How to Cancel Leave Request</strong></summary>

**For Employees:**

**Cancellable Status:**

- ✅ Pending (before approval)
- ✅ Approved (if before leave start date)
- ❌ Rejected (cannot cancel)
- ❌ Already started or completed leave (contact HR)

**Steps:**

1. **Find your leave request:**

   - Filter "My Requests" or your name
   - Locate request to cancel

2. **Check cancellation eligibility:**

   - Status must be Pending or Approved
   - Must be before leave start date
   - Check company policy for minimum notice

3. **Click "Cancel" button** on the request

4. **Enter cancellation reason:**

   - "Plans changed - no longer need leave"
   - "Emergency resolved"
   - "Rescheduling to different dates"

5. **Click "Confirm Cancellation"**

**Result:**

- Status changes to "Cancelled"
- Leave balance automatically restored
- Approver and HR notified
- Calendar updated (leave removed)

**To Request Different Dates:**

1. Cancel existing request
2. Submit new request with updated dates

:::info
**Cancellation Policy:**

- Pending requests: Cancel anytime
- Approved requests: Usually must cancel 24-48 hours before start
- Some companies may restrict frequent cancellations
- Check your company's specific policy
  :::

</details>

<details>
<summary><strong>How to View Leave History</strong></summary>

**Steps:**

1. **View Your Own History:**

   - Open Leave Request page
   - Filter by your name or use "My Requests" tab
   - See all your past and current requests

2. **View Team History** (Managers):

   - Filter by department or team
   - Select date range
   - View all team members' leave

3. **Filter Options:**

   - **Status**: All, Pending, Approved, Rejected, Cancelled
   - **Leave Type**: Annual, Sick, etc.
   - **Date Range**: Last month, quarter, year, custom
   - **Employee**: Specific employee (if permitted)

4. **View Details:**

   - Click on any request to see full details
   - See approval/rejection history
   - View attached documents
   - Check remarks and notes

5. **Export History** (if needed):
   - Apply filters
   - Click "Export"
   - Choose format (Excel, CSV, PDF)
   - Download file

**Information Visible:**

- Request dates and duration
- Leave type used
- Approval status and date
- Approver name
- Balance at time of request
- Documents attached

</details>

<details>
<summary><strong>How to Check Leave Balance</strong></summary>

**Method 1: During Leave Request Submission**

1. Click "New Leave Request"
2. Select Leave Type
3. System displays current available balance for that type
4. Shows: Total, Used, Pending, Available

**Method 2: Employee Detail Page**

1. Navigate to **Employee Management** or **My Profile**
2. Click **Leave Balance** tab
3. View detailed balance for all leave types:
   - Total Quota
   - Used Days
   - Pending Days
   - Available Balance
   - Expiry Date (if applicable)

**Balance Breakdown:**

| Leave Type | Total | Used | Pending | Available |
| ---------- | ----- | ---- | ------- | --------- |
| Annual     | 12    | 5    | 2       | 5         |
| Sick       | 12    | 3    | 0       | 9         |
| Emergency  | 3     | 1    | 0       | 2         |

**Understanding Balance:**

- **Total**: Annual quota assigned
- **Used**: Already taken leave days
- **Pending**: Days in pending approval requests
- **Available**: Days you can still request

:::info
**Balance Updates:**

- Real-time calculation
- Updates instantly when request submitted/approved/rejected
- Only HR can adjust balances in Employee Detail module
- Contact HR if balance appears incorrect
  :::

</details>

<details>
<summary><strong>How to Handle Rejected Leave</strong></summary>

**When Leave is Rejected:**

1. **Receive Notification:**

   - Email or system notification
   - Contains rejection reason

2. **Review Rejection Reason:**

   - Open request details
   - Read approver's rejection reason carefully
   - Understand specific concerns

3. **Take Appropriate Action:**

   **Common Rejection Reasons and Solutions:**

   **"Insufficient team coverage"**

   - Choose alternative dates
   - Coordinate with team for coverage
   - Resubmit with new dates

   **"Missing documentation"**

   - Attach required documents
   - Resubmit same request with attachments
   - Or contact approver for clarification

   **"Critical deadline conflict"**

   - Reschedule leave to after deadline
   - Discuss priority with manager
   - Submit adjusted request

   **"Insufficient leave balance"**

   - Check your balance in Employee Detail
   - Reduce requested days
   - Or request unpaid leave instead

4. **Resubmit if Appropriate:**

   - Address the rejection reason
   - Submit new request with corrections
   - Add remarks explaining changes

5. **Escalate if Needed:**
   - Discuss with approver directly
   - Contact HR if rejection seems unfair
   - Follow company grievance procedure

**Result:** Rejected requests don't affect balance - you can resubmit with adjustments.

:::tip
**Avoid Future Rejections:**

- Submit requests early (not last minute)
- Check team calendar before requesting
- Coordinate with team members
- Attach required documents upfront
- Avoid peak business periods
  :::

</details>

<details>
<summary><strong>How to Attach Supporting Documents</strong></summary>

**When Documents Required:**

- Sick leave >2 days: Medical certificate
- Maternity/Paternity: Birth certificate
- Compassionate: Death certificate
- Study leave: Acceptance letter

**Steps:**

1. **During Request Submission:**

   - Fill in leave details
   - Scroll to "Attachment" section

2. **Add Document:**

   - Click "Choose File" or "Browse"
   - Or drag and drop file into upload area
   - Select file from your device

3. **Supported Formats:**

   - PDF (recommended)
   - Images: JPG, JPEG, PNG
   - Documents: DOC, DOCX
   - Maximum size: 5 MB per file

4. **Multiple Documents:**

   - Attach multiple files if needed
   - Each document uploaded separately
   - Or combine into single PDF

5. **Verify Upload:**

   - File name appears after upload
   - Check file size within limit
   - Ensure correct document selected

6. **Submit Request** with attached documents

**For Existing Requests:**

1. Open pending request
2. Click "Edit" (if allowed)
3. Add attachment
4. Save changes

**Approver View:**

- Approvers can download and view attachments
- Documents remain with request permanently
- Used for compliance and audit purposes

:::warning
**Document Quality:**

- Ensure documents are clear and readable
- Use high-resolution scans or photos
- Include all required pages
- Medical certificates must show: Date, Doctor name/stamp, Diagnosis/fitness
  :::

</details>

---

## FAQ

<details>
<summary><strong>How far in advance should I submit leave?</strong></summary>

**Recommended Notice Periods:**

| Leave Type                   | Minimum Notice | Recommended         |
| ---------------------------- | -------------- | ------------------- |
| **Annual Leave**             | 3-7 days       | 2-4 weeks           |
| **Short Leave** (1-2 days)   | 3 days         | 1 week              |
| **Extended Leave** (>5 days) | 2 weeks        | 1 month             |
| **Emergency Leave**          | Same day       | As soon as possible |
| **Sick Leave**               | Same day       | ASAP on day 1       |

**Best Practice:** Submit as early as possible to allow:

- Manager to arrange coverage
- Team to plan workload distribution
- Higher chance of approval

**Emergency Exceptions:** Genuine emergencies (sudden illness, family emergency) can be submitted same day or next working day.

</details>

<details>
<summary><strong>How do I check my leave balance?</strong></summary>

**Two Ways to Check:**

**Option 1: During Request Submission**

1. Click "New Leave Request"
2. Select Leave Type
3. Available balance displayed automatically

**Option 2: Employee Detail Page**

1. Go to **Employee Detail** or **My Profile**
2. Click **Leave Balance** tab
3. View complete balance breakdown for all leave types

**Balance Shows:**

- Total Quota (annual allocation)
- Used Days (already taken)
- Pending Days (awaiting approval)
- Available Balance (can still request)

**Example:**

- Annual Leave Quota: 12 days
- Used: 5 days
- Pending: 2 days
- **Available: 5 days**

:::info
Contact HR if your balance appears incorrect. Only HR can adjust balances in Employee Detail module.
:::

</details>

<details>
<summary><strong>What happens to my balance when request is approved?</strong></summary>

**Balance Update Process:**

**When Submitted (Pending):**

- Requested days move to "Pending"
- Available balance decreases
- Example: 10 available → request 2 days → 8 available, 2 pending

**When Approved:**

- Pending days move to "Used" (on leave start date)
- Balance remains reduced
- Example: 8 available, 2 pending → 8 available, 2 used

**If Rejected:**

- Pending days restored to "Available"
- Example: 8 available, 2 pending → 10 available, 0 pending

**If Cancelled:**

- Pending/Used days restored to "Available"
- Immediate restoration upon cancellation

**Real-Time Updates:**

- All balance changes automatic
- No manual calculation needed
- Updates visible immediately in system

</details>

<details>
<summary><strong>Can I cancel approved leave?</strong></summary>

**Yes, but with conditions:**

**Cancellation Rules:**

- ✅ **Before Leave Starts:** Usually allowed (check company policy)
- ⏰ **Minimum Notice:** Often 24-48 hours before start date
- ❌ **After Leave Started:** Contact HR (system may not allow)
- ❌ **Already Completed:** Cannot cancel (contact HR for adjustments)

**How to Cancel:**

1. Find approved request
2. Click "Cancel" button
3. Enter cancellation reason
4. Confirm cancellation

**What Happens:**

- Status changes to "Cancelled"
- Balance automatically restored
- Approver and HR notified
- Leave removed from calendar

**Company Policy:**

- Some companies restrict frequent cancellations
- May require manager approval to cancel approved leave
- Check specific policy with HR

**To Reschedule:** Cancel old request, submit new request with different dates.

</details>

<details>
<summary><strong>What if I run out of leave balance?</strong></summary>

**Options When Balance is Zero:**

**1. Request Unpaid Leave**

- Select "Unpaid Leave" type
- No balance deduction
- No compensation during leave
- Requires manager approval

**2. Advance Leave** (if company allows)

- Request advance from next year's quota
- Requires manager and HR approval
- Deducted from next year's allocation

**3. Alternative Arrangements**

- Work from home (if applicable)
- Flex time or compensatory time off
- Discuss with manager

**4. Emergency Situations**

- Sick leave: May allow negative balance with medical proof
- Family emergency: Compassionate leave exceptions
- Contact HR for urgent cases

**Prevention:**

- Monitor balance regularly
- Plan leave distribution throughout year
- Avoid using all balance early in year

</details>

<details>
<summary><strong>Do I need documents for all leave types?</strong></summary>

**Document Requirements by Leave Type:**

**Always Required:**

- ✅ **Sick Leave >2 days:** Medical certificate mandatory
- ✅ **Maternity Leave:** Birth certificate or medical proof
- ✅ **Paternity Leave:** Birth certificate
- ✅ **Compassionate Leave:** Death certificate or proof
- ✅ **Study Leave:** Acceptance letter or course details

**Usually Not Required:**

- ❌ **Annual Leave:** No documents needed
- ❌ **Short Sick Leave** (1-2 days): Optional
- ❌ **Emergency Leave:** Depends on situation

**Conditional:**

- **Sick Leave 1-2 days:** Optional, but recommended
- **Emergency Leave:** Supporting evidence if available

**Medical Certificate Must Include:**

- Date of examination
- Doctor's name and stamp
- Medical facility letterhead
- Diagnosis or fitness statement (brief)
- Recommended rest period

**How to Attach:**

- Upload during request submission
- Supported: PDF, JPG, PNG
- Maximum size: 5 MB

:::tip
When in doubt, attach documents. Better to provide too much evidence than too little, especially for compliance.
:::

</details>

<details>
<summary><strong>Can I take leave during probation?</strong></summary>

**Depends on Company Policy:**

**Common Scenarios:**

**Strict Policy:**

- No annual leave during probation (3-6 months)
- Emergency and sick leave allowed
- Unpaid leave may be permitted

**Flexible Policy:**

- Prorated annual leave available
- Limited days during probation (e.g., 3-5 days)
- Full quota after confirmation

**Standard Practice:**

- ✅ **Sick Leave:** Almost always allowed (with medical certificate)
- ✅ **Emergency Leave:** Usually permitted for genuine emergencies
- ⚠️ **Annual Leave:** Restricted or requires special approval
- ❌ **Extended Leave:** Generally not allowed

**Check Your Entitlement:**

1. Review employment contract
2. Check company HR policy handbook
3. Ask HR about probation leave rules
4. View your balance in Employee Detail (shows if available)

**Recommendation:** Avoid taking leave during probation unless absolutely necessary (medical or emergency).

</details>

<details>
<summary><strong>What if my leave request is rejected?</strong></summary>

**When Rejected:**

**Step 1: Read Rejection Reason**

- Approver must provide specific reason
- Understand the concern

**Step 2: Common Reasons and Solutions**

**"Insufficient team coverage"**

- ✅ Solution: Choose different dates
- ✅ Coordinate with team for coverage
- ✅ Resubmit with adjusted dates

**"Missing documentation"**

- ✅ Solution: Attach required documents
- ✅ Resubmit with medical certificate or evidence

**"Critical project deadline"**

- ✅ Solution: Reschedule after deadline
- ✅ Discuss project timeline with manager

**"Insufficient balance"**

- ✅ Solution: Check balance in Employee Detail
- ✅ Reduce requested days or request unpaid leave

**Step 3: Take Action**

- Discuss with manager if reason unclear
- Submit new request addressing concerns
- Add remarks explaining adjustments

**Step 4: Escalate if Needed**

- If rejection seems unfair or against policy
- Contact HR for review
- Follow company grievance procedure

**Your Balance:** Rejected requests don't affect balance - it's immediately restored to available.

</details>

<details>
<summary><strong>Do weekends and holidays count as leave days?</strong></summary>

**No - Only Scheduled Work Days Count**

**Calculation Rule:**

```
Leave Days = Count of Days You Are Scheduled to Work
```

**System automatically excludes:**

- Weekends (if scheduled off)
- Public holidays (if scheduled off)
- Rest days per your work schedule

**Example 1: Friday to Monday Leave**

- Friday (work day) = 1 day ✅
- Saturday (weekend off) = 0 days ⚪
- Sunday (weekend off) = 0 days ⚪
- Monday (work day) = 1 day ✅
- **Total: 2 leave days**

**Example 2: Thursday to Tuesday with Monday Holiday**

- Thursday (work day) = 1 day ✅
- Friday (work day) = 1 day ✅
- Saturday (weekend) = 0 days ⚪
- Sunday (weekend) = 0 days ⚪
- Monday (public holiday) = 0 days ⚪
- Tuesday (work day) = 1 day ✅
- **Total: 3 leave days**

**For Shift Workers:**

- System uses YOUR work schedule
- If scheduled to work on weekend/holiday = counts as leave day
- If scheduled off on weekday = doesn't count

**Verification:** System shows calculated total days before submission. Verify it matches your expectation.

</details>

<details>
<summary><strong>What happens to unused annual leave?</strong></summary>

**Depends on Company Policy (common options):**

**1. Carry Forward**

- Unused days carried to next year
- Often with maximum limit (e.g., carry max 5 days)
- Must be used within specified period (e.g., first quarter)

**2. Use It or Lose It**

- Must use within calendar/fiscal year
- Unused days forfeited at year-end
- Encourages regular leave-taking

**3. Cash Out/Encashment**

- Unused leave paid out at year-end
- Usually at basic salary rate
- May have maximum encashment limit

**4. Partial Carry Forward**

- Some days carried forward
- Remaining days forfeited or encashed
- Example: Carry forward max 5 days, rest forfeited

**Best Practices:**

- Plan leave distribution throughout year
- Don't wait until year-end
- Monitor balance quarterly
- Use leave for rest and wellness

**Check Your Policy:**

- Review HR policy handbook
- Ask HR about carry-forward rules
- Plan leave accordingly
- Some leave types (sick, emergency) typically don't carry forward

</details>

<details>
<summary><strong>How long does leave approval take?</strong></summary>

**Typical Approval Timeline:**

| Leave Type                    | Expected Timeline    | Priority                 |
| ----------------------------- | -------------------- | ------------------------ |
| **Emergency Leave**           | Same day to 24 hours | Urgent                   |
| **Sick Leave**                | 24-48 hours          | High                     |
| **Annual Leave** (1-3 days)   | 1-3 business days    | Normal                   |
| **Annual Leave** (>5 days)    | 3-5 business days    | Normal                   |
| **Extended Leave** (>10 days) | 5-7 business days    | May need higher approval |

**Factors Affecting Timeline:**

- Manager's availability (if on leave, may be delayed)
- Leave duration (longer leave = more review time)
- Company size (larger org = more approval levels)
- Time of year (busy season = longer review)

**If Delayed Too Long:**

**After 3 Business Days:**

1. Check if approver is available (not on leave)
2. Send polite follow-up to approver
3. Check approval status in system

**After 5 Business Days:**

1. Contact approver directly (email/call)
2. If approver unavailable, contact their backup/delegate
3. Contact HR for assistance

**Urgent Cases:**

- Mention urgency in request remarks
- Contact approver immediately after submission
- For emergencies, call approver directly

**Prevention:** Submit well in advance to avoid last-minute stress.

</details>

<details>
<summary><strong>What is the difference between Leave and Absence?</strong></summary>

**Critical Difference:**

**Leave (Authorized Absence):**

- ✅ Leave request submitted and **approved**
- ✅ Recorded as "Leave" in attendance
- ✅ Balance deducted from quota
- ✅ Paid (for paid leave types) or unpaid (for unpaid types)
- ✅ No disciplinary action
- ✅ Planned and documented

**Absence (Unauthorized Absence):**

- ❌ No leave request or **not approved**
- ❌ Marked as "Absent" in attendance
- ❌ No balance deduction (you keep balance)
- ❌ **Not paid** for absent days
- ❌ May trigger disciplinary action
- ❌ Considered no-show

**Attendance Record Impact:**

**Scenario 1: Approved Leave**

- Attendance: Status = "Leave" (Blue badge)
- Payroll: Paid (if paid leave type)
- HR Record: Authorized absence

**Scenario 2: No Leave Request**

- Attendance: Status = "Absent" (Red badge)
- Payroll: No pay for absent day
- HR Record: Unauthorized absence, may affect performance review

**Always Submit Leave Request:**

- Even for sudden illness (submit same day)
- Even for emergencies (submit ASAP)
- Prevents being marked absent
- Maintains good employment record

**If Marked Absent by Mistake:**

- Contact HR immediately
- Submit late leave request with explanation
- Provide supporting evidence
- HR can correct attendance record

</details>

<details>
<summary><strong>Can my manager see my leave reason?</strong></summary>

**Yes - Approvers See Full Details**

**What Manager/Approver Sees:**

- ✅ Leave dates and duration
- ✅ Leave type selected
- ✅ Reason you provided
- ✅ Attached documents (medical certificates, etc.)
- ✅ Your current leave balance
- ✅ Emergency contact information

**Why Necessary:**

- Manager needs full context to make informed decision
- Ensures legitimate leave requests
- Helps arrange team coverage appropriately
- Supports compliance with leave policies

**Privacy Considerations:**

- Only approvers and HR see details
- Other employees cannot see your reason
- System maintains confidentiality through access control
- Data protected per privacy policies

**For Sensitive Medical Issues:**

- You can provide general reason in system
- Attach detailed medical certificate
- Submit additional details to HR directly (offline)
- Example reason: "Medical treatment" (certificate shows full details)

**What Approvers Should NOT Share:**

- Personal medical information
- Private family matters
- Sensitive details in your reason

**Your Rights:**

- Expect confidentiality from approver
- Report privacy violations to HR
- Medical information protected by privacy laws

**Recommendation:** Provide honest, appropriate-level details. You don't need to disclose overly personal information.

</details>

<details>
<summary><strong>Can I request leave for multiple non-consecutive days?</strong></summary>

**System typically requires separate requests for non-consecutive periods.**

**Example Scenario:**
Want leave on: Monday (Feb 5), Wednesday (Feb 7), Friday (Feb 9)
Working: Tuesday, Thursday

**Solution: Submit Separate Requests**

1. Request #1: Monday, Feb 5 (1 day)
2. Request #2: Wednesday, Feb 7 (1 day)
3. Request #3: Friday, Feb 9 (1 day)

**Why Separate Requests:**

- System calculates continuous date ranges
- Non-consecutive days need individual processing
- Each can be approved/rejected independently
- Clearer for attendance tracking

**Alternative (if system supports):**

- Some systems allow multiple date selection
- Check if your system has "Add Date Range" option
- Can submit multiple periods in single request

**For Frequent Single Days:**

- Consider requesting full week if appropriate
- Reduces administrative overhead
- Easier for team coverage planning

**Best Practice:**

- Submit all related requests at same time
- Add note in remarks: "Related to requests [ID1], [ID2]"
- Helps approver see full picture

</details>

<details>
<summary><strong>Who can adjust my leave balance?</strong></summary>

**Only HR Can Adjust Balances**

**Authorized Roles:**

- ✅ **HR Admin:** Full balance adjustment rights
- ✅ **HR Manager:** Full balance adjustment rights
- ❌ **Department Manager:** Cannot adjust balances
- ❌ **Supervisor:** Cannot adjust balances
- ❌ **Employee:** Cannot adjust own balance

**Where Balances Are Managed:**

- **Employee Detail** page → **Leave Balance** tab
- NOT in Leave Request module
- Centralized balance control for data integrity

**Types of Adjustments:**

**Initial Allocation:**

- Setting annual quota for new employees
- Example: Set 12 days Annual Leave quota

**Balance Correction:**

- Fixing incorrect balances
- Example: Correct error from previous year

**Special Allocation:**

- Additional leave grants (bonus, loyalty, etc.)
- Example: Add 2 days bonus annual leave

**Carry Forward:**

- Rolling unused leave to new year
- Example: Carry forward 5 unused days

**Manual Deduction:**

- Adjusting for errors or special cases
- Example: Deduct for unpaid leave taken

**If Your Balance Is Incorrect:**

1. **Check in Employee Detail:**

   - Go to your employee detail
   - Click Leave Balance tab
   - Verify all leave types

2. **Contact HR:**

   - Email or submit request to HR
   - Provide details:
     - What's incorrect
     - What it should be
     - Supporting evidence (if any)

3. **HR Will:**
   - Investigate the discrepancy
   - Make adjustment if valid
   - Document the change
   - Notify you when corrected

**Automatic vs Manual:**

- ✅ **Automatic:** Request approval/rejection/cancellation
- ⚠️ **Manual (HR only):** Initial allocation, corrections, special grants

</details>

---
