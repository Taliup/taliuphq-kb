<template>
    <div class="text-left" ref="catalogsContent">
        <h2 class="border-btm">Catalogs, Categories and Products</h2>

        <h4 class="border-btm">Create a Catalog</h4>
        <ul class="mt-3">
            <li>Go to the "Catalog" section in Taliup HQ.</li>
            <li>Click on "Create Catalog."</li>
            <li>A pop-up window will appear.</li>
            <li>Enter the name of the Catalog.</li>
            <li>Click on "Create" to save your changes.</li>
            <li>The new Catalog will be added to the list of available Catalogs.</li>
            <li>You can assign the Catalog to a terminal for use by terminal users.</li>
        </ul>

        <h4 class="border-btm">Add a Catalog to a Terminal</h4>
        <note 
        :messages="['You can directly assign a new catalog to a terminal without removing the previously assigned catalog. Simply select a new catalog from the dropdown list and click the Save Terminal button to replace the existing catalog.']"
        />
        
        <ul class="mt-3">
            <li>Locate the terminal you want to manage in the Terminals list.</li>
            <li>Click on "Manage Terminal" to open the pop-up window.</li>
            <li>In the Manage Terminal pop-up, you will see the Serial Number and Terminal ID (TID) for the selected terminal.</li>
            <li>Under the "Current Catalog" section, you can see the currently assigned catalog's name. If a catalog is already assigned, you have the option to remove it by clicking the "Remove Catalog" button.</li>
            <li>To assign a new catalog to the terminal, select a catalog from the dropdown list under the "Catalog" field.</li>
            <li>If there is already a catalog assigned to the terminal, you can change it by selecting a different catalog from the list.</li>
            <li>After selecting the catalog you want to assign, click the "Save Terminal" button to confirm your changes.</li>
            <li>The catalog will now be assigned to the selected terminal.</li>
        </ul>

        <h4 class="border-btm">Edit a Catalog</h4>
        <ul class="mt-3">
            <li>Go to the "Catalog" section in Taliup HQ.</li>
            <li>Locate the catalog you want to edit.</li>
            <li>Click on the pencil icon above the catalog name.</li>
            <li>A pop-up will appear.</li>
            <li>Enter the new name for the catalog.</li>
            <li>Click on "Update" to save the changes.</li>
            <li>The name of the catalog will be updated throughout the Taliup HQ platform.</li>
        </ul>

        <h4 class="border-btm">Delete a Catalog</h4>
        <ul class="mt-3">
            <li>Go to the "Catalog" section in Taliup HQ.</li>
            <li>Find the catalog you wish to delete.</li>
            <li>Click on the pencil icon above the catalog name.</li>
            <li>A menu with options will appear.</li>
            <li>Select the option to delete the catalog.</li>
            <li>A confirmation pop-up will appear, asking you to confirm the deletion.</li>
            <li>If you're sure you want to delete the catalog, click "Delete" in the confirmation pop-up.</li>
            <li>The catalog and all its associated items will be permanently removed. Be aware that this action cannot be undone, so ensure you want to delete the catalog before confirming.</li>
        </ul>

        <h4 class="border-btm">Add Tax to a Catalog</h4>
        <ul class="mt-3">
            <li>Go to the Catalogs page on Taliup HQ.</li>
            <li>Select the Catalog you want to apply taxes to.</li>
            <li>Click on the Taxes button near the top of the page.</li>
            <li>In the Add Tax to Catalog pop-up, choose to create a new tax or select an existing one.</li>
            <li>Click on Add Taxes to apply the tax to the selected Catalog.</li>
        </ul>

        <section id="products">
            <products />
        </section>

        <section id="categories">
            <categories />
        </section>

        <section id="inventory">
            <inventory />
        </section>
    </div>
</template>

<script>
export default {
    name: 'Catalogs',
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