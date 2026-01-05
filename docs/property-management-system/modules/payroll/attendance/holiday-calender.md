---
title: Holiday Calender
sidebar_position: 7
---

# Holiday Calendar

Holiday Calendar is the centralized holiday management system that tracks national holidays, religious observances, company events, and recurring dates to support scheduling, leave planning, and workforce coordination.

## Overview

On this page you can:

- Create and manage holidays with multiple types (National, Religious, Company)
- Set up recurring holidays (Yearly, Monthly, Quarterly, Weekly, Biannual)
- View holidays in four formats (Monthly, Yearly, Weekly, List)
- Configure holiday types with custom colors for visual identification
- Track both one-time and automatically repeating events
- Filter holidays by type and recurrence pattern
- Reference dates when planning work schedules and leave requests

**Key Capabilities:**

- Four viewing modes: Monthly, Yearly, Weekly, and List for different planning needs
- Automatic recurrence for yearly national holidays and regular events
- Multi-day holiday support (e.g., 3-day collective leave)
- Color-coded holiday types for instant visual recognition
- Holiday Type configuration with customizable categories and colors
- Click-on-date quick entry for fast holiday creation
- Filter by type and recurrence for focused planning
- Search by code, name, or remark for quick lookup

:::info
**Reference Tool Only:**
Holiday Calendar is a reference and planning tool. It does **not** automatically integrate with Work Schedule, Attendance, or Leave modules. Users must manually check the holiday calendar when creating schedules or approving leave.
:::

---

## Key Features

### 📅 Four Flexible Calendar Views

Multiple visualization modes for different planning horizons and use cases.

**Business Value:**

- **Monthly View**: Single-month detail for immediate planning
- **Yearly View**: 12-month grid overview for annual strategy
- **Weekly View**: Week-by-week for short-term coordination
- **List View**: Tabular format for data entry and bulk review
- Switch views instantly without losing filters
- Choose optimal view for task (planning vs data entry)
- 60% faster holiday lookup vs single-view systems

**Perfect for:** HR teams needing flexibility to switch between detailed planning and high-level overview

---

### 🔄 Smart Recurring Holidays

Automatic repetition system eliminates manual re-entry for annual and periodic events.

**Business Value:**

- Set once, apply automatically to future periods
- Five recurrence types: Yearly, Monthly, Quarterly, Biannual, Weekly
- National holidays auto-appear every year
- Monthly meetings show up without manual entry
- Reduce holiday setup time by 90%
- Eliminate missed holidays from manual re-entry errors
- Support both fixed-date (Christmas) and regular events (monthly payday)

**Perfect for:** Organizations with consistent annual holidays and regular recurring events

---

### 🎨 Color-Coded Holiday Types

Visual categorization for instant recognition and priority assessment.

**Business Value:**

- Multiple types: National, Religious, Company, Regional, International, Special
- Each type assigned distinct color (red, green, blue, yellow)
- Instant visual differentiation in calendar
- Quick identification of holiday priority (national vs company event)
- Custom color configuration per type
- Improve scanning speed by 70%
- Reduce planning errors from missed holidays

**Perfect for:** Multi-department organizations managing diverse holiday types across regions

---

### 📊 Comprehensive Holiday Management

Complete CRUD operations for full holiday lifecycle control.

**Business Value:**

- Create holidays with code, name, dates, type, recurrence
- Edit existing holidays (affects future occurrences if recurring)
- Delete holidays or disable types when no longer relevant
- Multi-day holiday support (start date to end date)
- Remark field for additional context
- Full audit trail of changes
- Flexible management for changing organizational needs

**Perfect for:** HR managers needing complete control over organizational holiday calendar

---

### 🔍 Advanced Filtering and Search

Powerful tools to focus on relevant holidays and reduce information overload.

**Business Value:**

