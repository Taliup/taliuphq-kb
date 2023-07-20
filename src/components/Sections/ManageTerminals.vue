<template>
    <div class="text-left">
        <h2 class="border-btm">Manage Terminals</h2>

        <ul class="p-0 mt-3 main-ul" ref="manageTerminalsContent">
            <li>
                <h6>Step 1: Accessing Terminal Management</h6>
                <ul>
                    <li><p>Open Taliup HQ on your device.</p></li>
                    <li><p>Navigate to the <b>Terminals</b> section.</p></li>
                </ul>
            </li>
            <li>
                <h6>Step 2: Managing a Terminal</h6>
                <ul>
                    <li><p>In the Terminals list, locate the terminal you wish to manage.</p></li>
                    <li><p>Click on the <b>Manage Terminal</b> option associated with the specific terminal.</p></li>
                </ul>
            </li>
            <li>
                <h6>Step 3: Terminal Information</h6>
                <ul>
                    <li><p>In the Manage Terminal pop-up window, you will find the Serial Number and Terminal ID (TID) of the selected terminal.</p></li>
                    <li><p>Information about the currently assigned catalog will be displayed under the <b>Current Catalog</b> field.</p></li>
                </ul>
            </li>
            <li>
                <h6>Step 4: Assigning a Catalog</h6>
                <ul>
                    <li><p>If there is no catalog currently assigned, the <b>Current Catalog</b> field will be empty, and the <b>Remove Catalog</b> button will be inactive.</p></li>
                    <li><p>Select a catalog from the dropdown list under the <b>Catalog</b> field to assign it to the terminal.</p></li>
                </ul>
            </li>
            <li>
                <h6>Step 5: Saving Changes</h6>
                <ul>
                    <li><p>After selecting the catalog to assign, click the <b>Save</b> button to confirm the changes.</p></li>
                </ul>
            </li>
            <li>
                <h6>Step 6: Removing a Catalog</h6>
                <ul>
                    <li><p>If a catalog is already assigned to the terminal, you can remove it by clicking the <b>Remove Catalog</b> button.</p></li>
                    <li><p>A confirmation prompt will appear. Click <b>Yes</b> to proceed with the removal.</p></li>
                </ul>
            </li>
        </ul>

        <note :messages="['Each terminal can have only one catalog assigned at a time. When assigning a new catalog, it will replace the existing one if applicable. Be cautious with timing catalog removals to minimize disruptions to ongoing transactions. Removing a catalog from a terminal means it won’t be available on that terminal until it is assigned again.']"/>
    </div>
</template>

<script>
export default {
    name: 'ManageTerminals',
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

.main-ul > li {
    margin-bottom: 15px;
}

p {
    line-height: 1.7rem;
    margin-bottom: 10px;
}
</style>