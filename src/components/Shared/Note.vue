<template>
    <div class="note">
        <p class="" v-for="(message, index) in messages" :key="index">
            {{ message }}
        </p>
    </div>
</template>
<script>
export default {
    props: {
        messages: Array,
    },
    data() {
        return {

        }
    },
}
</script>
<style scoped>
.note {
    background: rgba(114, 83, 237, 0.2);
    border-left: 4px solid #381885;
    border-radius: 4px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 3px 10px rgba(0, 0, 0, 0.08);
    padding: 0.8rem;
}

.note::before {
    color: #381885;
    content: "Note";
    display: block;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.75em;
    padding-bottom: 0.125rem;
}
</style>