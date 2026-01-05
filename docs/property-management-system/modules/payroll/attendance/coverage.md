---
title: Coverage
sidebar_position: 5
---

# Coverage

Coverage is the real-time staffing visibility tool that monitors shift coverage levels, identifies gaps, and ensures operational requirements are met across all departments and shifts.

## Overview

On this page you can:

- Monitor real-time staffing levels for each shift
- Identify understaffed, optimal, or overstaffed shifts
- Track attendance impact on coverage (leave, absent, late)
- Filter shifts by coverage status (Fully Covered, At Risk, Uncovered)
- Analyze coverage gaps and trends
- Export coverage reports for critical shifts

**Key Capabilities:**

- Real-time coverage calculation based on actual attendance
- Color-coded status badges for instant gap identification
- Min/Opt/Max staffing thresholds with gap analysis
- Attendance breakdown (Present, Late, Overtime, Leave, Absent)
- Coverage percentage calculation for performance tracking
- Date range filtering for historical and future coverage
- Single-shift export for detailed reporting
- Status-based filtering with counts

:::info
Coverage is calculated based on **Total Working Count** (Present + Late + Overtime), not Scheduled Count. Employees on leave or absent reduce actual coverage even if scheduled.
:::

<hr/>

## Key Features

### 📊 Real-Time Coverage Dashboard

Instant visibility into staffing levels across all shifts and departments.

**Business Value:**

- Monitor all shifts at a glance with color-coded status
- Identify critical gaps within seconds
- Coverage % instantly shows staffing level vs optimal
- Filter by status to focus on problem shifts
- Reduce time spent checking staffing from hours to minutes
- Proactive gap management before shift starts
- 95% reduction in last-minute scrambling for coverage

**Perfect for:** Operations managers needing real-time oversight of shift coverage across multiple locations

---

### 🚨 Smart Status Classification

Automatic categorization of shifts into four coverage levels.

**Business Value:**

- **Fully Covered** (Green): Optimal or above, no action needed
- **Partial Covered** (Blue): Meets minimum but below optimal, monitor
- **At Risk** (Yellow): Below minimum, requires immediate attention
- **Uncovered** (Red): Zero coverage, critical emergency
- Prioritize actions by urgency (Red → Yellow → Blue → Green)
- Visual badges eliminate data interpretation time
- Clear escalation thresholds for decision-making

**Perfect for:** Supervisors managing dynamic shift operations with frequent attendance changes

---

### 📈 Gap Analysis with Min/Opt Thresholds

Precise staffing variance tracking against minimum and optimal requirements.

**Business Value:**

- Min Gap: Shows critical understaffing below safety/legal minimums
- Opt Gap: Shows deviation from ideal operational efficiency
- Negative gaps indicate need to assign more staff
- Positive gaps reveal overstaffing and cost inefficiencies
- Support data-driven staffing decisions
- Identify patterns of chronic under/overstaffing
- Balance operational needs with labor costs

**Perfect for:** HR and operations teams optimizing staffing levels while controlling labor costs

---

### 👥 Attendance Impact Visibility

Detailed breakdown of how attendance affects coverage.

**Business Value:**

- See exactly why coverage is reduced (leave, absent, late)
- Distinguish planned absences (leave) from unexpected (absent)
- Track Total Working vs Total Not Working
- Identify attendance patterns affecting coverage
- Address root causes of coverage gaps
- Support attendance management initiatives
- Improve workforce reliability

**Perfect for:** Department managers identifying attendance issues impacting operations

---

### 🔍 Advanced Filtering and Search

Powerful tools to focus on relevant shifts and time periods.

**Business Value:**

- Filter by coverage status with counts (At Risk: 5, Uncovered: 2)
- Date range selection for historical trends or future planning
- Search by shift, department, creator for targeted analysis
- Focus attention on high-priority gaps
- Reduce information overload
- Quick access to specific shift coverage data
- Efficient workflow for large operations

**Perfect for:** Multi-location organizations with hundreds of shifts to monitor

---

### 📤 Coverage Report Export

Generate detailed reports for critical shift analysis and documentation.

**Business Value:**

- Export single-shift coverage for management review
- Document coverage issues for compliance or audits
- Share shift staffing details with stakeholders
- Support incident investigations
- Maintain coverage history records
- Enable offline analysis and presentations
- Meet regulatory reporting requirements

**Perfect for:** HR managers needing documented evidence of staffing compliance

---

### 🎯 Scheduled vs Working Count

Clear distinction between assigned staff and actual working staff.

**Business Value:**

