<script lang="ts">
/* eslint-disable */
import Vue, { PropType } from 'vue'
import { Todo } from '../App.vue';
export default Vue.extend({
    props: {
        todoItem: Object as PropType<Todo>,
        index: Number,
    },
    methods: {
        removeItem() {
            this.$emit("remove", this.index);
        },
        toggleItem() { 
            this.$emit("toggle", this.todoItem, this.index);
        }
    },
    computed: {
        //computed 를 활용하여 template에서 선언할 class구문을 더 단순화할 수 있다.
        // 반환타입을 꼭 작성하자
        todoItemClass(): string | null{
            return this.todoItem.done ? 'complete' : null;
        }
    }
})
</script>

<template>
    <li>
        <span
            class="item"
            @click="toggleItem"
            :class="todoItemClass"
        >{{ todoItem.title }}</span>
        <button @click="removeItem">삭제</button>
    </li>
</template>

<style scoped>
.complete {
    text-decoration: line-through;
}
.item {
    cursor: pointer;
}
</style>