<template>
    <form @submit.prevent>
        <h4>Создание поста </h4>
        <input class="input"
            v-model="post.title"
            type="text"
            placeholder="Название">
        <input class="input"
            v-model="post.body"
            type="text"
            placeholder="Описание">
        <button class="btn"
            
        >
            Создать
        </button>
    </form>
</template>

<script>
export default {
    data()
    {
        return {
            post: {
                title: "",
                body: ""
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post = {
                title: "",
                body: ""
            }
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
.input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
}
.btn {
    margin-top: 15px;
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
}
</style>