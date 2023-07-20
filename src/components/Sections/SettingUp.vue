<template>
    <div class="text-left" ref="settingUpContent">
        <h2 class="border-btm">Setting Up Tips</h2>

        <ul class="p-0 mt-3">
            <li>
                <h6>Step 1: On <a href="https://poynt.net" target="_blank">https://poynt.net</a></h6>
                <p>
                    Login to <a href="https://poynt.net" target="_blank">https://poynt.net</a> and then go to <b>merchants</b>. Search for the merchant by name and select the merchant from the filtered list. 
                    Click <b>view as store</b> and go to <b>store settings</b>. Turn on the <b>ask for tips</b> option under the <b>tips</b> section.
                </p>

                <p>
                    Select <b>custom tips</b>. Select the merchant’s desired tip type: percentage vs dollar amount. Set the three tip values to the merchant’s required values.
                </p>
            </li>
            <li>
                <h6>Step 2: On Taliup HQ</h6>
                <p>
                    Sign in to Taliup HQ as a super admin. Go to entities, find the entity you want to turn the tips on for, and click <b>manage</b>. 
                    Click on the settings tab, scroll to the tips section, and turn on <b>ask for tips</b>. 
                    Configure the tips the exact same way as you did for <a href="https://poynt.net" target="_blank">https://poynt.net</a>. 
                    Go back to <b>entities</b> and click on <b>view as</b> for the entity. Click on settings in the main menu and turn on <b>ask for tips</b> under the <b>business</b> tab and <b>tips</b> card. 
                    Configure the tips the same you did on <a href="https://poynt.net" target="_blank">https://poynt.net</a>with the same values. Click <b>save</b>. Tips are now configured.
                </p>
            </li>
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
ul {
    list-style: none;
}

p {
    line-height: 1.7rem;
}
</style>