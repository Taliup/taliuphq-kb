<template>
    <div class="text-left" ref="employeesContent">
        <h2 class="border-btm">Employees</h2>

        <ul class="p-0 mt-3 main-ul">
            <li class="mb-3">
                <h6>Step 1: Accessing Taliup HQ</h6>
                <ul class="sub-ul">
                    <li>Open the Taliup HQ application on your device.</li>
                </ul>
            </li>
            <li class="mb-3">
                <h6>Step 2: Navigating to the Employees Section</h6>
                <ul class="sub-ul">
                    <li>Once the application is launched, locate and click on the <b>Employees</b> section within the software.</li>
                </ul>
            </li>
            <li class="mb-3">
                <h6>Step 3: Employee List Overview</h6>
                <ul class="sub-ul">
                    <li>In the Employees section, you will find a comprehensive list of all employees associated with the Taliup HQ account.</li>
                    <li>Note that during registration, an employee with the Owner role is automatically created, typically representing the business owner.</li>
                </ul>
            </li>
            <li class="mb-3">
                <h6>Step 4: Understanding Default Roles</h6>
                <ul class="sub-ul">
                    <li>Taliup HQ comes with three default roles: Owner, Manager, and Employee.</li>
                    <li>Each role has different permissions and access levels within the software, allowing customization based on job responsibilities. See: Roles and Permissions section.</li>
                </ul>
            </li>
            <li class="mb-3">
                <h6>Step 5: Creating Custom Roles (Optional)</h6>
                <ul class="sub-ul">
                    <li>If necessary, you can create custom roles to meet the merchant’s business requirements.</li>
                    <li>Click on the <b>Roles and Permissions</b> button within the Employees section to configure custom roles with specific permissions. See: Roles and Permissions section.</li>
                </ul>
            </li>
            <li class="mb-3">
                <h6>Step 6: Adding a New Employee</h6>
                <ul class="sub-ul">
                    <li>To add a new employee, locate and click on the <b>Add Employee</b> button.</li>
                    <li>Fill out the required information for the new employee in the provided fields.</li>
                    <li>Assign a role to the employee and set permissions according to their job responsibilities.</li>
                </ul>
            </li>
            <li class="mb-3">
                <h6>Step 7: Viewing Employee Performance Metrics</h6>
                <ul class="sub-ul">
                    <li>Taliup HQ provides valuable employee performance metrics, including sales and transaction data.</li>
                    <li>Merchants can utilize these metrics to evaluate employee performance and make data-driven decisions for business improvement.</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Employees',
    data() {
        return {

        }
    },
}
</script>

<style scoped>
.main-ul {
    list-style: none;
}

.sub-ul li {
    margin-bottom: 8px;
}

p {
    line-height: 1.7rem;
}
</style>