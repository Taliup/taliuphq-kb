# <center>Taliup HQ Knowledge Base</center>
## A Knowledge Base for Taliup HQ
![alt TaliupHQ](https://github.com/Taliup/taliuphq-kb/blob/main/taliuphq.png)









========================================================

View Source  window.WRM=window.WRM||{};window.WRM.\_unparsedData=window.WRM.\_unparsedData||{};window.WRM.\_unparsedErrors=window.WRM.\_unparsedErrors||{}; WRM.\_unparsedData\["com.atlassian.plugins.atlassian-plugins-webresource-plugin:context-path.context-path"\]="\\"/wiki\\""; WRM.\_unparsedData\["com.atlassian.plugins.atlassian-plugins-webresource-rest:curl.cross-origin-resources"\]="false"; if(window.WRM.\_dataArrived)window.WRM.\_dataArrived();      

![](https://taliup.atlassian.net/wiki/plugins/servlet/confluence/placeholder/macro?definition=e3RvY30&locale=en_US&version=2)

Setting Up Tips
===============

  
**Step 1: On** [http://Poynt.net](http://Poynt.net)

Login to [http://poynt.net](http://poynt.net) and then go to “merchants”. Search for the merchant by name and select the merchant from the filtered list. Click “view as store” and go to “store settings”. Turn on the “ask for tips” option under the “tips” section.

Select “custom tips”. Select the merchant’s desired tip type: percentage vs dollar amount. Set the three tip values to the merchant’s required values.

**Step 2: On Taliup HQ**

Sign in to Taliup HQ as a super admin. Go to entities, find the entity you want to turn the tips on for, and click “manage”. Click on the settings tab, scroll to the tips section, and turn on “ask for tips”. Configure the tips the exact same way as you did for [http://Poynt.net](http://Poynt.net). Go back to “entities” and click on “view as” for the entity. Click on settings in the main menu and turn on “ask for tips” under the “business” tab and “tips” card. Configure the tips the same you did on [http://Poynt.net](http://Poynt.net) with the same values. Click “save”. Tips are now configured.

ǪuickBooks Integration
======================

To synchronise data between Taliup HQ and Quickbooks, you will need to enter the merchant’s Quickbooks API credentials into Taliup HQ. This can be done by navigating to the Settings page and clicking on the Quickbooks tab.

_Before you begin, please note that you must already have a Quickbooks Online account in order to use the Taliup HQ Quickbooks integration._

#### Step 1: Obtain the QuickBooks API credentials from QuickBooks Developer Portal

● Go to the Quickbooks Developer Portal website ([http://developer.intuit.com](http://developer.intuit.com) ) and sign in to the merchant’s account.

● Once you are signed in, navigate to the "Dashboard > My Apps" section and click on the "Create App" button.

● On the "Create New App" page, enter a name for your app and select the "Accounting" option for the "Select API" field.

● Once you've filled out the necessary information, click the "Create App" button.

● You will now be redirected to your new app's dashboard. From here, click on the "Keys" tab to view your app's API credentials.

● Under the "OAuth 2.0" section, you will see merchant’s Client ID and Client Secret. These are the credentials you will need to enter into Taliup HQ.

● Under “Redirect URIs” click on “Add URI” and enter [https://taliuphq.com/oauth2-redirect](https://taliuphq.com/oauth2-redirect) in the Link field.

● To obtain the Access Token, click the "Create New Token" button and follow the prompts to authorize access to your Quickbooks account. Once authorized, you will be provided with an Access Token that you can enter into Taliup HQ.

● Click Save to complete the setup.

#### Step 2: Enter the QuickBooks API into Taliup HQ

● Click on “Start Quickbooks Setup”.

● Click the "Save" button.

● Once the credentials are saved, click on “Connect to Quickbooks”.

● You will be redirected to Quickbooks to validate the credentials and asked to log in. Afterwards, Quickbooks will ask to select the company. Click Next you will be redirected back to the Taliup HQ Dashboard.

Note

For Canadian users, Quickbooks requires taxes to be set up on their account. When you click on "Connect to Quickbooks" in Taliup HQ, your Quickbooks taxes can be automatically fetched and synchronized with your Taliup HQ account.

However, if you have already created Custom Taxes and added them to any Catalog(s) or Product(s), you will have to opt-in to having Taliup HQ fetch and synchronize your Quickbooks taxes with Taliup HQ. It's important to note that when Taliup HQ fetches and synchronizes Quickbooks taxes, it will delete any Custom Taxes and remove them from any Catalog(s) and Product(s).

Employees
=========

**Step 1: Accessing Taliup HQ**

● Open the Taliup HQ application on your device.

**Step 2: Navigating to the Employees Section**

● Once the application is launched, locate and click on the "Employees" section within the software.

**Step 3: Employee List Overview**

● In the Employees section, you will find a comprehensive list of all employees associated with the Taliup HQ account.

● Note that during registration, an employee with the Owner role is automatically created, typically representing the business owner.

**Step 4: Understanding Default Roles**

● Taliup HQ comes with three default roles: Owner, Manager, and Employee.

● Each role has different permissions and access levels within the software, allowing customization based on job responsibilities. See: Roles and Permissions section.

**Step 5: Creating Custom Roles (Optional)**

● If necessary, you can create custom roles to meet the merchant’s business requirements.

● Click on the "Roles and Permissions" button within the Employees section to configure custom roles with specific permissions. See: Roles and Permissions section.

**Step 6: Adding a New Employee**

● To add a new employee, locate and click on the "Add Employee" button.

● Fill out the required information for the new employee in the provided fields.

● Assign a role to the employee and set permissions according to their job responsibilities.

**Step 7: Viewing Employee Performance Metrics**

● Taliup HQ provides valuable employee performance metrics, including sales and transaction data.

● Merchants can utilize these metrics to evaluate employee performance and make data-driven decisions for business improvement.

Roles and Permissions
=====================

Manage a Role
-------------

● Navigate to the "Employees" section and select "Roles and Permissions."

● In the Roles and Permissions page, you will see a table with the names of all the roles along the top and the permissions available for your terminals along the left-hand side.

● Click on the name of the role you want to manage in the table.

● Toggle the switches next to each permission to enable or disable them for the selected role.

● Enabled permissions will appear with a purple switch, while disabled permissions will be grayed out.

● Adjust the permissions according to your desired access levels for the role.

● Make sure to carefully consider the permissions for each role to ensure the appropriate level of access for your employees.

● Save the changes.

Add a Custom Role
-----------------

● Go to the "Employees" section and select "Roles and Permissions."

● Click on the "Add Custom Role" button.

● In the Add Custom Role pop-up window, enter the name of the new role in the "Role Name" field.

● Consider the permissions you want to assign to the new role, ensuring they align with the job responsibilities of the employees assigned to the role.

● Click the "Save" button to create the new custom role in Taliup HQ.

Terminals
=========

#### Step 1: Accessing Taliup HQ

● Open Taliup HQ.

#### Step 2: Navigating to the Settings Section

● Once the application is launched, locate and click on the "Settings" section within the software.

#### Step 3: Terminals Overview

● In the Settings section, you will find the "Terminals" option. Click on it.

● This will provide you with a list of all the terminals that have been synced with Taliup HQ from your merchant terminal provider.

● Basic information about each terminal, such as Serial Number, Terminal ID, Name, and Status, will be captured and displayed in this list.

#### Step 4: Assigning a Catalog to a Terminal

● To assign a catalog to a terminal, select the terminal from the list by clicking on it.

● Once the terminal is selected, locate and click the "Assign Catalog" button.

● You will be prompted to choose a catalog from your existing list of catalogs.

#### Step 5: Catalog Selection

● From the available catalogs, choose the appropriate one that you wish to associate with the selected terminal.

● Click on the chosen catalog to confirm the assignment.

#### Step 6: Terminal Management

● Please note that terminal management cannot be directly performed within Taliup HQ. However, by utilizing the "Sync Terminals" option in Taliup HQ, the merchant can ensure that the terminal information remains up-to-date and accurate within the software.

Manage Terminals
================

#### Step 1: Accessing Terminal Management

● Open Taliup HQ on your device.

● Navigate to the "Terminals" section.

#### Step 2: Managing a Terminal

● In the Terminals list, locate the terminal you wish to manage.

● Click on the "Manage Terminal" option associated with the specific terminal.

#### Step 3: Terminal Information

● In the Manage Terminal pop-up window, you will find the Serial Number and Terminal ID (TID) of the selected terminal.

● Information about the currently assigned catalog will be displayed under the "Current Catalog" field.

#### Step 4: Assigning a Catalog

● If there is no catalog currently assigned, the "Current Catalog" field will be empty, and the "Remove Catalog" button will be inactive.

● Select a catalog from the dropdown list under the "Catalog" field to assign it to the terminal.

#### Step 5: Saving Changes

● After selecting the catalog to assign, click the "Save" button to confirm the changes.

#### Step 6: Removing a Catalog

● If a catalog is already assigned to the terminal, you can remove it by clicking the "Remove Catalog" button.

● A confirmation prompt will appear. Click "Yes" to proceed with the removal.

Note

Each terminal can have only one catalog assigned at a time. When assigning a new catalog, it will replace the existing one if applicable. Be cautious with timing catalog removals to minimize disruptions to ongoing transactions. Removing a catalog from a terminal means it won't be available on that terminal until it is assigned again.

Timesheets
==========

Manage Timesheets
-----------------

● Go to the "Employees" section in Taliup HQ.

● Find the specific employee you want to manage Timesheets for.

● Click on "Manage Timesheets" for that employee.

● View and manage the Timesheets for the selected employee.

● By default, you'll see Timesheets for the current week.

● To view Timesheets for a different date or date range, use the Date Range filter at the top of the page.

Create Timesheets
-----------------

● Go to the "Employees" section in Taliup HQ.

● Select the employee you want to create a Timesheet for.

● Click on "Manage Timesheets."

● On the Manage Timesheets page, click on "Create Timesheet."

● A pop-up will appear.

● Choose a Clock In and Clock Out date and time.

● Click on "Create Timesheet" to save your changes.

● The new Timesheet will be added to the employee's Timesheet history.

Edit a Timesheet
----------------

● Go to the "Employees" section in Taliup HQ.

● Find the employee whose Timesheet you want to edit.

● Click on "Manage Timesheets."

● By default, you'll see Timesheets for the current week.

● To view Timesheets for a different date range, use the Date Range filter at the top.

● Locate the Timesheet you want to edit on the Manage Timesheets page.

● Click on "Edit" for that Timesheet.

● If you can't find the Timesheet, ensure you have the correct date range selected.

● In the Edit Timesheet pop-up, change the Start Date and/or End Date to the desired chronological date/time.

● The Hours, Minutes, and Pay will update accordingly when you make changes to the Timesheet.

Catalogs, Categories and Products
=================================

Create a Catalog
----------------

● Go to the "Catalog" section in Taliup HQ.

● Click on "Create Catalog."

● A pop-up window will appear.

● Enter the name of the Catalog.

● Click on "Create" to save your changes.

● The new Catalog will be added to the list of available Catalogs.

● You can assign the Catalog to a terminal for use by terminal users.

Edit a Catalog
--------------

● Go to the "Catalog" section in Taliup HQ.

● Locate the catalog you want to edit.

● Click on the pencil icon above the catalog name.

● A pop-up will appear.

● Enter the new name for the catalog.

● Click on "Update" to save the changes.

● The name of the catalog will be updated throughout the Taliup HQ platform.

Delete a Catalog
----------------

● Go to the "Catalog" section in Taliup HQ.

● Find the catalog you wish to delete.

● Click on the pencil icon above the catalog name.

● A menu with options will appear.

● Select the option to delete the catalog.

● A confirmation pop-up will appear, asking you to confirm the deletion.

● If you're sure you want to delete the catalog, click "Delete" in the confirmation pop-up.

● The catalog and all its associated items will be permanently removed. Be aware that this action cannot be undone, so ensure you want to delete the catalog before confirming.

Add Tax to a Catalog
--------------------

● Go to the Catalogs page on Taliup HQ.

● Select the Catalog you want to apply taxes to.

● Click on the Taxes button near the top of the page.

● In the Add Tax to Catalog pop-up, choose to create a new tax or select an existing one.

● Click on Add Taxes to apply the tax to the selected Catalog.

Create a Product
----------------

To create a new product on Taliup HQ, there are four different methods you can use:

### Product

● Go to the Catalogs page and click on the Products tab.

● Click on "Add Products".

● Enter the Name and Price of the product (required fields).

● Optionally, add a Description, SKU, and Attributes.

● Click on "Add Attribute" to add a new attribute or select from an existing attribute.

● Click the X to close the Attributes drawer.

● Repeat these steps to add as many products as you'd like.

● Once you are done, click on Save Products

### From a Catalog

● Make sure you have at least one Catalog.

● Go to the Catalogs page, select a Catalog, and open it.

● Click on "Add Product".

● Enter the Name and Price of the product (required fields).

● Optionally, add a SKU.

● Click "Create".

● Repeat these steps to add as many products as you'd like.

### From a Category

● Make sure you have a Catalog with a Category inside.

● Go to the Catalogs page, find and open the Catalog with the Category inside.

● Select a Category (or create a new one).

● Click on "Add Product".

● Enter the Name and Price of the product (required fields).

● Optionally, add a SKU.

● Click "Create New".

● Repeat these steps to add as many products as you'd like.

### Bulk Upload

#### **Bulk Upload Attributes:**

● Go to the "Catalogs" page in Taliup HQ.

● Click on the "Products" tab.

● Click on the "Bulk Upload" button to access the bulk upload page.

● The bulk upload page is divided into two parts: Attributes and Products.

● To perform an Attributes Bulk Upload:

Click on "Bulk Upload" under the "Products" tab. Select the "Attributes" checkbox.

Download the Attributes Bulk Upload template CSV. Assign a unique identifier to each Attribute.

Indicate whether the Product is single or more using TRUE or FALSE. Specify the maximum number if applicable.

Assign prices to Attribute values.

Save the template as a CSV file on your computer.

● Return to Catalogs > Products > Bulk Upload.

● Select "Attributes" and click "Browse" to locate the CSV file on your computer.

● Select the CSV file, click "Open," and then click "Upload" to upload the Attributes to Taliup HQ.

#### **Bulk Upload Products:**

● To perform a Products Bulk Upload:

Select the "Products" checkbox on the Bulk Upload page. Download the Products Bulk Upload template CSV.

● In the Products Bulk Upload CSV: List each Product line by line.

Each Product requires a Name and Price.

SKU, Catalog, Category, and Attribute fields are optional.

If a Catalog does not exist, it will be created based on the provided information.

If a Category is specified, a Catalog must also be provided. Attributes are added using the field naming scheme:

mod.identifier\[number\]

The value for the Product's Attribute should match the identifier used in the Attribute Bulk Upload.

Add as many Attribute fields as needed.

Save the Products Bulk Upload template as a CSV file on your computer.

● Go to Catalogs > Products > Bulk Upload.

● Select the "Products" checkbox.

● Click on "Browse" to locate the Products Bulk Upload CSV file on your computer.

● Select the CSV file, click "Open," and then click "Upload" to upload the Products, including associated attributes, to Taliup HQ.

Create a Category
-----------------

● Go to the "Catalogs" section in Taliup HQ.

● Select the Catalog to which you want to add a category.

● Click on "Create Category" to open the Create Category pop-up.

● Enter a name for the Category in the Category Name field.

● Click on "Create" to save the new Category.

● Assign the Category to specific products or services within the Catalog to further organize your offerings.

Edit a Category Name
--------------------

● Go to the "Catalogs" section in Taliup HQ.

● Select the Catalog that contains the Category you want to edit.

● Find the Category and click on the pencil icon next to its name.

● In the Edit Category pop-up, modify the name in the Category Name field.

● Click on the "Update" button to save the changes.

● The Category name will be updated in Taliup HQ and associated Catalogs or products.

Delete a Category
-----------------

● Go to the "Catalogs" section in Taliup HQ.

● Select the Catalog that contains the Category you want to delete.

● Find the Category and click on the pencil icon next to its name.

● In the Edit Category pop-up, scroll to the bottom and click on the "Delete" button.

● A confirmation message will appear, asking you to confirm the deletion.

● If you're sure you want to delete the Category, click on "Delete" to confirm.

● Note that deleting a Category will also remove any items associated with it.

● Ensure you're certain about deleting the Category before proceeding.

Add a Tax to a Product
----------------------

● Go to the Catalogs section in Taliup HQ.

● Click on the "Products" tab.

● Find the product you want to add taxes to, either by scrolling through the list of products or by using the search function.

● Click on the product to open its details page.

● Under the "Product Taxes" section click on "Add Tax" to open the Add Tax to Product pop-up window.

● Select the tax or taxes you want to add to the product by clicking on the checkbox next to each tax.

● If you want to remove a tax that is already added, simply unselect it by clicking on the checkbox again.

● Once you have selected or unselected the appropriate taxes, click on "Add Taxes" to apply the changes.

Manage Inventory
----------------

● Go to the "Inventory" section in Taliup HQ.

● Locate the Product you want to manage.

● Click on the "Manage" button next to the Product.

● You will be taken to the Manage Inventory page for the selected Product.

● Update the quantity of the Product or for each Production/Attribute combination.

Enter the new quantity in the appropriate field. Click "Submit" to save the changes.

● As the merchant sells products through Taliup Register (POS App), the quantity value will automatically decrease to reflect the sales made.

Set a Reorder Point
-------------------

● Go to the "Inventory" section in Taliup HQ.

● Select the Product you want to manage.

● Click on the "Manage" button to access the Manage Inventory page.

● Set a Reorder Point for the Product or Product/Attribute combination:

● Define the threshold level at which the merchant wants to be notified.

● Enter the Reorder Point value for the selected item.

● Save the changes.

When the inventory quantity reaches or falls below the set Reorder Point, you will be notified through:

**Email**: An email notification will be sent to you.

**Taliup HQ Message Center**: You will receive a notification within the Taliup HQ platform.

Add a Catalog to a Terminal
---------------------------

Note

You can directly assign a new catalog to a terminal without removing the previously assigned catalog. Simply select a new catalog from the dropdown list and click the "Save Terminal" button to replace the existing catalog.

● Locate the terminal you want to manage in the Terminals list.

● Click on "Manage Terminal" to open the pop-up window.

● In the Manage Terminal pop-up, you will see the Serial Number and Terminal ID (TID) for the selected terminal.

● Under the "Current Catalog" section, you can see the currently assigned catalog's name. If a catalog is already assigned, you have the option to remove it by clicking the "Remove Catalog" button.

● To assign a new catalog to the terminal, select a catalog from the dropdown list under the "Catalog" field.

● If there is already a catalog assigned to the terminal, you can change it by selecting a different catalog from the list.

● After selecting the catalog you want to assign, click the "Save Terminal" button to confirm your changes.

● The catalog will now be assigned to the selected terminal.
