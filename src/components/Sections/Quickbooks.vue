<template>
    <div class="text-left" ref="quickbooksContent">
        <h2 class="border-btm">Quickbooks Integration</h2>

        <div class="mt-3">
            <p>
                To synchronise data between Taliup HQ and Quickbooks, you will need to enter the merchant’s Quickbooks API credentials into Taliup HQ. 
                This can be done by navigating to the Settings page and clicking on the Quickbooks tab.
            </p>

            <div class="my-4">
                <Warning message="Before you begin, please note that you must already have a Quickbooks Online account in order to use the Taliup HQ Quickbooks integration."/>
            </div>
        </div>
        <ul class="p-0 main-ul">
            <li>
                <h6>Step 1: Obtain the QuickBooks API credentials from QuickBooks Developer Portal</h6>
                <ul>
                    <li>
                        <p>
                            Go to the Quickbooks Developer Portal website (<a href="http://developer.intuit.com" target="_blank">http://developer.intuit.com </a>) and sign in to the merchant’s account.
                        </p>
                    </li>
                    <li>
                        <p>
                            Once you are signed in, navigate to the <b>Dashboard > My Apps</b> section and click on the <b>Create App</b> button.
                        </p>
                    </li>
                    <li>
                        <p>
                            On the <b>Create New App</b> page, enter a name for your app and select the <b>Accounting</b> option for the “Select API” field.
                        </p>
                    </li>
                    <li>
                        <p>
                            Once you’ve filled out the necessary information, click the <b>Create App</b> button.
                        </p>
                    </li>
                    <li>
                        <p>
                            You will now be redirected to your new app’s dashboard. From here, click on the <b>Keys</b> tab to view your app’s API credentials.
                        </p>
                    </li>
                    <li>
                        <p>
                            Under the <b>OAuth 2.0</b> section, you will see merchant’s Client ID and Client Secret. 
                            These are the credentials you will need to enter into Taliup HQ.
                        </p>
                    </li>
                    <li>
                        <p>
                             Under <b>Redirect URIs</b> click on “Add URI” and enter <span class="font-italics fw-bold">https://taliuphq.com/oauth2-redirect</span> in the Link field.
                        </p>
                    </li>
                    <li>
                        <p>
                             To obtain the Access Token, click the <b>Create New Token</b> button and follow the prompts to authorize access to your Quickbooks account. 
                             Once authorized, you will be provided with an Access Token that you can enter into Taliup HQ.
                        </p>
                    </li>
                    <li>
                        <p>
                            Click <b>Save</b> to complete the setup.
                        </p>
                    </li>
                </ul>
            </li>
            <li>
                <h6>Step 2: Enter the QuickBooks API into Taliup HQ</h6>
                <ul>
                    <li>
                        <p>Click on <b>Start Quickbooks Setup</b>.</p>
                    </li>
                    <li>
                        <p>Click the <b>Save</b> button.</p>
                    </li>
                    <li>
                        <p>Once the credentials are saved, click on <b>Connect to Quickbooks</b>.</p>
                    </li>
                    <li>
                        <p>
                            You will be redirected to Quickbooks to validate the credentials and asked to log in. 
                            Afterwards, Quickbooks will ask to select the company. Click Next you will be redirected back to the Taliup HQ Dashboard.
                        </p>
                    </li>
                </ul>

                <note :messages="['For Canadian users, Quickbooks requires taxes to be set up on their account. When you click on “Connect to Quickbooks” in Taliup HQ, your Quickbooks taxes can be automatically fetched and synchronized with your Taliup HQ account.',
                'However, if you have already created Custom Taxes and added them to any Catalog(s) or Product(s), you will have to opt-in to having Taliup HQ fetch and synchronize your Quickbooks taxes with Taliup HQ. It’s important to note that when Taliup HQ fetches and synchronizes Quickbooks taxes, it will delete any Custom Taxes and remove them from any Catalog(s) and Product(s).']"></note>
            </li>
        </ul>
    </div>
</template>

<script>
import Warning from '../Shared/Warning'
export default {
    name: 'Quickbooks',
    components: {
        Warning,
    },
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