- Scheduled: Total assigned (may include leave/absent)
- Total Working: Actual staff working (Present + Late + Overtime)
- Understand true operational capacity
- Avoid false sense of adequate coverage
- Plan contingencies for scheduled-but-absent staff
- Accurate capacity planning
- Realistic service level expectations

**Perfect for:** Service industry operations where actual coverage determines customer experience

---

## Key Concepts

### Coverage Metrics

Complete understanding of staffing metrics:

| Metric                | Description                 | Calculation                       | Purpose                         |
| --------------------- | --------------------------- | --------------------------------- | ------------------------------- |
| **Min**               | Minimum required staff      | Configured in Shift Coverage      | Legal/safety threshold          |
| **Opt**               | Optimal staff level         | Configured in Shift Coverage      | Target for efficient operations |
| **Max**               | Maximum allowed staff       | Configured in Shift Coverage      | Cost control threshold          |
| **Scheduled**         | Total assigned employees    | Count of schedule assignments     | Planning baseline               |
| **Present**           | Employees on time           | From attendance (Present status)  | Core working staff              |
| **Late**              | Employees arrived late      | From attendance (Late status)     | Working but tardy               |
| **Overtime**          | Employees working OT        | From attendance (Overtime status) | Extended hours staff            |
| **Leave**             | Employees on approved leave | From attendance (Leave status)    | Planned absences                |
| **Absent**            | Employees not present       | From attendance (Absent status)   | Unplanned absences              |
| **Total Working**     | Actual working staff        | Present + Late + Overtime         | Real coverage count             |
| **Total Not Working** | Non-working staff           | Leave + Absent                    | Staffing reductions             |
| **Min Gap**           | Variance from minimum       | Scheduled - Min                   | Critical shortage indicator     |
| **Opt Gap**           | Variance from optimal       | Scheduled - Opt                   | Efficiency indicator            |
| **Coverage %**        | Staffing percentage         | (Total Working / Opt) × 100%      | Performance metric              |

### Coverage Status Levels

Four-tier classification system:

| Status              | Badge Color      | Criteria                  | Meaning                    | Action Required         |
| ------------------- | ---------------- | ------------------------- | -------------------------- | ----------------------- |
| **Fully Covered**   | 🟢 Green         | Total Working ≥ Opt       | Optimal or above staffing  | None - monitor          |
| **Partial Covered** | 🔵 Blue          | Min ≤ Total Working < Opt | Acceptable but below ideal | Consider adding staff   |
| **At Risk**         | 🟡 Yellow/Orange | 0 < Total Working < Min   | Below minimum requirements | Immediate action needed |
| **Uncovered**       | 🔴 Red           | Total Working = 0         | No coverage at all         | Critical emergency      |

**Status Interpretation:**

**Fully Covered (Green):**

- Shift running at or above optimal efficiency
- No immediate concerns
- Monitor for changes

**Partial Covered (Blue):**

- Operational but not ideal
- May experience reduced efficiency or quality
- Consider assigning additional staff if available
- Acceptable for normal operations

**At Risk (Yellow):**

- Below safety/legal/contractual minimums
- Service quality compromised
- Legal or compliance risk
- **Immediate action required** - assign staff urgently

**Uncovered (Red):**

- Critical situation - no staff working
- Operations cannot proceed
- **Emergency response needed** - activate backup plans
- Contact on-call or emergency staff immediately

### Coverage Percentage Calculation

Performance metric for staffing levels:

**Formula:**

```
Coverage % = (Total Working / Optimal Required) × 100%
```

**Interpretation:**

| Coverage % | Status              | Meaning                    | Implication                                 |
| ---------- | ------------------- | -------------------------- | ------------------------------------------- |
| **≥ 100%** | Fully Covered       | At or above optimal        | Efficient operations, possible overstaffing |
| **70-99%** | Partial Covered     | Below optimal              | Acceptable, some efficiency loss            |
| **50-69%** | At Risk             | Significantly understaffed | Major efficiency and quality issues         |
| **< 50%**  | At Risk / Uncovered | Critical shortage          | Cannot deliver standard service             |
| **0%**     | Uncovered           | No coverage                | Operations halted                           |

**Example Calculations:**

**Example 1: Fully Covered**

- Total Working: 10
- Optimal: 10
- Coverage %: (10/10) × 100% = **100%** ✅

**Example 2: Partial Covered**

- Total Working: 7
- Optimal: 10
- Coverage %: (7/10) × 100% = **70%** ⚠️

**Example 3: At Risk**

- Total Working: 4
- Optimal: 10
- Coverage %: (4/10) × 100% = **40%** 🚨

### Gap Analysis

Understanding staffing variance:

**Min Gap:**

Min Gap = Scheduled Count - Minimum Required

