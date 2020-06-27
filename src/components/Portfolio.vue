<template>
    <div>
        <h2>Portfolio</h2>
        <div v-for="project in projects" :key="project.title">
            
        </div>
    </div>
</template>

<script>
export default {
    name: "Portfolio",
    data: function() {
        return {
            projects : []
        }
    }

}
</script>

<style scoped>

</style>