<template>
  <div id="app">
    <img src="./assets/sensenetlogo.png">
    <img src="./assets/vuelogo.png">
    <h1>Todos</h1>
    <AddTodo />
    <TodoList :filteredTodos="filteredTodos" />
    <FooterMenu :fetchTodos="fetchTodos" />
  </div>
</template>

<script>
  import { ODataApi } from 'sn-client-js';
  import FooterMenu from './components/FooterMenu';
  import AddTodo from './components/AddTodo';
  import TodoList from './components/TodoList'
  const rootUrl = '/workspaces/project/budapestprojectworkspace/tasks';

  export default {
    data: function () {
      return {
        collection: [],
        visibility: 'All'
      }
    },
    created: function () {
      this.fetchTodos(this.visibility);
    },
    computed: {
      filteredTodos: function () {
        const filter = this.visibility;
        const ids = this.state.listByFilter[filter].ids;
        const allTodos = this.state.collection.byId;
        let filtered = Object.assign({}, allTodos);
        Object.keys(allTodos).forEach(function(key,index) {
          if (ids.indexOf(Number(key)) === -1) {
            delete filtered[key];
          }
        });
        return filtered;
      }
    },
    watch: {
      collection: 'fetchTodos',
      listByFilter: 'fetchTodos'
    },
    methods: {
      fetchTodos: function (filter) {
        let optionObj = new ODataApi.ODataParams({
          select: ['DisplayName', 'Status']
        });
        if (filter === 'Active') {
          optionObj['filter'] = `isOf('Task') and Status eq %27Active%27`;
        }
        else if (filter === 'Completed') {
          optionObj['filter'] = `isOf('Task') and Status eq %27Completed%27`;
        }
        else {
          optionObj['filter'] = "isOf('Task')";
        }
        this.$actions.RequestContent(rootUrl, optionObj);
        this.visibility = filter;
      }
    },
    components: {
      AddTodo: AddTodo,
      TodoList: TodoList,
      FooterMenu: FooterMenu
    }
  }
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#root {
  margin: 20px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
      width: 500px;
    margin: 60px auto;
}
#app > img:first-of-type {
  margin-right: 50px;
}
#app > img {
  height: 150px;
  margin-bottom: 20px;
}
</style>