text

**Interpretation:**

- **Negative**: Below minimum (e.g., -2 means 2 staff short)
- **Zero**: Exactly at minimum
- **Positive**: Above minimum (e.g., +3 means 3 staff over)

**Opt Gap:**

```
Opt Gap = Scheduled Count - Optimal Required
```

**Interpretation:**

- **Negative**: Below optimal (need more staff)
- **Zero**: Exactly at optimal (ideal)
- **Positive**: Above optimal (potential overstaffing)

**Gap Examples:**

| Scenario              | Min | Opt | Scheduled | Min Gap | Opt Gap | Assessment                        |
| --------------------- | --- | --- | --------- | ------- | ------- | --------------------------------- |
| Severely Understaffed | 5   | 8   | 3         | -2      | -5      | Critical - below minimum          |
| Slightly Short        | 5   | 8   | 6         | +1      | -2      | Acceptable - meets min, below opt |
| Optimal               | 5   | 8   | 8         | +3      | 0       | Perfect - at optimal              |
| Overstaffed           | 5   | 8   | 11        | +6      | +3      | Excess - above optimal            |

**Using Gaps for Planning:**

- **Negative Min Gap**: Urgent - assign staff immediately
- **Negative Opt Gap**: Consider adding staff for efficiency
- **Positive Opt Gap**: Review if overstaffed, redistribute to other shifts
- **Large Positive Gap**: Cost inefficiency, reduce staffing

### Scheduled vs Total Working

Critical distinction for accurate coverage:

**Scheduled Count:**

- Total employees **assigned** to the shift
- Includes everyone with a schedule entry
- Does **not** reflect actual attendance
- Used for planning and Min/Opt Gap calculations

**Total Working Count:**

- Total employees **actually working** the shift
- Present + Late + Overtime
- Reflects **real operational capacity**
- Used for Coverage % and Status determination

**Why It Matters:**

**Scenario:**

- Scheduled: 10 employees
- Leave: 2 employees
- Absent: 1 employee
- Present: 7 employees
- **Scheduled = 10** (looks adequate)
- **Total Working = 7** (actual capacity)
- If Optimal = 10 → Coverage = 70% (Partial Covered)

**Key Point:** Always focus on **Total Working** for operational decisions, not Scheduled count.

### Attendance Status Impact

How each attendance status affects coverage:

| Attendance Status             | Counted in Scheduled | Counted in Total Working | Counted in Total Not Working | Impact on Coverage                             |
| ----------------------------- | -------------------- | ------------------------ | ---------------------------- | ---------------------------------------------- |
| **Present**                   | ✅ Yes               | ✅ Yes                   | ❌ No                        | Positive - increases coverage                  |
| **Late**                      | ✅ Yes               | ✅ Yes                   | ❌ No                        | Positive - increases coverage (note tardiness) |
| **Overtime**                  | ✅ Yes               | ✅ Yes                   | ❌ No                        | Positive - increases coverage                  |
| **Leave**                     | ✅ Yes               | ❌ No                    | ✅ Yes                       | Negative - reduces coverage                    |
| **Absent**                    | ✅ Yes               | ❌ No                    | ✅ Yes                       | Negative - reduces coverage                    |
| **Scheduled** (no attendance) | ✅ Yes               | ❌ No                    | ❌ No                        | Neutral - not yet determined                   |

**Coverage Calculation:**

```
Total Working = Present + Late + Overtime
Total Not Working = Leave + Absent
Coverage % = (Total Working / Optimal) × 100%
```

### Permission Levels

Access control by role:

| Role                   | View Coverage | Scope           | Export | Filter/Search |
| ---------------------- | ------------- | --------------- | ------ | ------------- |
| **Employee**           | ❌ No         | -               | ❌ No  | ❌ No         |
| **Supervisor**         | ✅ Yes        | Own team        | ❌ No  | ✅ Yes        |
| **Department Manager** | ✅ Yes        | Own department  | ✅ Yes | ✅ Yes        |
| **HR Manager**         | ✅ Yes        | All departments | ✅ Yes | ✅ Yes        |
| **Super Admin**        | ✅ Yes        | All             | ✅ Yes | ✅ Yes        |

**Access Details:**

**Employees:**

- No access to coverage data
- Cannot view staffing information
- Maintains employee privacy

**Supervisors:**

- View coverage for supervised team's shifts
- Monitor staffing for direct reports
- Cannot export reports
- Use for day-to-day monitoring

**Department Managers:**

- Full visibility into department coverage
- Export reports for management review
- Make staffing decisions based on coverage
- Manage departmental operations

**HR Managers:**