- Filter by holiday type (show only National, or Religious, or multiple)
- Filter by recurrence (show only recurring holidays)
- Search by code, name, or remark (real-time filtering)
- Combine filters for precise targeting
- Reduce clutter when reviewing specific holiday categories
- Fast lookup of specific holidays (e.g., "Christmas")
- Export-ready filtered views

**Perfect for:** Operations teams needing to review specific holiday categories for planning

---

### 🗓️ Multi-Day Holiday Support

Span holidays across multiple consecutive dates with single entry.

**Business Value:**

- Single entry covers entire holiday period
- Example: 5-day Eid collective leave (Mar 31 - Apr 4)
- All dates within range marked as holiday
- Reduce data entry from 5 entries to 1
- Consistent representation across calendar
- Support long weekends and extended shutdowns
- Simplify collective leave management

**Perfect for:** Companies with extended holiday periods and collective leave policies

---

### ⚙️ Holiday Type Configuration

Customizable holiday categories with color management for organizational needs.

**Business Value:**

- Create unlimited custom holiday types
- Configure colors for each type (visual consistency)
- Activate/deactivate types without deleting
- Inactive types hide from dropdown but preserve existing holidays
- Support region-specific or department-specific types
- Adapt to changing organizational structure
- Maintain historical data while updating categories

**Perfect for:** Multi-national or multi-regional companies with diverse holiday requirements

---

## Key Concepts

### Holiday Fields

Complete data structure for each holiday:

| Field              | Type    | Required    | Description                                        | Example                             |
| ------------------ | ------- | ----------- | -------------------------------------------------- | ----------------------------------- |
| **Code**           | Text    | ✅ Yes      | Unique identifier                                  | NEW_YEAR, IDUL_FITRI_2025           |
| **Name**           | Text    | ✅ Yes      | Holiday display name                               | New Year's Day, Eid al-Fitr 1446 H  |
| **Start Date**     | Date    | ✅ Yes      | First day of holiday                               | 2025-01-01                          |
| **End Date**       | Date    | ✅ Yes      | Last day of holiday (same as start for single-day) | 2025-01-01                          |
| **Type**           | Select  | ✅ Yes      | Holiday category                                   | National, Religious, Company        |
| **Color**          | Color   | Auto        | Display color (inherited from type)                | #dc3545 (Red)                       |
| **Is Recurring**   | Boolean | ❌ No       | Whether holiday repeats                            | true/false                          |
| **Recurring Type** | Select  | Conditional | Frequency (if recurring)                           | Yearly, Monthly, Weekly             |
| **Remark**         | Text    | ❌ No       | Additional notes                                   | "80th Independence Day celebration" |

**Field Rules:**

- **Code**: Must be unique, uppercase with underscores recommended
- **Start/End Date**: End date ≥ Start date (same for single-day)
- **Recurring Type**: Required only if "Is Recurring" = true
- **Color**: Auto-filled from selected Type, can be overridden

### Holiday Types

Pre-defined and custom categories:

