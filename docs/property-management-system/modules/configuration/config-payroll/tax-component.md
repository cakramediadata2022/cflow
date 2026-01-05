---
title: Tax Component
sidebar_position: 18
---

# Tax Component

Define how payroll components are treated in Indonesian income tax (PPh 21/26) calculations.

**Purpose:**

- Map payroll components to tax calculation rules
- Ensure correct taxable income determination
- Support different tax treatment per income type
- Comply with PMK 168/2023 and tax regulations
- Enable accurate tax reporting (SPT Masa PPh 21)

**Access:** Superadmin and Client Admin only

**Why Restricted:** Incorrect tax configuration causes compliance violations and penalties.

**Tax Treatment Types:**

| Treatment              | Description                      | Examples                                      |
| ---------------------- | -------------------------------- | --------------------------------------------- |
| **Taxable Income**     | Included in gross taxable income | Base salary, allowances, bonuses, overtime    |
| **Non-Taxable Income** | Excluded from taxable income     | Reimbursements (with receipts, within limits) |
| **Tax Deductible**     | Reduces taxable income           | BPJS employee portions, pension fund, zakat   |
| **Non-Deductible**     | Doesn't affect taxable income    | Loan repayments, penalties, fines             |

**Common Tax Component Mappings:**

**Regular Income (Taxable):**

- Base Salary → Taxable ✅
- Fixed Allowances (transport, meal, housing) → Taxable ✅
- Variable Allowances → Taxable ✅
- Bonuses (performance, annual) → Taxable ✅
- Overtime → Taxable ✅
- Commissions → Taxable ✅

**Non-Taxable Benefits:**

- Reimbursements with receipts (within limits per PMK) → Non-Taxable ❌
- Certain allowances per PMK 168/2023 → Non-Taxable ❌

**Tax Deductible (Reduce Taxable Income):**

- BPJS Kesehatan Employee → Deductible ✅
- BPJS Ketenagakerjaan Employee (JHT, JP) → Deductible ✅
- Pension Fund (approved by Menteri/OJK) → Deductible ✅
- Zakat (paid to official Badan Amil Zakat) → Deductible ✅

**Non-Deductible:**

- Loan/Advance Repayments → Non-Deductible ❌
- Late Penalties/Fines → Non-Deductible ❌
- Unpaid Leave Deduction → Non-Deductible ❌ (handled via prorata)

**Fields:**

| Field                    | Type     | Description                                   |
| ------------------------ | -------- | --------------------------------------------- |
| **Tax Component Code**   | Text     | Unique identifier                             |
| **Tax Component Name**   | Text     | Display name                                  |
| **Tax Treatment**        | Dropdown | Taxable/Non-Taxable/Deductible/Non-Deductible |
| **Regulation Reference** | Text     | PMK/regulation basis                          |
| **Description**          | Text     | Detailed explanation                          |
| **Active**               | Toggle   | Enable/disable                                |

**How to Configure:**

1. Navigate to **Payroll Component > Configuration > Tax Component**
2. Click **Insert** button
3. Fill **Tax Component Code** and **Name**
4. Select **Tax Treatment** type
5. Enter **Regulation Reference** (e.g., "PMK 168/2023 Pasal 12")
6. Add **Description** explaining tax treatment
7. Set **Active** = Yes
8. Click **Save**

**Mapping to Payroll Components:**

After creating tax components, map them to payroll components:

1. Open payroll component (Earnings/Deductions)
2. Select **Tax Component** from dropdown
3. System applies tax treatment automatically during payroll calculation

**Best Practices:**

- Always document regulation reference
- Consult tax professional for complex cases
- Update when tax regulations change
- Test with sample payroll before production
- Review quarterly for compliance

**Warning:**

- ⚠️ Incorrect tax configuration = compliance violations
- ⚠️ Potential penalties from tax authority (DJP)
- ⚠️ Employee tax issues at year-end (SPT)
- ⚠️ Always verify with PMK 168/2023 or current regulation

**Regulation References:**

- **PMK 168/2023**: Income Tax Article 21 regulations
- **PP 68/2009**: Calculation of PPh 21 and PPh 26
- **BPJS Regulations**: For statutory deductions treatment
- Consult DJP (Direktorat Jenderal Pajak) for clarification
