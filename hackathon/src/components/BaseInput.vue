<template>
    <div class="input">
        <label v-if="label">{{ label }}</label>
        <input
            :value="value"
            @input="onChange">
    </div>
</template>

<script>
export default {
    name: "BaseInput",
    props: {
        value: {
            type: [String, Number],
            required: true,
        },
        label: {
            type: String,
            required: false,
            default: null,
        },
    },
    methods: {
        onChange(event) {
            this.$emit('input', event.target.value);
        },
    },
}
</script>

<style scoped>

</style>
