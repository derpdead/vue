<template>
    <button
        :disabled="isDisabled"
        :class="[{ 'btn--loading': isLoading, 'btn--disabled': isDisabled }]">
        {{ title }}
        <slot />
    </button>
</template>

<script>
export default {
    name: "BaseButton",
    props: {
        title: {
            type: String,
            required: false,
            default: '',
        },
        isLoading: {
            type: Boolean,
            required: true,
        },
        isDisabled: {
            type: Boolean,
            required: true,
        },
    },
}
</script>

<style scoped>

</style>
