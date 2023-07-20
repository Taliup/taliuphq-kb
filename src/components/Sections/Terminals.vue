<template>
    <div class="text-left">
        <h2 class="border-btm">Terminals</h2>

        <ul class="p-0 mt-3 main-ul" ref="terminalsContent">
            <li>
                <h6>Step 1: Accessing Taliup HQ</h6>
                <ul>
                <li><p>Open Taliup HQ.</p></li>
                </ul>
            </li>
            <li>
                <h6>Step 2: Navigating to the Settings Section</h6>
                <ul>
                <li><p>Once the application is launched, locate and click on the <b>Settings</b> section within the software.</p></li>
                </ul>
            </li>
            <li>
                <h6>Step 3: Terminals Overview</h6>
                <ul>
                <li><p>In the Settings section, you will find the <b>Terminals</b> option. Click on it.</p></li>
                <li><p>This will provide you with a list of all the terminals that have been synced with Taliup HQ from your merchant terminal provider.</p></li>
                <li><p>Basic information about each terminal, such as Serial Number, Terminal ID, Name, and Status, will be captured and displayed in this list.</p></li>
                </ul>
            </li>
            <li>
                <h6>Step 4: Assigning a Catalog to a Terminal</h6>
                <ul>
                <li><p>To assign a catalog to a terminal, select the terminal from the list by clicking on it.</p></li>
                <li><p>Once the terminal is selected, locate and click the <b>Assign Catalog</b> button.</p></li>
                <li><p>You will be prompted to choose a catalog from your existing list of catalogs.</p></li>
                </ul>
            </li>
            <li>
                <h6>Step 5: Catalog Selection</h6>
                <ul>
                <li><p>From the available catalogs, choose the appropriate one that you wish to associate with the selected terminal.</p></li>
                <li><p>Click on the chosen catalog to confirm the assignment.</p></li>
                </ul>
            </li>
            
            <note :messages="['Please note that terminal management cannot be directly performed within Taliup HQ. However, by utilizing the Sync Terminals option in Taliup HQ, the merchant can ensure that the terminal information remains up-to-date and accurate within the software.']"/>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SettingUp',
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

p {
    line-height: 1.7rem;
}
</style>