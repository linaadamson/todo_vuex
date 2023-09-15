<template>
    <div class="select-container">
        <select name="todos" class="filter-todo" @change="selectedFilter">
            <option v-for="(option, index) in filterOptions" :key="index">{{ option }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'TodoFilter',
    props: {
        filterOptions: {
            type: Array,
            required: true,
        },

    },
    data() {
        return {
            // filter: 'all',
        }
    },
    methods: {
        selectedFilter: function (e) {
            this.$emit("addFilters", e.target.value)
        }
    }


}
</script>

<style lang="css" scoped>
@import './index.css';
</style>
