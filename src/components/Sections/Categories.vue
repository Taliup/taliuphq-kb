<template>
    <div class="text-left" ref="categoriesContent">

        <h2 class="border-btm">Categories</h2>

        <h4 class="border-btm">Create a Category</h4>
        <ul class="mt-3">
            <li>Go to the "Catalogs" section in Taliup HQ.</li>
            <li>Select the Catalog to which you want to add a category.</li>
            <li>Click on "Create Category" to open the Create Category pop-up.</li>
            <li>Enter a name for the Category in the Category Name field.</li>
            <li>Click on "Create" to save the new Category.</li>
            <li>Assign the Category to specific products or services within the Catalog to further organize your offerings.</li>
        </ul>

        <h4 class="border-btm">Edit a Category Name</h4>
        <ul class="mt-3">
            <li>Go to the "Catalogs" section in Taliup HQ.</li>
            <li>Select the Catalog that contains the Category you want to edit.</li>
            <li>Find the Category and click on the pencil icon next to its name.</li>
            <li>In the Edit Category pop-up, modify the name in the Category Name field.</li>
            <li>Click on the "Update" button to save the changes.</li>
            <li>The Category name will be updated in Taliup HQ and associated Catalogs or products.</li>
        </ul>

        <h4 class="border-btm">Delete a Category</h4>
        <ul class="mt-3">
            <li>Go to the "Catalogs" section in Taliup HQ.</li>
            <li>Select the Catalog that contains the Category you want to delete.</li>
            <li>Find the Category and click on the pencil icon next to its name.</li>
            <li>In the Edit Category pop-up, scroll to the bottom and click on the "Delete" button.</li>
            <li>A confirmation message will appear, asking you to confirm the deletion.</li>
            <li>If you're sure you want to delete the Category, click on "Delete" to confirm.</li>
            <li>Note that deleting a Category will also remove any items associated with it.</li>
            <li>Ensure you're certain about deleting the Category before proceeding.</li>
        </ul>

        <h4 class="border-btm">Add Tax to a Product</h4>
        <ul class="mt-3">
            <li>Go to the Catalogs section in Taliup HQ.</li>
            <li>Click on the "Products" tab.</li>
            <li>Find the product you want to add taxes to, either by scrolling through the list of products or by using the search function.</li>
            <li>Click on the product to open its details page.</li>
            <li>Under the "Product Taxes" section click on "Add Tax" to open the Add Tax to Product pop-up window.</li>
            <li>Select the tax or taxes you want to add to the product by clicking on the checkbox next to each tax.</li>
            <li>If you want to remove a tax that is already added, simply unselect it by clicking on the checkbox again.</li>
            <li>Once you have selected or unselected the appropriate taxes, click on "Add Taxes" to apply the changes.</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Categories',
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