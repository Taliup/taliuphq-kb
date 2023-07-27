<template>
    <div class="text-left" ref="inventoryContent">
        <h2 class="border-btm">Inventory</h2>

        <h4 class="border-btm">Manage Inventory</h4>
        <ul class="mt-3">
            <li>Go to the "Inventory" section in Taliup HQ.</li>
            <li>Locate the Product you want to manage.</li>
            <li>Click on the "Manage" button next to the Product.</li>
            <li>You will be taken to the Manage Inventory page for the selected Product.</li>
            <li>Update the quantity of the Product or for each Production/Attribute combination.</li>
            <li>Enter the new quantity in the appropriate field. Click "Submit" to save the changes.</li>
            <li>As the merchant sells products through Taliup Register (POS App), the quantity value will automatically decrease to reflect the sales made.</li>
        </ul>

        <h4 class="border-btm">Set a Reorder Point</h4>
        <ul class="mt-3">
            <li>Go to the "Inventory" section in Taliup HQ.</li>
            <li>Select the Product you want to manage.</li>
            <li>Click on the "Manage" button to access the Manage Inventory page.</li>
            <li>Set a Reorder Point for the Product or Product/Attribute combination:</li>
            <li>Define the threshold level at which the merchant wants to be notified.</li>
            <li>Enter the Reorder Point value for the selected item.</li>
            <li>Save the changes.</li>
        </ul>

        <note 
        :messages="[
            'When the inventory quantity reaches or falls below the set Reorder Point, you will be notified through:',
            'Email: An email notification will be sent to you.',
            'Taliup HQ Message Center: You will receive a notification within the Taliup HQ platform.'
        ]"
        />

    </div>
</template>

<script>
export default {
    name: 'Inventory',
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