- Organization-wide coverage visibility
- Cross-department comparison and analysis
- Strategic staffing decisions
- Export for executive reporting

---

## Best Practices

### Daily Monitoring

- **Morning Review**: Check coverage at start of day for immediate gaps
- **Status Focus**: Filter by "At Risk" and "Uncovered" first - address critical issues
- **Quick Scan**: Use color-coded badges for fast identification
- **Regular Refresh**: Reload page every 1-2 hours as attendance changes

### Gap Response

- **Immediate Action for Red/Yellow**: Contact available staff, activate backup plans
- **Proactive for Blue**: Add staff from overstaffed shifts if possible
- **Don't Wait**: Address gaps as soon as identified, not at shift start time
- **Document**: Note coverage issues and resolutions for pattern analysis

### Weekly Planning

- **Look Ahead**: Review next 7 days coverage every Monday
- **Identify Patterns**: Note recurring gaps by day or shift
- **Preemptive Staffing**: Assign additional staff to predictable problem shifts
- **Communication**: Notify managers of upcoming coverage concerns

### Analysis and Reporting

- **Export Critical Shifts**: Generate reports for frequently "At Risk" shifts
- **Trend Identification**: Review weekly/monthly to spot systemic issues
- **Cross-Department Comparison**: Identify departments with chronic understaffing
- **Root Cause**: Link coverage gaps to attendance, turnover, or scheduling issues

### Coverage Optimization

- **Balance Shifts**: Redistribute staff from overstaffed to understaffed shifts
- **Cross-Training**: Maintain flexible staff who can cover multiple shift types
- **On-Call Lists**: Keep emergency backup staff list for critical coverage
- **Min/Opt Review**: Adjust thresholds quarterly based on actual operational needs

---

## How to Use

<details>
<summary><strong>How to View Coverage</strong></summary>

**Steps:**

1. **Navigate to Coverage:**

   - Go to **Attendance** → **Coverage**

2. **Set Date Range:**

   - **Start Date**: Select start date (defaults to today)
   - **End Date**: Select end date (defaults to today)
   - Click **Search** to load coverage data

3. **Review Coverage Grid:**

   The grid displays all shifts with metrics:

   - Date and shift details
   - Min, Opt, Max thresholds
   - Scheduled count
   - Attendance breakdown (Present, Late, OT, Leave, Absent)
   - Gap analysis (Min Gap, Opt Gap)
   - Total Working and Not Working
   - Coverage % and Status badge

4. **Interpret Status:**
   - 🟢 **Green (Fully Covered)**: No action needed
   - 🔵 **Blue (Partial Covered)**: Monitor, consider adding staff
   - 🟡 **Yellow (At Risk)**: Immediate action required
   - 🔴 **Red (Uncovered)**: Critical emergency

**Result:**

- Complete visibility into all shift coverage for selected period
- Instant identification of problem shifts
- Data-driven staffing decisions

:::tip
**Quick Priority Check:**

1. Filter by "At Risk" to see count
2. Filter by "Uncovered" to see critical gaps
3. Address Red and Yellow before Blue
   :::

</details>

<details>
<summary><strong>How to Filter Coverage by Status</strong></summary>

**Steps:**

1. **Open Coverage Page:**

   - Navigate to **Attendance** → **Coverage**
   - Set date range and search

2. **Apply Status Filter:**

   Click status filter buttons at top:

   - **All**: Show all shifts (default)
   - **Fully Covered**: Show only green/optimal shifts
   - **Partial Covered**: Show only blue/acceptable shifts
   - **At Risk**: Show only yellow/understaffed shifts
   - **Uncovered**: Show only red/no coverage shifts

3. **View Count:**

   - Each filter button shows count in parentheses
   - Example: "At Risk (3)" means 3 shifts below minimum

4. **Review Filtered Results:**
   - Grid displays only shifts matching selected status
   - Focus on specific coverage issues

**Use Cases:**

**Check Critical Issues:**

- Filter by "Uncovered" → See emergency gaps (count: 2)
- Filter by "At Risk" → See urgent understaffing (count: 5)
- Address these first

**Monitor Partial Coverage:**

- Filter by "Partial Covered" → See shifts below optimal
- Consider adding staff if available

**Verify Good Coverage:**

- Filter by "Fully Covered" → See properly staffed shifts
- Confirm adequate coverage

:::info
Status counts update based on selected date range. Change date range to see different period counts.
:::

</details>

<details>
<summary><strong>How to Search for Specific Shifts</strong></summary>

**Steps:**

1. **Open Coverage Page:**

   - Navigate to **Attendance** → **Coverage**

