<template>
    <div class="page-wrapper">
        <slot />
    </div>
</template>

<script>
export default {
    name: "PageWrapper",
}
</script>

<style lang="scss" scoped>
    .page-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
</style>
