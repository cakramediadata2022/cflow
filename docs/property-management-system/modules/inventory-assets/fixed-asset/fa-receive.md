---
sidebar_position: 2
---

# FA Receive

The FA Receive feature is used to administer the receipt of fixed asset items ordered or purchased from suppliers. This process ensures that all received assets are properly recorded and managed.

## Step-by-Step Process for FA Receive

1. Select the **Fixed Asset** menu, then click the **FA Receive** submenu to open the FA Receive window.
2. Click the **Insert** button to add a new entry. The FA Receive Editor window will appear.
3. Fill in the **Receive Information** section:
   - Enter the receipt date in **Date**.
   - Enter the purchase order number in **PO Number** (see FA Receive with FA Purchase Order).
   - Select the supplier in **Supplier**.
   - Enter the invoice or related document number in **Invoice/Doc #**.
   - Check **Separate Discount & Tax** if you want to manage discount and tax per item.
4. Add items in the **Detail Information** section:
   - Select the item in **Item**.
   - Enter the item name in **Detail Name**.
   - Enter the quantity in **Quantity**.
   - Enter the unit of measure in **UOM**.
   - Enter the unit price in **Price**.
   - Enter the discount in **Discount** (active if Separate Discount & Tax is checked).
   - Enter the tax in **Tax** (active if Separate Discount & Tax is checked).
   - Enter the expiration date in **Expire** if applicable.
   - Add any notes in **Remark**.
   - Click **Insert** to add the item to the list.
   - Repeat as needed to add more items.
5. To edit an item:
   - Select the item in the detail table and click the **Update** icon. The button will change to **Save**.
   - The fields will populate with the selected item's data. Make the necessary changes.
   - Click **Save** to update the item. The button will revert to **Update**.
6. To delete an item:
   - Select the item in the table and click the **Delete** icon.
   - The item will be removed from the list.
7. Fill in the **Total Information** section:
   - **Sub Total** is filled automatically.
   - Enter the overall discount in **Discount**.
   - Check **Discount as Income** if the discount is considered income.
   - Enter the purchase tax in **Tax**.
   - Check **Tax as Expense** if the tax is considered an expense.
   - Enter shipping costs in **Shipping**.
   - Check **Shipping as Expense** if shipping is considered an expense.
   - **Total** is filled automatically.
8. Enter payment information:
   - Select the payment bank account in **Bank Account**.
   - Enter the payment amount in **Amount**.
   - **Balance** is the difference between total and payment amount; if present, it is considered credit or payable.
   - If there is a balance, enter the due date in **Due Date**.
   - Add any notes in **Remark**.
9. Click **Save** to finish the FA Receive process, or **Close** to cancel.

### Duplicate FA Receive

To duplicate an existing FA Receive entry, use the **Duplicate** icon. This allows you to quickly create a new entry with the same data as an existing one.

---

© 2024 PT. Cakra Media Data
