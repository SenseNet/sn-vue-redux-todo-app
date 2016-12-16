<template>
    <header>
        <form class="form-inline">
            <input class="new-todo form-control" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="newTodo"
            />
            <span class="btn btn-primary" @click="addTodo">Add todo</span>
        </form>
    </header>
</template>

<script>
    import { Content, ODataApi } from 'sn-client-js';
    const rootUrl = '/workspaces/project/budapestprojectworkspace/tasks';
    export default {
        data: function () {
            return {
                newTodo: ''
            }
        },
        methods: {
            addTodo: function () {
                var value = this.newTodo && this.newTodo.trim(); 
                const content = Content.Create('Task', {
                    Type: 'Task',
                    DisplayName: value
                });
                content['Status'] = 'active';
                this.$actions.CreateContent(rootUrl, content);
                this.newTodo = ''
            },
        }
    }
</script>