2. **Select Search Field:**

   Click search dropdown and choose:

   - **Shift Code**: Search by shift code (e.g., "MS", "NS")
   - **Shift Name**: Search by shift name (e.g., "Morning Shift")
   - **Department Code**: Search by dept code
   - **Department Name**: Search by dept name (e.g., "Sales")
   - **Created By**: Search by creator username
   - **Updated By**: Search by last updater username

3. **Enter Search Text:**

   - Type search keyword in search box
   - Partial matches supported

4. **Click Search:**

   - Grid filters to show matching shifts only

5. **Clear Search:**
   - Clear search box
   - Click Search to show all shifts again

**Example Searches:**

**Find Night Shifts:**

- Search Field: Shift Name
- Search Text: "Night"
- Result: All night shift coverage

**Find Sales Department:**

- Search Field: Department Name
- Search Text: "Sales"
- Result: All Sales department shifts

**Find Specific Shift Code:**

- Search Field: Shift Code
- Search Text: "MS"
- Result: All Morning Shift coverage

:::tip
Combine search with status filter:

1. Search for "Night Shift"
2. Filter by "At Risk"
3. Result: Night shifts with coverage issues
   :::

</details>

<details>
<summary><strong>How to Analyze Coverage Gaps</strong></summary>

**Steps:**

1. **View Coverage Data:**

   - Navigate to **Attendance** → **Coverage**
   - Set date range and search

2. **Identify Gaps:**

   Review gap columns:

   - **Min Gap**: Negative = below minimum (critical)
   - **Opt Gap**: Negative = below optimal (efficiency loss)

3. **Check Attendance Impact:**

   Review attendance columns:

   - **Leave**: Planned absences reducing coverage
   - **Absent**: Unexpected absences creating gaps
   - **Present**: Actual working staff

4. **Calculate Real Coverage:**

   - **Total Working** = Present + Late + Overtime
   - **Total Not Working** = Leave + Absent
   - **Coverage %** = (Total Working / Optimal) × 100%

5. **Assess Severity:**

   Based on status:

   - **Red (Uncovered)**: Emergency - 0 staff working
   - **Yellow (At Risk)**: Critical - below minimum
   - **Blue (Partial)**: Acceptable - between min and opt
   - **Green (Fully Covered)**: Optimal - no issues

6. **Determine Action:**

   **For At Risk/Uncovered:**

   - Navigate to **Work Schedule**
   - Use **Assign Schedule** to add employees
   - Or use **Switch Schedule** to redistribute from other shifts
   - Return to Coverage to verify resolution

   **For Partial Covered:**

   - Consider adding staff if available
   - Monitor for changes
   - Acceptable for continued operation

   **For Fully Covered:**

   - No action needed
   - Continue monitoring

**Example Analysis:**

**Shift Details:**

- Minimum Required: 5
- Optimal Required: 8
- Scheduled: 9
- Leave: 2, Absent: 1
- Present: 6

**Calculations:**

- Total Working: 6 (Present)
- Total Not Working: 3 (2 Leave + 1 Absent)
- Min Gap: +4 (9 Scheduled - 5 Min) ✅ Above minimum
- Opt Gap: +1 (9 Scheduled - 8 Opt) ✅ Above optimal
- Coverage %: (6/8) × 100% = 75%

**Assessment:**

- Status: **Partial Covered** (Blue)
- 6 working < 8 optimal but > 5 minimum
- **Action**: Consider adding 1-2 staff if available

:::warning
**Focus on Total Working, not Scheduled:**

- Scheduled count may look adequate
- But leave/absent reduce actual coverage
- Always base decisions on Total Working
  :::

</details>

<details>
<summary><strong>How to Export Coverage Report</strong></summary>

**Steps:**

1. **Navigate to Coverage:**

   - Go to **Attendance** → **Coverage**
   - Set date range and search

2. **Select Single Shift:**

   - Click on **one row** in the coverage grid
   - Only one row can be selected at a time
   - Selected row will be highlighted

3. **Click Export Button:**

   - Export button at top right will be enabled
   - Click **"Export"** button

4. **View Report:**

   - Coverage report opens in new browser tab
   - Contains detailed information for selected shift

5. **Save or Print:**
   - Use browser's print function to save as PDF
   - Or print directly for physical records
   - Or save via browser's save page function

**What's in the Report:**

- Shift details (code, name, date)
- Department information
- Min/Opt/Max requirements
- Scheduled and actual counts
- Attendance breakdown
- Gap analysis
- Coverage percentage
- Status

**Use Cases:**

**Management Review:**

- Export "At Risk" shifts for manager briefing
- Document coverage issues

**Compliance:**

- Export for audit trail
- Prove staffing met minimum requirements

