<template>
    <PageWrapper>
        <h1>Home page, yeah!!!</h1>
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
