<!-- eslint-disable vue/no-deprecated-dollar-listeners-api -->
<template>
    <button v-on="$listeners" v-bind:type="type" :class="{ btn: true, 'btn--outlined': outlined}">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'ButtonItem',
    props: {
        type: {
            type: String,
            default: 'button'
        },
        outlined: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
.btn {
    display: inline-block;
    font-size: 18px;
    background: green;
    color: aliceblue;
    cursor: pointer;
    min-width: 220px;
    border: 1px solid transparent;
    padding: 8px 15px;

    &--outlined {
        background: none;
        border: 1px solid green;
        color: green;
    }
}
</style>