**Incident Investigation:**

- Export shift with issue
- Review staffing at time of incident

**Planning:**

- Export frequently understaffed shifts
- Use data to adjust Min/Opt thresholds

:::info
**Export Limitation:**

- Only one shift can be exported at a time
- For multiple shifts, export individually
- Or use grid grouping/sorting for visual analysis
  :::

</details>

<details>
<summary><strong>How to Address Coverage Gaps</strong></summary>

**Coverage is read-only - use Work Schedule to fix gaps:**

**Steps:**

1. **Identify Gap in Coverage:**

   - View Coverage page
   - Note shift, date, and gap size

2. **Navigate to Work Schedule:**

   - Go to **Attendance** → **Work Schedule**

3. **Choose Action Based on Gap:**

   **If No Staff Scheduled (Uncovered):**

   - Use **Assign Schedule**
   - Assign employees to the shift
   - Or use **Generate Schedule** if bulk assignment needed

   **If Scheduled but Staff Absent/On Leave:**

   - Use **Assign Schedule** to add replacement staff
   - Or use **Switch Schedule** to move employees from overstaffed shifts

   **If Need to Redistribute:**

   - Identify overstaffed shifts (High Coverage %, Positive Opt Gap)
   - Use **Switch Schedule** (Mutual type) to move staff to understaffed shift
   - Get manager approval

4. **Verify Resolution:**
   - Return to **Coverage** page
   - Refresh or re-search
   - Verify gap is closed
   - Status should improve (Red → Yellow → Blue → Green)

**Gap Resolution Strategies:**

**Emergency (Red - Uncovered):**

- Contact on-call employees
- Use **Emergency Switch** for instant reassignment
- Activate backup staff list
- Consider manager working the shift

**Urgent (Yellow - At Risk):**

- Assign additional scheduled staff
- Switch from overstaffed shifts
- Request overtime from current staff
- Cross-train employees for flexibility

**Monitor (Blue - Partial):**

- Check if staff available from other shifts
- Optional - add staff for optimal efficiency
- Document for trend analysis

:::tip
**Proactive Gap Prevention:**

1. Review Coverage for next 7 days every Monday
2. Assign staff preemptively to predictable gaps
3. Maintain on-call list for emergencies
4. Cross-train staff for flexibility
   :::

</details>

---

## FAQ

<details>
<summary><strong>What's the difference between Scheduled and Total Working?</strong></summary>

Two distinct metrics:

**Scheduled Count:**

- Total employees **assigned** to the shift
- Includes everyone with a schedule entry
- May include employees on leave or absent
- Used for planning and gap calculations

**Total Working Count:**

- Total employees **actually working** the shift
- Formula: Present + Late + Overtime
- Excludes leave and absent employees
- Used for coverage status and percentage

**Example:**

- Scheduled: 10 employees
- Leave: 2, Absent: 1, Present: 7
- **Scheduled = 10** (all assigned)
- **Total Working = 7** (only actually working)

**Why It Matters:**
Coverage status is based on **Total Working**, not Scheduled. A shift may look adequately scheduled but still be "At Risk" if too many employees are absent or on leave.

</details>

<details>
<summary><strong>Why is a shift "At Risk" even though scheduled count meets minimum?</strong></summary>

Because coverage status is based on **Total Working Count**, not Scheduled Count.

**Scenario:**

- Minimum Required: 5
- Scheduled: 6 employees
- Leave: 1, Absent: 2
- Present: 3
- **Total Working: 3** (6 - 1 - 2)
- **Status: At Risk** (3 < 5 minimum)

Even though 6 employees are scheduled (above minimum), only 3 are actually working due to leave and absences.

**Solution:**

- Assign additional employees to cover for leave/absent
- Use **Assign Schedule** or **Switch Schedule** in Work Schedule
- Increase Total Working to meet minimum

</details>

<details>
<summary><strong>How is Coverage Percentage calculated?</strong></summary>

**Formula:**

```
Coverage % = (Total Working / Optimal Required) × 100%
```

**Where:**

- **Total Working** = Present + Late + Overtime
- **Optimal Required** = Target staffing level from Shift Coverage configuration

**Examples:**

**Example 1:**

- Total Working: 8
- Optimal: 10
- Coverage %: (8 / 10) × 100% = **80%**
- Status: Partial Covered

**Example 2:**

- Total Working: 10
- Optimal: 10
- Coverage %: (10 / 10) × 100% = **100%**
- Status: Fully Covered

**Example 3:**

- Total Working: 3
- Optimal: 10
- Coverage %: (3 / 10) × 100% = **30%**
- Status: At Risk

**Interpretation:**

