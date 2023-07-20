<template>
    <div class="warning">
        <p class="mb-0">
            {{ message }}
        </p>
    </div>
</template>
<script>
export default {
    props: {
        message: String,
    },
    data() {
        return {

        }
    },
}
</script>
<style scoped>
.warning {
    background: rgba(247, 126, 126, 0.2);
    border-left: 4px solid #dd2e2e;
    border-radius: 4px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 3px 10px rgba(0, 0, 0, 0.08);
    padding: 0.8rem;
}

.warning::before {
    color: #dd2e2e;
    content: "Warning";
    display: block;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.75em;
    padding-bottom: 0.125rem;
}
</style>