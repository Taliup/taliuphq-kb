<template>
    <div class="text-left" ref="productsContent">
        <h2 class="border-btm">Products</h2>

        <p>
            To create a new product on Taliup HQ, there are four different methods you can use:
        </p>

        <h4 class="border-btm">Product</h4>
        <ul class="mt-3">
            <li>Go to the Catalogs page and click on the Products tab.</li>
            <li>Click on "Add Products".</li>
            <li>Enter the Name and Price of the product (required fields).</li>
            <li>Optionally, add a Description, SKU, and Attributes.</li>
            <li>Click on "Add Attribute" to add a new attribute or select from an existing attribute.</li>
            <li>Click the X to close the Attributes drawer.</li>
            <li>Repeat these steps to add as many products as you'd like.</li>
            <li>Once you are done, click on Save Products.</li>
        </ul>

        <h4 class="border-btm">From a Catalog</h4>
        <ul class="mt-3">
            <li>Make sure you have at least one Catalog.</li>
            <li>Go to the Catalogs page, select a Catalog, and open it.</li>
            <li>Click on "Add Product".</li>
            <li>Enter the Name and Price of the product (required fields).</li>
            <li>Optionally, add a SKU.</li>
            <li>Click "Create".</li>
            <li>Repeat these steps to add as many products as you'd like.</li>
        </ul>

        <h4 class="border-btm">From a Category</h4>
        <ul class="mt-3">
            <li>Make sure you have a Catalog with a Category inside.</li>
            <li>Go to the Catalogs page, find and open the Catalog with the Category inside.</li>
            <li>Select a Category (or create a new one).</li>
            <li>Click on "Add Product".</li>
            <li>Enter the Name and Price of the product (required fields).</li>
            <li>Optionally, add a SKU.</li>
            <li>Click "Create New".</li>
            <li>Repeat these steps to add as many products as you'd like.</li>
        </ul>

        <h4 class="">Bulk Upload</h4>
        
        <h4 class="border-btm">Bulk Upload Attributes:</h4>
        <ul class="mt-3">
            <li>Go to the "Catalogs" page in Taliup HQ.</li>
            <li>Click on the "Products" tab.</li>
            <li>Click on the "Bulk Upload" button to access the bulk upload page.</li>
            <li>The bulk upload page is divided into two parts: Attributes and Products.</li>
            <li>To perform an Attributes Bulk Upload:</li>
            
            <note 
            :messages="[
                'Click on Bulk Upload under the Products tab. Select the Attributes checkbox.',
                'Download the Attributes Bulk Upload template CSV. Assign a unique identifier to each Attribute.',
                'Indicate whether the Product is single or more using TRUE or FALSE. Specify the maximum number if applicable.',
                'Assign prices to Attribute values.',
                'Save the template as a CSV file on your computer.'
            ]"
            />
            
            <li>Return to Catalogs &gt; Products &gt; Bulk Upload.</li>
            <li>Select "Attributes" and click "Browse" to locate the CSV file on your computer.</li>
            <li>Select the CSV file, click "Open," and then click "Upload" to upload the Attributes to Taliup HQ.</li>
        </ul>

        <h4 class="border-btm">Bulk Upload Products:</h4>
        <ul class="mt-3">
            <li>To perform a Products Bulk Upload: Select the "Products" checkbox on the Bulk Upload page. Download the Products Bulk Upload template CSV.</li>
            <li>In the Products Bulk Upload CSV: List each Product line by line.</li>

            <note 
            :messages="[
                'Each Product requires a Name and Price.',
                'SKU, Catalog, Category, and Attribute fields are optional.',
                'If a Catalog does not exist, it will be created based on the provided information.',
                'If a Category is specified, a Catalog must also be provided. Attributes are added using the field naming scheme: mod.identifier[number]',
                'The value for the Product\'s Attribute should match the identifier used in the Attribute Bulk Upload.',
                'Add as many Attribute fields as needed.',
                'Save the Products Bulk Upload template as a CSV file on your computer.'
            ]"/>

            <li>Go to Catalogs &gt; Products &gt; Bulk Upload.</li>
            <li>Select the "Products" checkbox.</li>
            <li>Click on "Browse" to locate the Products Bulk Upload CSV file on your computer.</li>
            <li>Select the CSV file, click "Open," and then click "Upload" to upload the Products, including associated attributes, to Taliup HQ.</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Products',
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