- 100%+ = Fully Covered
- 70-99% = Partial Covered (depends on minimum)
- < 70% = Likely At Risk or Uncovered

</details>

<details>
<summary><strong>What do Min Gap and Opt Gap mean?</strong></summary>

Two staffing variance indicators:

**Min Gap:**

```
Min Gap = Scheduled Count - Minimum Required
```

**Interpretation:**

- **Negative**: Below minimum (critical shortage)
  - Example: -2 means 2 staff short of minimum
- **Zero**: Exactly at minimum
- **Positive**: Above minimum
  - Example: +3 means 3 staff above minimum

**Opt Gap:**

```
Opt Gap = Scheduled Count - Optimal Required
```

**Interpretation:**

- **Negative**: Below optimal (efficiency loss)
  - Example: -3 means 3 staff short of optimal
- **Zero**: Exactly at optimal (ideal)
- **Positive**: Above optimal (potential overstaffing)
  - Example: +2 means 2 staff above optimal

**Example Scenario:**

- Min: 5, Opt: 8, Scheduled: 6
- **Min Gap**: +1 (6 - 5) → Above minimum ✅
- **Opt Gap**: -2 (6 - 8) → Below optimal ⚠️
- **Assessment**: Meets minimum but not ideal

**Use Gaps For:**

- Negative Min Gap → Urgent staffing needed
- Negative Opt Gap → Consider adding staff
- Positive Opt Gap → May be overstaffed, review costs

</details>

<details>
<summary><strong>Can I assign employees directly from Coverage view?</strong></summary>

**No**, Coverage is a **read-only monitoring tool**.

**To fix coverage gaps:**

1. **Navigate to Work Schedule:**

   - Go to **Attendance** → **Work Schedule**

2. **Use appropriate action:**

   - **Assign Schedule**: Add employees to understaffed shifts
   - **Generate Schedule**: Bulk assign for multiple shifts
   - **Switch Schedule**: Move employees from overstaffed to understaffed shifts

3. **Return to Coverage:**
   - Refresh Coverage page
   - Verify gap is resolved

**Why Coverage is Read-Only:**

- Provides monitoring and analysis
- Actual schedule changes happen in Work Schedule module
- Maintains clear separation between monitoring and action

</details>

<details>
<summary><strong>How often is coverage data updated?</strong></summary>

Coverage data updates in **real-time** based on:

**Update Triggers:**

- Schedule assignments and changes
- Attendance records (clock in/out)
- Leave approvals
- Absence records
- Status changes

**To See Latest Data:**

1. Refresh browser page
2. Or re-run search with current date range
3. Changes from Work Schedule or Attendance appear immediately

**Recommended Refresh Frequency:**

- **High-volume operations**: Every 30-60 minutes
- **Normal operations**: Every 2-3 hours
- **Shift changes**: At shift start time
- **After making schedule changes**: Immediately

**No Automatic Refresh:**

- Coverage page does not auto-refresh
- Must manually refresh to see latest updates
- Avoid stale data by refreshing regularly

</details>

<details>
<summary><strong>What should I do if a critical shift shows "Uncovered"?</strong></summary>

**Uncovered = Zero staff working = Critical emergency**

**Immediate Actions:**

1. **Check Reason:**

   - Are employees scheduled but all absent/on leave?
   - Or is no one scheduled at all?

2. **Emergency Response:**

   **If Scheduled but All Absent:**

   - Contact scheduled employees immediately
   - Determine why absent
   - Request return if possible

   **If No One Scheduled:**

   - Use **Assign Schedule** immediately
   - Contact available employees
   - Activate emergency backup list

3. **Quick Fixes:**

   - **Emergency Switch**: Move employees from other dates (auto-approved)
   - **On-Call Staff**: Contact backup/on-call employees
   - **Overtime**: Request current staff extend hours
   - **Manager Coverage**: Manager works shift if no alternatives

4. **Document:**
   - Note what happened
   - Record resolution actions taken
   - Update procedures to prevent recurrence

**Follow-Up:**

1. **Root Cause Analysis:**

   - Why was shift uncovered?
   - Scheduling error? Mass absence? Oversight?

2. **Prevention:**

   - Earlier schedule generation and review
   - Better absence planning
   - Adequate backup staff
   - Improve shift coverage thresholds

3. **Process Improvement:**
   - Daily coverage checks
   - Proactive gap management
   - On-call rotation system
   - Cross-training programs

:::warning
**Uncovered shifts = Operations halt**

- Service cannot be delivered
- Legal/contractual violations possible
- Safety risks (e.g., security, healthcare)
- Requires immediate escalation and resolution
  :::

</details>

