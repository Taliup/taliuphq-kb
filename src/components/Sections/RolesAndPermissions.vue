<template>
    <div class="text-left" ref="rolesPermissionsContent">
        <h2 class="border-btm">Roles And Permissions</h2>
        
        <h4 class="border-btm">Manage a Role</h4>
        <ul class="mt-3">
            <li>
                <p>
                    Navigate to the <b>Employees</b> section and select <b>Roles and Permissions.</b>
                </p>
            </li>
            <li>
                <p>
                    In the Roles and Permissions page, you will see a table with the names of all the roles along the top and the permissions available for your terminals along the left-hand side.
                </p>
            </li>
            <li>
                <p>Toggle the switches next to each permission to enable or disable them for the selected role.</p>
            </li>
            <li>
                <p>Enabled permissions will appear with a purple switch, while disabled permissions will be grayed out.</p>
            </li>
            <li>
                <p>Adjust the permissions according to your desired access levels for the role.</p>
            </li>
            <li>
                <p>Make sure to carefully consider the permissions for each role to ensure the appropriate level of access for your employees.</p>
            </li>
            <li>
                <p> Save the changes.</p>
            </li>
        </ul>

        <h4 class="border-btm">Add a Custom Role</h4>
        <ul class="mt-3">
            <li>
                <p>Go to the <b>Employees</b> section and select <b>Roles and Permissions.</b></p>
            </li>
            <li>
                <p>Click on the <b>Add Custom Role</b> button.</p>
            </li>
            <li>
                <p>In the Add Custom Role pop-up window, enter the name of the new role in the <b>Role Name</b> field</p>
            </li>
            <li>
                <p>Consider the permissions you want to assign to the new role, ensuring they align with the job responsibilities of the employees assigned to the role.</p>
            </li>
            <li>
                <p>Click the <b>Save</b> button to create the new custom role in Taliup HQ.</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'RolesAndPermissions',
    data() {
        return {

        }
    },
}
</script>

<style scoped>
p {
    line-height: 1.7rem;
}
</style>