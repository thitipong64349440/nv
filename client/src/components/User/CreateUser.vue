<template>
    <div>
        <h1>Create User</h1>
        <form v-on:submit.prevent="createUser">
            <p>รูป: <input type="file" v-on="user.image"></p>
            <p>ชื่อ: <input type="text" v-model="user.name"></p>
            <p>นามสกุล: <input type="text" v-model="user.lastname"></p>
            <p>email: <input type="text" v-model="user.email"></p>
            <p>password: <input type="text" v-model="user.password"></p>
            <p>kuy: <input type="text" v-model="user.kuy"></p>
            <p><button type="submit">create user</button></p>
        </form>
        <hr>
        <div>
            <p>รูป: {{ user.image }}</p>
            <p>name: {{ user.name }}</p>
            <p>lastname: {{ user.lastname }}</p>
            <p>email: {{ user.email }}</p>
            <p>password: {{ user.password }}</p>
            <p></p>
        </div>
    </div>
</template>
<script>
import UsersService from '@/services/UsersService'
export default {
    data() {
        return {
            user: {
                image: '',
                name: '',
                lastname: '',
                email: '',
                password: '',
                status: 'active',
                kuy: ''
            }
        }
    },
    methods: {
        async createUser() {
            try {
                await UsersService.post(this.user)
                this.$router.push({
                    name: 'users'
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>
<style scoped></style>
   