<template>
  <footer class="footer">
    <div class="btn-group btn-group-justified" role="group" aria-label="filtering">
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default" @click="filtering('All')">All</button>
      </div>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default" @click="filtering('Active')">Active</button>
      </div>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default" @click="filtering('Completed')">Completed</button>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    props: ['visibility', 'fetchTodos'],
    methods: {
      filtering: function (filter) {
        this.fetchTodos(filter)
      }
    }
  }
</script>
<style scoped>
  footer {
    width: 60%;
    margin-left: 20%;
  }
</style>