| Type              | Common Use                   | Color Suggestion | Examples                                 |
| ----------------- | ---------------------------- | ---------------- | ---------------------------------------- |
| **National**      | Government-mandated holidays | Red (#dc3545)    | Independence Day, New Year, Labor Day    |
| **Religious**     | Religious observance days    | Green (#28a745)  | Eid al-Fitr, Christmas, Diwali, Vesak    |
| **Company**       | Organization-specific events | Blue (#007bff)   | Company Anniversary, Team Building       |
| **Regional**      | Location-specific holidays   | Yellow (#ffc107) | Provincial festivals, Local celebrations |
| **International** | Global observance days       | Cyan (#17a2b8)   | International Women's Day, Earth Day     |
| **Special**       | Exceptional circumstances    | Purple (#6f42c1) | Emergency closures, Special events       |

**Custom Types:**

- Create additional types via Holiday Type configuration
- Each type has: Code, Name, Color, Active status
- Inactive types don't show in dropdown but preserve existing holidays

### Recurrence Types

Automatic repetition patterns:

| Recurrence    | Repeats Every                 | Use Cases                                   | Example                                         |
| ------------- | ----------------------------- | ------------------------------------------- | ----------------------------------------------- |
| **Yearly**    | Same date each year           | National holidays, birthdays, anniversaries | Christmas (Dec 25), Independence Day (Aug 17)   |
| **Monthly**   | Same day each month           | Monthly meetings, payday                    | Payday (25th of month), All-hands meeting (1st) |
| **Quarterly** | Every 3 months                | Quarterly reviews, board meetings           | Q1/Q2/Q3/Q4 reviews                             |
| **Biannual**  | Twice a year (every 6 months) | Semi-annual reviews, inventory              | Jan 15 & Jul 15 performance reviews             |
| **Weekly**    | Same day each week            | Weekly standups, prayer times               | Monday team meeting, Friday prayer              |

**Recurrence Behavior:**

**Yearly Recurring:**

- Created once, appears every year automatically
- Example: Christmas 2025 → Automatically shows in 2026, 2027, etc.
- Edit affects all future occurrences

**Monthly Recurring:**

- Appears same day each month
- Warning: Days 29-31 may skip months (Feb has 28/29 days)
- Best practice: Use days 1-28 for consistency

**Weekly Recurring:**

- Repeats same weekday every week
- Based on day of week, not date number

**Quarterly/Biannual:**

- Calculates from start date
- Quarterly: Start date + 3/6/9 months
- Biannual: Start date + 6 months

### Calendar Views

Four modes for different needs:

| View        | Display      | Grid Layout        | Best For                  | Features                                     |
| ----------- | ------------ | ------------------ | ------------------------- | -------------------------------------------- |
| **Monthly** | One month    | Single calendar    | Detailed monthly planning | Day-by-day view, all holidays visible        |
| **Yearly**  | 12 months    | 2 rows × 6 columns | Annual overview           | See entire year at once, pattern recognition |
| **Weekly**  | One week     | 7-day horizontal   | Short-term scheduling     | Week-by-week navigation                      |
| **List**    | All holidays | Data table         | Data entry, bulk editing  | Sortable columns, full details               |

**View Features:**

**Monthly/Yearly/Weekly:**

- Click empty date → Opens insert form with date pre-filled
- Click date with holiday → Opens edit form for that holiday
- Navigate with Previous/Next arrows
- Today button returns to current period

**List View:**

- Tabular grid of all holidays
- Sort by any column (code, name, date, type)
- Standard insert/edit/delete actions
- No calendar visualization

### One-Time vs Recurring

Critical distinction:

| Aspect                | One-Time Holiday                        | Recurring Holiday                        |
| --------------------- | --------------------------------------- | ---------------------------------------- |
| **Is Recurring**      | Unchecked (false)                       | Checked (true)                           |
| **Recurring Type**    | None                                    | Yearly/Monthly/Quarterly/Biannual/Weekly |
| **Future Appearance** | Only on specified dates                 | Automatically in future periods          |
| **Edit Impact**       | Only that entry                         | All future occurrences                   |
| **Use Cases**         | Unique events, variable dates           | Annual holidays, regular events          |
| **Examples**          | Company 50th anniversary, Special event | Christmas (yearly), Monthly meeting      |

**When to Use One-Time:**

- Unique, non-repeating events
- Variable-date holidays (lunar calendar like Eid)
- Special closures or occasions
- Create new entry each year when date confirmed

**When to Use Recurring:**

- Fixed annual holidays (New Year, Independence Day)
- Regular meetings or events
- Weekly/monthly schedules
- Any predictable, repeating date

### Multi-Day Holidays

Single entry spanning multiple dates:

**Single-Day:**

```
Start Date: 2025-08-17
End Date: 2025-08-17
```

Result: Holiday only on Aug 17

**Multi-Day:**

```
Start Date: 2025-03-31
End Date: 2025-04-02
```

Result: Holiday on Mar 31, Apr 1, Apr 2 (3 days)

**Calendar Display:**

- Shows as single colored span across all days
- All dates within range marked as holiday
- One entry manages entire period

**Use Cases:**

- Extended religious holidays (5-day Eid)
- Long weekend closures
- Year-end shutdown periods
- Multi-day company events

### Permission Levels

Role-based access control:

| Role                   | View   | Create          | Edit           | Delete | Manage Types |
| ---------------------- | ------ | --------------- | -------------- | ------ | ------------ |
| **Employee**           | ✅ All | ❌ No           | ❌ No          | ❌ No  | ❌ No        |
| **Supervisor**         | ✅ All | ❌ No           | ❌ No          | ❌ No  | ❌ No        |
| **Department Manager** | ✅ All | ✅ Company only | ✅ Own entries | ❌ No  | ❌ No        |
| **HR Manager**         | ✅ All | ✅ All types    | ✅ All         | ✅ All | ✅ Yes       |
| **Super Admin**        | ✅ All | ✅ All types    | ✅ All         | ✅ All | ✅ Yes       |

**Access Details:**

- **View**: All users can see calendar for planning
- **Create**: Managers can add company-specific holidays only
- **Edit**: Restricted to creators or admins (avoid unauthorized changes)
- **Delete**: HR and admin only (prevent accidental deletion)
- **Manage Types**: HR and admin configure categories and colors

---

## Configuration

Before adding holiday calendar, configure these master data settings that define holiday.

1. **[Holiday Type](../../configuration/config-payroll/holiday-type.md)**

## Best Practices

### Holiday Setup

- **Plan Ahead**: Enter entire year's holidays at start of fiscal year
- **Use Recurring**: Set recurring for fixed-date annual holidays (saves time)
- **Consistent Naming**: Include year for variable dates (e.g., "Eid al-Fitr 1446 H")
- **Regular Review**: Update lunar calendar holidays 2-3 months in advance
- **Multi-Day Entry**: Use start/end dates for extended holidays (one entry, not multiple)

### Recurring Management

**Yearly:**

- Use for national holidays, religious observances with fixed dates
- Verify annually for lunar calendar holidays (create as one-time instead)

**Monthly:**

- Avoid days 29-31 (skips short months)
- Use days 1-28 for consistent monthly display

**Weekly:**

- Ideal for team meetings, regular events
- Based on weekday, not date number

### Calendar Coordination

Since Holiday Calendar doesn't auto-integrate:

**For Schedulers:**

- Check Holiday Calendar before generating work schedules
- Manually avoid assigning shifts on holidays
- Print/export for offline reference

**For HR:**

- Share holiday calendar with employees at year start
- Update promptly when dates change
- Use as reference for leave policies

**For Employees:**

- View before requesting leave (avoid redundancy)
- Plan long weekends around holidays

### View Selection

| Task                    | Use This View   |
| ----------------------- | --------------- |
| Annual planning         | Yearly          |
| Monthly scheduling      | Monthly         |
| Short-term coordination | Weekly          |
| Data entry/editing      | List            |
| Quick lookup            | Monthly or List |

---

## How to Use

<details>
<summary><strong>How to View Holiday Calendar</strong></summary>

**Steps:**

1. **Navigate:**

   - Go to **Attendance** → **Holiday Calendar**

2. **Select View:**

   - **Monthly**: Single-month detail (Previous/Next to navigate)
   - **Yearly**: 12-month overview grid
   - **Weekly**: Week-by-week view
   - **List**: Tabular data table

3. **Navigate Period:**

   - Use Previous/Next arrows (Monthly/Weekly/Yearly)
   - Click **Today** to return to current date
   - Click specific month in Yearly view to jump there

4. **View Holiday Details:**

   - **Calendar views**: Click on holiday for full info
   - **List view**: All details in grid columns
   - Hover for quick preview (if supported)

5. **Apply Filters (Optional):**
   - Select holiday types to show
   - Check "Show Recurring Only"
   - Use search box for specific holidays

:::tip
**Quick View Switch:**
Switch between Monthly/Yearly/Weekly/List without losing filters or selections.
:::

</details>

<details>
<summary><strong>How to Create Holidays</strong></summary>

**Steps:**

1. **Open Insert Form:**

   - Click **Insert** button, OR
   - Click empty date in calendar view (auto-fills date)

2. **Fill Basic Information:**

   - **Code**: Unique ID (e.g., CHRISTMAS_2025, NEW_YEAR)
   - **Name**: Display name (e.g., "Christmas Day")
   - **Remark**: Optional notes

3. **Set Dates:**

   - **Start Date**: First day
   - **End Date**: Last day (same as start for single-day)

4. **Choose Type:**

   - **Type**: Select category (National, Religious, Company, etc.)
   - **Color**: Auto-filled from type

5. **Configure Recurrence (Optional):**

   - **Is Recurring**: Check if holiday repeats
   - **Recurring Type**: Select frequency (Yearly, Monthly, Weekly, etc.)

6. **Save:**
   - Click **Save**
   - Holiday appears in calendar immediately

**Examples:**

**One-Time National Holiday:**

```
Code: INDEPENDENCE_2025
Name: Independence Day
Start: 2025-08-17
End: 2025-08-17
Type: National
Recurring: No
```

**Recurring Religious Holiday:**

```
Code: CHRISTMAS
Name: Christmas Day
Start: 2025-12-25
End: 2025-12-25
Type: Religious
Recurring: Yes
Recurring Type: Yearly
```

**Multi-Day Company Event:**

```
Code: COLLECTIVE_LEAVE_2025
Name: Eid Collective Leave
Start: 2025-03-31
End: 2025-04-04
Type: Company
Recurring: No
```

</details>

<details>
<summary><strong>How to Edit or Delete Holidays</strong></summary>

**Edit:**

1. Click on holiday (calendar view) or select row (list view)
2. Click **Edit** button or right-click → **Edit**
3. Modify fields as needed
4. Click **Save**

**Important:** Editing recurring holiday affects all future occurrences.

**Delete:**

1. Select holiday
2. Click **Delete** or right-click → **Delete**
3. Confirm deletion

:::warning
**Deleting Recurring:**
Removes all future occurrences. Cannot be undone. Consider deactivating instead if you want to preserve history.
:::

</details>

<details>
<summary><strong>How to Manage Holiday Types</strong></summary>

**Access:**

1. Navigate to Holiday Calendar
2. Click **Holiday Type** button
3. Opens configuration page

**Create Type:**

1. Click **Insert**
2. Fill:
   - Code: REGIONAL
   - Name: Regional Holiday
   - Color: #ffc107
   - Active: Checked
3. Click **Save**

**Edit Type:**

1. Select type → Click **Edit**
2. Change Name, Color, or Active status
3. Click **Save**
4. Color changes apply to all holidays of this type

**Deactivate Type:**

1. Edit type → Uncheck **Active** → Save
2. Type hidden from dropdown but existing holidays remain

</details>

<details>
<summary><strong>How to Filter and Search</strong></summary>

**Filter by Type:**

1. Select holiday type checkboxes
2. Calendar shows only selected types
3. Clear to show all

**Filter by Recurrence:**

1. Check "Show Recurring Only"
2. Displays only repeating holidays
3. Useful for annual template review

**Search:**

1. Type in search box (code, name, or remark)
2. Real-time filtering as you type
3. Clear search to show all

**Combine:**

- Use type + recurrence + search together
- Example: Religious + Recurring + "Christmas"

</details>

---

## FAQ

<details>
<summary><strong>What's the difference between recurring and one-time?</strong></summary>

**Recurring:**

- Set once, applies to future periods automatically
- Examples: Christmas (yearly), monthly meetings
- Edit affects all future occurrences

**One-Time:**

- Applies only to specified dates
- Examples: Company 50th anniversary, special event
- Must create new entry for next occurrence

**When to use recurring:** Fixed annual holidays, regular events
**When to use one-time:** Unique events, variable-date holidays

</details>

<details>
<summary><strong>How do I handle lunar calendar holidays (Eid, Chinese New Year)?</strong></summary>

**Recommended: Create as one-time yearly**

1. Create holiday as **one-time** (not recurring)
2. Include year in code: IDUL_FITRI_2025
3. Create new entry each year when date confirmed
4. Update 2-3 months before holiday

**Why not recurring:**

- Dates shift 10-12 days earlier each year
- System can't calculate lunar dates automatically
- Manual entry ensures accuracy

</details>

<details>
<summary><strong>Can I create multi-day holidays?</strong></summary>

**Yes**, use date range:

**Single-Day:**

```
Start: 2025-08-17
End: 2025-08-17
```

**Multi-Day (3 days):**

```
Start: 2025-03-31
End: 2025-04-02
```

All dates from start to end (inclusive) are marked as holiday. Calendar shows colored span across all days.

</details>

<details>
<summary><strong>Do holidays automatically block work schedules?</strong></summary>

**No**—Holiday Calendar is reference only.

**Manual coordination required:**

- Schedulers must check Holiday Calendar before creating schedules
- System doesn't auto-block scheduling on holidays
- If employee scheduled on holiday → Schedule Conflict detected
- Users manually avoid assigning work on holidays

**Best practice:** Add holidays before generating work schedules.

</details>

<details>
<summary><strong>Can I customize holiday colors?</strong></summary>

**Yes**, via Holiday Type:

1. Click **Holiday Type** button
2. Edit type → Change **Color** field
3. Save → All holidays of that type update color

**Or:**

- Override color when creating individual holiday (if system allows)

**Color tips:** Use high-contrast, limit to 6-8 colors, maintain consistency.

</details>

<details>
<summary><strong>What happens with monthly recurring on day 29-31?</strong></summary>

**Days 29-31 skip short months:**

- **Day 29**: Skipped in February (non-leap)
- **Day 30**: Skipped in February
- **Day 31**: Only occurs in 31-day months (7 times/year)

**Best practice:** Use days 1-28 for consistent monthly display.

**Alternative:** Create individual entries for specific months instead of monthly recurring.

</details>

<details>
<summary><strong>If I edit a recurring holiday, what happens?</strong></summary>

**Changes apply to all future occurrences.**

**Example:**

- Christmas set to Dec 25, recurring yearly
- Edit to change name from "Christmas" to "Christmas Day"
- All future years show "Christmas Day"

**Past occurrences:** Already recorded in attendance/payroll are unchanged.

**If change only for one year:** Create new one-time holiday instead of editing recurring.

</details>

<details>
<summary><strong>What's the difference between Holiday Calendar and Holiday Type?</strong></summary>

**Holiday Calendar:**

- Actual holiday dates and events
- What employees see for planning
- Examples: "Christmas Day - Dec 25, 2025"

**Holiday Type:**

- Categories for classifying holidays
- Configuration/admin setting
- Examples: "National", "Religious", "Company"
- Defines colors

**Relationship:** Each holiday belongs to one type. Type determines display color.

</details>

<details>
<summary><strong>What happens if I click a date in calendar view?</strong></summary>

**If date has no holidays:**

- Opens insert form
- Date pre-filled in start/end fields
- Fast holiday creation

**If date has holidays:**

- Opens edit form for that holiday
- Shows first/primary holiday if multiple exist

**Benefit:** Faster than clicking Insert button and selecting date manually.

</details>

<details>
<summary><strong>Can I import holidays from external sources?</strong></summary>

**No direct import feature** in standard interface.

**Options:**

- **Manual entry**: Create one by one (set recurring for annual)
- **Bulk insert**: Check with admin if CSV/Excel import available
- **API integration**: Developer can integrate with external holiday databases

**Best practice:**

- Enter at start of fiscal year
- Set recurring for fixed-date holidays
- Manual entry for variable dates

</details>
