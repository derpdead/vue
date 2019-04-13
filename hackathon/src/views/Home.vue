<template>
    <PageWrapper>
        <img
            alt="Vue logo"
            src="../assets/logo.png">
    </PageWrapper>
</template>

<script>

export default {
    name: 'Home',
    components: {
        PageWrapper: () => import('./../components/PageWrapper'),
    }
}
</script>
