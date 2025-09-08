---
sidebar_position: 2
---

# Day End Close

Day End Close is a feature used to process the closing of daily hotel transactions. The system performs several checks and operations during this process:

1. Reservation check
2. Daily Charge check
3. Guest check-out check
4. Open transaction check
5. Room status update
6. Data backup
7. Date change
8. Notification for insufficient deposits

During the Night Audit process, there are two types of messages:

- **Critical Error**: Issues that must be resolved before proceeding.
- **Warning Error**: Informational messages that do not require immediate resolution.

## Steps for Day End Close

1. Select the Night Audit menu, then click the Day End Close submenu.
2. Click the **Precheck Dayend Close** button. The system will display Critical Error and Warning Error messages.
3. Review the Critical Error messages. Each error will include a description and suggested solutions:
   - **Must check in today**: There are reservations scheduled to check in today but have not yet checked in.
     - Solution 1: Check in the guest if they have arrived.
     - Solution 2: Cancel the reservation if the guest will not check in.
     - Solution 3: Change Arrival date if the guest will arrive later and rooms are available.
   - **Must check out today**: There are guests scheduled to check out today but have not yet checked out.
     - Solution 1: Check out the guest if they have left.
     - Solution 2: Extend the stay if the guest will remain longer.
   - **No room charge posted today**: Daily charges have not been posted. Solution: Use Auto Posting Transaction.
   - **Captain Order still open**: There are open transactions in the POS. Solution: Close transactions in the Cakrasoft Point of Sales application.
   - For points a, b, and c, you can resolve the issue by clicking the cell in the Solution column.
4. After resolving all Critical Errors, click **Precheck Dayend Close** again to verify.
5. If only Warning Errors remain, you may proceed with the Night Audit.
6. Ensure Critical Errors are zero before proceeding.
7. Click **Proceed Dayend Close**. A progress window will appear.
8. Wait until the Dayend Close process reaches 100% completion.
9. The system will automatically log off when finished.

---