<details>
<summary><strong>Why do status counts not add up to total records?</strong></summary>

Status counts are **per shift-date combination** for the selected date range, not unique shifts.

**Understanding Counts:**

**Example:**

- Date Range: Jan 1-7 (7 days)
- Morning Shift repeats each day
- Different status each day:
  - Jan 1: Fully Covered
  - Jan 2: Partial Covered
  - Jan 3: At Risk
  - Jan 4: Fully Covered
  - Jan 5: Uncovered
  - Jan 6: Partial Covered
  - Jan 7: Fully Covered

**Counts:**

- Fully Covered: 4 (same shift, different dates)
- Partial Covered: 2
- At Risk: 1
- Uncovered: 1
- **Total records: 7** (not 4 statuses)

**Key Point:**

- Same shift appears multiple times (once per day)
- Each day may have different status
- Counts reflect shift-date occurrences, not unique shifts

</details>

<details>
<summary><strong>Can I see future coverage?</strong></summary>

**Yes**, coverage shows scheduled future shifts.

**Viewing Future Coverage:**

1. **Set Date Range:**

   - Start Date: Today or future date
   - End Date: Future date (e.g., 7 days ahead)
   - Click Search

2. **Review Future Shifts:**

   - See scheduled staffing for upcoming dates
   - Identify future gaps proactively
   - Plan staff assignments in advance

3. **Status for Future:**
   - Shows **Scheduled** status if no attendance yet
   - Total Working = 0 (no one clocked in yet)
   - Status based on scheduled count vs requirements

**Use Cases:**

**Weekly Planning:**

- View next 7 days every Monday
- Identify predicted "At Risk" shifts
- Assign staff preemptively

**Event Preparation:**

- Check coverage for special event dates
- Ensure adequate staffing
- Add staff before event

**Leave Impact:**

- See how approved future leave affects coverage
- Arrange replacements in advance

:::info
**Future Attendance Status:**

- For future dates, attendance not yet recorded
- Coverage based on schedules, not actual attendance
- Actual coverage determined when employees clock in
  :::

</details>

<details>
<summary><strong>How do I export coverage for multiple shifts?</strong></summary>

**Current Limitation:** Export button only works for **one selected shift** at a time.

**Workarounds for Multiple Shifts:**

**Option 1: Export Individually**

- Select and export each shift one by one
- Time-consuming but provides detailed reports

**Option 2: Grid Grouping/Sorting**

- Use grid's built-in features:
  - Drag column headers to group panel
  - Group by Department, Shift, or Date
  - Sort by Coverage % or Status
- Take screenshots or print page
- Visual analysis without individual exports

**Option 3: Date Range and Filters**

- Set broad date range
- Apply status filters (e.g., "At Risk")
- View all problem shifts in grid
- Screenshot or print for documentation

**Option 4: External Tools**

- If grid supports export to Excel/CSV (check with admin)
- Export entire grid data
- Analyze in Excel with pivot tables

**Best Practice:**

- For routine monitoring: Use grid view with filters
- For detailed analysis: Export critical individual shifts
- For management reports: Export key problem shifts only

:::tip
Focus export on **critical shifts** (At Risk, Uncovered) rather than exporting everything. Selective exports provide actionable insights.
:::

</details>

<details>
<summary><strong>What if Optimal Required is set too high?</strong></summary>

If Optimal consistently unattainable, it creates:

**Problems:**

- Most shifts show "Partial Covered" (blue)
- Low Coverage %
- Demotivation (never reaching "Fully Covered")
- Skewed reporting and analytics

**Solution: Adjust Shift Coverage Configuration**

1. **Navigate to Work Schedule Configuration:**

   - Go to **Work Schedule** → **Configurations** → **Shift Coverage**

2. **Review Optimal Setting:**

   - Find the shift and department
   - Check current Optimal value

3. **Analyze Historical Data:**

   - Review typical staffing levels
   - Check what's realistically achievable
   - Consider operational needs vs aspirations

4. **Adjust Optimal:**

   - Lower to realistic target
   - Should be achievable 70-80% of time
   - Keep Minimum for safety/legal threshold

5. **Monitor and Iterate:**
   - Watch coverage over next few weeks
   - Adjust again if needed
   - Balance between aspirational and realistic

**Example:**

- Current: Min 5, Opt 12, Scheduled usually 8
- Result: Always "Partial Covered" (not motivating)
- **Adjusted**: Min 5, Opt 8, Max 10
- Result: Frequently "Fully Covered" (more realistic)

**Best Practice:**

- Optimal = Realistic target for efficient operations
- Not ideal world, but achievable goal
- Review quarterly based on actual staffing

</details>

---
