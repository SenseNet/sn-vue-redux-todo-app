<template>
    <ul>
        <li v-for="content in filteredTodos" class="todo" :key="content.Id">
            <div class="view">
                <input class="toggle" type="checkbox" :id="content.Id" v-model="checked" :value="content.Id" @change="toggleTodo(content)">
                <label for="content.Id">{{ content.DisplayName }}</label>
                <span class="destroy" @click="removeTodo(content)" title="Delete"><i class="material-icons">delete</i></span>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        data: function () {
            return {
                checked: []
            }
        },
        props: ['filteredTodos'],
        computed: {
            checked: function () {
                let checkedArray = [];
                const contentList = this.state.collection.byId;
                for (let content in contentList) {
                    if (contentList[content].Status[0] === 'completed') {
                        checkedArray.push(contentList[content].Id);
                    }
                }
                return checkedArray;
            }
        },
        methods: {
            toggleTodo: function (content) {
                this.$actions.UpdateContent(content.Id, {
                    Status: (content.Status[0] === 'active') ? 'completed' : 'active'
                });
            },
            removeTodo: function (content) {
                this.$actions.Delete(content.Id, true);
            }
        }
    }
</script>
<style scoped>
ul {
    margin: 40px 0px 40px 110px;
    text-align: left;
}
input[type=checkbox] {
    margin-right: 10px;
}
.destroy {
    vertical-align: middle;
    cursor: pointer;
    float: right;
    margin-right: 105px;
}
.todo {
    clear: both;
}
</style>