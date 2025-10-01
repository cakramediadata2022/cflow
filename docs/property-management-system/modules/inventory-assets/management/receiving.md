---
sidebar_position: 3
---

# Receiving

The Receiving feature is used to administer goods ordered or purchased from suppliers. Items received can be added to the warehouse/store or marked as consumed immediately upon receipt.

## Step-by-Step Process for Receiving

1. Select the **Inventory & Assets** menu, then click the **Receiving** submenu to open the Receiving window.
2. Click the **Insert** button to add a new receiving entry. The Receiving Editor window will appear.
3. Fill in the **Receive Information** section:
   - Enter the receipt date in **Date**.
   - Enter the purchase order number in **PO Number** (see Receiving from Purchase Order).
   - Select the supplier in **Supplier**.
   - Enter the invoice or related document number in **Invoice/Doc #**.
4. Fill in the **Directly Out, Discount, and Tax** information:
   - Check **Directly Out** if the items are consumed immediately.
   - Select **Journal as Cost** or **Journal as Expense** as appropriate.
   - Select the sub department using the items in **Sub Department**.
   - Enter the document number for outgoing items in **Document #**.
   - Check **Separate Discount & Tax** to manage discount and tax per item.
5. Add items in the **Detail Information** section:
   - Select the storage location in **Store**.
   - Select the item in **Item**.
   - Enter the quantity in **Quantity**.
   - Enter the unit of measure in **UOM**.
   - Enter the unit price in **Price**.
   - Enter the discount in **Discount** (active if Separate Discount & Tax is checked).
   - Enter the tax in **Tax** (active if Separate Discount & Tax is checked).
   - Enter the expiration date in **Expire** if applicable.
   - Add any notes in **Remark**.
   - Click **Insert** to add the item to the list.
   - Repeat as needed to add more items.
6. To edit an item:
   - Select the item in the detail table and click the **Edit** icon. The button will change to **Save**.
   - The fields will populate with the selected item's data. Make the necessary changes.
   - Click **Save** to update the item. The button will revert to **Update**.
7. To delete an item:
   - Select the item in the table and click the **Delete** icon.
   - The item will be removed from the list.
8. Fill in the **Total Information** section:
   - **Sub Total** is filled automatically.
   - Enter the overall discount in **Discount**.
   - Check **Discount as Income** if the discount is considered income.
   - Enter the purchase tax in **Tax**.
   - Check **Tax as Expense** if the tax is considered an expense.
   - Enter shipping costs in **Shipping**.
   - Check **Shipping as Expense** if shipping is considered an expense.
   - **Total** is filled automatically.
9. Enter payment information:
   - Select the payment bank account in **Bank Account**.
   - Enter the payment amount in **Amount**.
   - **Balance** is the difference between total and payment amount; if present, it is considered credit or payable.
   - If there is a balance, enter the due date in **Due Date**.
   - Add any notes in **Remark**.
10. Click **Save** to finish the receiving process.

### Receiving from Purchase Order

1. Select the **Inventory & Assets** menu, then click the **Receiving** submenu.
2. Click the **Insert** button to add a new receiving entry.
3. Fill in the **Receive Information** section:
   - Enter the receipt date in **Date**.
   - Enter the **PO Number**; item details will auto-fill from the purchase order.
   - Supplier will auto-fill.
   - Enter the invoice or related document number in **Invoice/Doc #**.
4. Fill in the **Directly Out, Discount, and Tax** information as above.
5. To add items not in the purchase order, use the **Detail Information** section as described above.
6. Edit or delete items as needed.
7. Fill in the **Total Information** and payment details as above.
8. Click **Save** to finish. The purchase order status will change to **Receive**.

---

© 2024 PT. Cakra Media Data
