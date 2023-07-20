<template>
    <div class="text-left" ref="timesheetsContent">
        <h2 class="border-btm">Timesheets</h2>

        <h4 class="border-btm">Manage Timesheets</h4>
        <ul class="mt-3">
            <li>Go to the <B>Employees</B> section in Taliup HQ.</li>
            <li>Find the specific employee you want to manage Timesheets for.</li>
            <li>Click on <B>Manage Timesheets</B> for that employee.</li>
            <li>View and manage the Timesheets for the selected employee.</li>
            <li>By default, you’ll see Timesheets for the current week.</li>
            <li>To view Timesheets for a different date or date range, use the Date Range filter at the top of the page.</li>
        </ul>

        <h4 class="border-btm">Create Timesheets</h4>
        <ul class="mt-3">
            <li>Go to the <B>Employees</B> section in Taliup HQ.</li>
            <li>Select the employee you want to create a Timesheet for.</li>
            <li>Click on <B>Manage Timesheets.</B></li>
            <li>On the Manage Timesheets page, click on <B>Create Timesheet.</B></li>
            <li>A pop-up will appear.</li>
            <li>Choose a Clock In and Clock Out date and time.</li>
            <li>Click on <B>Create Timesheet</B> to save your changes.</li>
            <li>The new Timesheet will be added to the employee’s Timesheet history.</li>
        </ul>

        <h4 class="border-btm">Edit a Timesheet</h4>
        <ul>
            <li>Go to the <B>Employees</B> section in Taliup HQ.</li>
            <li>Find the employee whose Timesheet you want to edit.</li>
            <li>Click on <B>Manage Timesheets.</B></li>
            <li>By default, you’ll see Timesheets for the current week.</li>
            <li>To view Timesheets for a different date range, use the Date Range filter at the top.</li>
            <li>Locate the Timesheet you want to edit on the Manage Timesheets page.</li>
            <li>Click on <B>Edit</B> for that Timesheet.</li>
            <li>If you can’t find the Timesheet, ensure you have the correct date range selected.</li>
            <li>In the Edit Timesheet pop-up, change the Start Date and/or End Date to the desired chronological date/time.</li>
            <li>The Hours, Minutes, and Pay will update accordingly when you make changes to the Timesheet.</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Timesheets',
    data() {
        return {

        }
    },
}
</script>

<style scoped>
ul li {
    margin-bottom: 13px;
}

p {
    line-height: 1.7rem;
}
</style>